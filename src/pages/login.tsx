// import { Button, Container, ThemeProvider } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { theme } from "../themeMaterial";
// import UserContext from "../contexts/userContext";
// import {useContext, useState} from "react"



// function Login(){
//     const navigate = useNavigate();
    
//     }
//     return(
//         <>
//         <ThemeProvider theme={theme}>
//         <p>EU sou a tela de Login</p>
//         <Container>
//             <strong>Eu altero o nome</strong>
//             <input 
//             type="text"
//             placeholder="Novo nome"></input>
//             <button type="button" onClick={setState({})}>
//                 Alterar
//             </button>
//             <div>
//                 <span>
//                     Nome:<strong>{StaticRange.name}</strong>
//                 </span>
//             </div>
//         </Container>
//         <Button 
//         type="button"
//         color="primary"
//         variant="contained"
//         onClick={()=>navigate("/home")}>
//         Ir para tela de Home
//         </Button>
       
//         </ThemeProvider>
        
//         </>
//     )

// }
// export default Login;

import { useContext, useState } from "react";

//importando o contexto UserContext
import UserContext from "../contexts/userContext";

import { Container} from "@mui/material";

const ChildrenOne: React.FC = () => {
  //estado para manipular o novo nome
  const { setState, state } = useContext(UserContext);
  const [name, setName] = useState<string>("");

  //função que irá submeter a alteração do novo nome
  function handleEditName() {
    setState({
      ...state,
      name: name,
    });
  }

  return (
    <Container>
      <h2>Filho 01</h2>
      <strong>Eu altero o Nome</strong>
      <input
        type="text"
        placeholder="Novo Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleEditName}>
        Alterar
      </button>
      <div>
        <span>
          nome : <strong>{state.name}</strong>
        </span>
        <span>
          Sobrenome : <strong>{state.lastName}</strong>
        </span>
        <span>
          Email : <strong>{state.email}</strong>
        </span>
      </div>
    </Container>
  );
};

export default ChildrenOne ;