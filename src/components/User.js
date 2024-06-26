import { useState } from "react";

const User = ({name,location}) => {
    const [count]=useState(0);
    const [count1]=useState(1);
  return (
    <div className="user-div">
      <h2>Name : {name}</h2>
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : IDHELSDJ</h4>
    </div>
  );
};

export default User;
