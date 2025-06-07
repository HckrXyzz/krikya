// Immediately Invoked Function Expression to avoid polluting global scope
(function () {
    // Utility function to format time in HH:MM:SS
    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    const userDataKey = 'userLoginData';

    let userData = JSON.parse(localStorage.getItem(userDataKey)) || {
        loginTime: null,
        totalWorkedSeconds: 0,
        sessionStartTime: null,
        pageStartTime: null,
    };

    // Simulate user login
    function userLogin() {
        if (!userData.loginTime) {
            const now = new Date().getTime();
            userData.loginTime = now;
            userData.sessionStartTime = now;
            userData.pageStartTime = now;
            localStorage.setItem(userDataKey, JSON.stringify(userData));
            console.log('User logged in at:', new Date(now).toLocaleString());
        }
    }

    // User starts working (e.g., on page load)
    function startWorking() {
        userData.sessionStartTime = new Date().getTime();
        userData.pageStartTime = new Date().getTime();
        localStorage.setItem(userDataKey, JSON.stringify(userData));
        console.log('User started working at:', new Date(userData.sessionStartTime).toLocaleString());
    }

    // User stops working (e.g., on page unload)
    function stopWorking() {
        const now = new Date().getTime();
        if (userData.sessionStartTime) {
            const workedSeconds = (now - userData.sessionStartTime) / 1000;
            userData.totalWorkedSeconds += workedSeconds;
            localStorage.setItem(userDataKey, JSON.stringify(userData));
            console.log('User stopped working at:', new Date(now).toLocaleString());
            console.log('Worked this session:', formatTime(workedSeconds));
        }
    }

    // On page load
    window.addEventListener('load', () => {
        userLogin();
        startWorking();

        // Optional: Show total worked time
        const totalSeconds = userData.totalWorkedSeconds;
        console.log('Total worked time before this session:', formatTime(totalSeconds));
        document.querySelector('.StayTime').innerText = formatTime(totalSeconds);
    });

    // On page unload
    window.addEventListener('beforeunload', () => {
        stopWorking();
        // Optional: Show total worked time after saving
        const totalSeconds = userData.totalWorkedSeconds;
        const formatT = formatTime(totalSeconds);
        console.log('totalTime',formatT);
        document.querySelector('.visitCount').innerText = formatTime(totalSeconds);

    });

    // Track time spent on page
    let timeOnPageSeconds = 0;
    const pageTimer = setInterval(() => {
        timeOnPageSeconds++;
        // For demonstration, log every 60 seconds
        if (timeOnPageSeconds % 60 === 0) {
            console.log(`Time on page: ${formatTime(timeOnPageSeconds)}`);
        }
    }, 1000);

    // Optional: display total time spent on page
    // You can add UI elements to show this dynamically

})();


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('activityBtn');
    const table = document.getElementById('activityTable');

    // Example timeSpent object for demonstration
    // Replace this with your actual time tracking data
    const timeSpent = {
        'login.html': 120,
        'dashboard.html': 300,
        'settings.html': 45,
        'other.html': 60
    };

    btn.onclick = () => {
        // Clear and create table header
        table.innerHTML = `<tr class="border-b border-green-900">
                <th class="py-2 px-3 text-sm">Page</th>
                <th class="py-2 px-3 text-sm">Time (s)</th>
                <th class="py-2 px-3 text-sm">Activity Type</th>
            </tr>`;

        // Optional: sort entries by time spent before displaying
        const sortedEntries = Object.entries(timeSpent).sort((a, b) => b[1] - a[1]);

        for (const [page, time] of sortedEntries) {
            let activityType = '';
            if (page.includes('login')) {
                activityType = 'Login';
            } else if (page.includes('dashboard')) {
                activityType = 'Dashboard';
            } else if (page.includes('settings')) {
                activityType = 'Settings';
            } else {
                activityType = 'Other';
            }
            table.innerHTML += `<tr>
                <td>${page}</td>
                <td>${time.toFixed(2)}</td>
                <td>${activityType}</td>
            </tr>`;
        }
    };
});
