
const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key= 4254cde4a75a3b2f2dacfde58dbe7ae5&query='+ latitude +','+ longitude 
    request({url:url,json:true},(error,{body})=>{
    if(error){
        callback('Unable to connect to Weather Service',undefined)
    }
    else if(body.error){
        callback('Unable to find the Location',undefined)
        }
    
    else{
    callback(undefined, 'Temperature='+body.current)
    }}
    
        )
 }
 module.exports=forecast