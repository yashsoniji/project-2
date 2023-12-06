let SongIndex = 0;
let audioElement = new Audio('samjhawan.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
  {
    songname: 'Khwaab',
    filePath: 'songs/samjhawan.mp3',
    coverPath:
      'covers/https://c.saavncdn.com/863/Samjhawan-Lofi-Flip-Hindi-2022-20220523114304-500x500.jpg',
  },
  {
    songname: 'Khwaab',
    filePath: 'songs/samjhawan.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songname: 'Khwaab',
    filePath: 'songs/samjhawan.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songname: 'Khwaab',
    filePath: 'songs/samjhawan.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songname: 'Khwaab',
    filePath: 'songs/samjhawan.mp3',
    coverPath: 'covers/1.jpg',
  },
];

masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
  } else {
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
  }
});

audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');
});
