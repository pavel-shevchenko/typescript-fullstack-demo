import {
  type ApiCmsModels,
  type ApiCrmModels,
  type ApiSearchModels,
} from 'types_consts_utils';
import { type ApiCmsPrismaClient } from 'prisma_cms';
import { type ApiCrmPrismaClient } from 'prisma_crm';
import { type ApiSearchPrismaClient } from 'prisma_search';
import { type AllMicroservicesModels } from './domain-unified.types';

export type DomainUnifiedRequest = {
  user?: { data: { id: bigint; role: 'admin' | 'customer'; email: string } };
  body: IDomainUnifiedReqBody<AllMicroservicesModels>;
  headers: Record<string, string | string[] | undefined>;
  ip?: string;
};

export interface IDomainUnifiedReqBody<T extends AllMicroservicesModels> {
  prismaGetManyParams?: Parameters<PrismaFindMany<T>>[0];
  prismaCreateManyParams?: Parameters<PrismaCreateMany<T>>[0];
  prismaUpdateManyParamsInArr?: Omit<Parameters<PrismaUpdMany<T>>[0], 'where'>[];
  prismaDeleteManyParams?: Parameters<PrismaDelMany<T>>[0];
}

type PrismaFindMany<T extends AllMicroservicesModels> = T extends ApiCmsModels
  ? ApiCmsPrismaClient[T]['findMany']
  : T extends ApiCrmModels
    ? ApiCrmPrismaClient[T]['findMany']
    : T extends ApiSearchModels
      ? ApiSearchPrismaClient[T]['findMany']
    : never;

type PrismaCreateMany<T extends AllMicroservicesModels> = T extends ApiCmsModels
  ? ApiCmsPrismaClient[T]['createManyAndReturn']
  : T extends ApiCrmModels
    ? ApiCrmPrismaClient[T]['createManyAndReturn']
    : T extends ApiSearchModels
      ? ApiSearchPrismaClient[T]['createManyAndReturn']
    : never;

type PrismaUpdMany<T extends AllMicroservicesModels> = T extends ApiCmsModels
  ? ApiCmsPrismaClient[T]['updateManyAndReturn']
  : T extends ApiCrmModels
    ? ApiCrmPrismaClient[T]['updateManyAndReturn']
    : T extends ApiSearchModels
      ? ApiSearchPrismaClient[T]['updateManyAndReturn']
    : never;

type PrismaDelMany<T extends AllMicroservicesModels> = T extends ApiCmsModels
  ? ApiCmsPrismaClient[T]['deleteMany']
  : T extends ApiCrmModels
    ? ApiCrmPrismaClient[T]['deleteMany']
    : T extends ApiSearchModels
      ? ApiSearchPrismaClient[T]['deleteMany']
    : never;
