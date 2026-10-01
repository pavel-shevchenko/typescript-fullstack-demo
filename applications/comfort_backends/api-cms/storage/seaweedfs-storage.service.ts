import { Inject, Injectable } from 'domain_unified/nest-for-hono';
import {
  DeleteObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  type S3Client,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { createSeaweedfsS3Client } from './seaweedfs-s3-client';

export const SEAWEEDFS_S3_CLIENT = Symbol('SEAWEEDFS_S3_CLIENT');

function bucket(): string {
  const value = process.env.SEAWEEDFS_S3_DEFAULT_BUCKET;
  if (!value) throw new Error('SEAWEEDFS_S3_DEFAULT_BUCKET is not configured');
  return value;
}

@Injectable()
export class SeaweedfsStorageService {
  private readonly client: S3Client;

  constructor(@Inject(SEAWEEDFS_S3_CLIENT) client?: S3Client) {
    this.client = client ?? createSeaweedfsS3Client();
  }

  async putObject(key: string, body: string | Readable, length?: number, type?: string) {
    if (typeof body === 'string') {
      const bytes = Buffer.from(body);
      await this.client.send(new PutObjectCommand({
        Bucket: bucket(), Key: key, Body: bytes, ContentLength: bytes.length, ContentType: type,
      }));
      return;
    }
    // SeaweedFS S3 is unstable with aws-chunked PutObject when length is unknown.
    await new Upload({
      client: this.client,
      params: {
        Bucket: bucket(),
        Key: key,
        Body: body,
        ...(type ? { ContentType: type } : {}),
        ...(typeof length === 'number' ? { ContentLength: length } : {}),
      },
      queueSize: 4,
      partSize: 5 * 1024 * 1024,
      leavePartsOnError: false,
    }).done();
  }

  async getObject(key: string): Promise<Readable> {
    const result = await this.client.send(new GetObjectCommand({ Bucket: bucket(), Key: key }));
    if (!result.Body || typeof (result.Body as Readable).pipe !== 'function') {
      throw new Error('Unexpected S3 object body');
    }
    return result.Body as Readable;
  }

  async getObjectAsBase64(key: string): Promise<string> {
    const parts: string[] = [];
    let remainder = Buffer.alloc(0);
    const encoder = new Transform({
      transform(chunk: Buffer, _encoding, callback) {
        const bytes = Buffer.concat([remainder, chunk]);
        const complete = Math.floor(bytes.length / 3) * 3;
        if (complete) parts.push(bytes.subarray(0, complete).toString('base64'));
        remainder = bytes.subarray(complete);
        callback();
      },
      flush(callback) {
        if (remainder.length) parts.push(remainder.toString('base64'));
        callback();
      },
    });
    await pipeline(await this.getObject(key), encoder);
    return parts.join('');
  }

  async removeObjects(keys: string[]) {
    if (!keys.length) return;
    await this.client.send(new DeleteObjectsCommand({
      Bucket: bucket(),
      Delete: { Objects: keys.map((Key) => ({ Key })), Quiet: true },
    }));
  }
}
