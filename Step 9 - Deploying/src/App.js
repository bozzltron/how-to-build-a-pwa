import React from 'react';
import useFortune from './useFortune';
import useIOSPrompt from './useIOSPrompt';
import Prompt from './Prompt';

function App() {
  var fortune = useFortune();
  var showPrompt = useIOSPrompt();

  return (
    <div className="App">
      <img className="logo" src="/logo-512x512.png" alt="Fortune Cookie logo" />
      <p>{fortune}</p>
      { showPrompt ? <Prompt /> : null}
    </div>
  );
}

export default App;
