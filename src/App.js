import React from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
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
      <div className="App">
        <Navbar length={this.state.counters} />
        <div className="counters">
          <Counters
            counters={this.state.counters}
            handleIncrement={this.handleIncrement}
            handleDelete={this.handleDelete}
            reset={this.reset}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
