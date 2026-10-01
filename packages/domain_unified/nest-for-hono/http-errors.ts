export class HttpException extends Error {
  constructor(
    private readonly response: string | Record<string, unknown>,
    private readonly status: number,
  ) {
    super(typeof response === 'string' ? response : 'HttpException');
    this.name = 'HttpException';
  }

  getStatus(): number {
    return this.status;
  }

  getResponse(): string | Record<string, unknown> {
    return this.response;
  }
}

export class BadRequestException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Bad Request') {
    super(response, 400);
    this.name = 'BadRequestException';
  }
}

export class UnauthorizedException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Unauthorized') {
    super(response, 401);
    this.name = 'UnauthorizedException';
  }
}

export class ForbiddenException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Forbidden') {
    super(response, 403);
    this.name = 'ForbiddenException';
  }
}

export class NotFoundException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Not Found') {
    super(response, 404);
    this.name = 'NotFoundException';
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Internal Server Error') {
    super(response, 500);
    this.name = 'InternalServerErrorException';
  }
}

export class TooManyRequestsException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Too Many Requests') {
    super(response, 429);
    this.name = 'TooManyRequestsException';
  }
}


export class ConflictException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Conflict') {
    super(response, 409);
    this.name = 'ConflictException';
  }
}

export class ServiceUnavailableException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Service Unavailable') {
    super(response, 503);
    this.name = 'ServiceUnavailableException';
  }
}

export class BadGatewayException extends HttpException {
  constructor(response: string | Record<string, unknown> = 'Bad Gateway') {
    super(response, 502);
    this.name = 'BadGatewayException';
  }
}
