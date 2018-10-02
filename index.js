$(".answerKey").attr("style","display: none;") //DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
'Alexis Zambrano'

//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign



document.getElementById("problem-1").innerHTML = weatherForecastItems.response.termsofService


//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

document.getElementById("problem-2").innerHTML = weatherForecastItems.forecast.txt_forecast.forecastday[3].reversedForecastDesc

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function reverseIt(word){

  var wTest = word.split('');
  wTest = wTest.reverse();
  wTest = wTest.join('');

  return wTest;

}

document.getElementById("problem-3").innerHTML = reverseIt(weatherForecastItems.forecast.txt_forecast.forecastday[3].reversedForecastDesc)


//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function makeItRainLists(arr){

  var ul=document.createElement('ul');

  var time = 0;
  var rain = 0;
  var tRain;

  arrLgt = arr.length;

  for (var i = 0;i < arr.length;i++) {

    time = arr[i].time;
    rain = arr[i].precip;
    rain = rain * 100;

    tRain = rain + "%";

    var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + time + " - " + tRain;

  }

  return ul;

}

document.getElementById("problem-4").appendChild(makeItRainLists(weatherObservations))


//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

//function isGood(value) {
//  return value <= 0.5;
//}

//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

function makeItRainListsFiltered(arr){

  var ul=document.createElement('ul');

  var time = 0;
  var rain = 0;
  var tRain;

  var fArr = arr.filter(val => {return val.precip <= 0.5;});

  arrLgt = fArr.length;

  for (var i = 0;i < fArr.length;i++) {

    time = fArr[i].time;
    rain = fArr[i].precip;
    rain = rain * 100;

    tRain = rain + "%";

    var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + time + " - " + tRain;

  }

  return ul;

}

document.getElementById("challenge-1").appendChild(makeItRainListsFiltered(weatherObservations))


//challenge-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign\

function makeItRainListsMapped(arr){

  var ul=document.createElement('ul');

  var day;
  var forec;

  fArr = arr.forecast.txt_forecast.forecastday.map(function(val){

    var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + "Here's " + val.title + "'s forecast. " + reverseIt(val.reversedForecastDesc);

  });

  return ul;

}

document.getElementById("challenge-2").appendChild(makeItRainListsMapped(weatherForecastItems))











// document.getElementById("challenge-2").innerHTML =
