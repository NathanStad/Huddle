import fetchAPI from "./fetchAPI";

export default async () => {
  const player = await fetchAPI("GET", `players/${localStorage.getItem("id")}`);
  return player.role === "admin";
};
