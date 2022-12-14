export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
const initialState = {
  status: 'loading' as RequestStatusType,
  error: null as null | string,
  initialized: false,
  isLoad: false,
};

type InitialStateType = typeof initialState;

export const appReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: AppReducerType,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status };
    case 'APP/SET-ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'APP/SET-APP-INITIAL':
      return {
        ...state,
        initialized: action.value,
      };
    case 'APP/SET-APP-LOAD':
      return {
        ...state,
        isLoad: action.value,
      };
    default:
      return state;
  }
};
// ACTIONS CREATOR
export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: 'APP/SET-STATUS', status } as const);
export const setAppErrorAC = (error: string | null) =>
  ({ type: 'APP/SET-ERROR', error } as const);
export const setAppInitialAC = (value: boolean) =>
  ({ type: 'APP/SET-APP-INITIAL', value } as const);
export const setAppLoadAC = (value: boolean) =>
  ({ type: 'APP/SET-APP-LOAD', value } as const);

// TYPES
type SetAppStatusAT = ReturnType<typeof setAppStatusAC>;
type SetAppErrorAT = ReturnType<typeof setAppErrorAC>;
type SetAppInitialAT = ReturnType<typeof setAppInitialAC>;
type SetAppLoadAT = ReturnType<typeof setAppLoadAC>;
type AppReducerType = SetAppStatusAT | SetAppErrorAT | SetAppInitialAT | SetAppLoadAT;
