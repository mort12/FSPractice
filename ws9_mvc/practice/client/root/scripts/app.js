let smartphones = [];

function resetForm() {
    document.getElementById('id').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
    document.getElementById('screenSize').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('available').checked = false;

    let createButton = document.getElementById('create-smartphone-btn');
    createButton.hidden = false;
    let updateButton = document.getElementById('update-smartphone-btn');
    updateButton.hidden = true;
}

function getSmartphoneFromForm() {
    const id = document.getElementById('id').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const screenSize = document.getElementById('screenSize').value;
    const rating = document.getElementById('rating').value;
    const isAvailable = document.getElementById('available').checked;

    const smartphone = {
        id: id ? Number(id) : undefined,
        model: model,
        price: Number(price),
        screenSize: Number(screenSize),
        rating: Number(rating),
        isAvailable: Boolean(isAvailable)
    };

    return smartphone;
}

async function loadSmartphoneToForm(id) {
    let smartphone = smartphones.find(s => s.id === id);
    document.getElementById('id').value = smartphone.id;
    document.getElementById('model').value = smartphone.model;
    document.getElementById('price').value = smartphone.price;
    document.getElementById('screenSize').value = smartphone.screenSize;
    document.getElementById('rating').value = smartphone.rating;
    document.getElementById('available').checked = smartphone.isAvailable;

    let createButton = document.getElementById('create-smartphone-btn');
    createButton.hidden = true;
    let updateButton = document.getElementById('update-smartphone-btn');
    updateButton.hidden = false;
}

async function loadSmartphones() {
    const response = await fetch('http://localhost:5047/smartphoneapi');
    smartphones = await response.json();
    smartphones.sort((a, b) => b.id - a.id); 

    // change to displaySmartphones()
    console.log(smartphones);

    resetForm();
};
loadSmartphones();

function displaySmartphones() {

    // implement the function to display smartphones in the table

}

async function createSmartphone() {
    const smartphone = getSmartphoneFromForm();
    smartphone.id = undefined;

    // add fecth request to create smartphone

    await loadSmartphones();
}

async function deleteSmartphone(id) {
    if (confirm('Are you sure you want to delete this smartphone?')) {

        // add fecth request to delete smartphone

        await loadSmartphones();
    }
}

async function updateSmartphone() {
    const smartphone = getSmartphoneFromForm();

    // add fecth request to update smartphone

    await loadSmartphones();
}