const indians = [
    { name: "Angry Cloud", tribe: "Cherokee", weapon: "Bow", animal: "Wolf" },
    { name: "Infected Mushroom", tribe: "Navajo", weapon: "Spear", animal: "Eagle" },
    { name: "Dancing River", tribe: "Sioux", weapon: "Tomahawk", animal: "Bear" },
    { name: "Silent Thunder", tribe: "Apache", weapon: "Knife", animal: "Buffalo" },
    { name: "Burning Leaf", tribe: "Mohawk", weapon: "Club", animal: "Horse" },
    { name: "Running Deer", tribe: "Cherokee", weapon: "Bow", animal: "Eagle" },
    { name: "Broken Arrow", tribe: "Navajo", weapon: "Spear", animal: "Bear" },
    { name: "Red Hawk", tribe: "Sioux", weapon: "Tomahawk", animal: "Buffalo" },
    { name: "Brave Otter", tribe: "Apache", weapon: "Knife", animal: "Horse" },
    { name: "Fast Fox", tribe: "Mohawk", weapon: "Club", animal: "Wolf" },
    { name: "Blue Feather", tribe: "Cherokee", weapon: "Bow", animal: "Bear" },
    { name: "White Eagle", tribe: "Navajo", weapon: "Spear", animal: "Buffalo" },
    { name: "Golden Sun", tribe: "Sioux", weapon: "Tomahawk", animal: "Horse" },
    { name: "Shadow Moon", tribe: "Apache", weapon: "Knife", animal: "Wolf" },
    { name: "Wild Horse", tribe: "Mohawk", weapon: "Club", animal: "Eagle" },
    { name: "Thunder Bird", tribe: "Cherokee", weapon: "Bow", animal: "Buffalo" },
    { name: "Iron Bear", tribe: "Navajo", weapon: "Spear", animal: "Horse" },
    { name: "Crying Wind", tribe: "Sioux", weapon: "Tomahawk", animal: "Wolf" },
    { name: "Painted Turtle", tribe: "Apache", weapon: "Knife", animal: "Eagle" },
    { name: "Laughing Brook", tribe: "Mohawk", weapon: "Club", animal: "Bear" }
];
const tribeValues = { "Cherokee": 3, "Navajo": 4, "Sioux": 5, "Apache": 2, "Mohawk": 1 }
const weaponValues = { "Bow": 5, "Spear": 3, "Tomahawk": 3, "Knife": 4, "Club": 2 }
const animalValues = { "Wolf": 2, "Eagle": 3, "Bear": 4, "Buffalo": 3, "Horse": 5 }

function calculateScore(indian) {
    return tribeValues[indian.tribe] + weaponValues[indian.weapon] + animalValues[indian.animal];
}

let actualIndian = null;

function fillPopulation() {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';

    for (const indian of indians) {
        const listItem = document.createElement('li');
        listItem.textContent = indian.name;
        listItem.addEventListener('click', selectIndian);
        characterList.appendChild(listItem);
    }
}
fillPopulation();

function selectIndian(event) {
    let selectedIndians = document.querySelectorAll('.selected');
    selectedIndians.forEach(indian => indian.classList.remove('selected'));

    const selectedIndian = event.target;
    selectedIndian.classList.add('selected');
    actualIndian = indians.find(ind => ind.name === selectedIndian.textContent);
    actualIndian.score = calculateScore(actualIndian);
    showDetails();
    displayAppearance();
}

function showDetails() {
    const nameLabel = document.getElementById('name');
    const tribeLabel = document.getElementById('tribe');
    const weaponLabel = document.getElementById('weapon');
    const animalLabel = document.getElementById('animal');
    const scoreLabel = document.getElementById('score');
    nameLabel.textContent = actualIndian.name;
    tribeLabel.textContent = actualIndian.tribe;
    weaponLabel.textContent = actualIndian.weapon;
    animalLabel.textContent = actualIndian.animal;
    scoreLabel.textContent = actualIndian.score;
}

function displayAppearance() {
    let appearance = document.getElementById('appearance');
    appearance.innerHTML = '';
    const img = document.createElement('img');
    if (actualIndian.score >= 12) {
        img.src = './images/Experienced.png';
        img.alt = 'Experienced character';
    } else {
        img.src = './images/Average.png';
        img.alt = 'Average character';
    }
    appearance.appendChild(img);
}

function addToFavorites() {
    if (actualIndian) {
        const favoriteList = document.getElementById('favorite-list');
        if(favoriteList.textContent.includes(actualIndian.name)) {
            return;
        }
        const listItem = document.createElement('li');
        listItem.textContent = actualIndian.name;
        favoriteList.appendChild(listItem);        
    }
}