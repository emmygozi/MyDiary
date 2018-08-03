
const signupForm = document.getElementById('signupForm');

const signup = (e) => {
  e.preventDefault(e);
  const getFormName = document.forms.signupForm;
  const mypassword = getFormName.passSignup.value;
  const name = getFormName.mynameSignup.value;
  const email = getFormName.emailSignup.value;
  const popup = document.getElementById('myText');

  fetch('/api/v1/auth/signup', {
      method: "POST",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, mypassword })
    })
      
    .then(response => response.json())
    .then((result) => {
        console.log(result);
      if (result.status === 'successful') {
        localStorage.token = result.token;
        console.log(localStorage.token);
        popup.style.display = 'block';
        popup.innerHTML = 'Account created successfully!';
        popup.style.background = 'green';
        setTimeout(() => {
          window.location.replace('myindex');
        }, 5000);
      } else {
        console.log('Wrong entry please retry');
        popup.style.display = 'block';
        popup.innerHTML = 'Wrong entry Please retry!';
        popup.style.background = 'red';
      }
    })
    .catch(err => console.log(err));
};

signupForm.addEventListener('submit', signup, false);

