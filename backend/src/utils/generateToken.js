import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const generateToken = (
  adminId
) => {
  return jwt.sign(
    { id: adminId },
    env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};