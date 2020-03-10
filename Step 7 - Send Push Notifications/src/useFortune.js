import { useState, useEffect } from 'react';
import 'whatwg-fetch'

export default function useFortune() {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    async function fetchData(){
      let fortunes = await fetch('https://fortunecookieapi.herokuapp.com/v1/fortunes/').then(res => res.json())
      if(fortunes){
        let rando = Math.floor(Math.random() * fortunes.length) + 1  
        setFortune(fortunes[rando].message);
      }
    }
    fetchData();
  }, []);

  return fortune;
}