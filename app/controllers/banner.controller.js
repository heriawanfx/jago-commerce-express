import BannerModel from "../models/banner.model.js";
import { ApiResponse } from "../utils/api-response.js";

const index = (req, res) => {
    BannerModel.findAll()
        .then((data) => {
            ApiResponse(res, data)
        })
        .catch((error) => {
            ApiResponse(res, null, error)
        });
};

const show = (req, res, next) => {
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