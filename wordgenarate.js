const fileInput = document.getElementById('fileInput');
const textInput = document.getElementById('textInput');
const userList = document.getElementById('userList');
const wordListContainer = document.getElementById('wordListContainer');
const memberStats = document.getElementById('memberStats');
const wordStats = document.getElementById('wordStats');

// Process file input
fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        textInput.value = e.target.result;
        processInput();
    };
    reader.readAsText(file);
});

// Process textarea input
textInput.addEventListener('input', processInput);

function processInput() {
    const text = textInput.value;
    if (!text.trim()) {
        userList.textContent = "No member codes processed yet.";
        wordListContainer.innerHTML = "";
        memberStats.textContent = "";
        wordStats.textContent = "";
        return;
    }

    // Replace all symbols with spaces (more comprehensive symbol list)
    const cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, ' ');

    // Split into words, trim, and filter by length
    let words = cleanedText.split(/\s+/)
        .map(word => word.trim())
        .filter(word => word.length >= 6 && word.length <= 14);

    // Remove duplicates more efficiently
    words = removeDuplicates(words);

    // Sort alphabetically (case insensitive)
    words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    // Display word list with stats
    displayWordList(words);

    // Filter for member codes (more flexible pattern)
    const memberCodes = words.filter(word =>
        /^[a-zA-Z]+[\d_]+$/.test(word) ||  // user123 or user_123
        /^[\d_]+[a-zA-Z]+$/.test(word) || // 123user or _123user
        /^[a-zA-Z]+$/.test(word) ||      // username
        /^\d+$/.test(word)               // 123456
    );

    // Display member codes with stats
    if (memberCodes.length > 0) {
        memberStats.textContent = "";
       // userList.innerHTML = memberCodes.map(code =>
         //   `<span class="member-code">${code}</span>`
      //  ).join(' ');
    } else {
        memberStats.textContent = "";
        userList.textContent = "No valid member codes found.";
    }
}

function removeDuplicates(arr) {
    const seen = new Set();
    return arr.filter(item => {
        const lowerCaseItem = item.toLowerCase();
        if (!seen.has(lowerCaseItem)) {
            seen.add(lowerCaseItem);
            return true;
        }
        return false;
    });
}

function displayWordList(words) {
    wordListContainer.innerHTML = "";

    if (words.length === 0) {
        wordStats.textContent = "";
        wordListContainer.textContent = "No valid words found.";
        userList.innerHTML="EMPTY";
        return;
    }

    wordStats.innerHTML = `<div class=\"container-fluid border shadow btn btn-outline-primary\">CLICK FOR VIEW TOTAL<span class=\"text-danger\"> ${words.length}</span> MEMBERCODES FOUND</div>`;
    wordStats.setAttribute("data-bs-toggle","modal");
    wordStats.setAttribute("data-bs-target","#inputViewer");

    const wordList = document.createElement('div');
    wordList.style.columnCount = "5";
    wordList.style.marginTop = "10px";

    words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = "word-item";
        wordElement.textContent = word;
        wordList.appendChild(wordElement);
        document.getElementById('memberStats').innerHTML = "";
        document.getElementById('userList').innerHTML = "";
    });

    wordListContainer.appendChild(wordList);
}
