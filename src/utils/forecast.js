const request = require("request");

const forecast = (lonn, latt, callback) => {
    var options = {
      method: 'GET',
      url: 'https://api.climacell.co/v3/weather/realtime',
      qs: {
        lat: latt.toString(),
        lon: lonn.toString(),
        unit_system: 'si',
        fields: 'temp,sunrise,sunset,weather_code,precipitation_type',
        apikey: 'GcBLkvgkSM7v5Zvu4aK6OX9yCqHyOaxU'
      },
      json: true 
    };
  
    request(options, (error, {body}) => {
      if (error) {
        callback('Unable to connect to weather service', undefined)
      }else if(body.message){
      callback(body.message, undefined)
      }else {
        temp = "The temperature currently is "+ body.temp.value + " " + body.temp.units;
        sset ="The sun is to set by "+ body.sunset.value;
        srise = "The sunrise will be by "+ body.sunrise.value;
        weather = "The weather today will be " + body.weather_code.value;
        downpour = "As regards downpour, we can expect "+ body.precipitation_type.value + " for now.";
        rem = "Thank you for patronizing us, hope this helps in planning your day.";

        data = {temp, weather, downpour, srise, sset, rem }

        callback(undefined, data)
  
      }

    });
}
  

module.exports= forecast