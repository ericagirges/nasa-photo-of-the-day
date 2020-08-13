import React, { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import Header from "./Header";
import DateLabel from "./DateLabel";
import PhotoContainer from "./PhotoContainer";
import DatePicker from "./DatePicker";
import { BASE_URL, API_KEY } from "./index";
// import axios
import axios from "axios";

function App() {
  const [photoOfDay, setPhotoOfDay] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateFormatted = moment(date).format('YYYY-MM-DD');

    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${dateFormatted}`)
      .then((response) => {
        setPhotoOfDay(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [date]);
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header />
      <DateLabel date={date} />
      <DatePicker date={date} setDate={setDate} />
      {photoOfDay ? (
        <PhotoContainer photoOfDay={photoOfDay} setPhotoOfDay={setPhotoOfDay} />
      ) : (
        <div>LOADING...</div>
      )}
    </div>
  );
}

export default App;
