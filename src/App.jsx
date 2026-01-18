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
  return (
    <ul>
     <h1>{apiData.}</h1>
    </ul>
  );
};
export default App;
