import {React,Component} from 'react'
class Footer extends Component{
      constructor(){
        super();
        this.state={name:"vaishakh",age:23}
      }
     render()
      {
        return(
            <div>
                <h1>my name is {this.state.name}</h1>
                <h2>my age is {this.state.age}</h2>
            </div>
        );
      }
}
export default Footer