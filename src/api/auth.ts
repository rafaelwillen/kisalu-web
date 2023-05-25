import { AdminLoginFormType } from "@/utils/schemas/adminLoginSchema";
import api from ".";

type LoginAdminResponseBodyType = {
  token: string;
};

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
      "/admin/login",
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

const AuthenticationAPI = {
  loginAdmin: loginAdmin__next,
};

export default AuthenticationAPI;
