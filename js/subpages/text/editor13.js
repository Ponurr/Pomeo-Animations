document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor13__tabs__button');
    const codeMenu = document.getElementById('codeMenu13');
    const codeInput = document.querySelector('.editor13__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor13__animation-area__text"><span></span></div>
        `,
        scss: `
.editor13__animation-area__text {

    span{
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: effect 2s infinite ease-in-out;
    }
    span:after{
      content: "";
      width: 100%;
      height: 100%;
      line-height: 48px;
      left: 30%;
      top: 50%;
      animation: effect 7.5s linear infinite;
      animation-fill-mode: forwards;
  }


}


@keyframes effect {
    0% {
        content: "Ponur";
      }
      4% {
        content: "to";
      }
      8% {
        content: "giga";
      }
      12% {
        content: "szef ";
      }
      16% {
        content: "";
      }
      20% {
        content: "Po";
      }
      24% {
        content: "Ponu";
      }
      28% {
        content: "Ponur ";
      }
      32% {
        content: "Ponu ";
      }
      36% {
        content: "Ponur  ";
      }
      40% {
        content: "Ponur t  ";
      }
      44% {
        content: "Ponur to ";
      }
      48% {
        content: "Ponur to s";
      }
      52% {
        content: "Ponur to sze";
      }
      56% {
        content: "Ponur to sz";
      }
      60% {
        content: "Ponur to sze";
      }
      64% {
        content: "Ponur to szef";
      }
      68% {
        content: "Ponur to szef i ";
      }
      72% {
        content: "Ponur to szef i gi";
      }
      76% {
        content: "Ponur to szef i g";
      }
      80% {
        content: "Ponur to szef i giga";
      }
      84% {
        content: "Ponur to szef i giga k";
      }
      88% {
        content: "Ponur to szef i giga ko";
      }
      92% {
        content: "Ponur to szef i giga koc";
      }
      96% {
        content: "Ponur to szef i giga kocu";
      }
      100% {
        content: "Ponur to szef i giga kocur";
      }
   
}     

        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor13__tabs__button--active'));
            button.classList.add('editor13__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor13__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor13__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor13__code-menu--expanded');
            codeInput.classList.remove('editor13__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});