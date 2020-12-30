import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false, require: true },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async (enteredPassword, password) => {
  return await bcrypt.compare(enteredPassword, password);
};
const user = mongoose.model('user', userSchema);

export default user;
