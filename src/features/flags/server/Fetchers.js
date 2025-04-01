const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export const fetchCountryFlag = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}`);
    if (!res.ok) {
      console.log(`HTTP error! Status :${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.log("Unexpected response format");
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw err;
  }
};
