// Ho dovuto utilizzare javascript solo per l'EXTRA richiesto dal compito e cioè il search component

const primoClick = document.getElementById("search-icon");
const secondoClick = document.getElementById("search-component");
// costante per l'animazione
const sections = document.querySelectorAll(".reveal-section");

// Animazione all'onload, ho utilizzato l'addEventListener e come primo parametro il load
window.addEventListener("load", () => {
  let ritardo = 0;

  // utilizzo un forEach
  sections.forEach((section) => {
    // setTimeout non lo abbiamo ancora fatto, ma cercando su internet ho capito il suo funzionamento e ho cercato di utilizzarlo
    setTimeout(() => {
      section.classList.add("reveal");
    }, ritardo);

    ritardo += 500;
  });
});

primoClick.addEventListener("click", function () {
  secondoClick.classList.remove("d-none");
});

const terzoClick = document.getElementById("search-close");
terzoClick.addEventListener("click", function () {
  secondoClick.classList.add("d-none");
});
