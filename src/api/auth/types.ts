export type LoginAdminResponseBodyType = {
  token: string;
};

export type VerifyTokenResponseBodyType = {
  message: string;
  payload: {
    username: string;
    email: string;
    exp: number;
    iat: number;
  };
};
