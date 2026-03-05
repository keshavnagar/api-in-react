import { useEffect, useState } from "react";
import './App.css';
const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fatchPokemon = () => (
    fetch(API)
      .then((res) => res.json())
      .then((data) => { setApiData(data); setLoading(false) })
      .catch((err) => { console.log(err); setErr(err); setLoading(false) })
  )
  useEffect(() => {
    fatchPokemon(); 
  }, []);

  if (loading)
    return <div><h1>Loading....</h1></div>
  if (err)
    return <div><h1>{err.message}</h1></div>
  return (
    // <ul>
    //   <h1>{apiData.name}</h1>
    //   <h2>{apiData.order}</h2>
    //   <img src={apiData.sprites.other.dream_world.front_default} alt="pokemon" />
    // </ul>
    <section className="container">
      <header>
        <h1>Let's catch pokemon</h1>
      </header>
      <li className="pokemon-card">
        <figure>
          <img src={apiData.sprites.other.dream_world.front_default} alt="pokemon" />
        </figure>
        <h1>{apiData.name}</h1>
        <div className="grid-three-cols">
          <p className="pokemon-info">Height: <span>{apiData.height}</span></p>
          <p className="pokemon-info">Weight: <span>{apiData.weight}</span></p>
          <p className="pokemon-info">Speed: <span>{apiData.stats[5].base_stat}</span></p>
        </div>
      </li>
    </section>
  );
};
export default App;
