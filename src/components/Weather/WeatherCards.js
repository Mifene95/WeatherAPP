import React from "react";

import { WeatherInfo, WeatherExtraInfo } from "./WeatherInfo";
import {
  StyledMainDiv,
  StyledSmall,
  DivContainer,
  StyledSidePannel,
  Container,
  Column
} from "./WeatherStyles";

const WeatherCards = ({ weatherData, urlImage }) => {
  return (
    <Container>
      <Column>
        <StyledMainDiv img={urlImage}>
          <WeatherInfo
            label={weatherData.weather[0].main}
            value={`${Math.ceil(weatherData.main.temp)} °C`}
            description={weatherData.name}
            img={urlImage}
          />
        </StyledMainDiv>

        <DivContainer>
          <StyledSmall img={urlImage}>
            <WeatherInfo
              label={"Feels like"}
              value={`${Math.ceil(weatherData.main.feels_like)} °C`}
              description={weatherData.weather[0].description}
            />
          </StyledSmall>
          <StyledSmall img={urlImage}>
            <WeatherInfo
              label={"Max Temp"}
              value={`${Math.ceil(weatherData.main.temp_max)} °C`}
              description={weatherData.weather[0].description}
            />
          </StyledSmall>
          <StyledSmall img={urlImage}>
            <WeatherInfo
              label={"Min Temp"}
              value={`${Math.ceil(weatherData.main.temp_min)} °C`}
              description={weatherData.weather[0].description}
            />
          </StyledSmall>
          <StyledSmall img={urlImage}>
            <WeatherInfo
              label={"Country"}
              value={weatherData.sys.country}
              description={weatherData.weather[0].description}
            />
          </StyledSmall>
        </DivContainer>
      </Column>
      <div>
        <StyledSidePannel className="hide-on-mobile">
          <WeatherExtraInfo
            url={"https://cdn-icons-png.flaticon.com/512/2210/2210317.png"}
            label={"Visibility"}
            value={`${weatherData.visibility} ft`}
          />
          <WeatherExtraInfo
            url={"https://cdn-icons-png.flaticon.com/512/615/615579.png"}
            label={"Wind"}
            value={`${weatherData.wind.speed} km/h`}
          />
          <WeatherExtraInfo
            url={"https://cdn-icons-png.flaticon.com/512/414/414876.png"}
            label={"Clouds"}
            value={`${weatherData.clouds.all} %`}
          />
          <WeatherExtraInfo
            url={"https://cdn-icons-png.flaticon.com/512/414/414876.png"}
            label={"Humidity"}
            value={`${weatherData.main.humidity} %`}
          />
        </StyledSidePannel>
      </div>
    </Container>
  );
};

export default WeatherCards;
