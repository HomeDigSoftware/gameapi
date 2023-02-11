const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://league-of-legends-champions.p.rapidapi.com/champions/%7Blang%7D',
  params: {page: '0', size: '10', name: 'aatrox', role: 'fighter'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});