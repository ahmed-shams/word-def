const fetch = require('node-fetch');
const apiURL = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/";
const apiConfig = {
	"app_id":"34bbe394",
	"app_key":"1fc9f7afff0aa91482611b3f6f47663d"
};

const Dictionary = {
	findDef: (word) => {
		return fetch(apiURL+word, {method: 'GET', headers: apiConfig})
	    .then(function(res) {
	        return res.json();
	    }).then(function(json) {
	        return json;
	    });
	}
};
module.exports = Dictionary;
