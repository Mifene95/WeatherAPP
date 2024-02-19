import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { apiKey, url, celsius } from "../../components/Api/infoApi";
import WeatherCards from "../../components/Weather//WeatherCards";
import { unsplashApiKey, unsPlashUrl } from "../../components/Api/infoApi";

const City = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { cityId } = useParams();
  const [imageWeather, setImageWeather] = useState("");

  const getCity = async (cityId) => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `${url}?q=${cityId}&appid=${apiKey}&${celsius}`
      );
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const getRandomImage = async (weatherData) => {
    try {
      const unsplashImage = await axios(
        `${unsPlashUrl}query=${weatherData.weather[0].main}&client_id=${unsplashApiKey}&w=200&h=200`
      );
      const imageWeather = unsplashImage.data.urls.raw;
      setImageWeather(imageWeather);
    } catch (err) {
      const defaultImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cloudy_sky_%2826171935906%29.jpg/1024px-Cloudy_sky_%2826171935906%29.jpg";
      setImageWeather(defaultImage);
      console.log(err);
    }
  };

  useEffect(() => {
    getCity(cityId);
  }, [cityId]);

  useEffect(() => {
    if (Object.keys(weatherData).length > 0) {
      getRandomImage(weatherData);
    }
  }, [weatherData]);

  return (
    <div>
      {Object.keys(weatherData).length > 0 && (
        <>
          <WeatherCards weatherData={weatherData} urlImage={imageWeather} />
        </>
      )}
    </div>
  );
};

export default City;
