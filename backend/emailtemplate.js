const generateEmailContent = ({
  companyName,
  organizationDetails,
  name,
  designation,
  mobileNumber,
  email,
  serviceType,
  message,
}) => {
  const html = `
  <div style="font-family: Arial; background:#f4f6f8; padding:30px">
    <div style="max-width:650px;margin:auto;background:#fff;padding:32px;border-radius:8px">
      <h2 style="border-bottom:2px solid #f2c94c;padding-bottom:10px">
        New Quotation Request
      </h2>

      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Contact Person:</strong> ${name}</p>
      <p><strong>Designation:</strong> ${designation}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobileNumber}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>

      <hr />

      <h3>Organization Details</h3>
      <p>${organizationDetails}</p>

      ${
        message
          ? `<h3>Additional Requirements</h3><p>${message}</p>`
          : ""
      }

      <hr />
      <p style="font-size:12px;color:#777;text-align:center">
        Submitted via Success & Bright Learning website
      </p>
    </div>
  </div>
  `;

  const text = `
NEW QUOTATION REQUEST

Company: ${companyName}
Name: ${name}
Designation: ${designation}
Email: ${email}
Mobile: ${mobileNumber}
Service: ${serviceType}

Organization Details:
${organizationDetails}

Additional Notes:
${message || "N/A"}
`;

  return { html, text };
};

module.exports = { generateEmailContent };
