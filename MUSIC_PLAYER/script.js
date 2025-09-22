let progress = document.querySelector(".progress input");
let playBtn = document.querySelector(".play");
let playIcon = document.querySelector(".play i");
let song = document.querySelector("#song");

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

let playPause = () => {
    if (song.paused) {
        song.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        song.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
};

setInterval(() => {
    progress.value = song.currentTime;
}, 100);

progress.oninput = () => {
    song.play()
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    song.currentTime = progress.value;
};
