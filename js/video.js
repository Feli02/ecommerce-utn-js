let video = document.getElementById("videoPlayer");
let play = document.getElementById('play-btn')
let pause = document.getElementById('pause-btn')

function playPause() { 
    if (video.paused) {
        video.play(); 
        play.classList.remove('show')
        play.classList.add('hidden')

        pause.classList.remove('hidden')
        pause.classList.add('show')
    }
    else{ 
        video.pause(); 
        play.classList.remove('hidden')
        play.classList.add('show')

        pause.classList.add('hidden')
        pause.classList.remove('show')
    }
}
function reload() { 
   video.load(); 
}
function makeLarge() { 
    video.width = 1000; 
}
function makeSmall() { 
    video.width = 500; 
} 