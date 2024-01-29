import React, { Component } from "react";
class Abc1 extends Component{
    render(){
        const Mystyle=
        { color:"red",
          backgroundColor:"skyblue",
          padding:"2px",
          textAlign:"center"
         }
        return(
            <div>
                <h1 style={Mystyle}>To My Page</h1>

            </div>
        )
    }
}
export default Abc1