var audioElement = new Audio("music/Self Made.mp3");
var isPlaying = false;
var seek_slider = document.getElementById("seek_slider");
var volumeBar = document.getElementById("volume");
var ppbutton = document.getElementById("playIcon");

audioElement.onplaying = function () {
  isPlaying = true;
};

audioElement.onpause = function () {
  isPlaying = false;
};

seek_slider.addEventListener("change", function () {
  seekto = audioElement.duration * (seek_slider.value / 100);
  audioElement.currentTime = seekto;
  console.log(seekto);
});

audioElement.addEventListener("timeupdate", function () {
  seekPosition = audioElement.currentTime * (seek_slider.max / audioElement.duration);
  seek_slider.value = seekPosition;
  /*seek_slider.value = (audioElement.currentTime / audioElement.duration) * parseInt(seek_slider.max);*/
});

volumeBar.addEventListener("input", function (e) {
  audioElement.volume = e.currentTarget.value / 100;
});

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

function togglePlay() {
  isPlaying ? pauseMusic() : playMusic();
}
