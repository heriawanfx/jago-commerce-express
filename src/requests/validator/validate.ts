import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors
      .array()
      .map((error) => error.msg)
      .join(", ");
    return res.json({
      code: res.statusCode,
      message: message,
      data: null,
    })
  }
  next();
};

export default {
  validate,
}