import BannerModel from "../models/banner.model";
import { ApiResponse } from "../utils/api-response";
import { Request, Response, NextFunction } from "express";

const index = (req: Request, res: Response, next: NextFunction) => {
    BannerModel.findAll()
        .then((data) => {
            ApiResponse(res, data)
        })
        .catch((error) => {
            ApiResponse(res, null, error)
        });
};

const show = (req: Request, res: Response, next: NextFunction) => {
    BannerModel.findByPk(req.params.id)
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
}