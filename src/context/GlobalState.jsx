import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//* initiale state
const initialState = {
  transactions: [{ text: "blabla", amount: 200, id: 1 }],
};
console.log("its data" + initialState);
//*  create context

export const GlobalContext = createContext(initialState);

//* Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //* actions

  //? fill the ui
  function generateTransaction(id) {
    dispatch({
      type: "GENERATE_TRANSACTION",
    });
  }
  //? delete
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  //? add
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
