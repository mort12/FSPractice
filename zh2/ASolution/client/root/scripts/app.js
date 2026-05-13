function resetForm() {
    document.getElementById('pizza-id').value = '';
    document.getElementById('pizza-name').value = '';
    document.getElementById('pizza-description').value = '';
    document.getElementById('pizza-price').value = '';
}

async function fetchPizzas() {
    const response = await fetch('http://localhost:5566/pizzaapi');
    pizzas = await response.json();
    return pizzas;
}

async function loadPizzas() {
    const tableBody = document.getElementById('pizza-list-table-body');
    tableBody.innerHTML = '';
    let pizzas = await fetchPizzas();
    pizzas.forEach(pizza => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.innerHTML = pizza.id;
        row.appendChild(idCell);
        const nameCell = document.createElement('td');
        nameCell.innerHTML = pizza.name;
        row.appendChild(nameCell);
        const descriptionCell = document.createElement('td');
        descriptionCell.innerHTML = pizza.description;
        row.appendChild(descriptionCell);
        const priceCell = document.createElement('td');
        priceCell.innerHTML = pizza.price + '€';
        row.appendChild(priceCell);
        row.addEventListener('click', () => selectPizza(pizza));
        tableBody.appendChild(row);
    });
};
loadPizzas();

function selectPizza(pizza) {
    document.getElementById('pizza-id').value = pizza.id;
    document.getElementById('pizza-name').value = pizza.name;
    document.getElementById('pizza-price').value = pizza.price;
    document.getElementById('pizza-description').value = pizza.description;
}

function getPizzaFromForm() {
    const id = parseInt(document.getElementById('pizza-id').value);
    const name = document.getElementById('pizza-name').value;
    const description = document.getElementById('pizza-description').value;
    const price = parseFloat(document.getElementById('pizza-price').value);
        const pizza = {
        id: id,
        name: name,
        description: description,
        price: price
    };
    console.log('Pizza from form:', pizza);
    return pizza;
}

async function createPizza() {
    let pizza = getPizzaFromForm();
    pizza.id = undefined;
    await fetch('http://localhost:5566/pizzaapi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pizza)
    });
    resetForm();
    await loadPizzas();
}

async function updatePizza() {
    let pizza = getPizzaFromForm();
    await fetch(`http://localhost:5566/pizzaapi/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pizza)
    });
    resetForm();
    await loadPizzas();
}

async function deletePizza() {
    let pizza = getPizzaFromForm();
    await fetch(`http://localhost:5566/pizzaapi/${pizza.id}`, {
        method: 'DELETE'
    });
    resetForm();
    await loadPizzas();
}