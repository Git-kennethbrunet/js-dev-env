import numeral from 'numeral';
import './index.css';
import {getUsers} from './api/userApi';
// import { getUsers, deleteUser } from './api/userApi';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`------------- ${courseValue} -------------`); // eslint-disable-line no-console

// Populates table of users via APIc all (using plan JavaScript)
getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
    <td>&nbsp;<a href="#" data-id="${user.id}" class="deleteUser"> Delete </a></td>
    <td>&nbsp;${user.id}</td>
    <td>&nbsp;${user.firstName}</td>
    <td>&nbsp;${user.lastName}</td>
    <td>&nbsp;${user.email}</td>
    </tr>`
  });
  global.document.getElementById('users').innerHTML = usersBody;

  /* const deleteLinks = global.document.getElementsByClassName('deleteUser');
  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  }); */
});

