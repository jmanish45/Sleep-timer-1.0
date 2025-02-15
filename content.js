setTimeout(() => {
    let video = document.querySelector("video");
    if (video) {
      video.pause();
      alert("Video paused automatically after 10 seconds!");
    } else {
      alert("No video found!");
    }
  }, 10000);

  