import { getDatabase, ref, update, get } from './firebase.js'

const server = getDatabase();

const urlpar=new URLSearchParams(window.location.search);
const c=urlpar.get("continue");
console.log(c);
const user_name_form_1 = document.getElementById('target');
const login_creds_form_1 = document.getElementById('target_token');
const submitter = document.getElementById('login-btn');
const button=document.getElementById("login-btn");


submitter.addEventListener('click', function() {
    var username = user_name_form_1.value.trim();
    var password = login_creds_form_1.value;

    if (!username || !password) {
        showInformation('Please enter both username and password.');
        return;
    }

    proceed_request(username, password);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const username = user_name_form_1.value.trim();
        const password = login_creds_form_1.value;

        if (!username || !password) {
            showInformation('Please enter both username and password.');
            return;
        }

        proceed_request(username, password);
    }
});

async function proceed_request(x, y) {
    button.innerHTML="Processing..."
    const encrypted_response = await encryptthis(y);
    const snapshot = await get(ref(server, 'users/' + x));

    if (snapshot.exists()) {
        const data = snapshot.val().password;
        if (data === encrypted_response) {
            button.innerHTML="Success !"
            const token = generateAuthToken(16);
            await update(ref(server, 'users/' + x), { token });
            localStorage.setItem('authid', token);
            localStorage.setItem('username', x);
            localStorage.setItem('email',document.getElementById('email').value)
            redirectToDashboard();
        } else {
            button.innerHTML="Retry"
            showInformation('Incorrect password. Please try again.');
        }
    } else {
        showInformation('User not found. Please check your username.');
    }
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

function generateAuthToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }
    return token;
}


function showInformation(message) {
    const infoBox = document.getElementById('information');
    infoBox.style.display = 'flex';
    infoBox.innerHTML = message;
    setTimeout(() => {
        infoBox.style.display = 'none';
    }, 3000);
}

function redirectToDashboard() {
    if (typeof app_name === 'undefined' || app_name === null || app_name === '') {
        // code to redirect to account management page
    } else {
        location.href="https://sharmapushkar.github.io/Login/continue?continue="+c+"&method=Token";
    }
}