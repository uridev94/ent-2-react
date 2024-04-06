import PropTypes from 'prop-types'
import  { useState } from 'react'

const WeatherCard = ({weather, temp}) => {

    const [isCel, setIsCel] = useState(true)
    
    const handleTemp = () => {
        setIsCel (!isCel)
    }

  return (
    <div>
       <h2>{weather?.name},  {weather?.sys.country}</h2> 
       <figure>
        <img src= {`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="Weather image" />
       </figure>
       <h3>{`"${weather?.weather[0].description}"`}</h3>
       <ul>
        <li><span>Wind speed: </span><span>{weather?.wind.speed} mts/s</span></li>
        <li><span>Clouds: </span><span>{weather?.clouds.all} %</span> </li>
        <li><span>Pressure: </span><span>{weather?.main.pressure} hPa</span> </li>
       </ul>
       <div>
        { 
          isCel 
          ?(
          <h3>{temp?.cel} °C</h3>
          ): (
            <h3>{temp?.fah} °F</h3>
          )

        }
            
        
       </div>
       <button onClick={handleTemp}>
        {
          isCel
          ?(
          'Change to °F'
          ): (
            'Change to °C'
          )
        }
       </button>
    </div>
  )
}

WeatherCard.propTypes = {
  weather: PropTypes.object,
  temp: PropTypes.object
}
export default WeatherCard