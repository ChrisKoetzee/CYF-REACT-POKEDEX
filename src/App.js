import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  const list = ["TersiaKatchu", "TaitumKatchu", "TylaKatchu"];
  const abilities =["Anticipation", "Adaptability", "Run-Away"];
  const logWhenClicked = () => {
    console.log("it doesn't matter what the message is");
  };
  return (
    <div>
      <Logo appName="ChrisKatchu" handleClick={logWhenClicked} />
      <BestPokemon abilities = {abilities} />
      <CaughtPokemon  date = {new Date().toLocaleDateString()} list={list} />
    </div>
  );
};
export default App;


