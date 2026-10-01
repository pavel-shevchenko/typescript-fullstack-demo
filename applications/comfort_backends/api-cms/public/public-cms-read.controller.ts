import { Controller, Post, Body } from 'domain_unified/nest-for-hono';
import { ApiCmsPrismaService } from 'prisma_cms';

@Controller('public/cms-read')
export class PublicCmsReadController {
  constructor(private readonly prisma: ApiCmsPrismaService) {}

  @Post('landing')
  async landing() {
    const [pages, promos, articles] = await Promise.all([
      this.prisma.cmsPage.findMany({
        where: { published: true },
        orderBy: { sortOrder: 'asc' },
        take: 10,
      }),
      this.prisma.cmsPromoBlock.findMany({ where: { active: true }, take: 5 }),
      this.prisma.cmsArticle.findMany({ where: { published: true }, take: 5 }),
    ]);
    return { pages, promos, articles };
  }
}
