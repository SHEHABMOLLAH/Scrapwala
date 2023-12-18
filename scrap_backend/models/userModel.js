import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  hashedPassword: String,
});

const User = model("User", userSchema);
export default User;
