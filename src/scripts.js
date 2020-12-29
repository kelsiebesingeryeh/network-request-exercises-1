const newAnimalForm = document.querySelector(".animalForm");
const deleteAnimalForm = document.querySelector(".deleteAnimalForm");

const newAnimalButton = document.querySelector(".new-animal-button");
const submitAnimalButton = document.querySelector(".submit-animal-button");
const removeAnimalButton = document.querySelector(".delete-animal-button");
const deleteAnimalButton = document.querySelector(".submit-delete-animal-button");

const animalIDInput = document.querySelector("#animalID");
const animalTypeInput = document.querySelector("#animalType");
const animalDietInput = document.querySelector("#animalDiet");
const animalFactInput = document.querySelector("#animalFact");
const deletedAnimalIDInput = document.querySelector("#deleteAnimalID");

window.addEventListener('load', () => {
  getAnimals();
})

newAnimalButton.addEventListener('click', () => {
  newAnimalForm.classList.remove('hidden');
  newAnimalButton.classList.add("hidden");
})

submitAnimalButton.addEventListener('click', () => {
 postAnimal();
})

removeAnimalButton.addEventListener('click', () => {
  deleteAnimalForm.classList.remove("hidden");
  removeAnimalButton.classList.add("hidden");
})

deleteAnimalButton.addEventListener('click', () => {
  deleteAnimal();
})

function getAnimals() {
  fetch(`http://localhost:3001/api/v1/animals`)
    .then((response) => response.json())
    .then((animals) => showAnimals(animals));
}

function showAnimals(animals) {
  const animalCard = document.querySelector(".animal-styling");
  const animalType = document.querySelector("article");
  animals.forEach((animal) => {
    const animalType = document.createElement("article");
    animalType.innerHTML = `<h1 class="animal-name">${animal.name}</h1>
    <div class="animal-info">
    <p>ID: ${animal.id}</p>
    <p>Diet: ${animal.diet}</p>
    <p>Fun Fact: ${animal.fun_fact}</p></div>`;
    animalCard.append(animalType);
  });
}

function postAnimal() {
  fetch(`http://localhost:3001/api/v1/animals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: animalIDInput.value,
      name: animalTypeInput.value,
      diet: animalDietInput.value,
      fun_fact: animalFactInput.value,
    }),
  })
    .then((response) => response.json())
    .then((animals) => getAnimals());
}

function deleteAnimal() {
  fetch(`http://localhost:3001/api/v1/animals/${deletedAnimalIDInput.value}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((animals) => getAnimals());
}