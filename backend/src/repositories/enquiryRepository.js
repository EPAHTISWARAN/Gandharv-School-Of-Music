import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (
  enquiryData
) => {
  return await Enquiry.create(enquiryData);
};

export const getAllEnquiries = async () => {
  return await Enquiry.find().sort({
    createdAt: -1,
  });
};

export const getEnquiryById = async (
  id
) => {
  return await Enquiry.findById(id);
};

export const deleteEnquiry = async (
  id
) => {
  return await Enquiry.findByIdAndDelete(id);
};

export const updateEnquiryStatus =
  async (id, status) => {
    return await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
  };