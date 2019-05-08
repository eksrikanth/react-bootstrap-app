import React from "react";
import jokesdata from "../jokeComponent/joke-data";
import Joke from "../jokeComponent/joke";

function JokeOutlet() {
  return jokesdata.map((joke, index) => {
    return (
      <Joke key={index} question={joke.question} punchLine={joke.punchLine} />
    );
  });
}

export default JokeOutlet;
