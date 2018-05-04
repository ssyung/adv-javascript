//form to search company and jurisdiction, connect to OpenCorporates API

// hide/show state select box dep on whether US is selected.
var CountrySelect = document.getElementById('CountrySelect');
CountrySelect.addEventListener("change", function() {
  var stateEl = document.getElementById('StateSelect');
  if (this.value === 'us') {
    stateEl.style.display = 'inline';
  } else {
    stateEl.style.display = 'none';
  }
});


var form = document.getElementById("CompanySearchForm");

form.addEventListener("submit", getCompanyData);

function getCompanyData(event) {
  event.preventDefault(); // stops the form from default submit behavior.
  var jur_code = encodeURIComponent(document.getElementById('CountrySelect').value);

  if (jur_code === 'us') {
    jur_code += '_' + document.getElementById('StateSelect').value;
  }

  var api_url = 'https://api.opencorporates.com/companies/search?' +
    'q=' + encodeURIComponent(document.getElementById('CompanyBox').value) + 
    "&jurisdiction_code=" + jur_code;
  
  console.log(api_url);
  
  UserApi.setUrl(api_url);
  UserApi.process(getFilings);
}

function getFilings(response) {
  var companydata = response.results;
  var companyNumber = companydata.companies[0].company.company_number
  var jur_code = encodeURIComponent(document.getElementById('CountrySelect').value);

  if (jur_code === 'us') {
    jur_code += '_' + document.getElementById('StateSelect').value;
  }

  console.log(companyNumber);
  
  var api_url = 'https://api.opencorporates.com/companies/' + 
    jur_code + '/' +
    companyNumber + '/filings';
  
  console.log(api_url);
    
  UserApi.setUrl(api_url);
  UserApi.process(parseFilings);
}

function parseFilings(response) {
  var companyFilings = response.results.filings;
  var timeline = []

  for(let i=0; i<companyFilings.length; i++) {
    let filing = companyFilings[i].filing;
    timeline.push({
      start_date: {
        month: filing.date.substr(5,2),
        day: filing.date.substr(8,2),
        year: filing.date.substr(0,4)
      },
      text: {
        headline: filing.title,
        text: filing.description
      }
    });
  }
  
  console.log(JSON.stringify(timeline));
  window.timeline = new TL.Timeline('timeline-embed', {events:timeline})

}







