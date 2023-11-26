// Event listener for the "Add Recipe" link
document.getElementById('addRecipeLink').addEventListener('click', add);

function add() {
  document.getElementById("add").style.display = "block";
}

function hide() {
  document.getElementById("add").style.display = "none";
}

const recipename = document.getElementById("name");
const Ingredients = document.getElementById("Ingredients_area");
const Method = document.getElementById("Method_area");
const image = document.getElementById("image_src");
const list = document.getElementById("starter_list");
const main = document.getElementById("maincourse_list");
const favoritesList = document.getElementById("favorites_list"); // Added

function addRecipe() {
  if (recipename.value == "") {
    alert("Please write a Recipe name");
  } else {
    let div = document.createElement("div");
    div.classList.add("starter");
    list.appendChild(div);

    let img = document.createElement("img");
    img.setAttribute("src", image.value);
    img.style.width = "200";
    img.style.height = "300";
    div.appendChild(img);

    let name = document.createElement("h3");
    name.textContent = recipename.value;
    div.appendChild(name);

    // info
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.classList.add("edit");
    div.appendChild(edit);

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete");
    div.appendChild(del);

    let ingredient = document.createElement("p");
    ingredient.textContent = Ingredients.value.split("\n");
    div.appendChild(ingredient);
    ingredient.classList.add("ingredients");

    let methods = document.createElement("p");
    methods.textContent = Method.value;
    methods.classList.add("methods");
    div.appendChild(methods);

    let fav = document.createElement("button");
    fav.textContent = "Favourite";
    fav.classList.add("favourite");
    div.appendChild(fav);

    // Event listener for adding to favorites
    fav.addEventListener("click", function () {
      addToFavorites(div);
    });
  }
  recipename.value = "";
  image.value = "";
  Ingredients.value = "";
  Method.value = "";
  hide();
  save();
}

show();

const recip = document.getElementById("starter_list");
const maincourse = document.getElementById("maincourse_list");

recip.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    save();
  }
});

function addToFavorites(recipeElement) {
  let div = document.createElement("div");
  div.classList.add("starter");
  favoritesList.appendChild(div);

  let img = recipeElement.querySelector("img").cloneNode(true);
  div.appendChild(img);

  let name = recipeElement.querySelector("h3").cloneNode(true);
  div.appendChild(name);

  let del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("delete");
  div.appendChild(del);

  // Event listener for removing from favorites
  del.addEventListener("click", function () {
    div.remove();
    save();
  });

  save();
}

function save() {
  localStorage.setItem("data", list.innerHTML);
  localStorage.setItem("favorites", favoritesList.innerHTML); // Added
}

function show() {
  list.innerHTML = localStorage.getItem("data");
  favoritesList.innerHTML = localStorage.getItem("favorites"); // Added
}

// Edit Recipe
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit')) {
    editRecipe(e.target.parentElement);
  }
});

function editRecipe(recipeElement) {
  const name = recipeElement.querySelector('h3');
  const ingredients = recipeElement.querySelector('p.ingredients');
  const method = recipeElement.querySelector('p.methods');

  // Show the add recipe form
  document.getElementById('add').style.display = 'block';

  // Populate the form fields with the recipe data
  document.getElementById('name').value = name.textContent;
  document.getElementById('Ingredients_area').value = ingredients.textContent;
  document.getElementById('Method_area').value = method.textContent;

  // Remove the existing recipe from the list
  recipeElement.remove();
  save();
}
