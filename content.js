chrome.storage.local.get("pauseTime", (data) => {
  if (data.pauseTime) {
      let delay = data.pauseTime *60; // Convert minutes to milliseconds
      
      // setTimeout(() => {
      //     let video = document.querySelector("video");
      //     if (video) {
      //         video.pause();
      //         alert("Video paused automatically!");
      //     } else {
      //         alert("No video found!");
      //     }
      // }, delay);
      // Ensure a global variable exists to store the timer interval
if (!window.timerIntervalGlobal) {
  window.timerIntervalGlobal = null;
}

function createTimer() {
  // Remove existing timer if it exists
  let existingTimer = document.getElementById("timerDiv");
  if (existingTimer) {
    existingTimer.remove();
  }

  // Clear any previously running interval
  if (window.timerIntervalGlobal) {
    clearInterval(window.timerIntervalGlobal);
    window.timerIntervalGlobal = null;
  }

  // Create timer div
  let timerDiv = document.createElement("div");
  timerDiv.id = "timerDiv";
  timerDiv.style.position = "fixed";
  timerDiv.style.top = "10px";
  timerDiv.style.left = "10px";
  timerDiv.style.width = "50px";     // approx 2 cm width (adjust as needed)
  timerDiv.style.height = "30px";    // approx 1 cm height (adjust as needed)
  timerDiv.style.backgroundColor = "black";
  timerDiv.style.color = "white";
  timerDiv.style.fontSize = "16px";
  timerDiv.style.textAlign = "center";
  timerDiv.style.borderRadius = "5px";
  timerDiv.style.padding = "5px";
  timerDiv.style.zIndex = "9999";
  document.body.appendChild(timerDiv);

  let countdown = delay;
  timerDiv.innerText = countdown + "s"; // Show initial time

  // Update timer every second
  window.timerIntervalGlobal = setInterval(() => {
    countdown--;
    timerDiv.innerText = countdown + "s";

    if (countdown <= 0) {
      clearInterval(window.timerIntervalGlobal);
      window.timerIntervalGlobal = null;
      let video = document.querySelector("video");
      if (video) {
        video.pause();
      }
      timerDiv.remove(); // Remove the timer div after pausing
      alert(`Video paused automatically after ${delay} seconds!`);
    }
  }, 1000);
}

// Start the timer immediately when the content script is injected
createTimer();


  } 
});


  