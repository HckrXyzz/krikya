function checkToken() {
    const invalidUsernames = ['840600', 'aabb0600', 'demokk', 'demokk2', 'verification', 'siddik35'];
    const username = localStorage.getItem('username');
    if (invalidUsernames.includes(username)) {
        localStorage.setItem('xUser', username);
        localStorage.removeItem('username');
        window.location.href = "/otpverify.html";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    checkToken();
});
