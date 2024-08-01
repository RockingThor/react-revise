import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormInputs } from "../utils/formValidation";
import { BACKEND_URL } from "../constants/url";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = async () => {
    console.log(email.current);
    const { error, status } = validateFormInputs(
      email.current.value,
      password.current.value,
      name.current.value,
      isSignUp
    );
    if (error) {
      setError(true);
      setErrorMessage(status.message);
      return;
    }
    if (isSignUp) {
      const data = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      const response = await fetch(`${BACKEND_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } else {
      const data = {
        email: email.current.value,
        password: password.current.value,
      };
      const response = await fetch(`${BACKEND_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        {/* <img
          src={LOGIN_PAGE_BG_IMAGE}
          alt="Background"
          className="h-screen w-full bg-cover bg-center bg-no-repeat"
        /> */}
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white flex flex-col rounded-md bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl pb-10">
          {isSignUp ? "Sign Up" : "Login"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2 m-2 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 rounded-md"
        />
        <button
          className="p-2 m-4 bg-red-700 rounded-xl justify-center"
          onClick={handleSubmit}
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>
        {error && <p className="font-bold text-red-600">{errorMessage}</p>}
        <p className="text- center pt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login here" : "Sign up here"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
