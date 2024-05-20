import { createTheme } from "@mui/material";
import { green, purple, yellow } from "@mui/material/colors";

const defaultTheme = createTheme();
export const theme = createTheme({
    palette:{
        primary:{
            main: yellow[700],
            dark:yellow[800],
            light:yellow[500],
            contrastText: '#ffffff',
        },
        secondary:{
            main: purple[400],
            dark: purple[600],
            light: purple[200],
            contrastText: '#ffffff',
        },
    }
});