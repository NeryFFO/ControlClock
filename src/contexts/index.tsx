import React from "react";

import { UserContextProvider } from "./userContext";

const GlobalContext = ({ children } : {children: React.ReactNode} ) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>;
    </>
  );
};

export default GlobalContext;