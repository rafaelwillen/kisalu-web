import { AdminLoginFormType } from "@/utils/schemas/adminLoginSchema";
import { AxiosError } from "axios";
import { endpoints, nextServerAPI } from ".";

const nextAPIEndpoints = endpoints.nextAPI;

async function loginAdmin(formData: AdminLoginFormType) {
  try {
    await nextServerAPI.post(nextAPIEndpoints.loginAdmin, formData);
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      switch (error.status) {
        case 401:
        case 400:
          throw new Error("Usuário ou senha inválidos");
        default:
          throw new Error("Ocorreu um erro ao fazer o login. Tente novamente.");
      }
    }
  }
}

const NextAPI = {
  loginAdmin,
};
export default NextAPI;
