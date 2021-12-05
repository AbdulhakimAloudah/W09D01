import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("61a48b0a37a7d99b5caacac2");

  const [logEmail, setlogEmail] = useState("");
  const [logpassword, setlogpassword] = useState("");

  //signUp
  const register = async () => {
    const result = await axios.post("http://localhost:5000/user/create", {
      email: email,
      password: password,
      role,
    });
  };

  //logIn
  const logIn = async () => {
    const result = await axios.post("http://localhost:5000/task/logIn", {
      email: logEmail,
      password: logpassword,
    });
  };

  return (
    <div className="App">
      <input
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="text"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={register}>sign-up</button>
      <br />
      <input placeholder="email" type="email" />
      <input placeholder="password" type="password" />
      <button>log-In</button>
    </div>
  );
}

export default App;
