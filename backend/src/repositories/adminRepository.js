import Admin from "../models/Admin.js";

export const findAdminByEmail =
  async (email) => {
    return await Admin.findOne({
      email,
    });
  };

export const findAdminById =
  async (id) => {
    return await Admin.findById(id)
      .select("-password");
  };

export const createAdmin =
  async (adminData) => {
    return await Admin.create(
      adminData
    );
  };