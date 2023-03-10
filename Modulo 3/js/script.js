// Ho dovuto utilizzare javascript solo per l'EXTRA richiesto dal compito e cioè il search component

const primoClick = document.getElementById("search-icon");
const secondoClick = document.getElementById("search-component");

primoClick.addEventListener("click", function () {
  secondoClick.classList.remove("d-none");
});

const terzoClick = document.getElementById("search-close");
terzoClick.addEventListener("click", function () {
  secondoClick.classList.add("d-none");
});
