
// array of countries
var state_arr = [
    {
        "name": "Alabama",
        "abbrev": "AL"
    },
    {
        "name": "Alaska",
        "abbrev": "AK"
    },
    {
        "name": "American Samoa",
        "abbrev": "AS"
    },
    {
        "name": "Arizona",
        "abbrev": "AZ"
    },
    {
        "name": "Arkansas",
        "abbrev": "AR"
    },
    {
        "name": "California",
        "abbrev": "CA"
    },
    {
        "name": "Colorado",
        "abbrev": "CO"
    },
    {
        "name": "Connecticut",
        "abbrev": "CT"
    },
    {
        "name": "Delaware",
        "abbrev": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbrev": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbrev": "FM"
    },
    {
        "name": "Florida",
        "abbrev": "FL"
    },
    {
        "name": "Georgia",
        "abbrev": "GA"
    },
    {
        "name": "Guam",
        "abbrev": "GU"
    },
    {
        "name": "Hawaii",
        "abbrev": "HI"
    },
    {
        "name": "Idaho",
        "abbrev": "ID"
    },
    {
        "name": "Illinois",
        "abbrev": "IL"
    },
    {
        "name": "Indiana",
        "abbrev": "IN"
    },
    {
        "name": "Iowa",
        "abbrev": "IA"
    },
    {
        "name": "Kansas",
        "abbrev": "KS"
    },
    {
        "name": "Kentucky",
        "abbrev": "KY"
    },
    {
        "name": "Louisiana",
        "abbrev": "LA"
    },
    {
        "name": "Maine",
        "abbrev": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbrev": "MH"
    },
    {
        "name": "Maryland",
        "abbrev": "MD"
    },
    {
        "name": "Massachusetts",
        "abbrev": "MA"
    },
    {
        "name": "Michigan",
        "abbrev": "MI"
    },
    {
        "name": "Minnesota",
        "abbrev": "MN"
    },
    {
        "name": "Mississippi",
        "abbrev": "MS"
    },
    {
        "name": "Missouri",
        "abbrev": "MO"
    },
    {
        "name": "Montana",
        "abbrev": "MT"
    },
    {
        "name": "Nebraska",
        "abbrev": "NE"
    },
    {
        "name": "Nevada",
        "abbrev": "NV"
    },
    {
        "name": "New Hampshire",
        "abbrev": "NH"
    },
    {
        "name": "New Jersey",
        "abbrev": "NJ"
    },
    {
        "name": "New Mexico",
        "abbrev": "NM"
    },
    {
        "name": "New York",
        "abbrev": "NY"
    },
    {
        "name": "North Carolina",
        "abbrev": "NC"
    },
    {
        "name": "North Dakota",
        "abbrev": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbrev": "MP"
    },
    {
        "name": "Ohio",
        "abbrev": "OH"
    },
    {
        "name": "Oklahoma",
        "abbrev": "OK"
    },
    {
        "name": "Oregon",
        "abbrev": "OR"
    },
    {
        "name": "Palau",
        "abbrev": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbrev": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbrev": "PR"
    },
    {
        "name": "Rhode Island",
        "abbrev": "RI"
    },
    {
        "name": "South Carolina",
        "abbrev": "SC"
    },
    {
        "name": "South Dakota",
        "abbrev": "SD"
    },
    {
        "name": "Tennessee",
        "abbrev": "TN"
    },
    {
        "name": "Texas",
        "abbrev": "TX"
    },
    {
        "name": "Utah",
        "abbrev": "UT"
    },
    {
        "name": "Vermont",
        "abbrev": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbrev": "VI"
    },
    {
        "name": "Virginia",
        "abbrev": "VA"
    },
    {
        "name": "Washington",
        "abbrev": "WA"
    },
    {
        "name": "West Virginia",
        "abbrev": "WV"
    },
    {
        "name": "Wisconsin",
        "abbrev": "WI"
    },
    {
        "name": "Wyoming",
        "abbrev": "WY"
    }
];

function populateStates(stateElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var stateElement = document.getElementById(stateElementId);
	stateElement.length=0;
	stateElement.options[0] = new Option('Select state','-1');
	stateElement.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i].name,state_arr[i].abbrev.toLowerCase());
	}
}