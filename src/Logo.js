import React from "react";

const Logo=({ appName, handleClick })=> {
  return (
    <header>
      <h1>{appName}</h1>
    <img onClick={handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
    </header>
  );
};

export default Logo;
