import { React, useState } from "react";
import "../../App.css";
import "./login_register.css";
import { Login } from "./login";
import { Resgister } from "./register";

function Parent() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Resgister onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default Parent;
