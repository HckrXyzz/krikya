const successfulDiv = document.getElementById("successOutput");
const loadingDiv = document.getElementById("loading");

// Function to show loader
function showLoader() {
  loadingDiv.style.display = "block";
}

// Function to hide loader
function hideLoader() {
  loadingDiv.style.display = "none";
}

// Observe changes in the #successful element
const observer = new MutationObserver((mutations) => {
  // When any mutation occurs, show the loader
  showLoader();
});

// Start observing the element's child list and attributes
observer.observe(successfulDiv, {
  childList: true,
  subtree: true,
  characterData: true,
  attributes: true,
});

// Example: simulate a change after some time (for demonstration)
// Remove or modify this in your actual implementation
//setTimeout(() => {
 // successfulDiv.textContent = "Operation Successful!";
//}, 2000);

// Stop button to hide the loader
stopButton.addEventListener("click", () => {
  hideLoader();
});
