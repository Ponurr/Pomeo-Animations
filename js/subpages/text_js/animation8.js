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
      span.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`;
      span.style.opacity = "0";
    });
  });
});
