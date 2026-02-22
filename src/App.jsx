import { useEffect, useState } from "react";
const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)
  const API = "https://pokeapi.co/api/v2/pokemons/pikachu";
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
    <ul>
      <h1>{apiData.name}</h1>
      <h2>{apiData.order}</h2>
      <img src={apiData.sprites.other.dream_world.front_default} alt="pokemon" />
    </ul>
  );
};
export default App;
