import React, { useState } from "react";
import "../styles/buttonStyle.css";

function WelcomeFunction(props) {
  const [clickedId, setClickedId] = useState(0);
  // update state
  const handleClick = (id) => {
    setClickedId(id);
    console.log(id);
  };
  // buttons for map function
  const buttonInput = [
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

  return (
    <div>
      <h1>This is a <code>Function Component</code>, {props.name}</h1>
      <div>
        {buttonInput.map((btn, i) => (
          <button
            key={i}
            name={btn.name}
            onClick={() => handleClick(i)}
            // ternary operator
            className={i === clickedId ? "featureBtn active" : "featureBtn"}
          >
            <h1>{btn.name}</h1>
            <p>{btn.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WelcomeFunction;
