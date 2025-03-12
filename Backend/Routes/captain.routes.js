import {Router} from "express"
import { registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain } from "../Controllers/captain.controller.js";
import { authCaptain } from "../Middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(registerCaptain);  
router.route("/login").post(loginCaptain); 
router.route("/profile").get(authCaptain,getCaptainProfile)
router.route("/logout").get(authCaptain,logoutCaptain)

export default router;
