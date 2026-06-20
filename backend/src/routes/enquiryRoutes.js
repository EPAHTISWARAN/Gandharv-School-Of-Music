import express from "express";

import {
  createEnquiry,
  getEnquiries,
  deleteEnquiryById,
  updateStatus,
} from "../controllers/enquiryController.js";

import {
  enquiryValidation,
} from "../validations/enquiryValidation.js";

import {
  validate,
} from "../middleware/validateMiddleware.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.post(
  "/",
  enquiryValidation,
  validate,
  createEnquiry
);

router.get(
  "/",
  protect,
  getEnquiries
);

router.delete(
  "/:id",
  protect,
  deleteEnquiryById
);

router.patch(
  "/:id/status",
  protect,
  updateStatus
);

export default router;