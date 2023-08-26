
import React, { useState, useEffect } from 'react';
import './App.css';

function Data(){
     const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
    <div className="App">
      <h1>Punk API Beers</h1>
      <input
        type="text"
        placeholder="Search for a beer"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="beer-container">
        {filteredBeers.map((beer) => (
          <div className="beer-card" key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>ABV: {beer.abv}%</p>
          </div>
        ))}
      </div>
    </div>
  );
    
}
export default Data;
