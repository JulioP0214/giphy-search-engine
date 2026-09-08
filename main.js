const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value;

  console.log(searchTerm);
});
