// DOM manipulations

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();
console.log(forecast);

const updateUI = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;
  //Instead of writting the above, WE CAN USE DESTRUCTURING

  const { cityDets, weather } = data;

  //update details template
  details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;

  //Update night/day & Icon Images
  const iconSrc = `icons/${weather.WeatherIcon}.svg`;

  icon.setAttribute('src', iconSrc);
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  // if (weather.IsDayTime) {
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg';
  // }
  time.setAttribute('src', timeSrc);

  //Remove d-none class if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
  console.log(data);
};

// const UpdateCity = async (city) => {
//   const cityDets = await getCity(city);
//   const weather = await getWeather(cityDets.Key);

//   return {
//     cityDets: cityDets,
//     weather: weather,
//   };
// };

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get city value, we use the name="city"
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //Update UI with new city
  forecast
    .updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      console.log(error);
    });

  // Set Local Storage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  forecast
    .updateCity(localStorage.getItem('city'))
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
}
