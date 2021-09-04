import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause]});

const button = document.querySelector('playButton');
playButton.onclick = () => player.togglePlay();

const muteButtom = document.querySelector('#muteButton');
muteButtom.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}