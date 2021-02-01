import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = ({ data }) => {
  const [persons, setPersons] = useState(data);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName))
      alert(`${newName} is already added to phone book`);
    else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleFilterNameChange = (event) => setFilterName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const numbersToShow = filterName
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleFilterNameChange} value={filterName} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <Persons persons={numbersToShow} />
    </div>
  );
};

export default App;
