import React, { useState } from 'react';
import Row from './Row'; // Import the Row component

export default function SearchResult(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredResults = props.shows.filter((show) =>
      show.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setShowNotFound(filteredResults.length === 0);
  };

  return (
    <div className="WelcomeScreen_input" style={{backgroundColor: 'black'}}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter keywords"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit" className="WelcomeScreen_search">
          Search
        </button>
      </form>
      {showNotFound ? (
        <p>No show by that title was found.</p>
      ) : (
        <Row title="Search Results" shows={searchResults} /> 
      )}
    </div>
  );
}


