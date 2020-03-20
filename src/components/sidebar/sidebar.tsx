import { Resources } from "resources"
import * as React from "react";
import Sidebar from "react-sidebar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../../redux/modules/users/users";

interface ISidebarComponentState {
}

const initialState: ISidebarComponentState = {
};

interface ISidebarComponentProps {
    history: any;
    isAuthed: boolean;
    isFetching: boolean;
    error: string;
    unauthUser: () => void;
    fetchAndHandleAuthentication: (history: any) => void;
}

class SidebarComponent extends React.Component<ISidebarComponentProps, ISidebarComponentState> {
    static propTypes = {
        isAuthed: PropTypes.bool.isRequired,
        isFetching: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired,
        unauthUser: PropTypes.func.isRequired,
        fetchAndHandleAuthentication: PropTypes.func.isRequired
    }

    constructor(props: ISidebarComponentProps) {
        super(props);
        this.state = initialState;
    }

    handleAuth = () => {
        this.props.fetchAndHandleAuthentication(this.props.history);
    }

    handleUnauth = () => {
        this.props.unauthUser();
        this.props.history.push("/");
    }

    renderSidebar = () => {
        return (
            <div>
                { this.props.isAuthed ? 
                    (
                        <ul className="list-group">
                            <li className="list-group-item">Brand</li>
                            <li className="list-group-item"><Link to="/home">{Resources.Navigation.Home}</Link></li>
                            <li className="list-group-item"><Link to="/dashboard">{Resources.Navigation.Dashboard}</Link></li>
                            <li className="list-group-item"><Link to="/settings">{Resources.Navigation.Settings}</Link></li>
                            <li className="list-group-item"><a href="#" onClick={this.handleUnauth}>{Resources.Navigation.SignOut}</a></li>
                        </ul>
                    ) 
                    : 
                    (
                        <ul className="list-group">
                            <li className="list-group-item">Brand</li>
                            {!this.props.isFetching ? 
                            (
                                <li className="list-group-item"><a href="#" onClick={this.handleAuth}>{Resources.Navigation.SignIn}</a></li>
                            ) : ("")
                            }
                        </ul>
                    )
                }
            </div>
        )
    }

    render() {
        return (
            <Sidebar
                sidebar={this.renderSidebar()}
                docked={true}
                open={true}
                transitions={false}
                styles={{ sidebar: { background: "white" } }}
            >
                {this.props.children}
            </Sidebar>
        )
    }
}

export const AuthSideBar = connect(
    (state: any) => {
        return ({
            isAuthed: state.isAuthed, 
            isFetching: state.isFetching, 
            error: state.error 
        });
    },
    (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(SidebarComponent);