(function(global) {
  // Default configuration
  const defaultConfig = {
    day: 30,                   // Anniversary day
    heartInterval: 300,         // Heart spawn interval in ms
    heartDuration: 5000,        // Heart animation duration
    confettiDuration: 4000,     // Confetti animation duration
    showMessage: true,          // Show text message
  };
   const elements = document.getElementsByClassName('color-target');
  

  // Main function to trigger anniversary animation
  function startAnniversary(config = {}) {
    const cfg = { ...defaultConfig, ...config }; // merge default + user config
    const today = new Date();

    // Only activate on the anniversary day
    if (today.getDate() === cfg.day) {
      const container = document.getElementById('anniversary');
      if (cfg.showMessage && container) {
        container.classList.remove('hidden');
      }

      setInterval(() => {
        // Heart
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
        heart.style.animationName = 'floatUp';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), cfg.heartDuration);

        // Confetti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
        confetti.style.animationName = 'floatUp';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), cfg.confettiDuration);

      }, cfg.heartInterval);
    }
  }

  // Expose the function globally so it can be overridden

    global.startAnniversary = startAnniversary;
    //document.body.style.background = 'radial-gradient(circle at center, #ffb6c1, #ff69b4, #ff1493)';

})(window);

// Default run (can be overridden by another script)
startAnniversary();