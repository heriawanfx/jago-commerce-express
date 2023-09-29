import Banner from "../models/banner.model";
import { ApiResponse } from "../utils/api-response";
import { Request, Response, NextFunction } from "express";

const index = (req: Request, res: Response, next: NextFunction) => {
    Banner.findAll()
        .then((data) => {
            ApiResponse(res, data)
        })
        .catch((error) => {
            ApiResponse(res, null, error)
        });
};

const show = (req: Request, res: Response, next: NextFunction) => {
    Banner.findByPk(req.params.id)
        .then((data) => {
            ApiResponse(res, data)
        })
        .catch((error) => {
            ApiResponse(res, null, error)
        });
};

const post = (req: Request, res: Response, next: NextFunction) => {
    Banner.create({
        name: req.body.name,
        banner_url: req.body.banner_url,
    })
        .then((data) => {
            ApiResponse(res, data)
        })
        .catch((error) => {
            ApiResponse(res, null, error)
        });
};

export default {
    index,
    show,
    post,
    
}