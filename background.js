<<<<<<< HEAD
chrome.action.onClicked.addListener((tab) => {
      
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    
  });
=======
chrome.action.onClicked.addListener((tab) => {
  alert("Video paused automatically after 10 seconds!");
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    
  });
>>>>>>> b2d5ea6caaca9d6b851d860814c9de767c196066
  