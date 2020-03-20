// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import "./navigation.scss";
import { Resources } from "resources"
import * as React from "react";
import { withRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";

interface INavigationComponentState {
    route: string
}

interface INavigationComponentProps {
    history: any;
}

class NavigationComponent extends React.Component<INavigationComponentProps, INavigationComponentState> {

    constructor(props: INavigationComponentProps) {
        super(props);
        this.state = {
            route : props.history.location.pathname
        }
    }

    componentWillUpdate(nextProps){
        if(nextProps.history.location.pathname != this.state.route)
        {
            this.setState({route: nextProps.history.location.pathname});
        }
    }

    renderBreadCrumbs = () => {
        var routes : string[] = this.state.route.split("/").filter(route => route);
        var crumbs = [];
        var base = "/";

        routes.forEach((route, idx, arr) => {
            var routeName = Resources.Routes.RouteNames[route];
            console.log(route);
            if(idx === arr.length - 1)
            {
                crumbs.push(<li className="breadcrumb-item active" aria-current="page">{routeName}</li>)
            }
            else 
            {
                crumbs.push(<li className="breadcrumb-item"><Link to={base + route}>{routeName}</Link></li>)
            }
            base = base + "/" + route;
        });
        
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {crumbs}
                </ol>
            </nav>
        )
    };

    render() {
        return (
            <div className="navigation">
                {this.renderBreadCrumbs()}
            </div>
        )
    }
}

export const Navigation = withRouter(connect(
    (state: any) => {
        return ({
            isAuthed: state.isAuthed, 
            isFetching: state.isFetching, 
            error: state.error 
        });
    }
)(NavigationComponent));