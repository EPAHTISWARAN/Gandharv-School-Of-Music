import bcrypt from "bcryptjs";

import {
  createAdmin,
  findAdminByEmail,
} from "../repositories/adminRepository.js";

export const registerAdmin =
  async (data) => {
    const existing =
      await findAdminByEmail(
        data.email
      );

    if (existing) {
      throw new Error(
        "Admin already exists"
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        data.password,
        10
      );

    return await createAdmin({
      ...data,
      password:
        hashedPassword,
    });
  };