// Event listener for the "Add Recipe" link
document.getElementById('addRecipeLink').addEventListener('click', add);
console.log("file loading");

function add() {
  document.getElementById("add").style.display = "block";
  console.log("hello");
}

function hide() {
  document.getElementById("add").style.display = "none";
}

const recipename = document.getElementById("name");
const Description = document.getElementById("Description_area");
const Ingredients = document.getElementById("Ingredients_area");
const Method = document.getElementById("Method_area");
const image = document.getElementById("image_src");
const list = document.getElementById("starter_list");
const main = document.getElementById("maincourse_list");
const des = document.getElementById("dessert_list");
const selectElement = document.getElementById("category-op");
//new line for fav
const favorites = document.getElementById("favorites_list");


function addRecipe() {
  if (recipename.value === "") {
    alert("Please write a Recipe name");
  } else {
    const selectedValue = selectElement.value;

    switch (selectedValue) {
      case "starter": {
        const list = document.getElementById("starter_list");
        let div = document.createElement("div");
        div.classList.add("starter");
        list.appendChild(div);

        let img = document.createElement("img");
        img.setAttribute("src", image.value);
        img.style.width = "200px";
        img.style.height = "300px";
        div.appendChild(img);

        let name = document.createElement("h3");
        name.textContent = recipename.value;
        div.appendChild(name);

        let description = document.createElement("p");
        description.textContent = Description.value.split("\n");
        div.appendChild(description);
        //new line from edit script
        description.classList.add("descriptions");

        let ingredient = document.createElement("p");
        ingredient.textContent = Ingredients.value.split("\n");
        div.appendChild(ingredient);
        //new line from edit script
        ingredient.classList.add("ingredients");

        let methods = document.createElement("p");
        methods.textContent = Method.value;
        //new line script
        methods.classList.add("methods");
        div.appendChild(methods);

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        //new line from edit script.js
        edit.classList.add("edit");
        div.appendChild(edit);

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);

        //new lines for fav
        fav.addEventListener("click", function () {
          // Clone the recipe and append it to the favorites list
          const favRecipeCopy = div.cloneNode(true);
          favorites.appendChild(favRecipeCopy);
  
          // Remove the "favorite" button from the cloned recipe in the favorites list
          favRecipeCopy.querySelector(".favourite").remove();
  
          // Save the updated favorites list
          saveFavorites();
        });

        break;
      }

      case "main":{
        const main = document.getElementById("maincourse_list");
        let div = document.createElement("div");
        div.classList.add("maincoursecard");
        main.appendChild(div);

        let img = document.createElement("img");
        img.setAttribute("src", image.value);
        img.style.width = "200px";
        img.style.height = "300px";
        div.appendChild(img);

        let name = document.createElement("h3");
        name.textContent = recipename.value;
        div.appendChild(name);

        let description = document.createElement("p");
        description.textContent = Description.value.split("\n");
        div.appendChild(description);
        //new line from edit script
        description.classList.add("descriptions");

        let ingredient = document.createElement("p");
        ingredient.textContent = Ingredients.value.split("\n");
        div.appendChild(ingredient);
        //new line from edit script
        ingredient.classList.add("ingredients");

        let methods = document.createElement("p");
        methods.textContent = Method.value;
        //new line script
        methods.classList.add("methods");
        div.appendChild(methods);

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        //new line from edit script.js
        edit.classList.add("edit");
        div.appendChild(edit);

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);

        //new lines for fav
        fav.addEventListener("click", function () {
          // Clone the recipe and append it to the favorites list
          const favRecipeCopy = div.cloneNode(true);
          favorites.appendChild(favRecipeCopy);
  
          // Remove the "favorite" button from the cloned recipe in the favorites list
          favRecipeCopy.querySelector(".favourite").remove();
  
          // Save the updated favorites list
          saveFavorites();
        });

        break;
      }

      case "dessert":{
        const des = document.getElementById("dessert_list");
        let div = document.createElement("div");
        div.classList.add("dessert");
        des.appendChild(div);

        let img = document.createElement("img");
        img.setAttribute("src", image.value);
        img.style.width = "200px";
        img.style.height = "300px";
        div.appendChild(img);

        let name = document.createElement("h3");
        name.textContent = recipename.value;
        div.appendChild(name);

        let description = document.createElement("p");
        description.textContent = Description.value.split("\n");
        div.appendChild(description);
        //new line from edit script
        description.classList.add("descriptions");

        let ingredient = document.createElement("p");
        ingredient.textContent = Ingredients.value.split("\n");
        div.appendChild(ingredient);
        //new line from edit script
        ingredient.classList.add("ingredients");

        let methods = document.createElement("p");
        methods.textContent = Method.value;
        //new line script
        methods.classList.add("methods");
        div.appendChild(methods);

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        //new line from edit script.js
        edit.classList.add("edit");
        div.appendChild(edit);

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);
        //new lines for fav
        fav.addEventListener("click", function () {
          // Clone the recipe and append it to the favorites list
          const favRecipeCopy = div.cloneNode(true);
          favorites.appendChild(favRecipeCopy);
  
          // Remove the "favorite" button from the cloned recipe in the favorites list
          favRecipeCopy.querySelector(".favourite").remove();
  
          // Save the updated favorites list
          saveFavorites();
        });

        break;
      }

      default:
        console.log("Invalid category");
        return;
    }

    recipename.value = "";
    image.value = "";
    Ingredients.value = "";
    Description.value = "";
    Method.value = "";
    hide();
    save();
  }
}

// Event listener for the "Add Recipe" link
view.addEventListener('click', function(){
    //call viewRecipe function when view recipe button is clicked
    viewRecipe(div);
console.log("file loading");
});

// View Recipe function
/*function viewRecipe() {
  const modal = document.getElementById("myModal");
  const ingredients = document.getElementById("modalIngredients");
  const method = document.getElementById("modalMethod");

  // Update the modal content
  ingredients.textContent = Ingredients.value;
  method.textContent = Method.value;

  // Display the modal
  modal.style.display = "block";
}*/

function viewRecipe(recipeElement) {
    // Extract the ingredients and method from the recipeElement
    let ingredients = recipeElement.querySelector(".ingredients").textContent;
    let method = recipeElement.querySelector(".methods").textContent;
  
    // Show the modal window with the ingredients and method
    showModal(ingredients, method);
  }
  
  // Function to show the modal window
  function showModal(ingredients, method) {
    // Get the modal and its content
    const modal = document.getElementById("myModal");
    const modalIngredients = document.getElementById("modalIngredients");
    const modalMethod = document.getElementById("modalMethod");
  
    // Set the content of the modal
    modalIngredients.textContent = ingredients;
    modalMethod.textContent = method;
  
    // Display the modal
    modal.style.display = "block";
  }

  // Function to hide the modal window
function hideModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Add an event listener to the close button in the modal window
  document.getElementById("closeModal").addEventListener("click", hideModal);

// Close the modal when the user clicks on the close button
document.getElementById("closeModal").addEventListener("click", function() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
});

// Close the modal when the user clicks anywhere outside of it
/*window.addEventListener("click", function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});*/

//new line script.js
show();

const recip = document.getElementById("starter_list");
recip.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    save();
    //new line fav
    saveFavorites();
  }
});

const maincourse = document.getElementById("maincourse_list");
maincourse.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    save();
    //new line fav
    saveFavorites();
  }
});

const dessert = document.getElementById("dessert_list");
dessert.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    save();
    //new line fav
    saveFavorites();
  }
});

favorites.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveFavorites();
  }
});

function save() {
  //localStorage.setItem("data", list.innerHTML);
  const recipes = {
    starter: list.innerHTML,
    main: main.innerHTML,
    dessert: des.innerHTML,
  };

  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function show() {
  //list.innerHTML = localStorage.getItem("data");
  const savedRecipes = localStorage.getItem("recipes");
  if (savedRecipes) {
    const recipes = JSON.parse(savedRecipes);
    list.innerHTML = recipes.starter || "";
    main.innerHTML = recipes.main || "";
    des.innerHTML = recipes.dessert || "";
  }
}

show();

//Edit Recipe
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('edit')) {
    editRecipe(e.target.parentElement);
  }
});

function editRecipe(recipeElement) {
  const name = recipeElement.querySelector('h3');
  const description = recipeElement.querySelector("p.descriptions");
  const ingredients = recipeElement.querySelector('p.ingredients');
  const method = recipeElement.querySelector('p.methods');

  // Show the add recipe form
  document.getElementById('add').style.display = 'block';

  // Populate the form fields with the recipe data
  document.getElementById('name').value = name.textContent;
  document.getElementById('Description_area').value = description.textContent;
  document.getElementById('Ingredients_area').value = ingredients.textContent;
  document.getElementById('Method_area').value = method.textContent;

  // Remove the existing recipe from the list
  recipeElement.remove();
  save();
}

//new line fav
function saveFavorites() {
  localStorage.setItem("favorites", favorites.innerHTML);
}

function showFavorites() {
  const savedFavorites = localStorage.getItem("favorites");
  if (savedFavorites) {
    favorites.innerHTML = savedFavorites;
  }
}

showFavorites();
