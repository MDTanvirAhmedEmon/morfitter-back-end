import { Router } from "express";
import { traineeController } from "./user.controller";
// import validateRequest from "../../middlewares/validateRequest";
// import { userValidationSchema } from "./user.validation";

const router = Router();

router.post('/create-trainee',
    // validateRequest(userValidationSchema),
    traineeController.createTrainee)

export const UserRouter = router;