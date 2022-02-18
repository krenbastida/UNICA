const request = async () => {
    const myHeaders = new Headers()
    myHeaders.append(
        'x-rapidapi-host',
        'community-open-weather-map.p.rapidapi.com'
    )
    myHeaders.append(
        'x-rapidapi-key',
        '01cd7abca8msheeb74e6612511a3p177147jsn7e96d8b1ff4a'
    )

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    }

    try {
        let city = document.getElementById('buscador').value
        console.log(city)
        if(!city){
            city = 'Mexico City'
        }

        const data = await fetch(
            `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&mode=json&units=metric`,
            requestOptions
            )
        const res = await data.json()
        const icon = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        console.log(res)

        const elementWeather = document.getElementById('weather')
        elementWeather.innerHTML = `<p> ${res.weather[0].main} </p>`

        const elementTemp = document.getElementById('temp')
        elementTemp.innerHTML = `<p> ${res.main.temp} °C</p>`

        const elementMaxTemp = document.getElementById('max-temp')
        elementMaxTemp.innerHTML = `<p>MAX TEMP</p> <p> ${res.main.temp_max} °C </p>`

        const elementMinTemp = document.getElementById('min-temp')
        elementMinTemp.innerHTML = `<p>MIN TEMP</p> <p> ${res.main.temp_min} °C </p>`

        const elementHumidity = document.getElementById('humidity')
        elementHumidity.innerHTML = `<p>HUMIDITY</p><p> ${res.main.humidity} %</p>`

        const elementWind = document.getElementById('wind')
        elementWind.innerHTML = `<p>WIND</p> <p> ${res.wind.speed} m/s </p>`

        const elementCity = document.getElementById('city')
        elementCity.innerHTML = `<p> ${city}</p>`

        const elementIcon = document.getElementById('icon')
        elementIcon.innerHTML = `<img src="${icon}">`
        
    } catch (error) {
        console.error(error)
    }
}

const date = new Date 

const elementDay = document.getElementById('weekday')
elementDay.innerHTML =`<p> ${date.toLocaleDateString(date, {weekday:'long'})} </p>`

const elementDate = document.getElementById('date')
elementDate.innerHTML = `<p> ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}</p>`

request()