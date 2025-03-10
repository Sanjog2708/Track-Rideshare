import {Router} from "express"
import { registerCaptain } from "../Controllers/captain.controller.js";
const router = Router();

router.route("/register").post(registerCaptain);    

export default router;
