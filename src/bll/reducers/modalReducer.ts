const initialState = {
  openRegisterModal: false,
  opeEnterModal: false,
};

type InitialStateType = typeof initialState;
export const modalReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: ModalReducerType,
): InitialStateType => {
  switch (action.type) {
    case 'MODAL/SET-OPEN-REGISTER-REDUCER':
      return { ...state, openRegisterModal: action.open };
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const setOpenRegisterModalAC = (open: boolean) =>
  ({ type: 'MODAL/SET-OPEN-REGISTER-REDUCER', open } as const);

// TYPES
type SetOpenRegisterModalAT = ReturnType<typeof setOpenRegisterModalAC>;
type ModalReducerType = SetOpenRegisterModalAT;
