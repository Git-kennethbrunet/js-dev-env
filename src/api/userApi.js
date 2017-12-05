//one place for all API calls.
import 'whatwg-fetch';
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

//public function.
export function getUsers() {
  return get('users');
}

//export function deleteUser(id) {
//  return del(`users/${id}`);
//}

//privet function.
function get (url){
  return fetch(baseUrl + url).then(onSuccess, onError);
  // return fetch(url).then(onSuccess, onError);
}

//function del(url) {
//  const request = new Request(baseUrl + url, {
//    method: 'DELETE'
//  });
//  return fetch(request).then(onSuccess, onError);
//}

function onSuccess (response){
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
