

//  www.openweathermap.org, create account, get api token
//  axios code: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2 script : axios  + js 
//  Brussels latitude - 50.850346, longitude - 4.351721


// Using a HTML/JS file in the browser-
// Use axios to get weather data from the API I showed at the start of the lesson
// Wrap the axios call in an async function
// Use await before the axios call
// Destructure the response to get the { data } part of the response
// Console.log the weather data (this will show you completed the above)



const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=50.85&lon=4.35&appid=1295d611d88d2f5bbf82e1431e1e9e0c`;



const getData = async () => {
//     //  the spinner(light green)
   document.getElementById("root").innerHTML = `<div class="lds-hourglass"></div>`

   try {
         const { data } = await axios.get(apiURL);

    const html = data.list.map(item => {

        return `<div class = "item">
        <h1>Brussels</h1>
        <h2>${new Date(item.dt * 1000).toLocaleString()}</h2>
        <p>${Math.round(item.main.temp - 273.15)}&#8451</p>
        <p>${'Feels like'} ${Math.round(item.main.feels_like - 273.15)}&#8451</p>
        <p>${item.weather[0].description}</p>

        <p>${'Humidity'} ${item.main.humidity} ${'%'}</p>
        <p>${'Wind speed'} ${item.wind.speed}  ${'km/h'}</p>

        </div>`
        
    });

    document.getElementById("root").innerHTML = html.join("");
    } catch (error) {
          alert('Server call failed, please try again later')
    }
}



getData();




