import { CircularProgress} from "@mui/material";
import { Suspense } from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/login";

function PagesRoutes(){
    return(
        <BrowserRouter>
            <Suspense fallback={<CircularProgress/>}>
                <Switch>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/home"} element={<Home/>}/>

                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
export default PagesRoutes;