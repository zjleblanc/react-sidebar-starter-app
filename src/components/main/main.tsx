import "./main.scss";
import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header, Footer, AuthSideBar } from "components";
import * as userActionCreators from "../../redux/modules/users/users";

interface IMainContainerProps {
  component: any;
  isAuthed: boolean;
  path?: string;
  exact?: boolean;
  checkAuthentication: boolean;
}

const MainContainer: React.StatelessComponent<IMainContainerProps> = (props) => {
  const { component: Component, ...rest } = props;

  return <Route {...rest} render={matchProps =>
    (props.checkAuthentication && !props.isAuthed) ?
      (
        <Redirect to="/" />
      ) :
      (
        <AuthSideBar history={matchProps.history} >
          <Header history={matchProps.history} />
          <Component {...matchProps} />
          <Footer />
        </AuthSideBar>
      )
  } />
}

export const Main = connect(
  (state: any) => {
    return ({ isAuthed: state.isAuthed });
  },
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(MainContainer);