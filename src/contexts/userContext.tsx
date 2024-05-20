// import { createContext, useState } from "react";

// type UserType = {
//     name: string;
//     lastName: string;
//     email: string;
// };

// type PropsUserContext = {
//     state: UserType;
//     setState: React.Dispatch<React.SetStateAction<UserType>>;

// }

// const defaultValue = {
//     state: {
//         name:"",
//         lastName:"",
//         email: "",
//     },
//     setState: () =>{},
// };

// const UserContext = createContext<PropsUserContext>(defaultValue);

// const UserContextProvider = ({children} : {children : React.ReactNode} ) =>{
//     const [state, setState] = useState(defaultValue.state);
//     return (
//     <UserContext.Provider value={{
//         state,
//         setState,
//         }}> 
//         {children}
//         </UserContext.Provider>);
// } 

// export {UserContextProvider};
// export default UserContext;

import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário
type UserType = {
  name: string;
  lastName: string;
  email: string;
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {}, //função de inicialização
};

//criando nosso contexto UserContext
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const UserContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;