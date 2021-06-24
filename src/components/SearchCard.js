import React, { useState } from "react";

const SearchCard = ({ city, id, handleDeletedSearch }) => {
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [searchCity, setSearchCity] = useState(city);

  const handleDelete = () => {
    handleDeletedSearch(id);
    fetch(`https://wildfire-api.herokuapp.com/searches/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  const handleEdit = () => {
    setToggleEditForm(!toggleEditForm);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const data = {
      search: {
        city: event.target.querySelector("#city").value,
      },
    };
    fetch(`https://wildfire-api.herokuapp.com/searches/${id}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setToggleEditForm(!toggleEditForm);
        setSearchCity(json.search.city);
      });
  };

  const handleChange = (event) => {
    setSearchCity(event.target.value);
  };

  return (
    <div>
      {toggleEditForm && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            id="city"
            value={searchCity}
            name="city"
            onChange={handleChange}
          />
          <input type="submit" value="save" />
        </form>
      )}
      {!toggleEditForm && <h2>{searchCity}</h2>}

      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default SearchCard;
