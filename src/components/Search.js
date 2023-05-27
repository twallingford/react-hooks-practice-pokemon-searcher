import React from "react";

function Search({allPokemon, setShownPokemon}) {
  
  function handleSearch(event){
    setShownPokemon(allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
