import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({allPokemon, setAllPokemon}) {
  
  function handleNewPokemon(event){
    event.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: event.target[0].value, hp: event.target[1].value, sprites: {front: event.target[2].value, back: event.target[3].value}})
    })
      .then((r) => r.json())
      .then((data) => setAllPokemon([...allPokemon, data]))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleNewPokemon}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
