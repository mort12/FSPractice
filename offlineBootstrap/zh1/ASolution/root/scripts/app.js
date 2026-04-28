let characters = [];

function updateImage(event, imageElementId) {
    const selectedValue = event.target.value;
    const newImageName = selectedValue + '.png';
    const imageElement = document.getElementById(imageElementId);
    let pathElements = imageElement.src.split('/');
    var length = pathElements.length;
    var imgName = pathElements[length - 1];
    imageElement.src = imageElement.src.replace(imgName, newImageName);
}

function createCharacter(event) {
    event.preventDefault();
    const nameInput = document.getElementById('character-name');
    const name = nameInput.value.trim();
    if (!name) {
        alert('Please enter a character name.');
        return;
    }
    const tribe = document.getElementById('tribe-selector').value;
    const weapon = document.getElementById('weapon-selector').value;
    const animal = document.getElementById('animal-selector').value;
    const character = { name, tribe, weapon, animal };
    characters.push(character);
    displayCharacters();
    nameInput.value = '';
}

function displayCharacters() {
    const ul = document.getElementById('character-list');
    ul.innerHTML = '';
    characters.forEach(character => {
        const li = document.createElement('li');
        li.addEventListener("click", removeCharacter);
        li.classList.add('list-group-item');
        li.innerHTML = character.name + ' - ' + character.tribe + ', ' + character.weapon + ', ' + character.animal;
        ul.appendChild(li);
    });
}

function removeCharacter(event) {
    characters = characters.filter(character => character.name !== event.target.innerText.split(' - ')[0]);
    displayCharacters();
}

function saveCharacters() {
    var dataStr = JSON.stringify(characters);
    localStorage.setItem('characters', dataStr);
}

function loadCharacters() {
    var dataStr = localStorage.getItem('characters');
    if (!dataStr) {
        characters = [];
    }
    else {
        characters = JSON.parse(dataStr);
    }
    displayCharacters();
}