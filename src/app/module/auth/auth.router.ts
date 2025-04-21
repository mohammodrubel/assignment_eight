import { Router } from "express";
import AuthController from "./auth.controller";

const router = Router()

    router.post('/',AuthController.Login)

export const authRouter = router  