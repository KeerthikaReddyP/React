import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dimmy",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child componentDidMount");
    const data = await fetch("https://api.github.com/users/KeerthikaReddyP");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }

  componentDidUpdate(){
    console.log("Child componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.state.userInfo;
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
