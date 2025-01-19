import mongoose, { Schema, model } from 'mongoose';
import { ITrainer } from './trainer.interface';

const trainerSchema = new Schema<ITrainer>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
    },
    dob: {
      type: Date,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    onlineSession: {
      type: String,
      enum: ['yes', 'no'],
      required: true,
    },
    faceToFace: {
      type: String,
      enum: ['yes', 'no'],
      required: true,
    },
    consultationType: {
      type: String,
      enum: ['paid', 'free'],
      required: true,
    },
    specialism: {
      type: [String],
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Trainer = model<ITrainer>('Trainer', trainerSchema);
