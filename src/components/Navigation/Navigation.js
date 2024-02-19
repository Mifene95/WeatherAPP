import React from "react";
import { useState } from "react";
import axios from "axios";
import { apiKey, url, celsius } from "../Api/infoApi";
import {
  StyledLi,
  StyledLink,
  StyledInput,
  FlexList,
  StyledButton,
  NavStyle,
  HomeStyledLink
} from "../Navigation/NavigationStyles";

const Navigation = () => {
  const [cityName, setCityName] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [countryFlag, setCountryFlag] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value) {
      if (cityName.includes(value)) {
        alert(`${value} already exist`);
        return;
      } else {
        try {
          setIsloading(true);
          const { data } = await axios(
            `${url}?q=${value}&appid=${apiKey}&${celsius}`
          );
          const updateCity = [...cityName, value];
          setCityName(updateCity);
          setValue("");
          const updateFlag = [...countryFlag, data.sys.country];
          setCountryFlag(updateFlag);
          setIsloading(false);
        } catch (err) {
          setError(err.message);
          setIsloading(false);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      }
    }
  };

  const Button = ({ onClick }) => (
    <StyledButton onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </StyledButton>
  );
  const handleClick = (city) => {
    const updatedCityName = cityName.filter((item) => item !== city);
    setCityName(updatedCityName);
  };
  return (
    <div>
      {isLoading && <div>Loading Data</div>}
      {error && <div>{error}</div>}

      <ul style={{ paddingLeft: "5px" }}>
        <StyledLi>
          <li>
            <HomeStyledLink to="/">Home</HomeStyledLink>
          </li>
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              placeholder="Search Location"
              onChange={handleChange}
              value={value}
            />
          </form>

          {cityName.map((city, index) => (
            <FlexList key={city}>
              <Button
                onClick={() => {
                  handleClick(city);
                }}
              ></Button>
              <img
                src={`https://flagsapi.com/${countryFlag[index]}/flat/64.png`}
                style={{ width: "30px", height: "30px" }}
              />
              <StyledLink to={`/city/${city}`}>{city.toUpperCase()}</StyledLink>
            </FlexList>
          ))}
        </StyledLi>
      </ul>
    </div>
  );
};

export default Navigation;
