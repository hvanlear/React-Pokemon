import Pokecard from "./Pokecard";
import "./Pokedex.css";

//index of pokemon: show individual cards

function Pokedex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner"> THIS HAND WINS</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-card">
        {props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Totle Exp: {props.exp}</h4>
      {winMessage}
    </div>
  );
}
export default Pokedex;
