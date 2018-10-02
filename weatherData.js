//These are very large objects to make the assignment easier to read and grade we have
//put them in their own weatherData.js file and made them globally available.
var weatherForecastItems = {
  response: {
    version: "0.1",
    termsofService: "http://www.wunderground.com/weather/api/d/terms.html",
    features: {
      forecast: 1
    }
  },
  forecast: {
    txt_forecast: {
      date: "7:14 AM EDT",
      forecastday: [
        {
          period: 0,
          icon: "clear",
          icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
          title: "Friday",
          reversedForecastDesc: ".hpm 01 ot 5 ta W sdniW .F48 hgiH .enihsnus tnadnubA",
          fcttext_metric: "Plentiful sunshine. High 29C. Winds W at 10 to 15 km/h.",
          pop: "0"
        },
        {
          period: 1,
          icon: "nt_clear",
          icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
          title: "Friday Night",
          reversedForecastDesc: ".hpm 01 ot 5 ta WS sdniW .F76 woL .seiks raelC",
          fcttext_metric: "Clear skies. Low 19C. Winds SW at 10 to 15 km/h.",
          pop: "0"
        },
        {
          period: 2,
          icon: "clear",
          icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
          title: "Saturday",
          reversedForecastDesc: ".hpm 02 ot 01 ta WS sdniW .F09 dnuora hgiH .seiks ynnuS",
          fcttext_metric: "Sunny skies. High 32C. Winds SW at 15 to 30 km/h.",
          pop: "0"
        },
        {
          period: 3,
          icon: "nt_clear",
          icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
          title: "Saturday Night",
          reversedForecastDesc: ".hpm 51 ot 01 ta WS sdniW .F27 woL .raelC",
          fcttext_metric: "A mostly clear sky. Low 22C. Winds SW at 15 to 25 km/h.",
          pop: "10"
        },
        {
          period: 4,
          icon: "partlycloudy",
          icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          title: "Sunday",
          reversedForecastDesc: ".hpm 51 ot 01 ta WSW sdniW .F19 hgiH .seiks yduolc yltraP",
          fcttext_metric: "Partly cloudy skies. High 32C. Winds SW at 15 to 25 km/h.",
          pop: "0"
        },
        {
          period: 5,
          icon: "nt_partlycloudy",
          icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          title: "Sunday Night",
          reversedForecastDesc: ".hpm 51 ot 01 ta WS sdniW .F57 dnuora woL .elbissop si mrotsrednuht ro rewohs yarts A .sduolc wef A",
          fcttext_metric: "Partly cloudy. A stray shower or thunderstorm is possible. Low 24C. Winds SW at 15 to 25 km/h.",
          pop: "20"
        },
        {
          period: 6,
          icon: "chancetstorms",
          icon_url: "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          title: "Monday",
          reversedForecastDesc: ".%04 niar fo ecnahC .hpm 51 ot 01 ta WSW sdniW .F19 hgiH .noonretfa eht ni smrotsrednuht dna srewohs derettacs htiw ,ylrae sseniduolc laitraP",
          fcttext_metric: "Partly cloudy in the morning followed by scattered thunderstorms in the afternoon. High 33C. Winds SW at 15 to 25 km/h. Chance of rain 40%.",
          pop: "40"
        },
        {
          period: 7,
          icon: "nt_chancetstorms",
          icon_url: "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
          title: "Monday Night",
          reversedForecastDesc: ".%05 niar fo ecnahC .hpm 01 ot 5 ta WS sdniW .F37 woL .thgindim erofeb smrotsrednuht derettacs htiw seiks yduolc yltsom ot yltraP",
          fcttext_metric: "Scattered thunderstorms in the evening. Partly cloudy skies overnight. Low 23C. Winds SW at 10 to 15 km/h. Chance of rain 50%.",
          pop: "50"
        }
      ]
    },
    simpleforecast: {
      forecastday: [
        {
          date: {
            epoch: "1495839600",
            pretty: "7:00 PM EDT on May 26, 2017",
            day: 26,
            month: 5,
            year: 2017,
            yday: 145,
            hour: 19,
            min: "00",
            sec: 0,
            isdst: "1",
            monthname: "May",
            monthname_short: "May",
            weekday_short: "Fri",
            weekday: "Friday",
            ampm: "PM",
            tz_short: "EDT",
            tz_long: "America/New_York"
          },
          period: 1,
          high: {
            fahrenheit: "84",
            celsius: "29"
          },
          low: {
            fahrenheit: "67",
            celsius: "19"
          },
          conditions: "Clear",
          icon: "clear",
          icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
          skyicon: "",
          pop: 0,
          qpf_allday: {
            in: 0,
            mm: 0
          },
          qpf_day: {
            in: 0,
            mm: 0
          },
          qpf_night: {
            in: 0,
            mm: 0
          },
          snow_allday: {
            in: 0,
            cm: 0
          },
          snow_day: {
            in: 0,
            cm: 0
          },
          snow_night: {
            in: 0,
            cm: 0
          },
          maxwind: {
            mph: 10,
            kph: 16,
            dir: "W",
            degrees: 269
          },
          avewind: {
            mph: 9,
            kph: 14,
            dir: "W",
            degrees: 269
          },
          avehumidity: 50,
          maxhumidity: 0,
          minhumidity: 0
        },
        {
          date: {
            epoch: "1495926000",
            pretty: "7:00 PM EDT on May 27, 2017",
            day: 27,
            month: 5,
            year: 2017,
            yday: 146,
            hour: 19,
            min: "00",
            sec: 0,
            isdst: "1",
            monthname: "May",
            monthname_short: "May",
            weekday_short: "Sat",
            weekday: "Saturday",
            ampm: "PM",
            tz_short: "EDT",
            tz_long: "America/New_York"
          },
          period: 2,
          high: {
            fahrenheit: "90",
            celsius: "32"
          },
          low: {
            fahrenheit: "72",
            celsius: "22"
          },
          conditions: "Clear",
          icon: "clear",
          icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
          skyicon: "",
          pop: 0,
          qpf_allday: {
            in: 0,
            mm: 0
          },
          qpf_day: {
            in: 0,
            mm: 0
          },
          qpf_night: {
            in: 0,
            mm: 0
          },
          snow_allday: {
            in: 0,
            cm: 0
          },
          snow_day: {
            in: 0,
            cm: 0
          },
          snow_night: {
            in: 0,
            cm: 0
          },
          maxwind: {
            mph: 20,
            kph: 32,
            dir: "SW",
            degrees: 230
          },
          avewind: {
            mph: 14,
            kph: 23,
            dir: "SW",
            degrees: 230
          },
          avehumidity: 57,
          maxhumidity: 0,
          minhumidity: 0
        },
        {
          date: {
            epoch: "1496012400",
            pretty: "7:00 PM EDT on May 28, 2017",
            day: 28,
            month: 5,
            year: 2017,
            yday: 147,
            hour: 19,
            min: "00",
            sec: 0,
            isdst: "1",
            monthname: "May",
            monthname_short: "May",
            weekday_short: "Sun",
            weekday: "Sunday",
            ampm: "PM",
            tz_short: "EDT",
            tz_long: "America/New_York"
          },
          period: 3,
          high: {
            fahrenheit: "91",
            celsius: "33"
          },
          low: {
            fahrenheit: "75",
            celsius: "24"
          },
          conditions: "Partly Cloudy",
          icon: "partlycloudy",
          icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          skyicon: "",
          pop: 0,
          qpf_allday: {
            in: 0,
            mm: 0
          },
          qpf_day: {
            in: 0,
            mm: 0
          },
          qpf_night: {
            in: 0,
            mm: 0
          },
          snow_allday: {
            in: 0,
            cm: 0
          },
          snow_day: {
            in: 0,
            cm: 0
          },
          snow_night: {
            in: 0,
            cm: 0
          },
          maxwind: {
            mph: 15,
            kph: 24,
            dir: "WSW",
            degrees: 237
          },
          avewind: {
            mph: 12,
            kph: 19,
            dir: "WSW",
            degrees: 237
          },
          avehumidity: 64,
          maxhumidity: 0,
          minhumidity: 0
        },
        {
          date: {
            epoch: "1496098800",
            pretty: "7:00 PM EDT on May 29, 2017",
            day: 29,
            month: 5,
            year: 2017,
            yday: 148,
            hour: 19,
            min: "00",
            sec: 0,
            isdst: "1",
            monthname: "May",
            monthname_short: "May",
            weekday_short: "Mon",
            weekday: "Monday",
            ampm: "PM",
            tz_short: "EDT",
            tz_long: "America/New_York"
          },
          period: 4,
          high: {
            fahrenheit: "91",
            celsius: "33"
          },
          low: {
            fahrenheit: "73",
            celsius: "23"
          },
          conditions: "Chance of a Thunderstorm",
          icon: "chancetstorms",
          icon_url: "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          skyicon: "",
          pop: 40,
          qpf_allday: {
            in: 0.07,
            mm: 2
          },
          qpf_day: {
            in: 0.03,
            mm: 1
          },
          qpf_night: {
            in: 0.04,
            mm: 1
          },
          snow_allday: {
            in: 0,
            cm: 0
          },
          snow_day: {
            in: 0,
            cm: 0
          },
          snow_night: {
            in: 0,
            cm: 0
          },
          maxwind: {
            mph: 15,
            kph: 24,
            dir: "WSW",
            degrees: 237
          },
          avewind: {
            mph: 11,
            kph: 18,
            dir: "WSW",
            degrees: 237
          },
          avehumidity: 66,
          maxhumidity: 0,
          minhumidity: 0
        }
      ]
    }
  }
};

var weatherObservations = [
  {
    time: "12:00:00",
    temp: 80,
    precip: 0,
    wind: {
      windSpeed: 33,
      windDirection: "N",
      gusts: 40
    }
  },
  {
    time: "13:00:00",
    temp: 82,
    precip: 0.25,
    wind: {
      windSpeed: 49,
      windDirection: "N",
      gusts: 60
    }
  },
  {
    time: "14:00:00",
    temp: 84,
    precip: 0.30,
    wind: {
      windSpeed: 70,
      windDirection: "N",
      gusts: 80
    }
  },
  {
    time: "15:00:00",
    temp: 84,
    precip: 0.40,
    wind: {
      windSpeed: 66,
      windDirection: "N",
      gusts: 70
    }
  },
  {
    time: "16:00:00",
    temp: 85,
    precip: 0.50,
    wind: {
      windSpeed: 90,
      windDirection: "N",
      gusts: 100
    }
  },
  {
    time: "17:00:00",
    temp: 86,
    precip: 0.90,
    wind: {
      windSpeed: 78,
      windDirection: "N",
      gusts: 80
    }
  },
  {
    time: "18:00:00",
    temp: 88,
    precip: 1,
    wind: {
      windSpeed: 73,
      windDirection: "WNW",
      gusts: 80
    }
  },
  {
    time: "19:00:00",
    temp: 57,
    precip: 0.80,
    wind: {
      windSpeed: 7,
      windDirection: "NNW",
      gusts: 70
    }
  },
  {
    time: "20:00:00",
    temp: 58,
    precip: 0.25,
    wind: {
      windSpeed: 6,
      windDirection: "N",
      gusts: 15
    }
  }
];
