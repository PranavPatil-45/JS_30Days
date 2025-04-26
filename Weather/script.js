const Data = {
    "Ahmedabad": {
        temperature: 34,
        humidity: 58,
        windSpeed: 14,
        condition: "Clear Sky"
      },
      "Mumbai": {
        temperature: 30,
        humidity: 70,
        windSpeed: 10,
        condition: "Cloudy"
      },
      "Delhi": {
        temperature: 38,
        humidity: 45,
        windSpeed: 20,
        condition: "Sunny"
      },
      "Bangalore": {
        temperature: 25,
        humidity: 80,
        windSpeed: 12,
        condition: "Rainy"
      }
}

function showWeather()
{
    const city = document.getElementById('EntrCity').value.trim();
    const weather = Data[city];

    const ShwResult = document.getElementById('weatherResult');

    if (weather)
    {
        ShwResult.innerHTML=`
        <p> ${city}</p>
        <p> Temperature${weather.temperature}</p>
        <p>Humidity ${weather.humidity}</p>
        <p>Wind Speed ${weather.windSpeed}</p>
        <p>Condition ${weather.condition}</p>`;
    }
    else{
        ShwResult.innerHTML=`<p style="color:red">City Not Found.Try Mumbai, Delhi</p>`;
    }
    }
