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
import Footer from '../components/Footer';
import RegisterBand from '../pages/RegisterBand';
import EditProfile from '../pages/EditProfile';
import EditBand from '../pages/EditBand';
import ImageUpload from '../pages/ImageUpload'
import '../css/FooterContainer.css'

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return (
        <>
            <div className="page-container">
                <div className="content-wrap">
                    <Router history={history}>
                        <NavBar />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/Discover" exact component={Discover} />
                            <PrivateRoute path="/registerBand" exact component={RegisterBand} />
                            <PrivateRoute path="/dashboard" exact component={UserDashboard} />
                            <PrivateRoute path="/editProfile" exact component={EditProfile} />
                            <PrivateRoute path="/editBand" exact component={EditBand} />
                            <PrivateRoute path="/imageUpload" exact component={ImageUpload} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App;