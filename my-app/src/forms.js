import React,{Component} from 'react'
class Forms extends Component{
    constructor(){
        super();
        this.state={employee:{id:'',name:'',location:'',salary:''}};
    }
    changeHandler= e =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            employee:{
                ...this.state.employee,[name]:value
            }
        });
    }
    onCreateEmployee= () =>{
        console.log(this.state.id);
    }
    render(){
        return(
            <div>
                <form>

                    <label>employee id:
                        <input type="text" name="id" value={this.state.employee.id} onChange={this.changeHandler}></input>
                    </label>
                   
                    <br/>

                    <label>employee name:
                        <input type="text" name="name" value={this.state.employee.name} onChange={this.changeHandler}></input>
                    </label>

                    <br/>

                    <label>employee location:
                        <input type="text" name="location" value={this.state.employee.location} onChange={this.changeHandler}></input>
                    </label>

                    <br/>

                    <label>employee salary:
                          <input type="text" name="salary" value={this.state.employee.salary} onChange={this.changeHandler}></input>
                    </label>

                    <br/>
                    <button onClick={this.onCreateEmployee}>submit</button>
                </form>
            </div>
        )
    }
}
export default Forms;