import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phone book. Replace old number ?`
        )
      ) {
        personService
          .update(newName, {
            id: newName,
            name: newName,
            number: newNumber,
          })
          .then((res) =>
            setPersons(
              persons.map((person) => {
                if (person.name === res.name) return res;
                return person;
              })
            )
          );
      }
    } else {
      personService
        .create({ id: newName, name: newName, number: newNumber })
        .then((response) => {
          setPersons(persons.concat(response));
          setNewName("");
          setNewNumber("");
        });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleFilterNameChange = (event) => setFilterName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleDelete = (id) => {
    // const toDelete = persons.find((person) => (person.name = id));
    if (window.confirm("Do you really want to delete " + id + "?")) {
      personService.del(id).then((res) => {
        setPersons(persons.filter((person) => person.name !== id));
      });
    }
  };

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
      <Persons persons={numbersToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;
