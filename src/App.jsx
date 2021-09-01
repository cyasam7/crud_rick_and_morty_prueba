import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Agregar from "./pages/Agregar";
import Editar from "./pages/Editar";
import Home from "./pages/Home";
import Listado from "./pages/Listado";

import { useDispatch } from "react-redux";
import * as Actions from "./redux/actions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getInitialCharacters());
        //dispatch(Actions.listCharacters());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Listado} />
                    <Route exact path="/creados" component={Home} />
                    <Route exact path="/agregar" component={Agregar} />
                    <Route exact path="/editar/:id" component={Editar} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
