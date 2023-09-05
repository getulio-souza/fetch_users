import get from './utils/getElement.js'
import getUser from './utils/getUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');
//turn my icons into an array of icons with spread operator

const showUser = async () => {
  // our getUser function is an aysnc which returns a promise. So we need to pass the method 'then' to access our data from the api
  // getUser().then((data) => console.log(data))
  // or we can turn showUser an aysnc function as above
  const person = await getUser()
  displayUser(person)
  // console.log(person)
}

//target the window object (the page) to show a new user after the refresh and the button too
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)


