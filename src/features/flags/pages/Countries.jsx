import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchCountryFlag } from "../server/Fetchers";

const Countries = () => {
  const [Country, setCountry] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetchCountryFlag();
      setCountry(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(Country);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {Country.length < 1 ? <>Loading.....</> : null}
      {Country.map((Countries, index) => {
        return <Card Countries={Countries} key={index} />;
      })}
    </div>
  );
};

export default Countries;
