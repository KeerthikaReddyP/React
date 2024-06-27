import { useState,useEffect } from "react";

const User = ({name,location}) => {
    // const [count,setCount]=useState(0);
    useEffect(()=>{
      console.log("useEffect called");
      const timer=setInterval(()=>{console.log("Hiiiii")},1000);

      return()=>{
        clearInterval(timer);
      }
    },[]);
  return (
    <div className="user-div">
      <h2>Name : {name}</h2>
      {/* <h2>Count: {count}</h2> */}
      <h3>Location : {location}</h3>
      <h4>Contact : IDHELSDJ</h4>
    </div>
  );
};

export default User;
