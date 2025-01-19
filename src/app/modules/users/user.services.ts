import AppError from '../../errors/AppError';
import { Trainee } from '../trainee/trainee.model';
import { ITrainee } from '../trainee/trainee.interface';
import { IUser } from "./user.interface";
import { User } from "./user.model"
import { ITrainer } from '../trainer/trainer.interface';
import { Trainer } from '../trainer/trainer.model';

const createTrainee = async (validateUserInfo: Partial<IUser>, validateTraineeData: ITrainee): Promise<ITrainee | undefined> => {
    const userData = {
        email: validateUserInfo?.email,
        password: validateUserInfo?.password,
        role: "trainee",
        status: 'in-progress',
    }
    const isExist = await User.findOne({ email: userData.email })

    if (isExist) {
        throw new AppError(400, 'User already exists!')
    }

    const result = await User.create(userData);


    if (result?._id) {
        validateTraineeData.user = result?._id
        const traineeResult = await Trainee.create(validateTraineeData)
        return traineeResult
    }
}

const createTrainer = async (validateUserInfo: Partial<IUser>, validateTrainerData: ITrainer): Promise<ITrainer | undefined> => {
    const userData = {
        email: validateUserInfo?.email,
        password: validateUserInfo?.password,
        role: "trainer",
        status: 'in-progress',
    }
    const isExist = await User.findOne({ email: userData.email })

    if (isExist) {
        throw new AppError(400, 'User already exists!')
    }

    const result = await User.create(userData);


    if (result?._id) {
        validateTrainerData.user = result?._id
        const trainerResult = await Trainer.create(validateTrainerData)
        return trainerResult
    }
}

export const userServices = {
    createTrainee,
    createTrainer,
}