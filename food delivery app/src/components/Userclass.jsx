import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2
        }
    }
    
    render(){
        const{name,location}=this.props;
        const{count,count2}=this.state;
        return(
            <div className="user">
                <h1>Count:{count}</h1>
                <button 
                onClick={()=>{
                    this.setState({count:this.state.count+1});
                }}>click me</button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : abhayj@07</h4>
            </div>
        );
    }
}
export default UserClass;