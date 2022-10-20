import axios from "axios";
import { Weather } from "../models/Weather";

export default function getWeather() {
    return axios.get<Weather>("https://api.weather.gov/gridpoints/DTX/65,33/forecast");
}