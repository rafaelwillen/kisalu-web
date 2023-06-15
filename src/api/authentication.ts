import { api, endpoints } from ".";
import { AuthenticationRequestBody } from "./types/request";
import { AdminAuthenticationResponseBody } from "./types/response";

export async function authenticateAdministrator(
  body: AuthenticationRequestBody
) {
  const response = await api.post<AdminAuthenticationResponseBody>(
    endpoints.authentication.loginAdmin,
    body
  );
  return response.data;
}
