import { AdminLoginFormType } from "@/utils/schemas/adminLoginSchema";
import { api, endpoints } from "..";
import {
  LoginAdminResponseBodyType,
  VerifyTokenResponseBodyType,
} from "./types";

const authenticationEndpoints = endpoints.authentication;

// This function is used in on the API routes of Next JS
async function loginAdmin__next({
  password,
  username,
}: AdminLoginFormType): Promise<LoginAdminResponseBodyType | undefined> {
  if (typeof document !== "undefined") {
    throw new Error("This function should only be used on Next JS API routes");
  }
  try {
    const response = await api.post<LoginAdminResponseBodyType>(
      authenticationEndpoints.loginAdmin,
      {
        password,
        username,
      }
    );
    return response.data;
  } catch (error) {
    return undefined;
  }
}

async function verifyToken__next(token: string) {
  if (typeof document !== "undefined") {
    throw new Error("This function should only be used on Next JS API routes");
  }
  try {
    // Axios does not work in here
    const responseData: VerifyTokenResponseBodyType = await fetch(
      authenticationEndpoints.verifyToken,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => res.json());
    if (!responseData.payload) throw new Error("Invalid token");
    return responseData.payload;
  } catch (error) {
    console.log(error);

    return undefined;
  }
}

const AuthenticationAPI = {
  loginAdmin: loginAdmin__next,
  verifyToken: verifyToken__next,
};

export default AuthenticationAPI;
