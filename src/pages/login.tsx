

import { useContext, useState } from "react";

//importando o contexto UserContext
import UserContext from "../contexts/userContext";

import { Container} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChildrenOne: React.FC = () => {
  //estado para manipular o novo nome
  const { setState, state } = useContext(UserContext);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  
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
      <button type="button" onClick={()=>navigate("/")}>
        Home
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