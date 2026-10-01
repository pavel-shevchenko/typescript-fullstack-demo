import { type ApiMicroservices } from 'types_consts_utils';
import {
  methodsCodes,
  type IFileData,
  type IDomainUnifiedFilesConfig,
  type AllMicroservicesModels,
} from './types/domain-unified.types';
import { type IDomainUnifiedReqBody } from './types/domain-unified-request';
import {
  getApiBaseUrl,
  type IPrismaFindManyAndCountReturn,
} from 'types_consts_utils/server';

const wrapFetch = (token?: string, _redirectOn401 = true) => ({
  async post<T>(url: string, body: unknown): Promise<T> {
    const isFormData = body instanceof FormData;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...(isFormData ? {} : { 'content-type': 'application/json' }),
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: isFormData ? body : JSON.stringify(body),
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`domain-unified ${url} -> ${response.status}`);
    }
    return response.json() as Promise<T>;
  },
});

export interface IDomainUnifiedClientFactoryOpts {
  microService: ApiMicroservices;
  prismaModel: AllMicroservicesModels;
  /**
   * Возвращает Bearer на каждый запрос.
   * Next server actions: `readAuthTokenFromCookie` из `react_common/server` (server-only).
   * Сервер / межсервис: `async () => token` или `createDomainUnifiedClientWithBearer`.
   */
  resolveAuthToken: () => Promise<string | undefined>;
  /**
   * При 401 вызывать redirect на /login (Next). Для Hono и прочих серверов — `false`.
   * @default true
   */
  redirectOn401?: boolean;
}

type ClientOpts = IDomainUnifiedClientFactoryOpts;

async function wrapFetchFromOpts(options: ClientOpts) {
  const token = await options.resolveAuthToken();
  return wrapFetch(token, options.redirectOn401 ?? true);
}

/** Клиент domain_unified с указанным Bearer (удобно из Hono). Без redirect при 401. */
export function createDomainUnifiedClientWithBearer<T extends AllMicroservicesModels>(
  bearerToken: string,
  options: Pick<ClientOpts, 'microService' | 'prismaModel'>,
) {
  return createDomainUnifiedClient<T>({
    ...options,
    resolveAuthToken: async () => bearerToken,
    redirectOn401: false,
  });
}

export const createDomainUnifiedClient = <T extends AllMicroservicesModels>(
  options: IDomainUnifiedClientFactoryOpts,
) => ({
  async prismaGetMany<TItem extends Record<string, unknown> = Record<string, unknown>>(
    params: IDomainUnifiedReqBody<T>['prismaGetManyParams'],
  ): Promise<IPrismaFindManyAndCountReturn<TItem>> {
    const fetch = await wrapFetchFromOpts(options);
    const reqBody: IDomainUnifiedReqBody<T> = { prismaGetManyParams: params };

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.prismaGetMany}`,
      reqBody,
    );
  },

  async prismaCreateMany(
    params: IDomainUnifiedReqBody<T>['prismaCreateManyParams'],
  ) {
    const fetch = await wrapFetchFromOpts(options);
    const reqBody: IDomainUnifiedReqBody<T> = { prismaCreateManyParams: params };

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.prismaCreateMany}`,
      reqBody,
    );
  },

  async prismaUpdateMany(
    params: IDomainUnifiedReqBody<T>['prismaUpdateManyParamsInArr'],
  ) {
    const fetch = await wrapFetchFromOpts(options);
    const reqBody: IDomainUnifiedReqBody<T> = {
      prismaUpdateManyParamsInArr: params,
    };

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.prismaUpdateMany}`,
      reqBody,
    );
  },

  async prismaDeleteMany(
    params: IDomainUnifiedReqBody<T>['prismaDeleteManyParams'],
  ) {
    const fetch = await wrapFetchFromOpts(options);
    const reqBody: IDomainUnifiedReqBody<T> = {
      prismaDeleteManyParams: params,
    };

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.prismaDeleteMany}`,
      reqBody,
    );
  },

  async uploadFilesToFields(formData: FormData) {
    const fetch = await wrapFetchFromOpts(options);

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.uploadFilesToFields}`,
      formData,
    );
  },

  /**
   * Скачивает файлы из разных полей записей
   * @param recordIds ID записей (массив ID)
   * @param fieldsConfig Массив конфигураций полей для скачивания
   * @returns Объект, где ключи - ID записей, а значения - объекты с ключами полей и массивами скачанных файлов
   */
  async downloadFilesByFields(
    recordIds: number[],
    fieldsConfig: IDomainUnifiedFilesConfig,
  ): Promise<Record<string, Record<string, Array<IFileData>>>> {
    const fetch = await wrapFetchFromOpts(options);

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.downloadFilesByFields}`,
      { recordIds, fieldsConfig },
    );
  },

  /**
   * Удаляет файлы из полей записей
   * @param recordIds ID записей (массив ID)
   * @param fieldsConfig Массив конфигураций полей для удаления файлов
   * @returns Результат операции удаления
   */
  async removeFilesByFields(
    recordIds: number[],
    fieldsConfig: IDomainUnifiedFilesConfig,
  ): Promise<any> {
    const fetch = await wrapFetchFromOpts(options);

    return await fetch.post(
      `${getApiBaseUrl(options.microService)}${options.prismaModel}/${methodsCodes.removeFilesByFields}`,
      { recordIds, fieldsConfig },
    );
  },
});

/** Data URL для отображения файла, полученного через downloadFilesByFields. */
export function fileDataToDataUrl(file: Pick<IFileData, 'mimetype' | 'base64'>): string {
  return `data:${file.mimetype};base64,${file.base64}`;
}

export const createFormDataBuilder = () => {
  const formData = new FormData();

  return {
    getFormData: () => formData,
    /**
     * Имя поля multipart совпадает с контрактом uploadFilesToFields на бэкенде.
     * @param fileIndex — индекс в Json-массиве метаданных поля записи (для одной обложки — 0).
     */
    appendFile: (
      recordId: number,
      fieldName: string,
      fileIndex: number,
      file: File | Blob,
      filename?: string,
    ) => {
      formData.append(
        `fileByRecordIdAndFieldNameAndFileIndex[${recordId}][${fieldName}][${fileIndex}]`,
        file,
        filename ?? (file instanceof File ? file.name : 'file'),
      );
    },
  };
};
