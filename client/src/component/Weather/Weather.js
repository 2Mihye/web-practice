import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const API_KEY = "4edac2eabf494946a189e86050976521";

  // 위치 정보 가져올 useEffect
  useEffect(() => {
    /*
      navigator = 길 찾아주는 길잡이
      geolocation = 지리 위치
      getCurrentPosition = 현재위치를 가져오는 함수로 성공적으로 위치를 가져오면 콜백 함수를 호출하여 위치 정보를 포함한 내용을 전달해주는 역할
                           만약 위치 정보를 가져오는 데 실패한다면 오류를 해결해줄 콜백 함수 호출
      coords = 현재 위치의 좌표
    */
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("문제가 생겼습니다.", error);
        }
      );
    } else {
      console.error("내 위치 정보를 가져올 수 없습니다.");
    }
  }, []);

  // 내 위치에 대한 날씨 가져오는 함수 생성
  const searchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon${longitude}&key=${API_KEY}`
      );
      setWeather(response.data.data[0]);
    } catch (error) {
      console.error("에러 발생 : ", error);
    } finally {
      setLoading(false);
    }
  };

  // 현재 위치 정보가 변경될 떄마다 날씨 가져오기
  useEffect(() => {
    if (latitude && longitude) {
      searchWeather();
    }
  }, [latitude, longitude]); // 위도 경도가 바뀔때마다 재호출 할 수 있도록 설정

  return (
    <div className="Container mt-5">
      <h1 className="mb-4 text-center">날씨</h1>
      {latitude && longitude ? (
        <div>
          {loading && <p>검색중...</p>}
          {weather.city_name && (
            <div>
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
            </div>
          )}
        </div>
      ) : (
        <p>현재 위치를 가져오는 중입니다.</p>
      )}
    </div>
  );
}
