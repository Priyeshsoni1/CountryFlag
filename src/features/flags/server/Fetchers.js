const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export const fetchCountryFlag = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw err;
  }
};
