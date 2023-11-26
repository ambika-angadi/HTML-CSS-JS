// Event listener for the "Add Recipe" link
document.getElementById('addRecipeLink').addEventListener('click', add)

function add(){
document.getElementById("add").style.display="block";
}
function hide(){
document.getElementById("add").style.display="none";
}

const recipename=document.getElementById("name");
const Ingredients=document.getElementById("Ingredients_area");
const Method=document.getElementById("Method_area");
const image=document.getElementById("image_src");
const list=document.getElementById("starter_list");
const main=document.getElementById("maincourse_list");

function addRecipe(){
 if (recipename.value==""){
  alert("please write a Recipe name");
 }
 else{
  let div = document.createElement("div");
  div.classList.add("starter");
  list.appendChild(div);

  let img = document.createElement("img");
  img.setAttribute("src", image.value);
  img.style.width="200";
  img.style.height="300";
  div.appendChild(img);

  let name=document.createElement("h3");
  name.textContent=recipename.value;
  div.appendChild(name);

  // info
let edit=document.createElement("button");
  edit.textContent="Edit";
  edit.classList.add("edit"); 
  div.appendChild(edit);

  let del=document.createElement("button");
  del.textContent="Delete";
  del.classList.add("delete");
  div.appendChild(del);

  let ingredient=document.createElement("p");
  ingredient.textContent=Ingredients.value.split("\n");
  div.appendChild(ingredient);
  ingredient.classList.add("ingredients");

  let methods=document.createElement("p");
  methods.textContent=Method.value;
  methods.classList.add("methods");
  div.appendChild(methods);

  let fav=document.createElement("button");
  fav.textContent="Favourite";
  fav.classList.add("favourite"); 
  div.appendChild(fav);
  }
 recipename.value="";
 image.value="";
 Ingredients.value="";
 Method.value="";
 hide();
 save();
}
show();
const recip=document.getElementById("starter_list");
const maincourse=document.getElementById("maincourse_list");
recip.addEventListener("click", function (e) {
 
 if (e.target.classList.contains("delete")) {
  e.target.parentElement.remove();
  save();
 }
 else if (e.target.classList.contains("favourite")) {
    e.target.parentElement.innerHTML();
    save();
  }
});

function save(){
  localStorage.setItem("data",list.innerHTML);
  localStorage.setItem("data1", fav.innerHTML);
}
function show(){
  list.innerHTML= localStorage.getItem("data");
  list.innerHTML= localStorage.getItem("data1");
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

