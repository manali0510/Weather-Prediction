const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

/*
const url='http://api.weatherstack.com/current?access_key=4254cde4a75a3b2f2dacfde58dbe7ae5&query=37.8267,-122.4233'
request({url:url,json:true},(error,response)=>{
if(error){
    console.log('Unable to connect to Weather Service')
}
else if(response.body.error){
    console.log('Unable to find the Location')
    }

else{
console.log('Humidity='+response.body.current.humidity)
}}

    )
*/
//geocoding 2 api requests //adress and api to convert to latitude and longitude
/*
const { Console } = require('console')
const request1=require('request')
const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1Ijoic3BhcnNoMDUwMSIsImEiOiJja3B1OXNzd3YxNm9vMnBxazlqYTJ0MmVwIn0.m5PJsvfwF210Zaci5fSGVA'
request1({url:geocodeurl,json:true},(error,response)=>{
    if(error){
    console.log('Unable to connect to server')
    }
    else if(response.body.features.length===0){
        console.log('Unable to FInd the Location')

    }
const latitude=response.body.features[0].center[1]
const longitude=response.body.features[0].center[0]
console.log(latitude,longitude)
}

    )
*/
const address=process.argv[2]
if(!address){
    console.log('Please Provide a Location')
}
else{


 geocode(address,(error, {latitude,longitude,location}={})=>{
     if(error){
         return console.log('Error!!!!')
     }
     forecast(latitude,longitude,(error,forecastdata)=>{
         if(error){
             return console.log('Error...!')
         }
        console.log(location)
        console.log(forecastdata)
    
    })
     

 })
}