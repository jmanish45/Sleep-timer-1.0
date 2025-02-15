chrome.action.onClicked.addListener((tab) => {
  alert("Video paused automatically after 10 seconds!");
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    
  });
  