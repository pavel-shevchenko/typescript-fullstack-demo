import { Injectable, type RequestMiddleware } from 'domain_unified/nest-for-hono';
import type { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

@Injectable()
export class CorrelationMiddleware implements RequestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const incoming = req.header('x-correlation-id')?.trim();
    const correlationId = incoming?.slice(0, 128) || randomUUID();
    req.headers['x-correlation-id'] = correlationId;
    res.setHeader('x-correlation-id', correlationId);
    next();
  }
}
