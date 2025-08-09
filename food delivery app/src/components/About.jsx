// import User from "./User";
import UserClass from "./Userclass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("Parent Component did mount");
    }
    render(){
    console.log("Parent Render");
    return (
        <div className="about">
           {/* <User name= {"joshi "} location={"patna"}/> */}
           <UserClass name= {"joshi rocks"} location={"haldwani"}/>
        </div>
    );
}
}

export default About;