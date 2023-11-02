import { useState, useEffect } from "react";

export function apiLocalConnect(url) {
  
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    fetch(url)
      .then(response => {
        if(response.status === 404){
          return false;
        }
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
      })
      .then(dataJSON => {
        setWeatherData(dataJSON);
      })
  }, [url]);

  return { weatherData };
}