import React,{Component} from 'react'
class Life1 extends Component{
    constructor(props){
        super(props);
        this.state={favouritecolor:"red"};
            }
            render(){
                return(
                    <div>
                        <h1>my favourite color is {this.state.favouritecolor}</h1>
                    </div>
                )
            }
            static getDerivedStateFromProps(props,state){
                return{favouritecolor:props.favcol}
                
            }
}export default Life1;
