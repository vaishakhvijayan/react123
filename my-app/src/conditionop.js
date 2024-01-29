import React, { Component } from "react";
class Condition extends Component{
    constructor(){
        super()
        this.state ={name:true};
    }
    render(){
        return(
            this.state.name ?(<div>welcome vaishakh</div>):
            (<div>iam not vaishakh</div>)
        )
    }
}
export default Condition;