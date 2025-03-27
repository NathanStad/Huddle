export default async function getCountryFromIP() {
  try {
    const req = await fetch("https://ipinfo.io/json");
    const res = await req.json();
    return res.country;
  } catch (error) {
    console.error(error);
  }
}
