import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import Discover from '../pages/Discover';
import BandPage from '../pages/BandPage';
import Footer from '../components/Footer'


export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/Discover" exact component={Discover}/>
                    <PrivateRoute path="/BandPage" exact component={BandPage}/>
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <Route component={NoMatch} />
                </Switch>
            <Footer />
            </Router>
        </>
    )
}

export default App;
