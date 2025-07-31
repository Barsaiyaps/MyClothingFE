import React, { useState } from "react";
import "./StoreList.css";

const stores = [
  {
    id: 1,
    name: "Clothify - Mumbai",
    address: "Shop No. 101, High Street, Mumbai, MH",
    contact: "+91 98765 43210",
    city: "Mumbai",
  },
  {
    id: 2,
    name: "Clothify - Delhi",
    address: "A-15, Connaught Place, Delhi, DL",
    contact: "+91 98123 45678",
    city: "Delhi",
  },
  {
    id: 3,
    name: "Clothify - Bengaluru",
    address: "MG Road, Bengaluru, KA",
    contact: "+91 98700 12345",
    city: "Bengaluru",
  },
  {
    id: 4,
    name: "Clothify - Pune",
    address: "FC Road, Pune, MH",
    contact: "+91 99000 54321",
    city: "Pune",
  },
  {
    id: 5,
    name: "Clothify - Mumbai 2",
    address: "Link Road, Mumbai, MH",
    contact: "+91 98766 78901",
    city: "Mumbai",
  },
];

const StoreList = () => {
  const [selectedCity, setSelectedCity] = useState("All");

  const cities = ["All", ...new Set(stores.map((store) => store.city))];

  const filteredStores =
    selectedCity === "All"
      ? stores
      : stores.filter((store) => store.city === selectedCity);

  return (
    <div className="store-list-container">
      <h2 className="store-list-title">Our Store Locations</h2>

      <div className="filter-container">
        <label htmlFor="city-filter">Filter by City:</label>
        <select
          id="city-filter"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <ul className="store-list">
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <li key={store.id} className="store-card">
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <p>📞 {store.contact}</p>
            </li>
          ))
        ) : (
          <p className="no-store">No stores found in {selectedCity}</p>
        )}
      </ul>
    </div>
  );
};

export default StoreList;
