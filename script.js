const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("all-items");
const userInput = document.getElementById("user-input");
const deleteItems = document.getElementById("delete");

pencil.addEventListener("click", function () {
  allItems.innerHTML = "";
  pencil.classList.add("fa-square-pen");
  pencil.classList.remove("fa-square-xmark");
  pencil.style.color = "orange";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addItem();
  }
});

function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = userInput.value;
  h2.addEventListener("click", function () {
    h2.style.textDecoration = "line-through";
  });
  pencil.classList.remove("fa-square-pen");
  pencil.classList.add("fa-square-xmark");
  pencil.style.color = "#E5625E";
  allItems.insertAdjacentElement("beforeend", h2);
  userInput.value = "";
}
