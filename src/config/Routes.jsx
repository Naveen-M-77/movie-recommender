import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../pages/Home'; // Update this import path if needed
import Login from '../components/Login';
import PrivateRoute from '../PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={HomeScreen} />
            {/* Add other routes here */}
        </Switch>
    );
};

export default Routes;