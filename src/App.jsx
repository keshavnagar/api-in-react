import { useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.log(err));
  return (
    <>
      {apiData.map((currData) => (
        <li key={currData.id}>#{currData.body}</li>
      ))}
    </>
  );
};
export default App;
