/*jshint esversion: 6 */

// import AudioV from 'av';
// // import FlacDecoder from 'flac.js';


// let Player = new AudioV.Player();


var audiox = new Audio();

audiox.autoplay = false;
audiox.controls = false;
audiox.loop = false;
audiox.volume = 0.2;

export default {
    audiox,
    loadURL(mUrl) {
        audiox.src = mUrl;
    },
    play() {
        audiox.play();
    },
    pause() {
        audiox.pause();
    },
    reset(mUrl) {
        audiox.pause();
        audiox.src = mUrl;
        audiox.play();
    },
    setVolumn(mVol) {
        audiox.volume = mVol;
    },
    upVolumn(mVol) {
        if (audiox.volume + mVol > 1) {
            audiox.volume = 1;
        } else {
            audiox.volume += mVol;
        }
    },
    downVolumn(mVol) {
        if (audiox.volume - mVol < 1) {
            audiox.volume = 0;
        } else {
            audiox.volume -= mVol;
        }
    },
    onTimeUpdate(func) {
        audiox.addEventListener('timeupdate', func);
    },
    onEnded(func) {
        audiox.addEventListener('ended', func);
    },
    switchState(mUrl) {
        window.console.log(audiox.src);
        window.console.log(mUrl);
        if (audiox.src === mUrl) {
            if (audiox.paused) {
                audiox.play();
            } else {
                audiox.pause();
            }
        } else {
            this.reset(mUrl);
        }
    }
};

