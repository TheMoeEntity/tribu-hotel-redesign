"use server";

import nodemailer from "nodemailer";

export async function sendReservation(data: any) {
  const { checkIn, checkOut, guests, children, fullName, email, phone } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Add this to .env
      pass: process.env.EMAIL_PASS, // Add this to .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "hotel@example.com", // Replace with actual hotel email
    subject: "New Reservation Request",
    html: `
      <h2>New Reservation</h2>
      <p><strong>Check-In:</strong> ${checkIn}</p>
      <p><strong>Check-Out:</strong> ${checkOut}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Children:</strong> ${children}</p>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Reservation sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send reservation" };
  }
}
