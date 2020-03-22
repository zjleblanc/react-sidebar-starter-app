import "./dashboard.scss";
import * as React from "react";
import { withRouter, Link } from "react-router-dom";

interface IDashboardComponentProps {
  history: any;
}

class DashboardComponent extends React.Component<IDashboardComponentProps, {}> {

    constructor(props){
      super(props);
    }

    render() {

      let {pathname} = this.props.history.location;

      return (
        <div className="container-fluid dashboard">
          <h1>Welcome to Dashboard!</h1>
          <ul className="list-group">
            <li className="list-group-item"><Link to={pathname + "/user/1"}>User 1</Link></li>
            <li className="list-group-item"><Link to={pathname + "/user/2"}>User 2</Link></li>
            <li className="list-group-item"><Link to={pathname + "/user/3"}>User 3</Link></li>
          </ul>
        </div>
      )
    }
}

export const Dashboard = withRouter(DashboardComponent);