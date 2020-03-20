import * as React from "react";
import { withRouter } from "react-router-dom";

interface IUserComponentProps {
    match: any;
}

class UserComponent extends React.Component<IUserComponentProps, {}> {

    constructor(props){
        super(props);
    }

    render() {
      let { id } = this.props.match.params;
      
      return (
        <div className="container-fluid dashboard">
          <h1>Welcome User {id}</h1>
        </div>
      )
    }
}

export const User = withRouter(UserComponent);