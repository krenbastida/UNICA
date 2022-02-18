const request = () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "01cd7abca8msheeb74e6612511a3p177147jsn7e96d8b1ff4a");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=San Francisco&mode=json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}