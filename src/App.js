import 'bootstrap/dist/css/bootstrap.min.css';
import HelloAPS from "./components/HelloAPS";
import { Logo } from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
import Power from "./components/Power";
import TryCode from "./components/TryCode";

function App() {
  const familyName = "jasem zadeh";
  const logWhenClicked = () => {
    console.log("I love pizza 🍕");
  };
  return (
    <div>
      <Logo logWhenClicked={logWhenClicked} familyName={familyName} id={5} age={15} />
      <BestPokemon />
      <CaughtPokemon />
      <HelloAPS />
      <Power number={2} />
      <TryCode />
    </div>
  );
}

export default App;
