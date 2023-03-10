// Ho dovuto utilizzare javascript solo per l'EXTRA richiesto dal compito e cioè il search component

const primoClick = document.getElementById("search-icon");
const secondoClick = document.getElementById("search-component");
const sections = document.querySelectorAll(".reveal-section");

window.addEventListener("load", () => {
  let delay = 0;

  sections.forEach((section) => {
    setTimeout(() => {
      section.classList.add("reveal");
    }, delay);

    delay += 500;
  });
});

primoClick.addEventListener("click", function () {
  secondoClick.classList.remove("d-none");
});

const terzoClick = document.getElementById("search-close");
terzoClick.addEventListener("click", function () {
  secondoClick.classList.add("d-none");
});
