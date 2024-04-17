const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '재생';
    } else {
        audio.play();
        playPauseBtn.textContent = '일시 정지';
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', togglePlayPause);
