import React from 'react';
import SearchCard from './SearchCard';

const SearchesContainer = ({ searches }) => {

    const fetchedSearches = searches.map(search => {
        return <SearchCard key={search.id} city={search.city} />
    })

    return (
        <div className="searches">
            {fetchedSearches}
        </div>
    )
}

export default SearchesContainer;
