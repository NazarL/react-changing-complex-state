import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  // event - synthetic event created by React
  function handleChange(event) {
    const { value, name } = event.target;
    //above replaces the below:
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    //event.target... - never try to access it explicitly inside such method
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
