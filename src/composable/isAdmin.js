import fetchAPI from "./fetchAPI";

export default async () => {
  const user = await fetchAPI("GET", `users/${localStorage.getItem("id")}`);
  return user.role === "admin";
};
