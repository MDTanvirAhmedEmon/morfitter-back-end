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
    profileImageUrl: { type: String },
    title: { type: String, required: false },
    userName: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },  // Use `Date` type if possible
    country: { type: String, required: true },
    city: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    fitterGoal: { type: String, required: true },  // Enum can be added if predefined values are known
    interest: { type: String, required: true },
    towardsGoal: { type: String, required: true },
    achieveGoal: { type: String, required: true },
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