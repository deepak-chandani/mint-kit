import * as httpStatus from 'http-status';
import BaseError from './BaseError';

class BadRequestError {
  public statusCode: number;
  public message: string;

  constructor(message) {
    this.statusCode = httpStatus.BAD_REQUEST;
    this.message = message;

    return new BaseError(this.statusCode, this.message);
  }
}

export default BadRequestError;
