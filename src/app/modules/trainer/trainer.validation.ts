import { Types } from "mongoose";
import { z } from "zod";

export const trainerValidatedSchema = z.object({
    firstName: z.string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
    }).min(1, "First name cannot be empty"),

    lastName: z.string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string",
    }).min(1, "Last name cannot be empty"),

    gender: z.enum(['male', 'female', 'others'], {
        required_error: "Gender is required",
        invalid_type_error: "Gender must be 'male', 'female', or 'others'",
    }),

    contactNo: z.string({
        required_error: "Contact number is required",
        invalid_type_error: "Contact number must be a string",
    }).min(5, "Contact number is too short").max(20, "Contact number is too long"),

    profileImageUrl: z.string().url("Profile image URL must be a valid URL").optional(),

    dob: z.preprocess(
        (val) => (typeof val === 'string' || val instanceof Date ? new Date(val) : undefined),
        z.date({
            required_error: "Date of birth is required",
            invalid_type_error: "Date of birth must be a valid date",
        })
    ),

    userName: z.string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    }).min(1, "Username cannot be empty"),

    country: z.string({
        required_error: "Country is required",
        invalid_type_error: "Country must be a string",
    }).min(1, "Country cannot be empty"),

    zipCode: z.number({
        required_error: "Zip code is required",
        invalid_type_error: "Zip code must be a number",
    }),

    about: z.string({
        required_error: "About information is required",
        invalid_type_error: "About must be a string",
    }).min(1, "About cannot be empty"),

    onlineSession: z.enum(['yes', 'no'], {
        required_error: "Online session preference is required",
        invalid_type_error: "Online session must be 'yes' or 'no'",
    }),

    faceToFace: z.enum(['yes', 'no'], {
        required_error: "Face-to-face session preference is required",
        invalid_type_error: "Face-to-face must be 'yes' or 'no'",
    }),

    consultationType: z.enum(['paid', 'free'], {
        required_error: "Consultation type is required",
        invalid_type_error: "Consultation type must be 'paid' or 'free'",
    }),

    specialism: z.array(z.string()).min(1, "At least one specialism is required"),

    qualification: z.string({
        required_error: "Qualification is required",
        invalid_type_error: "Qualification must be a string",
    }).min(1, "Qualification cannot be empty"),

    user: z.custom<Types.ObjectId>((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid user ID',
    }).optional(),
});
