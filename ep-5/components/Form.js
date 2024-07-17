import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = () => {
    console.log(email, password);
  };
  const debouncedUpdate = (func, val) => {
    let timerId;
    timerId = setTimeout(() => {
      clearTimeout(timerId);
      func(val);
    }, 500);
  };
  return (
    <>
      <div className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => debouncedUpdate(setEmail, e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{errorMessage}</p>}
      </div>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Form;
