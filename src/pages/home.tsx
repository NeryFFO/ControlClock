import { Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../themeMaterial";

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <p>EU sou a tela de Home</p>
        <ThemeProvider theme={theme}>
        <Button 
        type="button"
        color="secondary"
        variant="contained"
        onClick={()=>navigate("/")}>
         Ir para tela de login   
        </Button>
        </ThemeProvider>
        
        
        </>
    )

}
export default Home;