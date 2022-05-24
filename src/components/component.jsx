import React, { Component } from "react";
import '../styles/buttonStyle.css'

class WelcomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonID: 0 };
  }

  // componentDidMount() {}
  // componentWillUnmount() {}
  handleClick(id) {
    this.setState({ buttonID: id });
    console.log(id);
  }

  buttonInput = [
    {
      name: "Button1",
      desc: "Stuff1",
    },
    {
      name: "Button2",
      desc: "Stuff2",
    },
    {
      name: "Button3",
      desc: "Stuff3",
    },
  ];

  render() {
    return (
      <div>
        <h1>This is a <code>Class Component</code>, {this.props.name}</h1>
        <div>
          {this.buttonInput.map((btn, i) => (
            <button
              key={i}
              name={btn.name}
              onClick={() => this.handleClick(i)}
              // ternary operator
              className={i === this.state.buttonID ? "featureBtn active" : "featureBtn"}
            >
              <h1>{btn.name}</h1>
              <p>{btn.desc}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default WelcomeClass;
