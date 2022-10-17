import React from "react";
import { useState } from "react";


const CaughtPokemon = ( { date, list } ) => {
  const [caught, setCaught] = useState([0]);
  const random = Math.floor(Math.random() * list.length);
  function catchPokemon(){
    setCaught(caught + 1);
    console.log(caught) + console.log(random, list[random]);
  }
    return (
      <div>
      <p>Caught {caught.length} Pokemon on {date}</p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {list.map((listItem) => {
          return (
            <li>{listItem}</li>
          );
        })
        }
      </ul>
      </div>
    );
   };

export default CaughtPokemon;