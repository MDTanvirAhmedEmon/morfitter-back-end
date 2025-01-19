import { Types } from "mongoose";

export type ITrainee = {
    firstName: string;
    lastName: string;
    address: string;
    gender: 'male' | 'female' | 'others';
    contactNo: string;
    profileImageUrl?: string;
    title: string;
    userName: string;
    dob: Date;
    country: string;
    city: string;
    height: number;
    weight: number;
    fitterGoal: string;
    interest: string;
    towardsGoal: string;
    achieveGoal: string;
    user?: Types.ObjectId;
}