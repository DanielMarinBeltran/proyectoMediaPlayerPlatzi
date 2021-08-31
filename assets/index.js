import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]});

const button = document.querySelector('playButton');
playButton.onclick = () => player.togglePlay();

const muteButtom = document.querySelector('#muteButton');
muteButtom.onclick = () => player.toggleMute();