import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import CustomError from "../utils/custom.error.js";

//define user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      maxLength: [25, "Name should not be more than 25 characters"],
      validate: {
        validator: (value) => {
          return validator.isAlpha(value, "en-US", { ignore: " " });
        },
        message: "Name should only contain alphabets",
      },
    },

    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      trim: true,
      maxLength: [100, "Email should not be more than 100 characters"],
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: "Please provide a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minLength: [6, "Password should be greater than 6 characters"],
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

//hash password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//compare password with hashed password
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    console.log(error);
    throw new CustomError(500, "internal error");
  }
};

//check if email is unique
userSchema.statics.is_email_used = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};

const User = mongoose.model("User", userSchema);
export default User;
