const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export const fetchCountryFlag = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Expected an array of countries");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw err;
  }
};
