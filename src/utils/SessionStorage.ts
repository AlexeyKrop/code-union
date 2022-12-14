// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const saveState = <T>(key: string, state: T) => {
  const stateAsString = JSON.stringify(state);

  sessionStorage.setItem(key, stateAsString);
};

export const restoreState = <T>(key: string, defaultState: T): T => {
  let state = defaultState;
  const stateAsString = sessionStorage.getItem(key);

  if (stateAsString !== null) state = JSON.parse(stateAsString) as T;

  return state;
};
