import React from "react";
import DisplayCountry from "./DisplayCountry";

const DisplayCountries = ({ country, countries, onShow }) => {
  return (
    <div>
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}

      {countries.length > 1 && countries.length < 10 && (
        <ul>
          {countries.map((country) => {
            return (
              <li key={country.alpha3Code}>
                {country.name}
                <button onClick={() => onShow(country.alpha3Code)}>Show</button>
              </li>
            );
          })}
        </ul>
      )}

      <DisplayCountry country={countries.length > 1 ? country : countries[0]} />
    </div>
  );
};

export default DisplayCountries;
