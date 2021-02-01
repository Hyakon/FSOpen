import React from "react";

const Total = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return <h4>Total of {total} excercises</h4>;
};

export default Total;
