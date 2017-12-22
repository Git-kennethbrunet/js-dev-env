/*
export default function getBaseUrl() {
  const inDev = window.location.hostname  === 'localhost';
  alert ('inDev = ' + inDev)
  return inDev ? 'http://localhost:8089/' : '/';
}
*/

export default function getBaseUrl() {
  return getQueryStringParameterByName("useMockApi") ? "http://localhost:8089/" : "https://desolate-garden-85374.herokuapp.com/";
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = document.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
