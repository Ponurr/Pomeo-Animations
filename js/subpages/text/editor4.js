document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor4__tabs__button');
    const codeMenu = document.getElementById('codeMenu4');
    const codeInput = document.querySelector('.editor4__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor4__animation-area__text"><span>POMEOSPACE</span></div>
        `,
        scss: `
.editor4__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: bgColorChange 4s infinite linear;

        }
        @keyframes bgColorChange {
            0% {
                background-color: red;
            }
            25% {
                background-color: blue;
            }
            50% {
                background-color: green;
            }
            75% {
                background-color: yellow;
            }
            100% {
                background-color: red;
            }
        }
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor4__tabs__button--active'));
            button.classList.add('editor4__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor4__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor4__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor4__code-menu--expanded');
            codeInput.classList.remove('editor4__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});