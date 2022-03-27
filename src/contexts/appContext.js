import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export const actionTypes = {};
const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

function addToLocalStorage(value) {
  if (typeof window !== "undefined") {
    localStorage.setItem("fem-url-shorter", JSON.stringify(value));
  }
}

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("fem-url-shorter")
      ? JSON.parse(localStorage.getItem("fem-url-shorter"))
      : [];
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialValue());

  const values = {
    state,
    dispatch,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
