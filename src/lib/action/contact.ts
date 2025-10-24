"use server";

import { contactSchemasType } from "@/schemas";
import nodemailer from "nodemailer";

type courseCreateType = {
  status: "success" | "error";
  message: string;
};

export const sendGmail = async (
  field: contactSchemasType
): Promise<courseCreateType> => {
  try {
    const { email, message, nama } = field;

    if (!email || !message || !nama) {
      return {
        status: "error",
        message: "form tidak boleh ada yg kosong",
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website PPI Bartın" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Pesan baru dari ${nama}`,
      text: `
Dari: ${nama}
Email: ${email}

Pesan:
${message}
      `,
    });

    return {
      status: "success",
      message: "Email Berhasil terkirim",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "server error",
    };
  }
};
