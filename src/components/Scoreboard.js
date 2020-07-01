import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";


// function compare(a, b) {
//     if (a.score < b.score) {
//         return -1;
//     }
//     if (a.score > b.score) {
//         return 1;
//     }
//     // a must be equal to b
//     return 0;
// }

function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
    return player_a.name.localeCompare(player_b.name)
}

export default function Scoreboard() {
    const [players, set_players] = useState([
        { id: 1, name: "Violeta", score: 11 },
        { id: 2, name: "Eszter", score: 14 },
        { id: 3, name: "Jeroen v2", score: 4 },
        { id: 4, name: "Lisa", score: 42 }
    ]);

    const change_sorting = event => {
        console.log("new sort order:", event.target.value);
        set_sort_by(event.target.value);
    };

    // //Add sorting:  // first "copy" the array, then sort it with the `compare_score`callback function
    const players_sorted = [...players].sort(compare_score)


    //Updating scores 
    const incrementScore = (id) => {
        const new_players_array = players.map(player => {
            // decide whether this player's score needs to be incremented
            if (player.id === id) {
                // and if so, create a new player object,
                return {
                    // but first copying over the player object's data
                    ...player,
                    // and then overriding the score property to be incremented
                    score: player.score + 1
                };
            } else {
                // else, just keep them
                return player;
            }

        })
        set_players(new_players_array)
    };

    //Reset score to 0 (PASS IT DOWN TO PLAYER COMPONENT BELOW)
    const resetScore = () => {
        const reset_after_click = players.map(player => {
            // if it gets clicked then 
            if (player) {
                // and if so, create a new player object,
                return {

                    ...player,
                    // and then overriding the score property to be reverted back to 0
                    score: player.score - player.score
                };
            } else {
                // else, just keep them
                return player;
            }

        })
        set_players(reset_after_click)
    };

    //Randomize each player's core to an integer between 0 and 100 
    const randomScore = (id) => {
        const randomInt = players.map(player => {
            // randomize each player's scores to an integer 0-100 
            if (incrementScore) {
                return Math.floor(Math.random(player.id.score * 100))
            }

        })
        set_players(randomInt)
    };

    const addPlayer = name => {
        console.log("Let's add a new player with the name:", name);
        const newPlayer = { name: name, score: 0, id: players.length + 1 };
        const newPlayers = [...players, newPlayer];
        console.log(newPlayers);
        set_players(newPlayers);
    };

    //Add new variable to sort by name 
    const [sort_by, set_sort_by] = useState("score");


    return (
        <div className="Scoreboard">
            <h1>Player's scores: </h1>
            <button onClick={resetScore}>Reset</button>
            <button onClick={randomScore}>Random Score</button>

            <p>
                Sort order:{" "}
                <select onChange={change_sorting}>
                    <option value="score">Sort by score</option>
                    <option value="name">Sort by name</option>
                </select>

            </p>

            <AddPlayerForm addPlayer={addPlayer} />


            {players.map((data) => {
                return (
                    <div>

                        <Player
                            id={data.id}
                            name={data.name}
                            score={data.score}
                            incrementScore={incrementScore}
                        />

                    </div>


                )

            }
            )}



        </div>
    );
}