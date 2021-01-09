import React from "react";
import ReactDOM from "react-dom";
const Hello = (props) => {
  const { name, age } = props;
  return [
    <p>
      Hello {name}, you are {age} years old
    </p>,
    <p>Goodbye</p>,
  ];
};
const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={age} />
      <Hello name={name} age={25 + 10} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
