
export type IUser = {
    email: string;
    password: string;
    passwordChangedAt?: Date;
    role: 'trainee' | 'trainer';
    status?: 'in-progress' | 'blocked';
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
}