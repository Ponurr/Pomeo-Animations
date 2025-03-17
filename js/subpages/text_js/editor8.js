document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor8__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js8');
    const codeInput = document.querySelector('.editor8__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="explode-text">8 Rozwalający się Tekst</p>

        `,
        scss: `
  .explode-text span {
        display: inline-block;
        transition: transform 0.5s ease-out, opacity 0.5s;
      }

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".explode-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  textElement.addEventListener("click", () => {
    document.querySelectorAll(".explode-text span").forEach(span => {
      let x = (Math.random() - 0.5) * 300;
      let y = (Math.random() - 0.5) * 300;
      span.style.transform = (!!brakuje tu jednej lini bo nie da sie jej tu wkleic!!)
      span.style.opacity = "0";
    });
  });
});


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