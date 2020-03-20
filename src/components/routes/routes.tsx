// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Main, NotFound } from "components";
import { Home, Dashboard, User } from "modules";

export class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Main path="/home" component={Home} checkAuthentication={false} />
                    <Main exact path="/dashboard" component={Dashboard} checkAuthentication={true} />
                    <Main path="/dashboard/user/:id" component={User} checkAuthentication={true} />
                    <Main path="/notfound" component={NotFound} checkAuthentication={false} />
                    <Route path="*">
                        <Redirect to="/notfound" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}