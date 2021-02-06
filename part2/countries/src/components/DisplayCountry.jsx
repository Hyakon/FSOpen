import React from "react";

const DisplayCountry = ({ country }) => {
  return (
    <>
      {country && (
        <div>
          <h1>{country.name}</h1>
          <p>Capital : {country.capital}</p>
          <p>Population : {country.population}</p>
          <ul>
            {country.languages.map((language) => {
              return <li key={language.iso639_2}>{language.name}</li>;
            })}
          </ul>
          <img
            src={country.flag}
            alt={country.name + " flag"}
            style={{ width: 100 }}
          />
        </div>
      )}
    </>
  );
};

export default DisplayCountry;
