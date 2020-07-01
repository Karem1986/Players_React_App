import React from 'react';
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard"
import Title from "./components/Title"
import AddPlayerForm from "./components/AddPlayerForm";
import './style/App.scss';
import "./components/Player/Player.scss";
import "./components/Scoreboard/Scoreboard.scss";


function App() {
  return (
    <div className="App">
      <Title />

      <main>
        <Scoreboard />
      </main>

    </div>
  );
}

export default App;
