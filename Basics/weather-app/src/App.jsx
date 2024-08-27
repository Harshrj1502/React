import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const handlecitychange = (e) => {
    setCity(e.target.value);
  };
  console.log(city);
  console.log(weather);

  useEffect(() => {
    if (city) {
      const fetchweather = async () => {
        const API_KEY = "1060bde5e1e0172c88293f91d2a071b5";
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
          );
          
          setWeather(response.data);
          
          
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchweather();
    }
  }, [city]);

  return (
    <>
      <div>
        <div>
          <h1>weather app</h1>
          <input
            type="text"
            placeholder="enter city name"
            value={city}
            onChange={handlecitychange}
          />
        </div>
        <div>
          <p>{weather}</p>
        </div>
      </div>
    </>
  );
}

export default App;
