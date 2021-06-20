import React from "react";
import SearchCard from "./SearchCard";

const SearchesContainer = ({ searches, handleDeletedSearch }) => {
  const fetchedSearches = searches.map((search) => {
    return (
      <SearchCard
        key={search.id}
        city={search.city}
        id={search.id}
        handleDeletedSearch={handleDeletedSearch}
      />
    );
  });

  return <div className="searches">{fetchedSearches}</div>;
};

export default SearchesContainer;
