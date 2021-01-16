import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0));

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const eventAnecdote = () => {
    const anecdote = getRandomInt(anecdotes.length);

    setSelected(anecdote);
  };

  const eventVote = () => {
    const cpy = [...votes];
    cpy[selected] += 1;
    setVote(cpy);
  };

  const findMax = (max, current) => {
    if (current > max) return current;
    return max;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={eventAnecdote} text="next anecdote" />
      <Button onClick={eventVote} text="Vote" />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[votes.indexOf(votes.reduce(findMax))]}</p>
      <p>has {votes[votes.indexOf(votes.reduce(findMax))]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
