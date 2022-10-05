import { Dispatch } from 'redux';

import { loginAPI, LoginParamsType } from '../../api/login/login';
import { AuthParamsType, registrationAPI } from '../../api/registration/registration';
import { saveState } from '../../utils/SessionStorage';

import { setOpenLoginModalAC, setOpenRegisterModalAC } from './modalReducer';

const initialState = {
  isRegister: false,
  isLogin: false,
};

export type InitialStateType = typeof initialState;

// REDUCER
export const authReducer = (
  // saveState('cardsId', id);
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

// TYPE
export type SetRegisterAT = ReturnType<typeof setIsRegisterInAC>;
export type SetLoginAT = ReturnType<typeof setIsLoginInAC>;
export type AuthAT = SetRegisterAT | SetLoginAT;
