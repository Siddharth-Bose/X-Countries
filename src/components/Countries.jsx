import React, { useEffect, useState } from "react";

// locally scope styles for the Countries component
import styles from "./Countries.module.css";

// Backend API Endpoint
const apiEndpoint = "https://xcountries-backend.azurewebsites.net/all";

// Card Component to render a single card

// Params : 
//   flag: Images url for the flag
//   name: The name of the country

// Return Type: JSX
function Card({ flag, name }) {
  return (
    <div className={styles.cardContainer}>
      <img src={flag} alt={name} height={"80px"} width={"120px"} />
      <h2 className={styles.textCenter}>{name}</h2>
    </div>
  );
}

// Countries Component: To render the list of country flags recieved from the API
// Returns Type: JSX
function Countries() {
  
  // State variable and state handler method to store the countries array recieved as a reponse from the backend
  const [countries, setCountries] = useState([]);

  // A simple useEffect which runs the function fetchCountries, which fires a GET request to backend endpoint, 
  // and stores the array recieved in the countries state variable
  useEffect(() => {
    // Function to fetch countries from the backend endpoint and set it to the countries state variable
    // Return Type: void
    async function fetchCountries() {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <div
      className={styles.countriesWrapper}
    >
      {countries.map((country, idx) => {
        return (
          <Card
            // Example Key: "India|1"
            key={`${country.name}|${idx}`}
            flag={country.flag}
            name={country.name}
          />
        );
      })}
    </div>
  );
}

export default Countries;
