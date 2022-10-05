import { Dispatch } from 'redux';

import { AuthParamsType, registrationAPI } from '../../api/registration/registration';
import { saveState } from '../../utils/SessionStorage';

const initialState = {
  isRegister: false,
};

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
    default:
      return state;
  }
};
// THUNK
export const registerUserTC = (authParams: AuthParamsType) => (dispatch: Dispatch) => {
  registrationAPI.setUser(authParams).then(res => {
    dispatch(setIsLoggedInAC(true));
    saveState('refreshToken', res.data.tokens.refreshToken);
    saveState('accessToken', res.data.tokens.accessToken);
  });
};
// ACTION CREATOR
export const setIsLoggedInAC = (isRegister: boolean) =>
  ({ type: 'AUTH/SET-IS-REGISTER-IN', isRegister } as const);
// TYPE
export type InitialStateType = {
  isRegister: boolean;
};
export type SetAuthAT = ReturnType<typeof setIsLoggedInAC>;
export type AuthAT = SetAuthAT;
