document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor2__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js2');
    const codeInput = document.querySelector('.editor2__code-menu__input');

   
    const defaultCodes = {
        html: `
    <div class="block2"></div>

        `,
        scss: `
 .block2 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transition: transform 0.8s ease-in-out, opacity 0.8s;
    opacity: 0;
    transform: translateX(-100px) rotate(-90deg);
}

.block2.active {
    opacity: 1;
    transform: translateX(0) rotate(360deg);
}
        `,
        js: `
document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".block2");

  function checkPosition() {
      const blockRect = block.getBoundingClientRect();
      const triggerBottom = window.innerHeight * 0.8;
      const triggerTop = window.innerHeight * 0.2;

      if (blockRect.top < triggerBottom && blockRect.bottom > triggerTop) {
          block.classList.add("active");
      } else {
          block.classList.remove("active");
      }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();
});


        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor2__tabs__button--active'));
            button.classList.add('editor2__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor2__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor2__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor2__code-menu--expanded');
            codeInput.classList.remove('editor2__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});