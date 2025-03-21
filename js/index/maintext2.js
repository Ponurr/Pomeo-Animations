const explodeTextObserver2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('text-anim-explode2--visible');

          const letters = el.querySelectorAll('.text-anim-explode2__char');
          letters.forEach((letter, index) => {
              letter.style.transitionDelay = `${index * 50}ms`;
          });
      } else {
          // Reset animacji po wyjściu z ekranu
          entry.target.classList.remove('text-anim-explode2--visible');
          entry.target.querySelectorAll('.text-anim-explode2__char').forEach(letter => {
              letter.style.transitionDelay = '0ms';
          });
      }
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-text-anim-explode2]').forEach(el => {
  const originalText = el.textContent.trim();
  el.innerHTML = '';

  originalText.split('').forEach(char => {
      const span = document.createElement('span');
      span.classList.add('text-anim-explode2__char');
      span.textContent = char === ' ' ? '\u00A0' : char; // Uwzględnia spacje
      el.appendChild(span);
  });

  explodeTextObserver2.observe(el);
});
