import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  apiKey,
  url,
  celsius,
  unsplashApiKey,
  unsPlashUrl
} from "../../components/Api/infoApi";
import WeatherCards from "../../components/Weather/WeatherCards";

function LocationComponent() {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [imageWeather, setImageWeather] = useState("");
  const defaultLatitude = 51.5073219;
  const defaultLongitude = -0.1276474;

  useEffect(() => {
    const getWeatherForCurrentLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const { data } = await axios.get(
              `${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&${celsius}`
            );
            setWeatherData(data);
            getRandomImage(data);
          },
          () => {
            fetchWeatherForDefaultLocation();
          }
        );
      } catch (error) {
        console.error("Error fetching weather data:", error);
        fetchWeatherForDefaultLocation();
      }
    };

    const fetchWeatherForDefaultLocation = async () => {
      try {
        const { data } = await axios.get(
          `${url}?lat=${defaultLatitude}&lon=${defaultLongitude}&appid=${apiKey}&${celsius}`
        );
        setWeatherData(data);
        getRandomImage(data);
      } catch (error) {
        console.error(
          "Error fetching weather data for default location:",
          error
        );
      }
    };

    const getRandomImage = async (weatherData) => {
      try {
        const response = await axios.get(
          `${unsPlashUrl}query=${weatherData.weather[0].main}&client_id=${unsplashApiKey}&w=200&h=200`
        );
        const imageUrl = response.data.urls.raw;
        setImageWeather(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
        const defaultImage =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cloudy_sky_%2826171935906%29.jpg/1024px-Cloudy_sky_%2826171935906%29.jpg";
        setImageWeather(defaultImage);
      }
    };

    getWeatherForCurrentLocation();
  }, []);

  return (
    <div>
      {weatherData ? (
        <WeatherCards weatherData={weatherData} urlImage={imageWeather} />
      ) : (
        <p style={{ fontSize: "45px", textAlign: "center" }}>
          Loading... Please Wait or Search City
        </p>
      )}
    </div>
  );
}

export default LocationComponent;
