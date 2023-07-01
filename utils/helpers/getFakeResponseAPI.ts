enum Response {
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}

export const getFakeResponse = () => {
  const index = Math.floor(Math.random() * Object.keys(Response).length);
  const value = Object.values(Response)[index];

  return value;
};
