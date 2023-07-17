import { React, useState } from "react";
import "./login_register.css";
import { Login } from "./login";
import { Resgister } from "./register";

function Parent() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Resgister onFormSwitch={toggleForm} />
      )}
   </>
  );
}

export default Parent;
