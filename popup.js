const filterButton = document.getElementById("filterButton");
const filterInput = document.getElementById("filterInput");

// https://stackoverflow.com/questions/38561136/chrome-extension-to-change-dom-with-a-button-in-extension-popup
filterButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "filter", country: filterInput.value });
    });
})