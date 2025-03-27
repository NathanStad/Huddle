export default () => {
  return localStorage.getItem("authToken") !== null;
};
