import React from "react";
import UserClass from "./UserCass";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About us</h1>
                <h3>We are from namaste React webseries</h3>
                <UserClass name={"Keerthika "} location={"Delhi"}/>
            </div>
        )
    }
}

export default About;