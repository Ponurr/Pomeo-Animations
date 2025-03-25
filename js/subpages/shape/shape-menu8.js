document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor8__tabs__button');
    const codeMenu = document.getElementById('shape-menu8');
    const codeInput = document.querySelector('.editor8__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor8__animation-area__text"><span>POMEOSPACE</span></div>
        `,
        scss: `
.editor8__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: stretch 2s infinite ease-in-out;

        }
        @keyframes stretch {
            0%, 100% {
                transform: scaleX(1);
            }
            50% {
                transform: scaleX(1.2);
            }
        }
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor8__tabs__button--active'));
            button.classList.add('editor8__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor8__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor8__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor8__code-menu--expanded');
            codeInput.classList.remove('editor8__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});