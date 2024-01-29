import React,{Component} from 'react'
class Up3 extends Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
       }

 componentDidMount(){
    setTimeout(()=>{
        this.setState({favouritecolor:"yellow"});
    },4000);
        }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        document.getElementById("div1").innerHTML="before the update the favourite color was"  +  prevstate.favouritecolor;
          }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML="after the update the favourite color is"  +  this.state.favouritecolor;
         }
    
    render(){
        return(
            <div>
                <h1>my favourite color is{this.state.favouritecolor}</h1>
           <div id="div1"></div>
           <div id="div2"></div>
            </div>
        )

    }
}
export default Up3;