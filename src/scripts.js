const url = "http://localhost:3001/api/v1/animals";

function showAnimals(animals) {
  const animalCard = document.querySelector(".animal-styling");
  animals.forEach((animal) => {
    const animalType = document.createElement("article");
    animalType.innerHTML = `<div class="animal-name">${animal.name}</div>
        <div class="animal-info">
        <p>Diet: ${animal.diet}</p>
        <p>Fun Fact: ${animal.fun_fact}</p></div>`;
    animalCard.append(animalType);
  });
}

fetch(url)
  .then((response) => response.json())
  .then((animals) => showAnimals(animals));
