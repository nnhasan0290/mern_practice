import React from "react";

const ContextOrigin = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { value: "data changed" };
    default:
      return state;
  }
};

const ContextReducer = ({ children }) => {
  const initialState = { value: "data" };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContextOrigin.Provider value={{ state, dispatch }}>
      {children}
    </ContextOrigin.Provider>
  );
};

export default ContextReducer;

export const ContextConsumer = () => React.useContext(ContextOrigin);
