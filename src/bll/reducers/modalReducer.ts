const initialState = {
  openRegisterModal: false,
  openLoginModal: false,
};

type InitialStateType = typeof initialState;
export const modalReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: ModalReducerType,
): InitialStateType => {
  switch (action.type) {
    case 'MODAL/SET-OPEN-REGISTER-MODAL':
      return { ...state, openRegisterModal: action.open };
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const setOpenRegisterModalAC = (open: boolean) =>
  ({ type: 'MODAL/SET-OPEN-REGISTER-MODAL', open } as const);
export const setOpenLoginModalAC = (open: boolean) =>
  ({ type: 'MODAL/SET-OPEN-LOGIN-MODAL', open } as const);

// TYPES
type SetOpenRegisterModalAT = ReturnType<typeof setOpenRegisterModalAC>;
type SetOpenLoginModalAT = ReturnType<typeof setOpenLoginModalAC>;
type ModalReducerType = SetOpenRegisterModalAT | SetOpenLoginModalAT;
