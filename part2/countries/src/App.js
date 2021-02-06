import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCountries from "./components/DisplayCountries";

const App = (props) => {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    let a = countries.filter((country) => {
      if (country.name.toLowerCase().includes(search.toLocaleLowerCase()))
        return true;
      return false;
    });
    console.log("a", a);
    setShowCountries(a);
  }, [search, countries]);

  useEffect(() => {}, [showCountries]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCountry(null);
  };

  const handleShow = (e) => {
    let tmp = showCountries.filter((country) => country.alpha3Code === e);
    setCountry(tmp[0]);
  };

  return (
    <div>
      <h1>
        Find countries <input onChange={handleChange} value={search}></input>
      </h1>

      <DisplayCountries
        country={country}
        countries={showCountries}
        onShow={handleShow}
      />
    </div>
  );
};

export default App;
