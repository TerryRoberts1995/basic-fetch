const element = document.querySelector(".all-food-items");

fetch("http://127.0.0.1:5000/food/get")
  .then((response) => response.json())
  .then((response) => {
    response.map((item) => {
      const newItemElement = document.createElement("div");
      const newItemText = document.createTextNode(`${item.title}`);
      newItemElement.appendChild(newItemText);
      newItemElement.classList.add("food-item", `${item.menu_type}`);

      element.appendChild(newItemElement);
    });
  });
