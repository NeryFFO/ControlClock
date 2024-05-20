// import Context  from "./contexts/userContext";
// import PagesRoutes from "./routes";


// function App() {

//   return (
//     <Context.Provider>
//         <PagesRoutes/>
//     </Context.Provider>
      
//   );
// };

// export default App

import React from "react";
import PagesRoutes from "./routes";

import GlobalContext from "./contexts/index";
export const App: React.FC = () => {
  return (
    <GlobalContext>
      <PagesRoutes />
    </GlobalContext>
  );
};

export default App;
