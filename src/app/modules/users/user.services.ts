import AppError from '../../errors/AppError';
import { Trainee } from '../trainee/trainee.model';
import { ITrainee } from '../trainee/trainee.interface';
import { IUser } from "./user.interface";
import { User } from "./user.model"

const createTrainee = async (validateUserInfo: Partial<IUser>, validateTraineeData: ITrainee): Promise<ITrainee | undefined> => {
    const userData = {
        email: validateUserInfo?.email,
        password: validateUserInfo?.password,
        role: "trainee",
        status: 'in-progress',
    }
    const isExist = await User.findOne({ email: userData.email })
    console.log(isExist)
    if (isExist) {
        throw new AppError(400, 'User already exists!')
    }

    const result = await User.create(userData);
    console.log('result', result)

    if (result?._id) {
        validateTraineeData.user = result?._id
        const traineeResult = await Trainee.create(validateTraineeData)
        return traineeResult
    }
}

export const traineeServices = {
    createTrainee,
}