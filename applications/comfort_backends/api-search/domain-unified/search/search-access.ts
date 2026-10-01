import { ForbiddenException } from 'domain_unified/nest-for-hono';
import { ensurePassportUser, type DomainUnifiedRequest } from 'domain_unified';

export const resolveSearchDocumentScope = async (
  req: DomainUnifiedRequest,
) => {
  const user = ensurePassportUser(req);
  return user.data.role === 'admin' ? {} : { status: 'published' };
};

export const resolveSearchChunkScope = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  return user.data.role === 'admin'
    ? {}
    : { Document: { status: 'published' } };
};

export const resolveSearchAdminScope = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role !== 'admin') throw new ForbiddenException();
  return {};
};

export const ensureSearchAdmin = async (req: DomainUnifiedRequest) => {
  return resolveSearchAdminScope(req);
};
