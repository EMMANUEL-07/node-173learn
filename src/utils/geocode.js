const request = require("request");

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiZW1tYW51ZWxsYTA3IiwiYSI6ImNrZTFwMGpmbDAxbDYzMHA2NmFidXlueGIifQ.WC7HJdHzw8vso8ktRRr9UA&limit=1'
  
    request({url: url, json: true}, (error, {body}) => {
      if (error){
        callback('Unable to connect to weather service', undefined)
      }else if(body.features.length === 0){
        callback('The selected Locations seems to not be known', undefined)
      }else{
        const data = {
          latt: body.features[0].center[0],
          lonn: body.features[0].center[1]
        }
        callback(undefined, data)
      }  
    })
    
}

module.exports= geocode