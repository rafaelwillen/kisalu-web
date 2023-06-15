import { Role } from ".";

export type AdminAuthenticationResponseBody = {
  token: string;
  user: {
    email: string;
    role: Role;
    createdAt: string;
    firstName: string;
    lastName: string;
    avatarImageURL: string;
  };
};
