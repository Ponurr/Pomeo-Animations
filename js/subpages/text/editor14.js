document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor14__tabs__button');
    const codeMenu = document.getElementById('codeMenu14');
    const codeInput = document.querySelector('.editor14__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor14__animation-area__text">Przykładowa Animacja</div>
        `,
        scss: `
.editor14__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: blurEffect 2s infinite ease-in-out;


}
@keyframes blurEffect {
    0% {
        filter: blur(0px);
    }
    50% {
        filter: blur(5px);
    }
    100% {
        filter: blur(0px);
    }
}   
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor14__tabs__button--active'));
            button.classList.add('editor14__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor14__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor14__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor14__code-menu--expanded');
            codeInput.classList.remove('editor14__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});