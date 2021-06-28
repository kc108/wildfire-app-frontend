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
      .then((res) => {
        console.log(res);
        return res;
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
      <div id="windy"></div>

      <div className="search-container">
        <SearchesContainer
          searches={searches}
          handleDeletedSearch={handleDeletedSearch}
        />

        <div className="search-btn">
          <button
            className=" button is-block is-small is-link is-hovered margin-userform login-signup-btn"
            onClick={handleClick}
          >
            Search Location
          </button>
        </div>
        {searchForm && (
          <div className="form-search-input">
            <form onSubmit={handleCreate}>
              <input
                type="text"
                className="searches-placeholder margin-userform"
                id="city"
                name="city"
              />
              <input
                type="submit"
                className=" button is-block is-small is-link is-hovered margin-userform login-signup-btn"
                value="Save Location"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searches;
