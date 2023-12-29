import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = "4edac2eabf494946a189e86050976521";
  // 검색할 버튼 함수 생성
  const searchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`
      );
      setWeather(response.data.data[0]);
    } catch (error) {
      console.error("에러 발생 : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Container mt-5">
      <div className="text-center">
        <h1 className="mb-4">날씨</h1>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="도시를 입력하세요."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-info mt-2" onClick={searchWeather}>
            도시검색
          </button>
        </div>
        <div>
          {loading && <p>검색중...</p>}
          {weather.city_name && (
            <div>
              {weather.weather.icon && (
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
                  alt="weather Icon"
                />
              )}
              <h2>{weather.city_name}</h2>
              <p>온도: {weather.temp} °C</p>
              <p>습도: {weather.rh}%</p>
              <p>날씨: {weather.weather.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
