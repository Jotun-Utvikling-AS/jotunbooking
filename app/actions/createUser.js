"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!email || !name || !password) {
    return {
      error: "Vennligst fyll inn alle feltene",
    };
  }

  if (password.length < 8) {
    return {
      error: "Passord må være minimum 8 tegn langt",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passordene er ikke like",
    };
  }

  // Get account instance
  const { account } = await createAdminClient();

  try {
    // Create user
    await account.create(ID.unique(), email, password, name);

    return {
      success: true,
    };
  } catch (error) {
    console.log("Registration Error: ", error);
    return {
      error: "Kunne ikke registrere bruker",
    };
  }
}

export default createUser;
