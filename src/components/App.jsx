import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";


function createEmoji(emojip) {
  return(
    <Entry
      key={emojip.id}
      emoji={emojip.emoji}
      name={emojip.name}
      meaning={emojip.meaning}
    />
  );
  
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
        {emojipedia.map(createEmoji)}
        
       
       
      </dl>
    </div>
  );
}

export default App;
