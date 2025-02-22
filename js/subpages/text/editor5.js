document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor5__tabs__button');
    const codeMenu = document.getElementById('codeMenu5');
    const codeInput = document.querySelector('.editor5__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor5__animation-area__text">Przykładowa Animacja</div>
        `,
        scss: `
.editor5__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: bounceUpDown 2s infinite ease-in-out;

        }
        @keyframes bounceUpDown {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor5__tabs__button--active'));
            button.classList.add('editor5__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor5__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor5__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor5__code-menu--expanded');
            codeInput.classList.remove('editor5__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});