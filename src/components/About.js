import User from "./User";
import UserClass from "./UserCass";

const About=()=>{
    return (
        <div>
            <h1>About us</h1>
            <h3>We are from namaste React webseries</h3>
            <User name={"Keerthika functional"} location={"Delhi"}/>
            <UserClass name={"Keerthika class"} location={"Delhi"}/>
        </div>
    )
}

export default About;