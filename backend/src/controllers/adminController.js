import {
  registerAdmin,
} from "../services/adminService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/responseHandler.js";

export const createAdmin = async (
  req,
  res
) => {
  try {
    const admin =
      await registerAdmin(
        req.body
      );

    const safeAdmin = {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      createdAt:
        admin.createdAt,
    };

    return successResponse(
      res,
      "Admin created",
      safeAdmin,
      201
    );
  } catch (error) {
    return errorResponse(
      res,
      error.message,
      400
    );
  }
};