import bcrypt from "bcryptjs";

import {
  generateToken,
} from "../utils/generateToken.js";

import {
  findAdminByEmail,
} from "../repositories/adminRepository.js";

export const loginAdmin = async (
  email,
  password
) => {
  const admin =
    await findAdminByEmail(
      email
    );

  if (!admin) {
    throw new Error(
      "Admin not found"
    );
  }

  const isMatch =
    await bcrypt.compare(
      password,
      admin.password
    );

  if (!isMatch) {
    throw new Error(
      "Invalid credentials"
    );
  }

  const token =
    generateToken(admin._id);

  const adminResponse = {
    _id: admin._id,
    name: admin.name,
    email: admin.email,
  };

  return {
    token,
    admin: adminResponse,
  };
};