import { CircularProgress} from "@mui/material";
import { Suspense } from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ChildrenOne from "./pages/login";

function PagesRoutes(){
    return(
        <BrowserRouter>
            <Suspense fallback={<CircularProgress/>}>
                <Switch>
                    <Route path={"/login"} element={<ChildrenOne/>}/>
                    <Route path={"/"} element={<Home/>}/>

                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
export default PagesRoutes;