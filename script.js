const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();


// Sports video: keep the poster as a graceful fallback if autoplay/load fails.
const sportsVideo = document.querySelector('.sports-video');
const videoFallback = document.getElementById('videoFallback');

if (sportsVideo && videoFallback) {
  const showVideoFallback = () => {
    videoFallback.classList.add('show');
  };

  const hideVideoFallback = () => {
    videoFallback.classList.remove('show');
  };

  sportsVideo.addEventListener('playing', hideVideoFallback);
  sportsVideo.addEventListener('canplay', () => {
    // Try muted autoplay explicitly. If the browser blocks it, show the fallback.
    const playAttempt = sportsVideo.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(showVideoFallback);
    }
  });
  sportsVideo.addEventListener('error', showVideoFallback);
  sportsVideo.addEventListener('stalled', () => {
    if (sportsVideo.readyState < 3) showVideoFallback();
  });

  window.addEventListener('load', () => {
    const playAttempt = sportsVideo.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(showVideoFallback);
    }
  });
}
