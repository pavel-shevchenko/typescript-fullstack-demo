import {
  IsBoolean,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Matches,
  Min,
  MinLength,
} from 'class-validator';
import {
  type ApiCmsPrismaModels,
  type ApiCmsPrisma,
  ComfortAiRecommendationStatus,
  ComfortAiTargetService,
  UserRole,
} from 'prisma_cms';
import { type ApiCrmPrismaModels, CrmMemberRole } from 'prisma_crm';
import {
  type ApiSearchPrismaModels,
  type ApiSearchPrisma,
  SearchDocumentStatus,
  SearchIndexJobStatus,
} from 'prisma_search';

export class SearchQueryDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  @Matches(/\S/, { message: 'query must contain a non-whitespace character' })
  query!: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  pageSize: number = 20;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1536)
  @ArrayMaxSize(1536)
  @IsNumber({}, { each: true })
  semanticVector?: number[];
}

export class SearchIndexUpsertDto {
  @IsString()
  @MinLength(1)
  @MaxLength(300)
  externalKey!: string;

  @IsString()
  @MinLength(1)
  sourceType!: string;

  @IsString()
  @MinLength(1)
  title!: string;

  @IsString()
  body!: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsEnum(SearchDocumentStatus)
  status: SearchDocumentStatus = SearchDocumentStatus.published;

  @IsOptional()
  @IsString()
  tenantKey?: string;

  @IsOptional()
  metadata?: Record<string, unknown>;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1536)
  @ArrayMaxSize(1536)
  @IsNumber({}, { each: true })
  semanticVector?: number[];
}

export class SearchDocumentDto
  implements Partial<ApiSearchPrismaModels['SearchDocument']>
{
  @IsOptional() @IsString() externalKey?: string;
  @IsOptional() @IsString() sourceType?: string;
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() body?: string;
  @IsOptional() @IsString() url?: string;
  @IsOptional() @IsEnum(SearchDocumentStatus) status?: SearchDocumentStatus;
  @IsOptional() @IsString() tenantKey?: string;
  @IsOptional() metadata?: ApiSearchPrisma.JsonValue;
  @IsOptional() @IsString() contentHash?: string;
}

export class SearchChunkDto
  implements Partial<ApiSearchPrismaModels['SearchChunk']>
{
  @IsOptional() documentId?: bigint;
  @IsOptional() @IsInt() ordinal?: number;
  @IsOptional() @IsString() content?: string;
  @IsOptional() @IsInt() tokenCount?: number;
  @IsOptional() metadata?: ApiSearchPrisma.JsonValue;
}

export class SearchIndexJobDto
  implements Partial<ApiSearchPrismaModels['SearchIndexJob']>
{
  @IsOptional() documentId?: bigint;
  @IsOptional() @IsString() externalKey?: string;
  @IsOptional() @IsEnum(SearchIndexJobStatus) status?: SearchIndexJobStatus;
  @IsOptional() @IsString() operation?: string;
  @IsOptional() @IsString() message?: string;
  @IsOptional() @IsString() correlationId?: string;
}

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}

export class CmsPageDto implements Partial<ApiCmsPrismaModels['CmsPage']> {
  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  bodyMarkdown?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}

export class CmsArticleDto implements Partial<ApiCmsPrismaModels['CmsArticle']> {
  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  excerpt?: string;

  @IsOptional()
  @IsString()
  bodyMarkdown?: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  heroFiles?: ApiCmsPrisma.JsonValue;
}

export class CmsAiPromptSlotDto implements Partial<ApiCmsPrismaModels['CmsAiPromptSlot']> {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  systemPrompt?: string;

  @IsOptional()
  @IsString()
  userPromptTemplate?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class ComfortAuditEventDto implements Partial<ApiCmsPrismaModels['ComfortAuditEvent']> {
  @IsOptional()
  actorUserId?: bigint;

  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @IsString()
  entityModel?: string;

  @IsOptional()
  @IsString()
  entityId?: string;

  @IsOptional()
  payloadJson?: ApiCmsPrisma.JsonValue;

  @IsOptional()
  @IsString()
  correlationId?: string;
}

export class CmsPromoBlockDto implements Partial<ApiCmsPrismaModels['CmsPromoBlock']> {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  headline?: string;

  @IsOptional()
  @IsString()
  subline?: string;

  @IsOptional()
  @IsString()
  ctaLabel?: string;

  @IsOptional()
  @IsString()
  ctaHref?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class ComfortAiCallLogDto implements Partial<ApiCmsPrismaModels['ComfortAiCallLog']> {
  @IsOptional()
  @IsString()
  correlationId?: string;

  @IsOptional()
  @IsString()
  provider?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsInt()
  latencyMs?: number;

  @IsOptional()
  @IsInt()
  promptChars?: number;

  @IsOptional()
  @IsInt()
  responseChars?: number;

  @IsOptional()
  @IsBoolean()
  success?: boolean;
}

export class ComfortAiRecommendationDto
  implements Partial<ApiCmsPrismaModels['ComfortAiRecommendation']>
{
  @IsOptional()
  @IsEnum(ComfortAiTargetService)
  targetService?: ComfortAiTargetService;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  explanation?: string;

  @IsOptional()
  payloadJson?: ApiCmsPrisma.JsonValue;

  @IsOptional()
  @IsEnum(ComfortAiRecommendationStatus)
  status?: ComfortAiRecommendationStatus;

  @IsOptional()
  @IsBoolean()
  requiresAdminConfirm?: boolean;
}

export class CrmTenantDto implements Partial<ApiCrmPrismaModels['CrmTenant']> {
  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsString()
  timezone?: string;
}

export class CrmContactDto implements Partial<ApiCrmPrismaModels['CrmContact']> {
  @IsOptional()
  tenantId?: bigint;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class CrmServiceDto implements Partial<ApiCrmPrismaModels['CrmService']> {
  @IsOptional()
  tenantId?: bigint;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  durationMin?: number;

  @IsOptional()
  @IsInt()
  priceRub?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class CrmAppointmentDto implements Partial<ApiCrmPrismaModels['CrmAppointment']> {
  @IsOptional()
  tenantId?: bigint;

  @IsOptional()
  contactId?: bigint;

  @IsOptional()
  serviceId?: bigint;

  @IsOptional()
  startsAt?: Date;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class CrmTenantMemberDto implements Partial<ApiCrmPrismaModels['CrmTenantMember']> {
  @IsOptional()
  tenantId?: bigint;

  @IsOptional()
  userId?: bigint;

  @IsOptional()
  @IsEnum(CrmMemberRole)
  role?: CrmMemberRole;
}

export { UserRole, CrmMemberRole };
