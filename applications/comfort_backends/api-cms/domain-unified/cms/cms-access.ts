import { ForbiddenException } from 'domain_unified/nest-for-hono';
import { type DomainUnifiedRequest, ensurePassportUser } from 'domain_unified';

export const resolveCmsAdminOrPublishedScope = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  return { published: true };
};

export const resolveCmsAdminOnlyScope = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  throw new ForbiddenException();
};

export const resolveCmsPromoActiveScope = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  return { active: true };
};

export const ensureCmsAdminCreate = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role !== 'admin') throw new ForbiddenException();
  return {};
};

export const resolveComfortAiRecommendationScope = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  return { authorUserId: user.data.id };
};

export const ensureComfortAiRecommendationCreate = async (req: DomainUnifiedRequest) => {
  return ensureCmsAdminCreate(req);
};
