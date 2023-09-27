import { Router } from "express";
import bannerController from "../controllers/banner.controller.js";

const router = Router();

router.get('/banners', bannerController.index);
router.get('/banners/:id', bannerController.show);

export default router;