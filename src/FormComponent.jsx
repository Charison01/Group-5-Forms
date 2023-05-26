import './FormComponents.css'
import { useState } from "react";

function FormComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [btnDisabled, setbtnDisabled] = useState(true)

  function handleChange(event, name) {
    if (name === "username") {
      setUsername(event.target.value);
      console.log(username);
    } else if (name === "password") {
      setPassword(event.target.value);
      console.log(password);
    } else return;

  }

  function handleSubmit(event, username, password){ 
    if(username === '' || password === ''){
        event.preventDefault()
    } else {
        alert(`Welcome ${username}`)

    }
}

  return (
    <form onSubmit={(event) => handleSubmit(event ,username, password)}>
      <label htmlFor="username-input">Username</label>
      <input
        type="text"
        placeholder="Username"
        id="username-input"
        value={username}
        onChange={(event) => handleChange(event, "username")}
      />
      <label htmlFor="password-input">Password</label>
      <input
        type="Password"
        placeholder="Password"
        id="password-input"
        value={password}
        onChange={(event) => handleChange(event, "password")}
      />
      <button type="submit" id="submit-button" disabled={username === '' || password === ''}>Submit</button>
    </form>
  );
}
export default FormComponent;


