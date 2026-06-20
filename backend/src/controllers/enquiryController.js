import {
  createNewEnquiry,
  fetchAllEnquiries,
  removeEnquiry,
  changeEnquiryStatus,
} from "../services/enquiryService.js";

import {
  successResponse,
  errorResponse,
} from "../utils/responseHandler.js";

export const createEnquiry =
  async (req, res) => {
    try {
      const enquiry =
        await createNewEnquiry(
          req.body
        );

      return successResponse(
        res,
        "Enquiry created",
        enquiry,
        201
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  };

export const getEnquiries =
  async (req, res) => {
    try {
      const enquiries =
        await fetchAllEnquiries();

      return successResponse(
        res,
        "Enquiries fetched",
        enquiries
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  };

export const deleteEnquiryById =
  async (req, res) => {
    try {
      await removeEnquiry(
        req.params.id
      );

      return successResponse(
        res,
        "Enquiry deleted"
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  };

export const updateStatus =
  async (req, res) => {
    try {
      const enquiry =
        await changeEnquiryStatus(
          req.params.id,
          req.body.status
        );

      return successResponse(
        res,
        "Status updated",
        enquiry
      );
    } catch (error) {
      return errorResponse(
        res,
        error.message
      );
    }
  };