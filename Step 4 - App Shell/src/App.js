import React from 'react';
import useFortune from './useFortune';
function App() {
  const fortune = useFortune();
  return (
    <div className="App">
      <img src="/logo-512x512.png" alt="Fortune cookie logo" />
      <p>{fortune}
      </p>
    </div>
  );
}

export default App;
