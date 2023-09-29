import { Request, Response, NextFunction  } from "express";

const index = (req: Request, res: Response, next: NextFunction) => {
    return res.send('Welcome');
  };

export default {
    index,
}