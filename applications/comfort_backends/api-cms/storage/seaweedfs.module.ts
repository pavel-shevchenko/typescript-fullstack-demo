import { Module } from 'domain_unified/nest-for-hono';
import { createSeaweedfsS3Client } from './seaweedfs-s3-client';
import {
  SEAWEEDFS_S3_CLIENT,
  SeaweedfsStorageService,
} from './seaweedfs-storage.service';

@Module({
  providers: [
    SeaweedfsStorageService,
    { provide: SEAWEEDFS_S3_CLIENT, useFactory: createSeaweedfsS3Client },
  ],
  exports: [SeaweedfsStorageService],
})
export class SeaweedfsModule {}
