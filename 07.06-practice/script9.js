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
        img.style.width = "150px";
        img.style.height = "200px";
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
        edit.style.backgroundColor = "lightpink";
        edit.style.cursor = "pointer";

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);
        del.style.backgroundColor = "lightpink";
        del.style.cursor = "pointer";

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);
        fav.style.backgroundColor = "lightpink";
        fav.style.cursor = "pointer";

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);
        view.style.backgroundColor = "lightpink";
        view.style.cursor = "pointer";

        // Add an event listener to the "View Recipe" button
        view.addEventListener("click", function() {
          // Call the viewRecipe function when the button is clicked
          viewRecipe(div);
        });

        //new lines for fav
        fav.addEventListener("click", function () {
            // Clone the recipe and append it to the favorites list
            const favRecipeCopy = div.cloneNode(true);
            favorites.appendChild(favRecipeCopy);
        
            // Remove the "favorite" button from the cloned recipe in the favorites list
            favRecipeCopy.querySelector(".favourite").remove();

            //Remove the edit butto from the favourites list
            favRecipeCopy.querySelector(".edit").remove();
        
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
        img.style.width = "150px";
        img.style.height = "200px";
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
        edit.style.backgroundColor = "lightpink";
        edit.style.cursor = "pointer";

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);
        del.style.backgroundColor = "lightpink";
        del.style.cursor = "pointer";

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);
        fav.style.backgroundColor = "lightpink";
        fav.style.cursor = "pointer";

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);
        view.style.backgroundColor = "lightpink";
        view.style.cursor = "pointer";

        // Add an event listener to the "View Recipe" button
        view.addEventListener("click", function() {
          // Call the viewRecipe function when the button is clicked
          viewRecipe(div);
        });

        //new lines for fav
        fav.addEventListener("click", function () {
            // Clone the recipe and append it to the favorites list
            const favRecipeCopy = div.cloneNode(true);
            favorites.appendChild(favRecipeCopy);
        
            // Remove the "favorite" button from the cloned recipe in the favorites list
            favRecipeCopy.querySelector(".favourite").remove();

            //Remove the edit butto from the favourites list
            favRecipeCopy.querySelector(".edit").remove();
        
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
        img.style.width = "150px";
        img.style.height = "200px";
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
        edit.style.backgroundColor = "lightpink";
        edit.style.cursor = "pointer";

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);
        del.style.backgroundColor = "lightpink";
        del.style.cursor = "pointer";

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);
        fav.style.backgroundColor = "lightpink";
        fav.style.cursor = "pointer";

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);
        //button colour
        view.style.backgroundColor = "lightpink";


        // Add an event listener to the "View Recipe" button
        view.addEventListener("click", function() {
          // Call the viewRecipe function when the button is clicked
          viewRecipe(div);
        });

        //new lines for fav
        fav.addEventListener("click", function () {
            // Clone the recipe and append it to the favorites list
            const favRecipeCopy = div.cloneNode(true);
            favorites.appendChild(favRecipeCopy);
        
            // Remove the "favorite" button from the cloned recipe in the favorites list
            favRecipeCopy.querySelector(".favourite").remove();

            //Remove the edit butto from the favourites list
            favRecipeCopy.querySelector(".edit").remove();
        
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

    //new lines for edit
    if (editingRecipe) {
      // If the user is editing a recipe and clicks the "Add Recipe Card" button,
      // we handle the edited recipe here
  
      // ... (your existing code to create the recipe card)
  
      // Remove the edited recipe from the list
      editedRecipeElement.remove();
      save();
      
      // Reset the editingRecipe and editedRecipeElement variables
      editingRecipe = false;
      editedRecipeElement = null;
    } else {
      // If the user is adding a new recipe and clicks the "Add Recipe Card" button,
      // we add the new recipe here
  
      // ... (your existing code to create the recipe card)
    }
    // Clear the form fields and hide the form
  recipename.value = "";
  image.value = "";
  Ingredients.value = "";
  Description.value = "";
  Method.value = "";
  hide();
}
  }

function viewRecipe(recipeElement) {
  let ingredients = recipeElement.querySelector(".ingredients").textContent;
  let method = recipeElement.querySelector(".methods").textContent;
    //new line to show ing and method
  showModal(ingredients, method);
  //showModal(ingredients.textContent, method.textContent);
}

function showModal(ingredients, method) {
  const modal = document.getElementById("myModal");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalMethod = document.getElementById("modalMethod");

  modalIngredients.textContent = ingredients;
  modalMethod.textContent = method;

  modal.style.display = "block";
}

//new lines 
// Event listener for the view recipe button
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("view")) {
    const recipeElement = e.target.parentElement;
    viewRecipe(recipeElement);
    saveView(recipeElement);
  }
});

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

document.getElementById("closeModal").addEventListener("click", hideModal);
//saveView();

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
  const recipes = {
    starter: list.innerHTML,
    main: main.innerHTML,
    dessert: des.innerHTML,
  };

  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function show() {
  const savedRecipes = localStorage.getItem("recipes");
  if (savedRecipes) {
    const recipes = JSON.parse(savedRecipes);
    /*list.innerHTML = recipes.starter || "";
    main.innerHTML = recipes.main || "";
    des.innerHTML = recipes.dessert || "";*/
    list.innerHTML = recipes.starter;
    main.innerHTML = recipes.main;
    des.innerHTML = recipes.dessert;
  }
}
show();

// Function to save the view recipe to localStorage
function saveView(recipeElement) {
  const ingredients = recipeElement.querySelector(".ingredients").textContent;
  const method = recipeElement.querySelector(".methods").textContent;

  const viewRecipeData = {
    ingredients: ingredients,
    method: method
  };
  localStorage.setItem("viewRecipeData", JSON.stringify(viewRecipeData));
}

// Function to retrieve and display the saved view recipe data in the modal
function showView() {
  const savedViewRecipeData = localStorage.getItem("viewRecipeData");
  if (savedViewRecipeData) {
    const viewRecipeData = JSON.parse(savedViewRecipeData);
    showModal(viewRecipeData.ingredients, viewRecipeData.method);
  }
}

//Edit Recipe

//new lines
let editingRecipe = false; // Global variable to track whether the user is editing a recipe
let editedRecipeElement = null; // Global variable to store the edited recipe element
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit')) {
      //new line
      editingRecipe = true; // Set the flag to true when the edit button is clicked
      editedRecipeElement = e.target.parentElement;
      editRecipe(e.target.parentElement);
    }
  });

function editRecipe(recipeElement) {
  const name = recipeElement.querySelector('h3');
  const description = recipeElement.querySelector('p.descriptions');
  const ingredients = recipeElement.querySelector('p.ingredients');
  const method = recipeElement.querySelector('p.methods');

  document.getElementById('add').style.display = 'block';

  document.getElementById('name').value = name.textContent;
  document.getElementById('Description_area').value = description.textContent;
  document.getElementById('Ingredients_area').value = ingredients.textContent;
  document.getElementById('Method_area').value = method.textContent;

  //recipeElement.remove();
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
