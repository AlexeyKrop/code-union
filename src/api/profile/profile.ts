import { instance } from '../config';

export const ProfileAPI = {
  setProfile() {
    return instance.get(`api/v1/auth/login/profile`);
  },
};
