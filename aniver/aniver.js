const today = new Date();
const day = today.getDate();

// Show anniversary animation only on day 30
if (day === 30) {
  const container = document.getElementById('anniversary');
  container.classList.remove('hidden');
  container.classList.remove('body');

  // create floating hearts and confetti
  setInterval(() => {
    // Heart
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    heart.style.animationName = 'floatUp';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);

    // Confetti
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
    confetti.style.animationName = 'floatUp';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);

  }, 300);
}
// Load flower animation
const flowerContainer = document.getElementById('flower-container');
flowerContainer.classList.remove('hidden');