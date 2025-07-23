
    let witch=(data)=>
{
    switch(data.weather[0].main)
    {
        case "Clear":
            document.body.style.backgroundImage="url('https://i.pinimg.com/1200x/c2/40/29/c240299dfe4cc014ff0d190e638f7612.jpg')";
            break;
        case "Cloudy":
        case "Clouds":    
            document.body.style.backgroundImage="url('https://i.pinimg.com/1200x/4c/71/01/4c7101ed28e9adb4386ab8c66ad5c70e.jpg')";
            break;
        case "Rain":
        case "Drizzle":    
            document.body.style.backgroundImage="url('https://i.pinimg.com/736x/64/25/92/6425925b43c6d5639e7b379f3af07c7c.jpg')";
            break;
        case "Thunderstorm":
            document.body.style.backgroundImage="url('https://i.pinimg.com/1200x/17/bb/b3/17bbb33829704e3d43e1b0a275be1bda.jpg')";        
            break;
        case "Snow":
            document.body.style.backgroundImage="url('https://i.pinimg.com/1200x/3c/95/c0/3c95c0b33d4008298a14bec1d2d9500d.jpg')";    
            break;
        default:
            document.body.style.backgroundImage="url('https://i.pinimg.com/736x/65/91/3b/65913b90e7aee82f4370a9bf71c6d749.jpg')";
            break;        
    }
}
    document.getElementById("get").addEventListener("click",async function()
{   try
    {const city=document.getElementById("place").value;
    const retrive=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e0ee4b9417e72730acb25a2896d75e4&units=metric`);
    const data=await retrive.json();
    console.log(data);
    info.innerHTML="CITY:"+data.name;
    info1.innerHTML="TEMPERATURE : "+data.main.temp;
    info5.innerHTML="HUMIDITY: "+data.main.humidity;
    info3.innerHTML="WIND SPEED: "+data.wind.speed;
    info4.innerHTML="PRESSURE:"+data.main.pressure;
    info2.innerHTML="WEATHER: "+data.weather[0].main; 

     witch(data); } 
     catch(error)
     {
        info.innerHTML="ERROR";
        console.error(error);
     }
});