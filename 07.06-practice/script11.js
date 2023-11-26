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

const recipename = document.getElementById("name");// reference to the HTML element with the ID name, input from user
const Description = document.getElementById("Description_area");
const Ingredients = document.getElementById("Ingredients_area");
const Method = document.getElementById("Method_area");
const image = document.getElementById("image_src");
const list = document.getElementById("starter_list");
const main = document.getElementById("maincourse_list");
const des = document.getElementById("dessert_list");
const selectElement = document.getElementById("category-op");
const favorites = document.getElementById("favorites_list");

function addRecipe() {
  if (recipename.value === "") {
    alert("Please write a Recipe name");
  } else {
    const selectedValue = selectElement.value;

    switch (selectedValue) {
      case "starter": {
        const list = document.getElementById("starter_list");//represents list of starter recipes
        let div = document.createElement("div");//div element to hold recipe card created
        div.classList.add("starter");//adds starter to div element
        list.appendChild(div);//appends the newly created <div> element (representing the recipe card) as a child of the "starter_list" element. 

        let img = document.createElement("img");
        img.setAttribute("src", image.value);
        img.style.width = "150px";
        img.style.height = "200px";
        div.appendChild(img);

        let name = document.createElement("h3");//creates a new <h3> element 
        name.textContent = recipename.value;//textContent property of the newly created <h3> element (name) is set to the value of the recipename variable
        div.appendChild(name);//<h3> element with the updated textContent is now appended as a child to an existing HTML element referred to by the div variable

        let description = document.createElement("p");
        description.textContent = Description.value.split("\n");
        div.appendChild(description);
        description.classList.add("descriptions");

        let ingredient = document.createElement("p");
        ingredient.textContent = Ingredients.value.split("\n");
        div.appendChild(ingredient);
        ingredient.classList.add("ingredients");

        let methods = document.createElement("p");
        methods.textContent = Method.value;
        methods.classList.add("methods");
        div.appendChild(methods);

        let edit = document.createElement("button");//edit button created in memory not added
        edit.textContent = "Edit";
        edit.classList.add("edit");//adds a CSS class name "edit" to the button,adds the "edit" class to the button element.
        div.appendChild(edit); //Edit button added to div
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

        // Add an event listener to the "Favorite" button for newly added recipes
        fav.addEventListener("click", function () {
            handleFavoriteRecipe(div); //recipe card div passed as argument
           });

        let view=document.createElement("button");
        view.textContent="View Recipe";
        view.classList.add("view"); 
        div.appendChild(view);
        view.style.backgroundColor = "lightpink";
        view.style.cursor = "pointer";

        // Add an event listener to the "View Recipe" button
        view.addEventListener("click", function() {
          // Call the viewRecipe function when the button is clicked
          viewRecipe(div); //recipe card div passed as argument
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
        description.classList.add("descriptions");

        let ingredient = document.createElement("p");
        ingredient.textContent = Ingredients.value.split("\n");
        div.appendChild(ingredient);
        ingredient.classList.add("ingredients");

        let methods = document.createElement("p");
        methods.textContent = Method.value;
        methods.classList.add("methods");
        div.appendChild(methods);

        let edit = document.createElement("button");
        edit.textContent = "Edit";
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

        // Add an event listener to the "Favorite" button for newly added recipes
        fav.addEventListener("click", function () {
            handleFavoriteRecipe(div);
           });

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
        description.classList.add("descriptions");

        let ingredient = document.createElement("p");
        ingredient.textContent = Ingredients.value.split("\n");
        div.appendChild(ingredient);
        ingredient.classList.add("ingredients");

        let methods = document.createElement("p");
        methods.textContent = Method.value;
        methods.classList.add("methods");
        div.appendChild(methods);

        let edit = document.createElement("button");
        edit.textContent = "Edit";
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

        // Add an event listener to the "Favorite" button for newly added recipes
        fav.addEventListener("click", function () {
         handleFavoriteRecipe(div);
        });

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
      // If the user is editing a recipe
      // Remove the edited recipe from the list
      editedRecipeElement.remove();
      save();//saves the updated list of recipes to the local storage reflecting the removal of the edited recipe.
      
      // Reset the editingRecipe and editedRecipeElement variables
      editingRecipe = false;
      editedRecipeElement = null;
    }
    // Clear the form fields and hide the form
    recipename.value = "";
    image.value = "";
    Ingredients.value = "";
    Description.value = "";
    Method.value = "";
    hide();
    save();
}
  }

  //to view recipe ingredients and method in modal 
function viewRecipe(recipeElement) {
  let ingredients = recipeElement.querySelector(".ingredients").textContent;//selects the element with the class "ingredients" within the recipeElement (the clicked recipe card) and retrieves its text content.
  let method = recipeElement.querySelector(".methods").textContent;
    //new line to show ingredients and method
  showModal(ingredients, method);//passing the above extracted ingredients and method as arguments
}

function showModal(ingredients, method) { //takes extracted ingredients and method and displays in modal
  const modal = document.getElementById("myModal");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalMethod = document.getElementById("modalMethod");

  modalIngredients.textContent = ingredients;
  modalMethod.textContent = method;

  modal.style.display = "block";
}

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
recip.addEventListener("click", function (e) {//event listener is attached to the starter_list. When a click event occurs within the starter_list, the function is executed.
  if (e.target.classList.contains("delete")) {// check if the clicked element (the e.target) has the class "delete" 
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

function save() { //saving the current state of the respective recipe lists to local storage. 
  const recipes = {
    starter: list.innerHTML,//inner HTML contains the HTML elements that represent the recipe cards.
    main: main.innerHTML,
    dessert: des.innerHTML,
  };

  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function show() {
  const savedRecipes = localStorage.getItem("recipes");
  if (savedRecipes) {
    const recipes = JSON.parse(savedRecipes);//parse method is used to convert the JSON string back into a JavaScript object.
    list.innerHTML = recipes.starter;
    main.innerHTML = recipes.main;
    des.innerHTML = recipes.dessert;

    // Add event listener to "Favorite" buttons for existing recipes
    const favButtons = document.querySelectorAll(".favourite");//selects all elements in the document that have the class "favourite"
    favButtons.forEach((favButton) => {
      favButton.addEventListener("click", function () {//For each "Favorite" button (favButton), an event listener is added for the "click" event.
        handleFavoriteRecipe(favButton.parentElement);//parent element of the "Favorite" button (recipe card itself) as argument.
      });
    });
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
let editingRecipe = false; // Global variable to track whether the user is editing a recipe
let editedRecipeElement = null; // Global variable to store the edited recipe element
document.addEventListener('click', function(e) {// adds an event listener for the 'click' event on the entire document
    if (e.target.classList.contains('edit')) {//checks whether the clicked element (the target of the event) has the class 'edit'/contains method is used to check if the 'edit' class is present.
      editingRecipe = true; // Set the flag to true when the edit button is clicked
      editedRecipeElement = e.target.parentElement;//variable is used to store a reference to the recipe card that is being edited so that it can later be removed or updated.
      editRecipe(e.target.parentElement);//passed the parent element of the clicked button(recipe card) as an argument
    }
  });

function editRecipe(recipeElement) { //open add recipe form with prefilled data to edit/recipeElement passed implicitly represents recipe card
  const name = recipeElement.querySelector('h3');//querySelector finds element based on CSS h3 i,e name
  const description = recipeElement.querySelector('p.descriptions');
  const ingredients = recipeElement.querySelector('p.ingredients');
  const method = recipeElement.querySelector('p.methods');

  document.getElementById('add').style.display = 'block';//makes add recipe visible to edit data

  document.getElementById('name').value = name.textContent;// sets the value of the input element with the id 'name' to the text content of the name variable. This action pre-fills the name field with current name of recipe
  document.getElementById('Description_area').value = description.textContent;
  document.getElementById('Ingredients_area').value = ingredients.textContent;
  document.getElementById('Method_area').value = method.textContent;

  //recipeElement.remove();
  save();//called to update local storage with edited details
}

function handleFavoriteRecipe(recipeElement) {
    // Clone the recipe and append it to the favorites list
    const favRecipeCopy = recipeElement.cloneNode(true);//cloneNode(true) creates a deep clone of the recipe card and its children.
    favorites.appendChild(favRecipeCopy);//copy appended to favorites_list
  
    // Remove the "favorite" button from the cloned recipe in the favorites list
    favRecipeCopy.querySelector(".favourite").remove();
  
    // Remove the "edit" button from the cloned recipe in the favorites list
    favRecipeCopy.querySelector(".edit").remove();
  
    // Save the updated favorites list
    saveFavorites();
  }  

//new line fav
function saveFavorites() { //saving the current state of the favorites_list to local storage.
  localStorage.setItem("favorites", favorites.innerHTML);//sets the content of the favorites_list as the value for the "favorites" key in local storage 
}

function showFavorites() {
  const savedFavorites = localStorage.getItem("favorites");
  if (savedFavorites) {
    favorites.innerHTML = savedFavorites;
  }
}
showFavorites();
