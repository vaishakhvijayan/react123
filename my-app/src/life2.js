import React, { Component } from "react"
class Life2 extends Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setstate=({favouritecolor:"blue"});
        },5000);
    }
    render(){
        return(
            <div>
                <h1>my favouritecolor is {this.state.favouritecolor}</h1>
            </div>
        )
    }
}
export default Life2