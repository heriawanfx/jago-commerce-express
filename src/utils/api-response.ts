
import { Request, Response, NextFunction } from "express";

const ApiResponse = ( res: Response, data? : any, error? : any) => {
    return res.json({
        code: res.statusCode,
        message: error,
        data: data,
    })
}

export { ApiResponse };