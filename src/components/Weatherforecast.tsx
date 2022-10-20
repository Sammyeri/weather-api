import { useEffect, useState } from "react";
import { Period } from "../models/Weather";
import getWeather from "../services/ForecastService";

export function WeatherForecast() {
    const [periods, setPeriods] = useState<Period[]>([]);

    useEffect(()=>{
        getWeather().then((response) => {
            const {data} =response;
            setPeriods(data.properties.periods);
        });
    },[])

    return( 
        <div className= "WeatherForecast">
            {periods.map(period => (
                <ul>
                    <h2>{period.name}</h2>
                    <img src={period.icon} />
                    <p>Temperature: {period.temperature + period.temperatureUnit}</p>
                    <p>{period.detailedForecast}</p>
                </ul>
            ))}
        </div>
    )
}