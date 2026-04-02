let parisAttendees = [];
let iranAttendees = [];
let moonAttendees = [];

function register(e) {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let parisChecked = document.getElementById("paris").checked;
    let iranChecked = document.getElementById("iran").checked;
    let moonChecked = document.getElementById("moon").checked;

    if (!name || !address || !email || (!parisChecked && !iranChecked && !moonChecked)) {
        alert("Please fill in all fields and select a destination.");
        return;
    }

    let registration = {
        name: name,
        address: address,
        email: email
    };

    if (parisChecked) {
        parisAttendees.push(registration);
        updateList('paris-attendees', parisAttendees);
    }
    else if (iranChecked) {
        iranAttendees.push(registration);
        updateList('iran-attendees', iranAttendees);
    }
    else if (moonChecked) {
        moonAttendees.push(registration);
        updateList('moon-attendees', moonAttendees);
    }
    cleanForm();
}

function cleanForm() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("paris").checked = false;
    document.getElementById("iran").checked = false;
    document.getElementById("moon").checked = false;
}

function updateList(elementId, attendees) {
    let ul = document.getElementById(elementId);
    ul.innerHTML = "";
    attendees.forEach(attendee => {
        var li = document.createElement("li");
        li.innerHTML = attendee.name + " - " + attendee.email;
        li.addEventListener("click", highlightElement);
        ul.appendChild(li);
    });
}

function highlightElement(e){
    let element = e.target;
    element.classList.toggle("highlight");
}

function save() {
    localStorage.setItem("paris", JSON.stringify(parisAttendees));
    localStorage.setItem("iran", JSON.stringify(iranAttendees));
    localStorage.setItem("moon", JSON.stringify(moonAttendees));
}

function load() {
    parisAttendees = JSON.parse(localStorage.getItem("paris")) || [];
    iranAttendees = JSON.parse(localStorage.getItem("iran")) || [];
    moonAttendees = JSON.parse(localStorage.getItem("moon")) || [];

    updateList('paris-attendees', parisAttendees);
    updateList('iran-attendees', iranAttendees);
    updateList('moon-attendees', moonAttendees);
}