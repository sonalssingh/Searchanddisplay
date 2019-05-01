import { useState, useEffect } from "react";

export function useCrimeStatistics() {
  const [loading, setLoading] = useState(true);
  const [crimes, setCrimes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCrimes()
      .then(crimes => {
        setCrimes(crimes);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    crimes,
    error: null
  };
}

function getCrimes() {
  return fetch("https://cab230.hackhouse.sh/offences")
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(res => res.offences)
    .then(function(res) {
      return res.map(offence => ({
        title: offence
      }));
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    });
}
