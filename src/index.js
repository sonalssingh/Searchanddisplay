import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useCrimeStatistics } from "./api";

function Crime(props) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}

function App() {
  const { loading, crimes, error } = useCrimeStatistics();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return (
    <div className="App">
      {crimes.map(crime => (
        <Crime key={crime.title} title={crime.title} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

