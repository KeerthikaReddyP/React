import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0,
        count2:2,
    };
    console.log("Child Constructor");
  }
  
  componentDidMount(){
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child Render");
    const { name,location } = this.props;
    const {count,count2}=this.state;

    return (
      <div className="user-div">
        <h2>Name : {name}</h2>
        <h2>Count : {count}</h2>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            });
        }}>Count increase</button>
        <h3>Location : {location}</h3>
        <h4>Contact : IDHELSDJ</h4>
      </div>
    );
  }
}

export default UserClass;
