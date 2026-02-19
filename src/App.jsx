import { useEffect, useState } from "react";
const App = () => {
  const [apiData, setApiData] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fatchPokemon = () => (
    fetch(API)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err))
  )
  useEffect(() => {
    fatchPokemon();
  }, []);

  console.log(apiData)

  if (!apiData)
    return <h1> Loading......</h1>
  return (
    <ul>
      <h1>{apiData.name}</h1>
      <h2>{apiData.order}</h2>
    </ul>
  );
};
export default App;
