import nodemailer from 'nodemailer';

export const POST = async ({ request }) => {
  try {
    // Get form input
    const formData = await request.formData();
    const email = formData.get('email')?.toString() || '';

    // Set up Nodemailer transport
    // (Use environment variables for user/pass)
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com.au',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    // Define mail options
    const mailOptions = {
      from: process.env.ZOHO_USER, // e.g. "hello@yourdomain.com"
      to: 'hello@teleios.au',   // or wherever you want the form to send
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\n`, // Build text from form fields
      // You can also do HTML if you like:
      // html: `<p>Someone said hi: ${email}</p>`
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: 'error', error }), { status: 500 });
  }
};
