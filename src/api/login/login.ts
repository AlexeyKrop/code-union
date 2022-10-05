import { AxiosResponse } from 'axios';

import { instance } from '../config';

export const loginAPI = {
  login(loginParams: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<ResponseType>>(
      `api/v1/auth/login`,
      loginParams,
    );
  },
};
export type LoginParamsType = {
  email: string;
  password: string;
};
export type ResponseType = {
  user: {
    id: number;
    email: string;
    nickname: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};
