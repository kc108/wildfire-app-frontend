import React from "react";
import { useEffect, useState } from "react";
import SearchesContainer from "../components/SearchesContainer";

// import { OpenStreetMapProvider } from "leaflet-geosearch";

const Searches = (props) => {
  const [searches, setSearches] = useState([]);

  // state for searchForm
  const [searchForm, setSearchForm] = useState(false);

  const handleClick = () => {
    setSearchForm(true);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    const data = {
      search: {
        city: event.target.querySelector("#city").value,
      },
    };
    fetch("https://wildfire-api.herokuapp.com/searches", {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setSearches([...searches, json.search]);
        setSearchForm(false);
      });
  };

  useEffect(() => {
    fetch("https://wildfire-api.herokuapp.com/searches", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((searches) => {
        setSearches(searches);
      });
  }, []);

  const handleDeletedSearch = (searchId) => {
    const filteredSearches = searches.filter(
      (search) => search.id !== searchId
    );
    setSearches(filteredSearches);
  };

  return (
    <div>
      <h1>Wind Event</h1>
      <div id="windy"></div>
      <SearchesContainer
        searches={searches}
        handleDeletedSearch={handleDeletedSearch}
      />
      <button onClick={handleClick}>Search Location</button>
      {searchForm && (
        <form onSubmit={handleCreate}>
          <input type="text" id="city" name="city" />
          <input type="submit" value="Save Location" />
        </form>
      )}
    </div>
  );
};

export default Searches;
