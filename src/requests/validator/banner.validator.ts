import { param } from "express-validator";

const show = () => {
    return [param("id").isInt().withMessage("Id harus berupa angka")];
}

export default {
    show,
}