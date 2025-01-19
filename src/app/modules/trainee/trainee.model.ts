import { model, Schema } from "mongoose";
import { ITrainee } from "./trainee.interface";

const traineeSchema: Schema<ITrainee> = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: {
        type: String,
        required: true
    },
    gender: { type: String, enum: ['male', 'female', 'others'], required: true },
    contactNo: { type: String, required: true },
    profileImageUrl: { type: String, required: false },
    title: { type: String, required: false },
    userName: { type: String, required: true, unique: true },
    dob: { type: String, required: true },  // Use `Date` type if possible
    country: { type: String, required: true },
    city: { type: String, required: true },
    height: { type: Number, required: false },
    weight: { type: Number, required: false },
    fitterGoal: { type: String, required: true },  // Enum can be added if predefined values are known
    interest: { type: String, required: false },
    towardsGoal: { type: String, required: false },
    achieveGoal: { type: String, required: false },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
        unique: true,
        ref: 'User',
    }
}, {
    timestamps: true
});

export const Trainee = model<ITrainee>('Trainee', traineeSchema);