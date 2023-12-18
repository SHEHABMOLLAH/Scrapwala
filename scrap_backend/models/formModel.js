import { Schema, model } from "mongoose";

const formSchema = new Schema({
  itemCategory: String,
  itemAge: Number,
  itemTypeDesc: String,
  phone: String,
  email: String,
  shortMessage: String,
  photos: [String],
});

const Form = model("Form", formSchema);
export default Form;
