import { Gender, Role } from ".";

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

export type UserAuthenticationResponseBody = {
  isActive: boolean;
  phoneNumber?: string;
  role: Role;
  updatedAt: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  biography?: string;
  birthDate?: string;
  gender: Gender;
};
