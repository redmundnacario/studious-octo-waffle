import * as express from "express";

import { getContentLength } from "../controllers/contentLength.js";

const router = express.Router();

router.route("/").get(getContentLength);

export default router;
