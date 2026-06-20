import { Brevo } from "@getbrevo/brevo";
import { env } from "./env.js";

const apiInstance =
  new Brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  env.BREVO_API_KEY
);

export default apiInstance;