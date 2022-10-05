import { AxiosResponse } from 'axios';

import { instance } from '../config';

export const registrationAPI = {
  setUser(authParams: AuthParamsType) {
    return instance.post<AuthParamsType, AxiosResponse<ResponseType>>(
      `api/v1/auth/registration/customer/new`,
      authParams,
    );
  },
};

export type AuthParamsType = {
  email: string;
  nickname?: string;
  password: string;
  phone?: string;
};
export type ResponseType = {
  user: {
    id: number;
    email: string;
    nickname: string;
    phone: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};
