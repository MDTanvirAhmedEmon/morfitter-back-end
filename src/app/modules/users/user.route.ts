import { Router } from "express";
import { userController } from "./user.controller";
// import validateRequest from "../../middlewares/validateRequest";
// import { userValidationSchema } from "./user.validation";

const router = Router();

router.post('/create-trainee',
    // validateRequest(userValidationSchema),
    userController.createTrainee)

router.post('/create-trainer', userController.createTrainer)

export const UserRouter = router;