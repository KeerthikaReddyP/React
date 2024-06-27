import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-div">
        <h2>Name : {this.props.name}</h2>
        <h3>Location : {this.props.location}</h3>
        <h4>Contact : IDHELSDJ</h4>
      </div>
    );
  }
}

export default UserClass;
