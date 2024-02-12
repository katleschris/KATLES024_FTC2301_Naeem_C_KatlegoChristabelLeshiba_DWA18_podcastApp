import React, { useState } from 'react';

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
    <div className="WelcomeScreen_input">
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
        <p>No show or movie by that title was found.</p>
      ) : (
        <div>
          {searchResults.map((show) => (
            <div key={show.id}>
              <h3>{show.title}</h3>
              <p>{show.description}</p>
              <img src={show.image} alt={show.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

