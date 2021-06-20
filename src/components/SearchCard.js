import React, { useState } from "react";

const SearchCard = ({ city, id, handleDeletedSearch }) => {
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [searchCity, setSearchCity] = useState(city);

  const handleDelete = () => {
    handleDeletedSearch(id);
    fetch(`http://localhost:3000/searches/${id}`, {
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
    fetch(`http://localhost:3000/searches/${id}`, {
      method: "patch",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
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
      {!toggleEditForm && <h2>{city}</h2>}

      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default SearchCard;
