// ? Below code is used for the fetching of city and its location codes from the website.

// let xx = {};
// const hrefs = document.querySelectorAll('.result-container .search-result').forEach((a) => {
//     let href = a.getAttribute("href");
//     let splits = href.split(/[\/,\?,\=,/&]+/);
//     let key =splits[splits.length-3];
//     console.log(splits);
//     let city = a.textContent;
//     xx[city]=key;
// });
// console.log(xx);
// copy(xx);
// Object.keys(xx).length;

// ? Below code is used for fetching of local stored apis.

// import data from "./assets/location-code/ap.json" assert { type: "json" };
// console.log(data);

// let url = "";

// const fetchJson = async () => {
//   try {
//     const data = await fetch(url);
//     const response = await data.json();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
//  };

// let x ;
//  function Func() {
//     fetch("./assets/location-code/ap.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => {console.log(data.Adoni);

//     });

// }

const states = {
  "Andaman & Nicobar island": "a&n",
  "Andhra pradesh": "ap",
  "Arunanchal Pradesh": "arunachal",
  Bihar: "bihar",
  Chandigarh: "chandigarh",
  Chattisgarh: "chattisgarh",
  "Daman & Diu": "d&d",
  "Dadar & Nagar Haveli": "d&n",
  Delhi: "delhi",
  Goa: "goa",
  Gujrat: "gujrat",
  Haryana: "haryana",
  "Himanchal Pradesh": "hp",
  "Jammu & Kashmir": "j&k",
  Jharkhand: "j&k",
  Karnatka: "karnatka",
  Kerala: "kerala",
  Ladakh: "ladakh",
  Lakshadweep: "lakshadweep",
  Manipur: "manipur",
  Meghalaya: "meghalaya",
  Maharastra: "mh",
  Mizoram: "mizoram",
  "Madhya Pradesh": "mp",
  Nagaland: "nagaland",
  Odisha: "odisha",
  Puducherry: "puducherry",
  Punjab: "punjab",
  Rajasthan: "rj",
  Sikkim: "sikkim",
  Telangana: "telangana",
  "Tamil Naidu": "tn",
  Tripura: "tripura",
  Uttrakhand: "uk",
  Uttarpradesh: "up",
  "West Bengal": "wb",
};
const countryCodes = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "North Macedonia", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn Islands", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZN" },
];
// niyene6379@poverts.com
// Nojavac
// Nojavacc
// Nojavaccc
// Nojavacccc
// Nojavaccccc
// Asdfghjkl@123

let x;
let forecast;
let optionList;
let locationCodes;
let currentTab;

const key = config.api_key;

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const searchTab2 = document.querySelector("[data-searchWeather2]");
const formContainer = document.querySelector(".form-container");
const formContainer2 = document.querySelector(".form-container-search");
const userInfoContainer = document.querySelector(".user-info-container");
const loadingScreen = document.querySelector(".loading-container");
const grantAccess = document.querySelector(".grant-location-container");
const grantAccessBtn = document.querySelector("[data-grant-access]");

const city = document.querySelector("#city");
const state = document.querySelector("#state");
optionList = document.querySelectorAll(".option");
const display = document.querySelector(".display");
let searchBox = document.querySelector("[data-searchInput]");

currentTab = userTab;
renderUserTab();
currentTab.classList.add("current-tab");
// ? Function for tab switch.
function switchTab(curr) {
  if (curr === currentTab) {
    return;
  } else if (curr === userTab) {
    currentTab.classList.remove("current-tab");
    currentTab = curr;
    currentTab.classList.add("current-tab");
    renderUserTab();
  } else if (curr == searchTab) {
    currentTab.classList.remove("current-tab");
    currentTab = curr;
    currentTab.classList.add("current-tab");

    renderSearchTab();
  } else {
    currentTab.classList.remove("current-tab");
    currentTab = curr;
    currentTab.classList.add("current-tab");

    renderSearchTab2();
  }
}

// ! *********************************************Location Tab Start**********************************************

// ? Function for rendering user tab view.
function renderUserTab() {
  grantAccess.classList.remove("active");
  loadingScreen.classList.remove("active");
  formContainer.classList.remove("active");
  userInfoContainer.classList.remove("active");
  formContainer2.classList.remove("active");

  getFromSessionStorage();
}
userTab.addEventListener("click", () => {
  switchTab(userTab);
});
grantAccessBtn.addEventListener("click", () => handleCoordinates());
// ? Fetch Location codes based on the lattiude and longitude.
async function fetchLocationCodes({ lat, long }) {
  loadingScreen.classList.add("active");
  try {
    let url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${lat}%2C${long}&details=true`;
    const res = await fetch(url);
    const locCode = await res.json();

    if (res.status >= 400 && res.status <= 600) {
      throw new Error(locCode.Message);
    }
    getWeather(
      Number(locCode.Key),
      locCode.LocalizedName,
      locCode.AdministrativeArea.EnglishName,
      locCode.Country.EnglishName
    );
    // const weatherInfo = fetchWeatherInfo(Number(locCode.Key));
    // const hourlyWeaterInfo = fetchHourlyWeatherInfo(Number(locCode.Key));
    // renderWeatherInfo(
    //   weatherInfo,
    //   locCode.LocalizedName,
    //   locCode.AdministrativeArea.EnglishName,
    //   locCode.Country.EnglishName,
    //   hourlyWeaterInfo
    // );
    // console.log("weather info", weatherInfo);
  } catch (error) {
    // console.error('i am in catch block')
    console.error("error", error);
    loadingScreen.classList.remove("active");
  }

  // let displayChild = document.createElement('p');
  // displayChild.textContent=forecast[0].Temperature.Metric.Value;
  // display.appendChild(displayChild);
}
// ? Function to get the location saved in sessionStorage.
function getFromSessionStorage() {
  grantAccess.classList.add("active");
  let locationCoordinates = localStorage.getItem("user-coordinates");

  if (!locationCoordinates) {
    // loadingScreen.classList.remove("active");
  } else {
    grantAccess.classList.remove("active");
    const coordinates = JSON.parse(locationCoordinates);
    fetchLocationCodes(coordinates);
  }
}

function handleCoordinates() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition);
  } else {

    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(pos) {
  const userCordinates = {
    lat: pos.coords.latitude,
    long: pos.coords.longitude,
  };
  localStorage.setItem("user-coordinates", JSON.stringify(userCordinates));
  getFromSessionStorage();
}

// ! *********************************************Location Tab End**********************************************

// ! *********************************************Select Tab Start**********************************************

// ? Function for rendering search tab view.
function renderSearchTab() {
  renderStateList();
  userInfoContainer.classList.remove("active");
  grantAccess.classList.remove("active");
  formContainer2.classList.remove("active");
  formContainer.classList.add("active");
  loadingScreen.classList.remove("active");
}
searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});
// ? Loop to render the states list.
function renderStateList() {
  for (let key of Object.entries(states)) {
    let newOption = document.createElement("option");
    newOption.textContent = key[0];
    newOption.setAttribute("value", key[1]);
    newOption.setAttribute("class", "option");
    state.appendChild(newOption);
  }
}

// ? Function to render the city options based on the state selection.
function renderCityList() {
  x.then(() => {
    // ! Object.entries convert the locationCodes object type in to array [["Rohtak","123"],["Sonipat","456"]].

    // ? Default disable option with content -> 'Select city'
    let cityOptionDefault = document.createElement("option");
    cityOptionDefault.textContent = "Select City";
    cityOptionDefault.setAttribute("selected", " ");
    cityOptionDefault.setAttribute("disabled", " ");
    city.appendChild(cityOptionDefault);

    for (let cityData of Object.entries(locationCodes)) {
      // console.log(cityData);
      let cityOption = document.createElement("option");
      cityOption.textContent = cityData[0];
      cityOption.setAttribute("value", cityData[1]);
      city.appendChild(cityOption);
    }
  });
}

function handleStateChange() {
  let value = state.value;
  city.classList.remove("hide");
  city.innerHTML = "";
  x = getLocationCodes(value);
  renderCityList();
}
// ? Fucntion to handle the city change.
function handleCityChange() {
  let value = city.value;
  let cityName = city.options[city.selectedIndex].textContent;

  let stateName = state.options[state.selectedIndex].textContent;
  let countryName = "India";
  console.log("city name", cityName);
  // console.log(value);
  loadingScreen.classList.add("active");
  getWeather(Number(value), cityName, stateName, countryName);
  // const weatherInfo = fetchWeatherInfo(Number(value));
  // const hourlyWeaterInfo = fetchHourlyWeatherInfo(Number(value));

  // renderWeatherInfo(
  //   weatherInfo,
  //   cityName,
  //   stateName,
  //   countryName,
  //   hourlyWeaterInfo
  // );
  // console.log("hi", weatherInfo);
}

// ! *********************************************Select Tab End**********************************************

// ! *********************************************Search Tab Start**********************************************

function renderSearchTab2() {
  userInfoContainer.classList.remove("active");
  grantAccess.classList.remove("active");
  formContainer.classList.remove("active");
  formContainer2.classList.add("active");
}
searchTab2.addEventListener("click", () => switchTab(searchTab2));
function handleSubmit(e) {
  e.preventDefault();
  let value = searchBox.value;
  fetchLocationOnSearch(value);
}
async function fetchLocationOnSearch(value) {
  loadingScreen.classList.add("active");
  let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${value}&details=true`;
  try {
    let res = await fetch(url);
    let data = await res.json();

    if (res.status >= 400 && res.status <= 600) {
      throw new Error(data.Message);
    }
    let cityName = data[0]?.EnglishName;
    let cityCode = data[0]?.Key;
    let stateName = data[0]?.AdministrativeArea?.EnglishName;
    let countryName = data[0]?.Country?.EnglishName;

    getWeather(cityCode, cityName, stateName, countryName);

    // let weatherInfo = fetchWeatherInfo(cityCode);
    // const hourlyWeaterInfo = fetchHourlyWeatherInfo(cityCode);
    // renderWeatherInfo(
    //   weatherInfo,
    //   cityName,
    //   stateName,
    //   countryName,
    //   hourlyWeaterInfo
    // );
  } catch (error) {
    // console.log('inside catch of search');
    console.error("error", error);
    loadingScreen.classList.remove("active");
  }
}
/* Tab switching and rendering components end */

// ! *********************************************Search Tab End*********************************************

// ? Function to fetch the location codes based on the selection in select box.
async function getLocationCodes(value) {
  let url = `./assets/location-code/${value}.json`;
  const x = await fetch(url);
  locationCodes = await x.json();
  return locationCodes;
}
function getWeather(locationCode, city, state, country) {
  console.log(locationCode);
  const weatherInfo = fetchWeatherInfo(locationCode);
  const hourlyWeaterInfo = fetchHourlyWeatherInfo(locationCode);
  renderWeatherInfo(weatherInfo, city, state, country, hourlyWeaterInfo);
}

// ? Function to fetch the one day forecast from api.
async function fetchWeatherInfo(value) {
  let url = `https://dataservice.accuweather.com/currentconditions/v1/${value}?apikey=${key}&details=true`;
  console.log(url);
  try {
    const res = await fetch(url);
    forecast = await res.json();
    if (res.status >= 400 && res.status <= 600) {
      throw new Error(forecast.Message);
    }
    return forecast;
  } catch (error) {
    loadingScreen.classList.remove("active");
    console.log("Error", error);
  }
}
async function fetchHourlyWeatherInfo(value) {
  let url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${value}?apikey=${key}&details=true&metric=true`;
  console.log(url);
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.status >= 400 && res.status <= 600) throw new Error(data.message);
    return data;
  } catch (error) {
    loadingScreen.classList.remove("active");
    console.log("Error in hourly : ", error);
  }
}

// ? Function to get flag emoji.
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
// ? Function to render the weather info.
function renderWeatherInfo(forecast, city, state, country, hourlyForecast) {
  // Element fetching for data render
  loadingScreen.classList.remove("active");
  userInfoContainer.classList.add("active");

  const cityNameEle = document.querySelector("[data-cityName]");
  const stateNameEle = document.querySelector("[data-stateName]");
  const countryIconEle = document.querySelector("[data-countryIcon]");
  const weatherDescEle = document.querySelector("[data-weatherDesc]");
  const weatherIconEle = document.querySelector("[data-weatherIcon]");
  const temperatureEle = document.querySelector("[data-temperature]");
  const windSpeedEle = document.querySelector("[data-windSpeed]");
  const humidityEle = document.querySelector("[data-humidity]");
  const cloudCoverEle = document.querySelector("[data-cloudCover]");
  const highTemp = document.querySelector("#high");
  const lowTemp = document.querySelector("#low");
  const hour = document.querySelectorAll(".hour");

  let weatherText;
  let weatherIcon;
  let temperature;
  let windSpeed;
  let relativeHumidity;
  let cloudCover;
  let countryIcon;

  let countryFlagEmojiCode = countryCodes.find(
    (cntry) => cntry.name === country
  ).code;
  let countryEmoji = getFlagEmoji(countryFlagEmojiCode);
  forecast.then((data) => {
    cityNameEle.textContent = city;
    stateNameEle.textContent = state;
    countryIconEle.textContent = countryEmoji;

    weatherDescEle.textContent = data[0]?.WeatherText;
    weatherIconEle.setAttribute(
      "src",
      `./assets/weather-icons/${data[0]?.WeatherIcon}.png`
    );
    temperatureEle.textContent = data[0]?.Temperature?.Metric?.Value;
    windSpeedEle.textContent = data[0]?.Wind?.Speed?.Metric?.Value;
    humidityEle.textContent = data[0]?.RelativeHumidity;
    cloudCoverEle.textContent = data[0]?.CloudCover;
    highTemp.textContent =
      data[0]?.TemperatureSummary?.Past6HourRange?.Maximum?.Metric?.Value;
    lowTemp.textContent =
      data[0]?.TemperatureSummary?.Past6HourRange?.Minimum?.Metric?.Value;
  });

  hourlyForecast?.then((data) => {
    for (let i = 0; i < 6; i++) {
      let dt = new Date(data[i]?.DateTime);
      let minutes = (dt?.getMinutes() < 10 ? "0" : "") + dt?.getMinutes();
      console.log("time ", dt, minutes);
      hour[i].children[0].textContent = `${dt?.getHours()}:${minutes} ${
        dt?.getHours() >= 0 && dt?.getHours() < 12 ? "AM" : "PM"
      }`;
      hour[i].children[1].setAttribute(
        "src",
        `./assets/weather-icons/${data[i]?.WeatherIcon}.png`
      );
      hour[i].children[2].textContent = data[i]?.Temperature?.Value;
    }
  });
}
