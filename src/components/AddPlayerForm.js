// src/components/AddPlayerForm.js
import React, { useState } from "react";

export default function AddPlayerForm(props) {
    const [name, set_name] = useState("");

    const sentplayer = (event) => {
        event.preventDefault()
        props.addPlayer(name)
        set_name("")
    }

    return (
        <div>
            <p>
                New player:{" "}
                <input type="text" value={name} placeholder="Name" onChange={event => {
                    console.log("new input .value:", event.target.value)
                    set_name(event.target.value)
                }} />
                <button onClick={sentplayer}>Add</button>
            </p>
        </div>
    );
}