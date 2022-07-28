import { Router } from "express";

import voucherRouter from "./voucherRouter.js";

const router = Router();

router.use(voucherRouter);

export default router;