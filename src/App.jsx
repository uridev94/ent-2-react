
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherCard from './Components/WeatherCard';

function App() {

  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const success = (pos) => {
    
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    }
    setCoords(obj);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);



  useEffect(() => {
    
    if(coords) {
    const apiKey = `16514f5eaebde46b0271371de0f61a48`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;
    axios.get(url)

      .then(res => {
        const cel = (res.data.main.temp - 273.15).toFixed(2);
        const fah = cel * 9/5 + 32;
        setTemp({cel,fah});
        setWeather(res.data);
      })
      .catch(err => console.log(err));
    }
  }, [coords]);

  
  
 
  return (
    <div>
      <h1>Weather app</h1>
      <WeatherCard
      weather={weather}
      temp={temp}/>
    </div>
  )
}

export default App
