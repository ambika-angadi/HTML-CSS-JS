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

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        //new line from edit script.js
        edit.classList.add("edit");
        div.appendChild(edit);

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);

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

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);

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

        break;}

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

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        //new line from edit script.js
        edit.classList.add("edit");
        div.appendChild(edit);

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);

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

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);

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

        break;}

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

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        //new line from edit script.js
        edit.classList.add("edit");
        div.appendChild(edit);

        let del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        div.appendChild(del);

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

        let fav=document.createElement("button");
        fav.textContent="Favourite";
        fav.classList.add("favourite"); 
        div.appendChild(fav);
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

        break;}

      default:
        console.log("Invalid category");
        return;
    }

    recipename.value = "";
    image.value = "";
    Ingredients.value = "";
    Method.value = "";
    hide();
    save();
  }
}
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
  
  
  