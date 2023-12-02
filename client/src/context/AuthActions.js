export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESSFUL",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILED",
  payload: error,
});
