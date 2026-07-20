import { database, ref, set, get } from './firebase.js';
const form = document.getElementById('signup-form');
const submitButton = document.getElementById('Submit-btn');
const message = document.getElementById('form-message');
let name, email, password, confirmPassword;
const m = document.getElementById('information');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  basic_check();
});





function basic_check(){
   name = document.getElementById('name').value.trim();
   email = document.getElementById('email').value.trim();
   password = document.getElementById('password').value;
   confirmPassword = document.getElementById('confirm-password').value;

  message.textContent = '';
  message.className = 'form-message';
  if (!name || !email || !password || !confirmPassword) {
    message.textContent = 'Please fill in all fields.';
    message.classList.add('error');
    return;
  }

  if (password.length < 8) {
    message.textContent = 'Password must be at least 8 characters long.';
    message.classList.add('error');
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    message.classList.add('error');
    return;
  }

  fsubmit();
}


const fsubmit = async () => {
  const enc = await encryptthis(confirmPassword);

  get(ref(database, 'users/' + name)).then(async (snapshot) => {
    if (snapshot.exists()) {
      dismessage('This username is already taken. Please try something else.');
    } else {
      await set(ref(database, 'users/' + name), {
        username: name,
        email,
        ban: 'no',
        password: enc,
      });
      dismessage('Welcome, Your account has been created successfully.');
      setTimeout(() => window.history.back(), 3000);
    }
  });
};

function dismessage(x){
  m.style.display="block";
  m.innerHTML=x;
  setTimeout(()=>{
    m.style.display="none";
  },5000)
}
async function encryptthis(password) {
    const textAsBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
}