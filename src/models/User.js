import mongoose, { models } from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    role: { type: String, default: "USER" },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
