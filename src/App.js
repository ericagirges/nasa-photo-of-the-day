import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./Header";
import Date from "./Date";
import PhotoContainer from "./PhotoContainer";
import Archive from "./Archive";
import {BASE_URL, API_KEY} from "./index"
// import axios
import axios from "axios";


function App() {
  const [photoOfDay, setPhotoOfDay] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(response => {
      console.log(response)
      setPhotoOfDay(response.data)
    } )
    .catch(error => {
      debugger
    })
  }, [date])
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      {
      <Header photoOfDay={photoOfDay} date={date} />
      }
    </div>
    
  );
}

export default App;
