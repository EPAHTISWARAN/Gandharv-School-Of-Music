import { body } from "express-validator";

export const enquiryValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name required"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone required"),

  body("email")
    .isEmail()
    .withMessage("Valid email required"),

  body("course")
    .notEmpty()
    .withMessage("Course required"),

  body("instrument")
    .notEmpty()
    .withMessage("Instrument required"),
];