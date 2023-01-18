import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send the search term to the server or handle it in some other way
    console.log(`Searching for ${searchTerm}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Find matches by PlayerId"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Find match for player!</button>
    </form>
  );
}

export default SearchBar;