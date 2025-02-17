document.getElementById("startCustom").addEventListener("click", () => {
    let minutes = parseInt(document.getElementById("minutes").value);
    if (minutes && minutes > 0) {
        chrome.storage.local.set({ pauseTime: minutes }, () => {
            alert(`Video will pause after ${minutes} minutes.`);
        });

        // Inject content script into the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"]
            });
        });
    } else {
        alert("Enter a valid time!");
    }
});

// Preset buttons
document.querySelectorAll(".preset").forEach(button => {
    button.addEventListener("click", function() {
        let minutes = parseInt(this.dataset.minutes);
        chrome.storage.local.set({ pauseTime: minutes }, () => {
            alert(`Video will pause after ${minutes} minutes.`);
        });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"]
            });
        });
    });
});
// document.getElementById("extend5min").addEventListener("click", () => {
//     chrome.storage.local.get("pauseTime", (data) => {
//         let newTime = (data.pauseTime || 0) + 5;
//         chrome.storage.local.set({ pauseTime: newTime });
//         alert("Timer extended by 5 minutes!");
//     });
// });

// document.getElementById("extend10min").addEventListener("click", () => {
//     chrome.storage.local.get("pauseTime", (data) => {
//         let newTime = (data.pauseTime || 0) + 10;
//         chrome.storage.local.set({ pauseTime: newTime });
//         alert("Timer extended by 10 minutes!");
//     });
// });

