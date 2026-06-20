import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiries,
  updateEnquiryStatus,
} from "../repositories/enquiryRepository.js";

import { env } from "../config/env.js";

import { sendEmail } from "./emailService.js";

import {
  adminNotificationTemplate,
  userConfirmationTemplate,
} from "../utils/emailTemplates.js";

export const createNewEnquiry =
  async (data) => {
    const enquiry =
      await createEnquiry(
        data
      );

    try {
      await sendEmail({
        to:
          env.ADMIN_EMAIL,

        subject:
          "New Enquiry Received",

        htmlContent:
          adminNotificationTemplate(
            data
          ),
      });

      await sendEmail({
        to:
          data.email,

        subject:
          "Thank You For Contacting Gandharva Academy",

        htmlContent:
          userConfirmationTemplate(
            data.name,
            data.course
          ),
      });

      console.log(
        "Emails sent successfully"
      );
    } catch (error) {
      console.error(
        "Email Error:",
        error.message
      );
    }

    return enquiry;
  };

export const fetchAllEnquiries =
  async () => {
    return await getAllEnquiries();
  };

export const removeEnquiry =
  async (id) => {
    return await deleteEnquiry(
      id
    );
  };

export const changeEnquiryStatus =
  async (id, status) => {
    return await updateEnquiryStatus(
      id,
      status
    );
  };