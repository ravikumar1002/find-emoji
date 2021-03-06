import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😃": "Smileys & People",
  "😅": "Grinning Face with Sweat",
  "😬": "Grimacing Face",
  "☠️": "Skull and Crossbones",
  "😟": " Worried Face",
  "🥺": "Pleading Face",
  "😩": "Weary Face",
  "👶": "Baby",
  "🙂": "Slightly Smiling Face",
  "😛": "Squinting face with tongue"
};

var emojiKey = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojisearchHandler(event) {
    const inputEmoji = event.target.value;

    if (inputEmoji.trim().length <= 0) {
      setMeaning("");
      return;
    }

    const inputWithTrim = inputEmoji.trim();

    if (emojiDictionary[inputWithTrim]) {
      var searchEmoji = emojiDictionary[inputWithTrim];

      setMeaning(searchEmoji);
    } else {
      setMeaning("Sorry emoji not found");
    }
  }

  function emojiClickHandler(emoji) {
    const searchEmoji = emojiDictionary[emoji];
    setMeaning(searchEmoji);
  }

  return (
    <div className="container-body">
      <div className="App">
        <h1>Find Your Emoji </h1>
        <input onChange={emojisearchHandler} />
        <h2>{meaning}</h2>

        <h3>emojis we know</h3>
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
