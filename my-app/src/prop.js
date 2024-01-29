import React from "react";
class Prop1 extends React.Component{
     constructor(props){
        super(props);
     }
 render(){
    return(
        <div>
            <h1> my name is {this.props.name}</h1>
            </div>
    )
 }
}
export default Prop1