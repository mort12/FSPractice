function resetForm() {
    document.getElementById('order-id').value = '';
    document.getElementById('order-customer').value = '';
    document.getElementById('order-address').value = '';
    document.getElementById('order-item').value = '';
    document.getElementById('order-quantity').value = '';
}

async function fetchOrders() {
    const response = await fetch('http://localhost:5511/orderapi');
    orders = await response.json();
    return orders;
}

async function loadOrders() {
    const tableBody = document.getElementById('order-list-table-body');
    tableBody.innerHTML = '';
    let orders = await fetchOrders();
    orders.forEach(order => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.innerHTML = order.id;
        row.appendChild(idCell);
        const customerCell = document.createElement('td');
        customerCell.innerHTML = order.customer;
        row.appendChild(customerCell);
        const addressCell = document.createElement('td');
        addressCell.innerHTML = order.address;
        row.appendChild(addressCell);
        const itemCell = document.createElement('td');
        itemCell.innerHTML = order.item;
        row.appendChild(itemCell);
        const quantityCell = document.createElement('td');
        quantityCell.innerHTML = order.quantity;
        row.appendChild(quantityCell);
        row.addEventListener('click', () => selectOrder(order));
        tableBody.appendChild(row);
    });
};
loadOrders();

function selectOrder(order) {
    document.getElementById('order-id').value = order.id;
    document.getElementById('order-customer').value = order.customer;
    document.getElementById('order-address').value = order.address;
    document.getElementById('order-item').value = order.item;
    document.getElementById('order-quantity').value = order.quantity;
}

function getOrderFromForm() {
    const id = parseInt(document.getElementById('order-id').value);
    const customer = document.getElementById('order-customer').value;
    const address = document.getElementById('order-address').value;
    const item = document.getElementById('order-item').value;
    const quantity = parseInt(document.getElementById('order-quantity').value);
        const order = {
        id: id,
        customer: customer,
        address: address,
        item: item,
        quantity: quantity
    };
    console.log('Order from form:', order);
    return order;
}

async function createOrder() {
    let order = getOrderFromForm();
    order.id = undefined;
    await fetch('http://localhost:5511/orderapi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    });
    resetForm();
    await loadOrders();
}

async function updateOrder() {
    let order = getOrderFromForm();
    await fetch(`http://localhost:5511/orderapi/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    });
    resetForm();
    await loadOrders();
}

async function deleteOrder() {
    let order = getOrderFromForm();
    await fetch(`http://localhost:5511/orderapi/${order.id}`, {
        method: 'DELETE'
    });
    resetForm();
    await loadOrders();
}