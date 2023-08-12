
let searchInput = document.getElementById('search-input')   
let defaultCity="cairo"
searchInput.addEventListener("keydown",function(){
    defaultCity=searchInput.value
getData(defaultCity)
})
getData(defaultCity)
async function getData(city){
   let myHttp= await fetch( `https://api.weatherapi.com/v1/forecast.json?key=52208995e8f845cbacd112139231008&q=${city}&days=3`)
   let data=await myHttp.json ()
   displayToday(data)
}
function getDay(his){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(his);
let day = days[d.getDay()];
return day
}
function getMonth(mon){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date(mon);
    let name = month[d.getMonth()];
    return name
}

function getDate(days){
    const d = new Date(days);
let day = d.getDate()
return day
}

function displayToday(arr){
let show =``
    show=`
    <div id="today" class="col-md-4">
    <div class="weather-condition  shadow-lg "> <div class="head-condition p-2 w-100 d-flex justify-content-between "><p >${ getDay(arr.forecast.forecastday[0].date)}</p> <p>${getDate(arr.forecast.forecastday[0].date) } ${getMonth(arr.forecast.forecastday[0].date)}</p></div ><p class="p-3 city">${arr.location.name}</p>
    <h3 class="p-2">${arr.current.temp_c}<sup>o</sup>c
<img src="${arr.current.condition.icon}" class="w-25" alt="">
    </h3>
    <p class="condition-text p-3">${arr.current.condition.text} </p>
    <P class="p-3">
    <span  class="me-4 fs-5">  
    <img src="https://routeweather.netlify.app/images/icon-umberella@2x.png" alt="" width="21" height="21">
${Math.floor(arr.current.gust_kph) }%
    </span>
    <span  class="me-4 fs-5"> 
    <img src="https://routeweather.netlify.app/images/icon-wind@2x.png" alt="" width="23" height="21">
${Math.floor(arr.current.wind_kph) } km/h
    </span>
    <span  class="me-4 fs-5"> 
    <img src="https://routeweather.netlify.app/images/icon-compass@2x.png" alt="" width="21" height="21">
   East
    </span>
    </P>
    </div>
  </div>
  <div id="second-day" class="col-md-4 text-center">
    <div class="weather-condition  shadow-lg"><div class="head-condition w-100"><p class="text-center py-2" >${ getDay(arr.forecast.forecastday[1].date)}</p></div> 
    <P>
    <img src="http:${arr.forecast.forecastday[1].day.condition.icon}" class="w-25 p-1" alt="">
    </P>
    <P class="maxtemp_c">
    ${arr.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>c
    </P>
    <span class="  mintemp_c">
    ${arr.forecast.forecastday[1].day.  mintemp_c} <sup>o</sup>c
    </span>
    <P class="condition-text p-4">
    ${arr.forecast.forecastday[1].day.condition.text} 
    </P>
    </div>
  </div>
   <div id="third-day" class="col-md-4 text-center">
    <div class="weather-condition  shadow-lg"><div class="head-condition w-100"><p class="text-center py-2" >${ getDay(arr.forecast.forecastday[2].date)}</p></div> 
    <P>
    <img src="http:${arr.forecast.forecastday[2].day.condition.icon}" class="w-25 p-1" alt="">
    </P>
    <P class="maxtemp_c">
    ${arr.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>c
    </P>
    <span class="  mintemp_c">
    ${arr.forecast.forecastday[2].day.  mintemp_c} <sup>o</sup>c
    </span>
    <P class="condition-text p-4">
    ${arr.forecast.forecastday[2].day.condition.text} 
    </P>
    </div>
  </div>
    `
document.getElementById('display').innerHTML= show
}

