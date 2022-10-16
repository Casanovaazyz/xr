import React from "react";

class Counter2 extends React.Component {
  constructor(props) {
    console.log("constructor()");
    super();
    this.state = {
      counter: 0
    };
  }

  //partie compoenent life cycle
  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentWillUnmount() {
    console.log("Component will unMount() you killed me ");
    clearInterval(this.state.intervall);
  }
  //prtie function du compteur
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };

  reset = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    console.log("render()");
    return (
      <div>
        <h1>COUNTER (Statful Component) testy </h1>
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button className="increment-btn " onClick={this.increment}>
          +
        </button>
        <br />
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
        <p>{this.state.timer}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Counter2;
