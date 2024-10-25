"use server";

import { signIn } from "@/auth";
import { mongoDBConnection } from "@/database/mongoDBConnection";

export const doCredentialSignin = async (email, password) => {
  try {
    await mongoDBConnection();
    const response = signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
