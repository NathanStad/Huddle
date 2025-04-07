const apiUrl = import.meta.env.VITE_API_URL;

export default async function fetchAPI(
  method,
  endpoint,
  data,
  isFormData = false
) {
  const token = localStorage.getItem("authToken") || "";

  const headers = isFormData
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

  try {
    const res = await fetch(`${apiUrl}/${endpoint}`, {
      method: method,
      headers: headers,
      body: data ? (isFormData ? data : JSON.stringify(data)) : null, // Only send body if data exists
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({})); // Gracefully handle JSON parse errors
      const errorMessage =
        errorData.message || `Error: ${res.status} ${res.statusText}`;
      throw new Error(errorMessage);
    }

    return await res.json(); // Parse and return JSON response
  } catch (error) {
    console.error(
      `Error making ${method} request to ${endpoint}:`,
      error.message
    );
    throw error; // Re-throw the error to be handled in the calling function
  }
}
