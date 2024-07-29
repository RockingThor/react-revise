export function validateFormInputs(name, email, password, isSignup) {
  const emailStatus = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const passwordStatus =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (isSignup) {
    if (!name) {
      return {
        error: true,
        message: "Name cannot be empty",
      };
    }
  }
  return {
    error: emailStatus && passwordStatus ? false : true,
    message:
      emailStatus && passwordStatus
        ? ""
        : emailStatus
        ? "Password is invalid"
        : "Email is invalid",
  };
}
