import React, {createContext, useReducer} from 'react';
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const GlobaleContext = createContext();
const initialState = {
  tab: {
    selectedTab: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        ...state.tab,

        tab: {
          selectedTab: action.payload,
        },
      };
    default:
      return state;
  }
}

export function GlobaleProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {state, dispatch};
  return (
    <GlobaleContext.Provider value={value}>
      {props.children}
    </GlobaleContext.Provider>
  );
}
