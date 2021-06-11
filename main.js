let form = document.querySelector("form");

let button = document.getElementById("edit-button");
let edit = document.getElementById("delete-button");
let editForm = document.getElementById("editForm");

let el = document.getElementById("li");

var recipeList = [];
var recipeIndex = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let description = document.getElementById("recipeSteps").value;
  let recipeName = document.getElementById("Recipe").value;
  let addIngridient = document.getElementById("addIngridient").value;
  let recipe = { recipeName, addIngridient, description };
  if (
    recipe.recipeName !== "" &&
    recipe.addIngridient !== "" &&
    recipe.description !== ""
  ) {
    recipeList.push(recipe);
  } else {
    alert(`You need to write something `);
  }
  displaysRecipe();
});
function displaysRecipe() {
  let list = document.querySelector("#List");
  list.innerHTML = "";
  for (let i = 0; i < recipeList.length; i++) {
    list.innerHTML += `<li>
    <h3>${recipeList[i].recipeName}</h3>
    <h1>${recipeList[i].description}</h1>
    <h2>${recipeList[i].addIngridient}</h2>
    <button onclick="editRecipe(${i})">Edit</button>
    <button onclick="deleteRecipe(${i})" >Delete</button>
    </li>`;
  }
}

function deleteRecipe(index) {
  // console.log(index);

  recipeList.splice(index, 1);
  displaysRecipe();
}

// console.log(recipeList);

function editRecipe(index) {
  recipeIndex = index;
  document.getElementById("editInput").value = recipeList[index].addIngridient;
}
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let edit = document.getElementById("editInput").value;
  recipeList[recipeIndex].addIngridient = edit;
  displaysRecipe();
});
