import React from "react";
import NewCard from './NewCard';

function SearchBar(props) {
  return (
    <ol style={{ listStyle: "none" }}>
      {props.search.map((article, index) => (
        <NewCard key={index} article={article} />
      ))}
    </ol>
  );
}

export default SearchBar;
