import React, { useContext, useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json";
import {
  ArrowDown,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  ArrowUp,
} from "react-bootstrap-icons";
import { WeatherContext } from "../WeatherContextProvider/WeatherContextProvider";

export const MainComponent = () => {
  const {
    weatherDataAll,
    setWeatherDataAll,
    pageNo,
    setPageNo,
    setModalContent,
  } = useContext(WeatherContext);

  const [weatherData, setWeatherData] = useState([]);

  const handleCitySortDesc = () => {
    let arr = weatherDataAll;

    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].city.toLowerCase() <= arr[i + 1].city.toLowerCase()) {
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
        }
      }
    }
    setWeatherDataAll([...arr]);
    console.log(MOCK_DATA);
  };

  const handleCitySortAscending = () => {
    let arr = weatherDataAll;

    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].city.toLowerCase() >= arr[i + 1].city.toLowerCase()) {
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
        }
      }
    }
    setWeatherDataAll([...arr]);
  };

  const handleNumberSortAsc = (msg) => {
    let arr = weatherDataAll;

    for (let j = 0; j < arr.length; j++) {
      if (msg == "temperature") {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].temperature >= arr[i + 1].temperature) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
          }
        }
      } else if (msg == "pressure") {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].pressure >= arr[i + 1].pressure) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
          }
        }
      } else {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].id >= arr[i + 1].id) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
          }
        }
      }
    }
    setWeatherDataAll([...arr]);
  };

  const handleNumberSortDesc = (msg) => {
    let arr = weatherDataAll;

    for (let j = 0; j < arr.length; j++) {
      if (msg == "temperature") {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].temperature <= arr[i + 1].temperature) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
          }
        }
      } else if (msg == "pressure") {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].pressure <= arr[i + 1].pressure) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
          }
        }
      } else {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].id <= arr[i + 1].id) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
          }
        }
      }
    }
    setWeatherDataAll([...arr]);
  };

  useEffect(() => {
    console.log(weatherDataAll.length/10);
    let roughData = weatherDataAll;
    let pageData =
      pageNo == 1
        ? roughData.slice(pageNo - 1, pageNo + 9)
        : roughData.slice(( pageNo - 1 ) * 10, (pageNo - 1) * 10 + 10);
    setWeatherData([...pageData]);
  }, [pageNo, weatherDataAll]);

  return (
    <div>
      <h2 className="fw-bold fs-1">Weather Application</h2>
      <table id="customers">
        <thead>
          <tr>
            <th className="widht-set">
              <button onClick={() => handleNumberSortAsc("id")}>
                <ArrowUp
                  className="bg-light p-1 fs-2 rounded mx-1"
                  style={{ marginRight: "2%" }}
                  size={20}
                  color="black"
                />
              </button>
              Id
              <button onClick={() => handleNumberSortDesc("id")}>
                <ArrowDown
                  className="bg-light p-1 fs-2 rounded mx-1"
                  style={{ marginRight: "10%" }}
                  size={20}
                  color="black"
                />
              </button>
            </th>
            <th className="widht-set">
              <button onClick={() => handleCitySortAscending()}>
                <ArrowUp
                  className="bg-light p-1 fs-2 rounded mx-1"
                  size={20}
                  color="black"
                />
              </button>
              City
              <button onClick={() => handleCitySortDesc()}>
                <ArrowDown
                  className="bg-light p-1 fs-2 rounded mx-1"
                  size={20}
                  color="black"
                />
              </button>
            </th>
            <th className="widht-set">
              <button onClick={() => handleNumberSortAsc("temperature")}>
                <ArrowUp
                  className="bg-light p-1 fs-2 rounded mx-1"
                  style={{ marginRight: "2%" }}
                  size={20}
                  color="black"
                />
              </button>
              Temperature
              <button onClick={() => handleNumberSortDesc("temperature")}>
                <ArrowDown
                  className="bg-light p-1 fs-2 rounded mx-1"
                  style={{ marginRight: "10%" }}
                  size={20}
                  color="black"
                />
              </button>
            </th>
            <th className="widht-set">
              <button onClick={() => handleNumberSortAsc("pressure")}>
                <ArrowUp
                  className="bg-light p-1 fs-2 rounded mx-1"
                  style={{ marginRight: "2%" }}
                  size={20}
                  color="black"
                />
              </button>
              Pressure
              <button onClick={() => handleNumberSortDesc("pressure")}>
                <ArrowDown
                  className="bg-light p-1 fs-2 rounded mx-1"
                  style={{ marginRight: "13%" }}
                  size={20}
                  color="black"
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {weatherData &&
            weatherData.map((data, index) => (
              <tr key={index + 100}>
                <td>{data.id}</td>
                <td
                  onClick={() => setModalContent(data)}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  data-testid="modalBtn"
                  className="city-name"
                >
                  {data.city}
                </td>
                <td>{data.temperature} °C</td>
                <td>{data.pressure} psi</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="page-nav-btns" style={{ gap: "30px" }}>
        <button
          onClick={() => {
            pageNo > 1 ? setPageNo((pageNo) => (pageNo -= 1)) : setPageNo(Number(weatherDataAll.length/10));
          }}
        >
          <ArrowLeftCircleFill size={50} />
        </button>
        <b className="p-4 fs-3">{pageNo}</b>
        <button
          onClick={() => {
            pageNo < Number(weatherDataAll.length/10) ? setPageNo((pageNo) => (pageNo += 1)) : setPageNo(1);
          }}
        >
          <ArrowRightCircleFill size={50} />
        </button>
      </div>
    </div>
  );
};
