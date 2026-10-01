import { S3Client } from '@aws-sdk/client-s3';

export function createSeaweedfsS3Client(): S3Client {
  const host = process.env.SEAWEEDFS_S3_HOST ?? 'seaweedfs';
  const port = Number(process.env.SEAWEEDFS_S3_PORT ?? 8333);
  const protocol = process.env.SEAWEEDFS_S3_USE_SSL === 'true' ? 'https' : 'http';

  return new S3Client({
    endpoint: `${protocol}://${host}:${port}`,
    region: process.env.SEAWEEDFS_S3_REGION ?? 'us-east-1',
    credentials: {
      accessKeyId: process.env.SEAWEEDFS_S3_ACCESS_KEY ?? '',
      secretAccessKey: process.env.SEAWEEDFS_S3_SECRET_KEY ?? '',
    },
    forcePathStyle: true,
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
  });
}
