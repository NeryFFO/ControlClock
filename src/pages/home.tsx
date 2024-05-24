import { Button, Container, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../themeMaterial";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

    const schema = Yup.object().shape({
        password: Yup.string().min(7, "a senha precisa ter pelo menos 7 caracteres").required("Campo obrigatório")
    })
     
    const Form = () =>{
        const {register, handleSubmit, formState} = useForm({
            mode:"all",
            resolver: yupResolver(schema)
        });

        const {errors} = formState;
        console.log("errors:", errors);

        const navigate = useNavigate();

        const onSubmitButton = (data:any) => {
            console.log("DATA:", data);
            navigate("/login");
        }
      
        return (
          <form onSubmit={handleSubmit(onSubmitButton)}>
              <Container>
              <h2>Senha</h2>
              <strong>Digite sua senha</strong>
              <input
              {...register("password")}
                type="password"
                placeholder="Senha"
              />
              {errors.password && <p>{errors.password.message}</p>}
              <button type="submit">
                Entrar
              </button>
             
            </Container>
          </form>
         
        );
      };

export default Form;