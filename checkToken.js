function checkToken() {
    const invalidUsernames = ['840600', 'aabb0600', 'demokk', 'demokk2', 'verification', 'siddik35'];
    const username = localStorage.getItem('username');
    if (invalidUsernames.includes(username)) {
        localStorage.setItem('xUser', username);
        window.location.href="/krikya11/otpverify";
}}
checkToken();
