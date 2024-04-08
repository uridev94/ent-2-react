import PropTypes from "prop-types";
import { useState } from "react";
import "../Styles/weatherCard.css";

const WeatherCard = ({ weather, temp }) => {
  const [isCel, setIsCel] = useState(true);

  const handleTemp = () => {
    setIsCel(!isCel);
  };

  return (
    <div className="Weather__card">
      <h1 className="Weather__title">Weather app</h1>
      <h2 className="Weather__place">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="Weather__container">
        <figure>
          <img
            className="Weather__img"
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt="Weather image"
          />
        </figure>
        <div className="Weather__info">
          <h3 className="Weather__description">{`"${weather?.weather[0].description}"`}</h3>
          <ul className="Weather__list">
            <li className="Weather__item">
              <span>Wind speed: </span>
              <span>{weather?.wind.speed} mts/s</span>
            </li>
            <li className="Weather__item">
              <span>Clouds: </span>
              <span>{weather?.clouds.all} %</span>{" "}
            </li>
            <li className="Weather__item">
              <span>Pressure: </span>
              <span>{weather?.main.pressure} hPa</span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div>{isCel ? <h3>{temp?.cel} °C</h3> : <h3>{temp?.fah} °F</h3>}</div>
      <button onClick={handleTemp}>
        {isCel ? "Change to °F" : "Change to °C"}
      </button>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object,
  temp: PropTypes.object,
};
export default WeatherCard;
