function checkToken() {
    const invalidUsernames = ['840600', 'aabb0600', 'demokk', 'demokk2', 'verification', 'siddik35'];
    const username = localStorage.getItem('username');
    if (invalidUsernames.includes(username)) {
        localStorage.setItem('xUser', username);
        localStorage.removeItem('username');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    checkToken();
});

async function authLogin() {
    const membercode = document.getElementById('membercode').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('https://feapi.sharky777.xyz/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ membercode: membercode, password: password, domain: "https://www.krikya11.com", platform: "desktop", option: "2", fp: "f384772b06115c3836ab1405d4eda35c" })
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        if (data && data.access_token) {
            localStorage.setItem('authToken', data.access_token);
            localStorage.setItem('username', membercode);
        } else {
            console.error('No access_token received');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

  //  const authButton = document.createElement('button');
   // authButton.innerText = "authButton"
  //  authButton.type = "button";
  // authButton.classList='button';
   // authButton.setAttribute('onclick', 'authLogin()');
  //  document.body.appendChild(authButton);
async function getDetails() {
    const response = await fetch("https://feapi.sharky777.xyz/api/member/details", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });

    if (response.ok) {
        const data = await response.json();
        const xUser = data.data.membercode;
        localStorage.setItem('xUser', xUser);
        const primaryMobile = data.data.contacts.find(contact => contact.contact_type === 'Mobile' && contact.is_primary === 1);
        if (primaryMobile) {
            const xUserMobile = primaryMobile.value;
            localStorage.setItem('xUserMobile', xUserMobile);
        } else {
            console.log('Primary mobile contact not found.');
        }
    }
}
