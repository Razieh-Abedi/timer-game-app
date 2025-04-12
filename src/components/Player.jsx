import { useState, useRef } from "react";

export default function Player() {
  const nameInputRef = useRef(null);
  const [playerName, setPlayerName] = useState();

  const handleSetName = () => {
    const enteredName = nameInputRef?.current.value.trim();
    setPlayerName(enteredName);
    nameInputRef.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown Player"}</h2>
      <p>
        <input type="text" ref={nameInputRef} />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
