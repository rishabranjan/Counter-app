import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = count => {
    console.log(count);
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = { ...count };
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  reset = count => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = { ...count };
    counters[index].value = 0;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(count => {
      count.value = 0;
      return count;
    });
    this.setState({ counters });
  };

  handleDelete = value => {
    // console.log("handleDelete is clicked", value);
    const counters = this.state.counters.filter(count => count.id !== value);
    this.setState({ counters });
    // console.log(this.counters);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-danger">
          RESET
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            reset={this.reset}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
