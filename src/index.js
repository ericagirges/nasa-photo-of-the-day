import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";
import theme from './theme';
import { ThemeProvider } from 'styled-components';


export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = 'BU3D0Wl4R4zn4LUEMdIBvzUjhW0S0a1E5C46IwHu'

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
