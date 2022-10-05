import { Dispatch } from 'redux';

import { loginAPI, LoginParamsType } from '../../api/login/login';
import { ProfileAPI } from '../../api/profile/profile';
import { AuthParamsType, registrationAPI } from '../../api/registration/registration';
import { saveState } from '../../utils/SessionStorage';

import { setAppInitialAC, setAppLoadAC } from './appReducer';
import { setOpenLoginModalAC, setOpenRegisterModalAC } from './modalReducer';

const initialState = {
  isRegister: false,
  isLogin: false,
  user: {} as UserType,
};

export type InitialStateType = typeof initialState;
export type UserType = {
  id: number;
  email: string;
  nickname: string;
};
// REDUCER
export const authReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: AuthAT,
): InitialStateType => {
  switch (action.type) {
    case 'AUTH/SET-IS-REGISTER-IN':
      return {
        ...state,
        isRegister: action.isRegister,
      };
    case 'AUTH/SET-IS-LOGIN-IN':
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case 'AUTH/SET-USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
// THUNK
export const registerUserTC = (authParams: AuthParamsType) => (dispatch: Dispatch) => {
  registrationAPI
    .setUser(authParams)
    .then(res => {
      dispatch(setIsRegisterInAC(true));
      saveState('refreshToken', res.data.tokens.refreshToken);
      saveState('accessToken', res.data.tokens.accessToken);
      dispatch(setOpenRegisterModalAC(false));
      dispatch(setOpenLoginModalAC(false));
    })
    .catch(err => console.log(err));
};

export const profileTC = () => (dispatch: Dispatch) => {
  dispatch(setAppLoadAC(true));
  ProfileAPI.setProfile()
    .then(res => {
      dispatch(setIsLoginInAC(true));
      dispatch(setAppInitialAC(true));
      dispatch(setUserAC(res.data));
    })
    .catch(err => console.log(err))
    .finally(() => dispatch(setAppLoadAC(false)));
};

export const loginTC = (loginParams: LoginParamsType) => (dispatch: Dispatch) => {
  loginAPI
    .login(loginParams)
    .then(res => {
      saveState('refreshToken', res.data.tokens.refreshToken);
      saveState('accessToken', res.data.tokens.accessToken);
      dispatch(setOpenLoginModalAC(false));
    })
    .catch(err => console.log(err));
};

// ACTION CREATOR
export const setIsRegisterInAC = (isRegister: boolean) =>
  ({ type: 'AUTH/SET-IS-REGISTER-IN', isRegister } as const);
export const setIsLoginInAC = (isLogin: boolean) =>
  ({ type: 'AUTH/SET-IS-LOGIN-IN', isLogin } as const);
export const setUserAC = (user: UserType) => ({ type: 'AUTH/SET-USER', user } as const);

// TYPE
export type SetRegisterAT = ReturnType<typeof setIsRegisterInAC>;
export type SetLoginAT = ReturnType<typeof setIsLoginInAC>;
export type SetUserAT = ReturnType<typeof setUserAC>;
export type AuthAT = SetRegisterAT | SetLoginAT | SetUserAT;
