import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (<div>
            <span className="badge badge-primary m-2">{this.formatCount()}</span>
            <button onClick={()=> this.props.handleIncrement(this.props.counter)} className="btn">Increment</button>
            <React.Fragment>
            <button onClick={()=>this.props.reset(this.props.counter)} className="btn1">Reset</button>
            <button onClick={()=>this.props.handleDelete(this.props.counter.id)} className="btn1">Delete</button>
            </React.Fragment>  
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            </div>
            );
    }

    formatCount = ()=> {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;