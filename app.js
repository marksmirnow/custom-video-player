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


function skippingTime(e) {

   const skipBtn = e?.target.closest('.skip-backward') || e?.target.closest('.skip-forward');

   if (!skipBtn) return;

   const skipStep = parseFloat(skipBtn.dataset.skip);
   video.currentTime += skipStep;
}




// * Listeners
player.addEventListener('click', togglePlay);
player.addEventListener('click', skippingTime);