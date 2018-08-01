/* const homeAddress = 'https://mysterious-hamlet-72841.herokuapp.com/api/v1/';
const mySignupForm = document.getElementById('mySignupForm');

const signup = (e) => {
  e.preventDefault(e);
  const getFormName = document.forms.mySignupForm;
  const email = getFormName.myname.value;
  const password = getFormName.email2.value;

  fetch(`${homeAddress}auth/signup`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then((newUser) => {
      if (newUser.status === 'success') {
        window.localStorage.token = newUser.token;
        console.log(newUser.message);
        setTimeout(() => {
          window.location.replace('entries.html');
        }, 5000);
      } else {
        console.log(newUser.message, 2);
      }
    })
    .catch(err => console.log(err, 3));
};

mySignupForm.addEventListener('submit', signup, false);

 */
