import React from "react";

export const WeatherInfo = ({ label, value, description, fontSize }) => {
  return (
    <>
      <p>{label}</p>
      <p style={{ fontSize: fontSize ? fontSize : "40px" }}>{value}</p>
      <p>{description}</p>

      <style jsx>{`
        @media (max-width: 480px) {
          p:nth-child(2) {
            font-size: 25px !important;
          }
        }
      `}</style>
    </>
  );
};

export const WeatherExtraInfo = ({ url, label, value }) => {
  return (
    <>
      <img src={url} style={{ width: "50px", height: "50px" }} />
      <div>
        <p>{label}</p>
        <p>{value}</p>
      </div>
      <span>
        The air Quality is generally acceptable for most individuals. However,
        sensitive groups may experience minor to moderate symptoms from
        long-term exposure.
      </span>
    </>
  );
};
