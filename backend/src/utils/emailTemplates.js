export const userConfirmationTemplate = (
  name,
  course
) => {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px">

    <h2 style="color:#2563eb">
      Thank You, ${name}!
    </h2>

    <p>
      We have successfully received
      your enquiry.
    </p>

    <p>
      Course Selected:
      <strong>${course}</strong>
    </p>

    <p>
      Our admissions team will
      contact you shortly.
    </p>

    <hr/>

    <p>
      Regards,<br/>
      Gandharva Academy
    </p>

  </div>
  `;
};

export const adminNotificationTemplate = (
  data
) => {
  return `
  <div style="font-family:Arial,sans-serif">

    <h2>
      New Enquiry Received
    </h2>

    <p>
      <strong>Name:</strong>
      ${data.name}
    </p>

    <p>
      <strong>Email:</strong>
      ${data.email}
    </p>

    <p>
      <strong>Phone:</strong>
      ${data.phone}
    </p>

    <p>
      <strong>Course:</strong>
      ${data.course}
    </p>

    <p>
      <strong>Instrument:</strong>
      ${data.instrument}
    </p>

    <p>
      <strong>Description:</strong>
      ${data.description}
    </p>

  </div>
  `;
};