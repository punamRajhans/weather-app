// http://api.weatherapi.com/v1/current.json?key=6eab9411b9694ea5bb271054261502&q=Mumbai&aqi=no

// we create a function for get data from function

const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p");
const dateAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const searchbutton = document.querySelector(".search_button");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);

let target = "Lucknow";
const fetchresult = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=6eab9411b9694ea5bb271054261502&q=${targetLocation}&aqi=no`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;

  let temp = data.current.temp_c;

  let condition = data.current.condition.text;
  // console.log(locationName);

  updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, locationName, time, condition) {
    
  let splitDate = time.split(' ')[0];

  let splitTime = time.split(' ')[1];
  let currentDay = getDayName(new Date(splitDate).getDay());

  temperatureField.innerHTML = temp;
  locationField.innerHTML = locationName;
  dateAndTimeField.innerHTML = `${splitDate} ${currentDay} ${splitTime}`;
  conditionField.innerHTML = condition;
}

function searchForLocation(e) {
  e.preventDefault();

  target = searchField.value;
  fetchresult(target);
}

fetchresult(target);

function getDayName(number) {
  switch (number) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";
  }
}
