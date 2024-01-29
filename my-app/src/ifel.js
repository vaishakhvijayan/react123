import React, {Component} from 'react'
class Ifel extends Component{
    constructor(){
        super();
        this.state={name:false}
    }
    render(){
        if(this.state.name){
            return<h1>iam vaishakh</h1>
        }
        else{
            return<h1>iam not vaishakh</h1>
        }
    }
}
export default Ifel