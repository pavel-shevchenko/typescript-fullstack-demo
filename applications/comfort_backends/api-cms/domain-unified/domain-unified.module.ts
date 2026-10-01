import { Module } from 'domain_unified/nest-for-hono';
import { ApiCmsPrismaService } from 'prisma_cms';
import { SeaweedfsModule } from '../storage/seaweedfs.module';
import { ComfortAiCallLogController } from './ai/comfort-ai-call-log.controller';
import { ComfortAiRecommendationController } from './ai/comfort-ai-recommendation.controller';
import { ComfortAuditEventController } from './audit/comfort-audit-event.controller';
import { CmsAiPromptSlotController } from './cms/cms-ai-prompt-slot.controller';
import { CmsArticleController } from './cms/cms-article.controller';
import { CmsPageController } from './cms/cms-page.controller';
import { CmsPromoBlockController } from './cms/cms-promo-block.controller';

@Module({
  imports: [SeaweedfsModule],
  controllers: [
    CmsPageController,
    CmsArticleController,
    CmsPromoBlockController,
    CmsAiPromptSlotController,
    ComfortAuditEventController,
    ComfortAiRecommendationController,
    ComfortAiCallLogController,
  ],
  providers: [ApiCmsPrismaService],
})
export class CmsDomainUnifiedModule {}
