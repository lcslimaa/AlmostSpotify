var audioElement = new Audio("music/RocketPunch.mp3");
var isPlaying = false;
var progress = document.getElementById("progress");
var volumeBar = document.getElementById("volume");

function togglePlay() {
  isPlaying ? audioElement.pause() : audioElement.play();
}

audioElement.onplaying = function () {
  isPlaying = true;
};

audioElement.onpause = function () {
  isPlaying = false;
};

audioElement.addEventListener("timeupdate", function () {
  progress.value = audioElement.currentTime / audioElement.duration;
});

volumeBar.addEventListener("change", function (e) {
  audioElement.volume = e.currentTarget.value / 100;
});
