import mongoose from "mongoose";

const enquirySchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      course: {
        type: String,
        required: true,
      },

      instrument: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        default: "",
      },

      status: {
        type: String,
        enum: [
          "Pending",
          "Contacted",
          "Interested",
          "Joined",
          "Rejected",
        ],
        default:
          "Pending",
      },

      emailSent: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Enquiry",
  enquirySchema
);