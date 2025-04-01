const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export const fetchCountryFlag = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status :${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Unexpected response format");
    }
    return data;
  } catch (err) {
    console.log("Error in Fetching", err);
    throw err;
  }
};
