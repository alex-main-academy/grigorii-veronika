document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio('assets/music.mp3');
  const playButton = document.querySelector('.js-play-music');

  playButton.addEventListener('click', function () {
    document.querySelector('.music-play').setAttribute('src', 'img/icons/pause.svg');
    document.querySelector('.music-play').classList.remove('music-play__first');
    audio.play();
  });
});
