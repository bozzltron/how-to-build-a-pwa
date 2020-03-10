import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

export default function useFortune(friendID) {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    async function fetchData() {
      let fortunes = await fetch('https://fortunecookieapi.herokuapp.com/v1/fortunes/').then(res => res.json());
      let rando = Math.floor(Math.random() * fortunes.length) + 1  
      setFortune(fortunes[rando].message);
    }
    fetchData();
  }, []);

  return fortune;
}