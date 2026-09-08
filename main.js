const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const gifResults = document.querySelector("#gif-results");

const apiKey = "phWzOa8leaj2uUeRJjEbj2rHkib8DVdm";

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
