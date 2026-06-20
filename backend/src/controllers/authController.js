import {
  loginAdmin,
} from "../services/authService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/responseHandler.js";

export const login =
  async (req, res) => {
    try {
      const {
        email,
        password,
      } = req.body;

      const result =
        await loginAdmin(
          email,
          password
        );

      return successResponse(
        res,
        "Login successful",
        result
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message,
        401
      );
    }
  };