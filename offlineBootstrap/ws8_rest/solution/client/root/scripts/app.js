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

function displaySmartphones() {
    const listBody = document.getElementById('smartphone-list-body');
    listBody.innerHTML = '';
    smartphones.forEach(smartphone => {
        const row = document.createElement('tr');

        row.addEventListener('click', () => loadSmartphoneToForm(smartphone.id));

        const model = document.createElement('td');
        model.textContent = smartphone.model;
        row.appendChild(model);

        const price = document.createElement('td');
        price.textContent = smartphone.price;
        row.appendChild(price);

        const screensize = document.createElement('td');
        screensize.textContent = smartphone.screenSize;
        row.appendChild(screensize);

        const rating = document.createElement('td');
        rating.textContent = smartphone.rating;
        row.appendChild(rating);

        const availability = document.createElement('td');
        availability.textContent = smartphone.isAvailable;
        row.appendChild(availability);

        const action = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger';
        deleteButton.addEventListener('click', () => deleteSmartphone(smartphone.id));
        action.appendChild(deleteButton);
        row.appendChild(action);
        listBody.appendChild(row);
    });
}

async function loadSmartphones() {
    const response = await fetch('http://localhost:5047/smartphoneapi');
    smartphones = await response.json();

    smartphones.sort((a, b) => b.id - a.id);

    displaySmartphones();
    resetForm();
};
loadSmartphones();

async function createSmartphone() {
    const smartphone = getSmartphoneFromForm();
    smartphone.id = undefined;

    await fetch('http://localhost:5047/smartphoneapi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(smartphone)
    })

    await loadSmartphones();
}

async function updateSmartphone() {
    const smartphone = getSmartphoneFromForm();

    console.log(smartphone);

    await fetch(`http://localhost:5047/smartphoneapi`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(smartphone)
    });

    await loadSmartphones();
}

async function deleteSmartphone(id) {
    if (confirm('Are you sure you want to delete this smartphone?')) {

        await fetch(`http://localhost:5047/smartphoneapi/${id}`, {
            method: 'DELETE'
        });

        await loadSmartphones();
    }
}