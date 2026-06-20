import { fetch } from "undici";
import { env } from "../config/env.js";

export const sendEmail = async ({
  to,
  subject,
  htmlContent,
}) => {
  const response = await fetch(
    "https://api.brevo.com/v3/smtp/email",
    {
      method: "POST",
      headers: {
        "api-key":
          env.BREVO_API_KEY,
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        sender: {
          name:
            "Gandharva Academy",
          email:
            env.ADMIN_EMAIL,
        },

        to: [
          {
            email: to,
          },
        ],

        subject,

        htmlContent,
      }),
    }
  );

  const result =
    await response.json();

  if (!response.ok) {
    console.error(
      "Brevo Error:",
      result
    );

    throw new Error(
      result.message ||
        "Email sending failed"
    );
  }

  return result;
};