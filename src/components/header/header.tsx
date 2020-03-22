import "./header.scss";
import { Resources } from "resources"
import * as React from "react";
import { withRouter, Link } from "react-router-dom";

interface IHeaderComponentState {
    route: string
}

interface IHeaderComponentProps {
    history: any;
}

class HeaderComponent extends React.Component<IHeaderComponentProps, IHeaderComponentState> {

    constructor(props: IHeaderComponentProps) {
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
            var displayName: string;
            var disabled: boolean;

            if(route in Resources.Routes.RouteAttributes)
            {
                displayName = Resources.Routes.RouteAttributes[route].displayName;
                disabled = Resources.Routes.RouteAttributes[route].disabled;
            }
            else
            {
                displayName = route;
                disabled = false;
            }

            if(idx === arr.length - 1 || disabled)
            {
                crumbs.push(<li className="breadcrumb-item active" aria-current="page">{displayName}</li>)
            }
            else 
            {
                crumbs.push(<li className="breadcrumb-item"><Link to={base + route}>{displayName}</Link></li>)
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
            <div className="Header">
                {this.renderBreadCrumbs()}
            </div>
        )
    }
}

export const Header = withRouter(HeaderComponent);