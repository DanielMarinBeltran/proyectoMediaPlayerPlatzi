import MediaPlayer from './mediaPlayer';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();