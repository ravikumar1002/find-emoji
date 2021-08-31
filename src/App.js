import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😃": "Smileys & People",
  "🐻": "Animals & Nature",
  "🍔": "Food & Drink",
  "⚽": "Activity",
  "🌇": "Travel & Places",
  "💡": "Objects",
  "🔣": "Symbols",
  "🎌": "Flags",
  "🙄":"Face with rollling eyes",
  "😛":"Squinting face with tongue"
};

var emojiKey = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojisearchHandler(event) {
    var inputEmoji = event.target.value;
    var searchEmoji = emojiDictionary[inputEmoji];
    setMeaning(searchEmoji);
  }

  function emojiClickHandler(emoji) {
    var searchEmoji = emojiDictionary[emoji];
    setMeaning(searchEmoji);
  }

  return (
    <div className="container-body">
      <div className="App">
        <h1>Find Your Emoji </h1>
        <input onChange={emojisearchHandler} />
        <h2>{meaning}</h2>

        <h3>Types of emoji</h3>
        {emojiKey.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
