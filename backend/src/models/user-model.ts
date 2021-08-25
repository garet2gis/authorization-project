import { Schema, model, Document, Model } from "mongoose";

interface IUser {
  email: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
}

const UserSchema = new Schema<IUser, Model<IUser>, IUser>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export type UserModelType = IUser & Document;

const User = model<UserModelType>("User", UserSchema);

export default User;
