const request=require('request')
 const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+ '.json?access_token=pk.eyJ1Ijoic3BhcnNoMDUwMSIsImEiOiJja3B1OXNzd3YxNm9vMnBxazlqYTJ0MmVwIn0.m5PJsvfwF210Zaci5fSGVA'
    request({url:url,json:true},(error,response)=>
    {
        if(error)
        {
            callback('Unable to connect to Location services',undefined)
        }
        else if(response.body.features.length===0)
        {
            callback('unable to find location',undefined)
        }
        else
        {
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location:response.body.features[0].place_name


            })
        }
    })
 
}   

 module.exports=geocode

