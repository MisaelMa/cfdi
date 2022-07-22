import { NextFunction, Request, RequestHandler, Response } from 'express';

/**
 *asasd
 *
 * @param fn
 * @description Wrap asynchronous functions.
 * @param fn
 * @returns RequestHandler
 */
export const wrapAsync = (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const fnReturn = fn(req, res, next);

    return Promise.resolve(fnReturn).catch(next);
  };
};
