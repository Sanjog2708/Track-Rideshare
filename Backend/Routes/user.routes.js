import {Router} from "express"
import { body } from "express-validator";
import {registerUser,loginUser,getUserProfile} from "../Controllers/user.controller.js"
import { authUser } from "../Middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post([
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name    must be at least 3 characters long"),
    body('password').isLength({min:3}).withMessage("Password Must be atleast 3 characters long"),
],registerUser)

router.route("/login").post([
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:3}).withMessage("Password Must be atleast 3 characters long"),
],loginUser)

router.route("/profile").get(authUser,getUserProfile);



export default router