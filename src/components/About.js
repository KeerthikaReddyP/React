import React from "react";
import UserClass from "./UserCass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About us</h1>
        <h3>We are from namaste React webseries</h3>
        <div>
            <UserContext.Consumer>
                {({loggedInUser})=><div>LoggedInUser : {loggedInUser}</div>}
            </UserContext.Consumer>
        </div>
        <UserClass name={"Keerthika "} location={"Delhi"} />
      </div>
    );
  }
}

export default About;
