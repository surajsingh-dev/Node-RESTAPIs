import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  userage: {
    type: Number,
    required: true,
  },
  userhobbies: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
