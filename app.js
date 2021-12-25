// * Get elements
const video = document.querySelector('.video');
const player = document.querySelector('.video-player');


// * Some functions
function togglePlay(e) {

   const playBtn = e.target.closest('.play-button');
   if (!playBtn) return;

   if (video.paused) {
      video.play();
      playBtn.textContent = 'pause';
   } else {
      video.pause();
      playBtn.textContent = 'play';
   }

}





// * Listeners
player.addEventListener('click', togglePlay);