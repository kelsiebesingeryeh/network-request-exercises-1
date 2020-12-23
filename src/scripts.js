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

const newAnimal = {
    id: 5,
    name: "dolphin",
    diet: "fish, squid, shrimp, jellyfish",
    fun_fact: "dolphins have two stomachs"
}

fetch(url)
    .then((response) => response.json())
    .then((animals) => showAnimals(animals));


fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newAnimal),
})
  .then((response) => response.json())
  .then((newAnimal) => console.log(newAnimal));