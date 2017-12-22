// import numeral from 'numeral';
// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`------------- ${courseValue} -------------`); // eslint-disable-line no-console

import './index.css';
import { getUsers, deleteUser } from './api/userApi';

// npm install es6-promise, then added this line below
import { polyfill } from 'es6-promise';
polyfill();

// Populates table of users via APIc all (using plan JavaScript)
getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
    <td>&nbsp;${user.id}</td>
    <td>&nbsp;${user.firstName}</td>
    <td>&nbsp;&nbsp;&nbsp;${user.lastName}</td>
    <td>&nbsp;${user.email}</td>
    <td>&nbsp;&nbsp;<a href="#" data-id="${user.id}" class="deleteUser">delete</a></td>
    </tr>`
  });

  global.document.getElementById("users").innerHTML = usersBody;
  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      console.log(row.innerText); // eslint-disable-line no-console
      row.parentNode.removeChild(row);
    };
  });
});
