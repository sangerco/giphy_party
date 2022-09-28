const gifLocation = document.querySelector('.col-6');
const searchInput = $("#search-for-gifs");
// const removeBtn = document.getElementById('remove');


function addGif(res) {
  let num = res.data.length;
  if (num) {
    let idx = Math.floor(Math.random() * num);
    let newDiv = document.createElement('div');
    newDiv.classList.add('deleteImg')
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv')
    imgDiv.innerHTML += `<img src=${res.data[idx].images.original.url}>`;
    newDiv.append(imgDiv);
    gifLocation.append(newDiv);
  }
}


$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = searchInput.val();
  searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

// const remove = document.querySelector(".remove");
// const imgDiv = document.querySelector(".imgDiv")

$('#remove').on("click", function() {
    $('.deleteImg').remove();
});

