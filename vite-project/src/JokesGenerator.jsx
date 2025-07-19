// JokeGenerator.jsx
import { useEffect, useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  const fetchJoke = async () => {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data = await res.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    } catch {
      setJoke({ setup: "Oops!", punchline: "Couldn't fetch a joke!" });
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1 >Joke Generator</h1>

      <div >
        <p>{joke.setup}</p>
        <p >{joke.punchline}</p>
      </div>

      <button
        onClick={fetchJoke}
      >
        Get New Joke
      </button>
    </div>
  );
};

export default JokeGenerator;
