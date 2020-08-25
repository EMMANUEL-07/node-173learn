const request = require("request");

const forecast = (lonn, latt, callback) => {
    var options = {
      method: 'GET',
      url: 'https://api.climacell.co/v3/weather/realtime',
      qs: {
        lat: latt.toString(),
        lon: lonn.toString(),
        unit_system: 'si',
        fields: 'temp,humidity,sunset,sunrise',
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
        humid = "Since we are in the evening, the humidity is "+ body.humidity.value + " %";
        sset ="The sun is to set by "+ body.sunset.value;
        srise = "The sun rose by "+ body.sunrise.value;
        rem = "Thank you for patronizing us";

        data = temp + ". " + humid + ". " + srise + ". " + sset + ". " + rem + ". "

        callback(undefined, data)
  
      }

    });
}
  

module.exports= forecast