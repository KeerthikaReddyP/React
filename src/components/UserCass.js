import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name,location } = this.props;
    return (
      <div className="user-div">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : IDHELSDJ</h4>
      </div>
    );
  }
}

export default UserClass;
