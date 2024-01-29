import React,{Component} from 'react'
class Up4 extends Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
       }

 componentDidMount(){
    setTimeout (()=>{
        this.setState({favouritecolor:"yellow"});
    },4000);
 }

  componentDidUpdate(){
    document.getElementById("div2").innerHTML=this.state.favouritecolor;

  }

  render(){
    return(
        <div>
            <h1>my favourite color is {this.state.favouritecolor}</h1>
            <div id="div2"></div>
        </div>
    )
  }
    }
export default Up4;