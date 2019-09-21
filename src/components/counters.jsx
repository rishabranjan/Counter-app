import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleReset} className="btn btn-danger">
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            reset={this.props.reset}
            handleDelete={this.props.handleDelete}
            handleIncrement={this.props.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
