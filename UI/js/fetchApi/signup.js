
const signupForm = document.getElementById('signupForm');

const signup = (e) => {
  e.preventDefault(e);
  const getFormName = document.forms.signupForm;
  const mypassword = getFormName.passSignup.value;
  const name = getFormName.mynameSignup.value;
  const email = getFormName.emailSignup.value;

  alert(name )
  let headers = new Headers();
  fetch('https://mysterious-hamlet-72841.herokuapp.com/api/v1/auth/signup', {
      method: "POST",
      headers: {
              
      },
      body: JSON.stringify({ name, email, mypassword })

  })
    .then(response => response.json())
    .then((result) => {
        console.log(result);
      if (result.status === 'successful') {
        localStorage.token = result.token;
        console.log(localStorage.token);
        setTimeout(() => {
          window.location.replace('myindex');
        }, 5000);
      } else {
        console.log('Wrong entry please retry');
      }
    })
    .catch(err => console.log(err));
};

signupForm.addEventListener('submit', signup, false);

