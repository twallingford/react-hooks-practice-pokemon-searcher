import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [shownPokemon, setShownPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => {
      setShownPokemon(data)
      setAllPokemon(data)})
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm allPokemon={allPokemon} setAllPokemon={setAllPokemon}/>
      <br />
      <Search allPokemon={allPokemon} setShownPokemon={setShownPokemon}/>
      <br />
      <PokemonCollection allPokemon={allPokemon} shownPokemon={shownPokemon}/>
    </Container>
  );
}

export default PokemonPage;
