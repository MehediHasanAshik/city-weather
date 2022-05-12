const API_KEY = `53b00c4cf2a4b204fff67e6ccf55318b`

const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`


    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText =(id, text)=>{
    document.getElementById(id).innerText = text
}

const displayTemperature = (temp) => {
    setInnerText('city', temp.name)
    setInnerText('temp', temp.main.temp)
    setInnerText('condition', temp.weather[0].main)
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url)
}