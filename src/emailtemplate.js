

  // Function to generate the HTML and Plain Text body of the email
  const generateEmailContent = ({ name, email, message }) => {
      // HTML version (using backticks for multi-line string and variable interpolation)
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            
            <h2 style="color: #008000; border-bottom: 2px solid #006400; padding-bottom: 10px;">
              Welcome to Success & Bright Learning Co.
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;">
                <strong style="color: #333;">From:</strong> 
                <span style="color: #555;">${name}</span>
              </p>
              <p style="margin: 10px 0;">
                <strong style="color: #333;">Sender Email:</strong> 
                <a href="mailto:${email}" style="color: #008000;">${email}</a>
              </p>
            </div>
            
            <div style="background-color: #fffacd; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;">
                <strong style="color: #333;">Message:</strong>
              </p>
              <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                ${message}
              </p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px; text-align: center;">
              This message was sent from Success and Bright Learning Co.<br>
              Click "Reply" to respond directly to ${email}
            </p>
          </div>
        </div>
      `;

      // Plain Text version 
      const textBody = `
  New Message from Success & Bright Learning

  From: ${name}
  Sender Email: ${email}

  Message:
  ${message}

  ---
  This message was sent from a person to Success and Bright Learning Co.
  Reply to respond to ${email}
      `;

      return {
          html: htmlBody,
          text: textBody,
      };
  };

  module.exports = { generateEmailContent };