const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const gifResults = document.querySelector("#gif-results");

const apiKey = "phWzOa8leaj2uUeRJjEbj2rHkib8DVdm";

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      gifResults.innerHTML = "";

      data.data.forEach(function (gif) {
        const gifItem = document.createElement("div");
        gifItem.className = "gif-item";

        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;

        gifItem.appendChild(img);
        gifResults.appendChild(gifItem);
      });
    })
    .catch(function (error) {
      console.log("Error:", error);
      gifResults.innerHTML =
        "<p>Sorry, something went wrong. Please try again.</p>";
    });
});
