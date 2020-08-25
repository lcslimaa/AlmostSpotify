var audioElement = new Audio("music/RocketPunch.mp3");
var isPlaying = false;
var progress = document.getElementById("progress");
var volumeBar = document.getElementById("volume");
var ppbutton = document.getElementById("playIcon");

function togglePlay() {
  isPlaying ? pauseMusic() : playMusic();
}

audioElement.onplaying = function () {
  isPlaying = true;
};

audioElement.onpause = function () {
  isPlaying = false;
};

function playMusic() {
  audioElement.play();
  ppbutton.classList.remove("fas", "fa-play");
  ppbutton.classList.add("fas", "fa-pause");
}

function pauseMusic() {
  audioElement.pause();
  ppbutton.classList.remove("fas", "fa-pause");
  ppbutton.classList.add("fas", "fa-play");
}

audioElement.addEventListener("timeupdate", function () {
  progress.value = audioElement.currentTime / audioElement.duration;
});

volumeBar.addEventListener("input", function (e) {
  audioElement.volume = e.currentTarget.value / 100;
});
