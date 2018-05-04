var UserApi = (function() {
  "use strict";

  //define variables
  var api_url;
  var xhr = new XMLHttpRequest();
  var cb;

  //function to set URL
  function setUrl(url) {
    api_url = url;
  }

  function getUrl() {
    return api_url;
  }

  //use GET request on URL endpoint
  function open() {
    xhr.open("GET", api_url, true);
  }

  function send() {
    xhr.send(null);
  }

  //add search term to URL
  function processUrl(callback) {
    cb = callback;
    open();
    xhr.onreadystatechange = parse;
    send();
    console.log(xhr);
  }

  function parse() {
    if (xhr.readyState === 4 ) {
      if (xhr.status === 200) {
        var resp = JSON.parse(xhr.responseText);
        cb(resp);
      }
    }
  }

  return {
    getUrl: getUrl,
    setUrl: setUrl,
    process: processUrl
  };
}());


