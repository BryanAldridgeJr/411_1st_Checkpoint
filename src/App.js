/*import React, { useEffect, useState } from 'react';
import './App.css';

import SearchBar from './SearchBar'

function App() {
  const [results, setResults] = useState([]);
  const [searchBar, setSearchBar] = useState('');

  const handleSearch = (e) => {
    setSearchBar(e.target.value);
  }

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search?query=...')
      .then(response => response.json())
      .then(res => setResults(res.hits))
  }, []);

  const filterSearch = (term) => {
    return(article) => {
      return article.title.toLowerCase().includes(term.toLowerCase())
    }
  }

  return (
    <div className='App'>
      <header>
        <div className='top'>
          <h3>Welcome</h3>
          <form>
            <input
              name='searchBar'
              type='text'
              value={searchBar}
              onChange={(e) => { handleSearch(e) }}
              placeholder='search by Title'
            />
          </form>
        </div>
        <div className='bottom'>
          {
          searchBar?
            <SearchBar
              search={results.filter(filterSearch(setSearchBar))}
            />
            :
            <SearchBar search={results} />
          }    
        </div>
      </header>
    </div>
  )
}

export default App;*/


/*
<div className='bottom'>
  <ol>
    {results.map((article, index) => (
      <li key={index}>{article.title}</li>
    ))}
  </ol>
</div>
*/

// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  const [results, setResults] = useState([]);
  const [searchBar, setSearchBar] = useState('');

  const handleSearch = (e) => {
    setSearchBar(e.target.value);
  };

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search?query=...')
      .then(response => response.json())
      .then(res => setResults(res.hits))
  }, []);

  const filterSearch = (term) => (article) => {
    return article.title.toLowerCase().includes(term.toLowerCase());
  };

  return (
    <div className='App'>
      <header>
        <div className='top'>
          <div className='h'>
            <img src='https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png'/>
          </div>
          <div className='hack'>
            <h4>SEARCH <br /> HACKER NEWS</h4>
          </div>
          <div className='bar'>
            <form>
              <input
                className='search'
                name='searchBar'
                type='text'
                value={searchBar}
                onChange={(e) => { handleSearch(e) }}
                placeholder='search by Title'
              />
            </form>
          </div>
        </div>
        <div className='middle'>
          <div className='dropdown'>
            <label for="cars">Search</label>
            <select name="cars" className="cars">
              <option value="volvo">Stories</option>
              <option value="saab">Comments</option>
              <option value="opel">Ask Hn</option>
              <option value="audi">Show HN</option>
            </select>
          </div>
          <div className='dropdown'>
            <label for="cars">By</label>
            <select name="cars" className="cars">
              <option value="volvo">Popularity</option>
              <option value="saab">Date</option>
            </select>
          </div>
          <div className='dropdown'>
            <label for="cars">For</label>
            <select name="cars" className="cars">
              <option value="volvo">All Time</option>
              <option value="saab">24 Hrs</option>
              <option value="opel">48 Hrs</option>
              <option value="audi">Past Week</option>
            </select>
          </div>
        </div>
        <div className='bottom'>
          {searchBar ? (
            <SearchBar search={results.filter(filterSearch(searchBar))} />
          ) : (
            <SearchBar search={results} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
