import type { SearchIndexUpsertInput } from './search-index-upsert';

type CmsPageRecord = {
  slug: string;
  title: string;
  summary?: string | null;
  bodyMarkdown?: string | null;
  published: boolean;
};

type CmsArticleRecord = {
  slug: string;
  title: string;
  excerpt?: string | null;
  bodyMarkdown?: string | null;
  published: boolean;
};

type CmsPromoBlockRecord = {
  code: string;
  headline: string;
  subline?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  active: boolean;
};

type CrmContactRecord = {
  id: bigint;
  tenantId: bigint;
  fullName?: string | null;
  phone?: string | null;
  email?: string | null;
  notes?: string | null;
};

const joinText = (...parts: Array<string | null | undefined>) =>
  parts.filter((part) => part && part.trim()).join('\n\n');

export function projectCmsPage(page: CmsPageRecord): SearchIndexUpsertInput {
  return {
    externalKey: `cms:page:${page.slug}`,
    sourceType: 'cmsPage',
    title: page.title,
    body: joinText(page.title, page.summary, page.bodyMarkdown),
    url: page.slug === 'home' ? '/' : `/pages/${page.slug}`,
    status: page.published ? 'published' : 'draft',
    metadata: { slug: page.slug, model: 'cmsPage' },
  };
}

export function projectCmsArticle(
  article: CmsArticleRecord,
): SearchIndexUpsertInput {
  return {
    externalKey: `cms:article:${article.slug}`,
    sourceType: 'cmsArticle',
    title: article.title,
    body: joinText(article.title, article.excerpt, article.bodyMarkdown),
    url: `/articles/${article.slug}`,
    status: article.published ? 'published' : 'draft',
    metadata: { slug: article.slug, model: 'cmsArticle' },
  };
}

export function projectCmsPromoBlock(
  promo: CmsPromoBlockRecord,
): SearchIndexUpsertInput {
  return {
    externalKey: `cms:promo:${promo.code}`,
    sourceType: 'cmsPromoBlock',
    title: promo.headline,
    body: joinText(promo.headline, promo.subline, promo.ctaLabel),
    url: promo.ctaHref ?? undefined,
    status: promo.active ? 'published' : 'draft',
    metadata: { code: promo.code, model: 'cmsPromoBlock' },
  };
}

export function projectCrmContact(
  contact: CrmContactRecord,
  tenantSlug: string,
): SearchIndexUpsertInput {
  const title = contact.fullName?.trim() || 'CRM contact';
  return {
    externalKey: `crm:contact:${tenantSlug}:${contact.id.toString()}`,
    sourceType: 'crmContact',
    title,
    body: joinText(contact.fullName, contact.phone, contact.email, contact.notes),
    status: 'published',
    tenantKey: tenantSlug,
    metadata: {
      model: 'crmContact',
      contactId: contact.id.toString(),
      tenantSlug,
    },
  };
}

export const COMFORT_SEARCH_INDEXABLE_MODELS = [
  'cmsPage',
  'cmsArticle',
  'cmsPromoBlock',
  'crmContact',
] as const;

export type ComfortSearchIndexableModel =
  (typeof COMFORT_SEARCH_INDEXABLE_MODELS)[number];

export function isComfortSearchIndexableModel(
  model: string,
): model is ComfortSearchIndexableModel {
  return (COMFORT_SEARCH_INDEXABLE_MODELS as readonly string[]).includes(model);
}

export function projectComfortSearchRecord(
  model: ComfortSearchIndexableModel,
  record: Record<string, unknown>,
  tenantSlug?: string,
): SearchIndexUpsertInput | null {
  switch (model) {
    case 'cmsPage':
      return projectCmsPage(record as CmsPageRecord);
    case 'cmsArticle':
      return projectCmsArticle(record as CmsArticleRecord);
    case 'cmsPromoBlock':
      return projectCmsPromoBlock(record as CmsPromoBlockRecord);
    case 'crmContact': {
      if (!tenantSlug) return null;
      return projectCrmContact(record as CrmContactRecord, tenantSlug);
    }
    default:
      return null;
  }
}
