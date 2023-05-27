import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) {
  const [isFront, setIsFromt] = useState(true)
  function rotateCard(){
    setIsFromt(!isFront)
  }
  return (
    <Card onClick={rotateCard}>
      <div>
        <div className="image" >
          <img src={isFront ? front : back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
