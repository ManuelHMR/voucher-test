import { Router } from "express";
import voucherController from "../controllers/voucherController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { voucherCreateDataSchema } from "../schemas/voucherCreateData.js";
import { voucherUseDataSchema } from "../schemas/voucherUseData.js";

const voucherRouter = Router();

voucherRouter.post("/vouchers", validateSchemaMiddleware(voucherCreateDataSchema), voucherController.createVoucher)
voucherRouter.post("/vouchers/apply", validateSchemaMiddleware(voucherUseDataSchema), voucherController.applyVoucher);

export default voucherRouter;