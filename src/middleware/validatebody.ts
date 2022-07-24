import { Request, NextFunction } from 'express'
import Ajv from "ajv";

const ajv = new Ajv();

// validation middleware
export function validateBody(schema: object) {
  // compile schema
  const validate = ajv.compile(schema);
  // middleware that returns error if schema is not ok
  return (req: any, res: any, next: NextFunction) => {
    if (!validate(req.body)) return res.status(400).json(validate.errors);
    return next();
  };
}

// helper type
export type RequestBody<T> = Request<{}, {}, T>;