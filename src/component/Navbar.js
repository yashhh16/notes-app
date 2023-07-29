import React from "react";

function Navbar({ handleToggleDarkmode }) {
  return (
    <div className="note-Footer">
      <h1>Notes App</h1>
      <button
        onClick={() =>
          handleToggleDarkmode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default Navbar;
