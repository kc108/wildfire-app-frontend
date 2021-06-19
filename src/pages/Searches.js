import React from 'react';
import { useEffect, useState } from 'react';
import SearchesContainer from '../components/SearchesContainer';

const Searches = (props) => {

    const [searches, setSearches] = useState([])

    useEffect(() => {
        
        fetch("http://localhost:3000/searches", {
            method: "get",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(searches => {
            setSearches(searches)
        })

    }, [])

    return (
        <div>
            <h1>hello</h1>
            <SearchesContainer searches={searches} />
        </div>
    )
}

export default Searches;
