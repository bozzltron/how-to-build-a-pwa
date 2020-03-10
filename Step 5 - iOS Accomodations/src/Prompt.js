import React, {useEffect, useState} from 'react';

function Prompt() {
  const [style, setStyle] = useState("");

  useEffect(() => {
    
    // if(localStorage.getItem('promptDisplayed')!== true) {
      setTimeout(()=>{
        setStyle('show')
        // localStorage.setItem('promptDisplayed', true);
      },500)
    // }
    
  });

  return (
    <div className={`prompt ${style}`}>
      Install this webapp on your iphone: tap <img src="/home.png" alt="iOS home button" /> 
      and then add to homescreen.
    </div>
  );
}

export default Prompt;
