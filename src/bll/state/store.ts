import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { modalReducer } from '../reducers/modalReducer';

const rootReducers = combineReducers({
  modal: modalReducer,
  auth: authReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
export type AppRootStateType = ReturnType<typeof rootReducers>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AnyAction
>;
