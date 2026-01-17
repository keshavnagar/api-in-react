import { useEffect, useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {apiData.map((currData) => (
        <li key={currData.id}>#{currData.body}</li>
      ))}
    </>
  );
};
export default App;
