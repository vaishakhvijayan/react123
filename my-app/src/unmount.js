import React,{Component} from 'react'
class Unmount extends Component{
    constructor(props){
        super(props);
        this.state={show:true};
    }

    delheader= () => {
        this.setState({show:false});
    }
    render(){
        let header
        if(this.state.show){
            header=<Child/>;
        }

        return(
            <div>
                {header}
                <button type="button" onClick={this.delheader}>delete</button>
            </div>
        )
    }
}
class Child extends React.Component{
    componentWillUnmount(){
        alert("the component header is about to be unmounted");
    }
    render(){
        return(
            <h1>hello world</h1>
        );
    }
}
export default Unmount;