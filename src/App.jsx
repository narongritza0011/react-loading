import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";

function App() {
  const [dogs, setDog] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDog(response);
    } catch (error) {
      console.error("Something went wrong , ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  console.log(dogs)
  return (
    <>
      <div className="card">
        {loading ? (
          <BeatLoader color="#36d7b7" />
        ) : (
          <img src={dogs.data.message} width="300px" alt="" />
        )}
        <br />

        <button onClick={fetchDogs}>Random</button>
      </div>
    </>
  );
}

export default App;
