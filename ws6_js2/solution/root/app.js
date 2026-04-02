import myJson from './developers.json' with {type: 'json'};
const developers = myJson.developers;

let smartassDeveloper = {
    name: 'Smartass Developer',
    age: 30,
    email: 'sm@smartass.com',
    skills: ['JavaScript', 'HTML', 'CSS', 'C#', 'Python', 'Java', 'Go', 'Rust', 'Swift', 'Kotlin', 'Ruby', 'PHP', 'SQL', 'NoSQL', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP']
};

// check the difference in the log output of getElementsByTagName and querySelectorAll when we add a new item to the list
function nodeListVSHTMLCollection() {
    let elements = document.getElementsByTagName('li');
    console.log(elements);
    let newItem = document.createElement('li');
    elements[0].parentNode.appendChild(newItem);
    console.log(elements);

    let elements2 = document.querySelectorAll('li');
    console.log(elements2);
    let newItem2 = document.createElement('li');
    elements2[0].parentNode.appendChild(newItem2);
    console.log(elements2);
    elements2 = document.querySelectorAll('li'); // querySelectorAll returns a static NodeList, so we need to re-query to see the new item
    console.log(elements2);
}
nodeListVSHTMLCollection();

// hide the element with the given id by setting its display style to 'none'
function hideElement(id) {
    if (!id) {
        console.error('No id provided to hideElement function');
        return;
    }
    let element = document.getElementById(id);
    element.style.display = 'none';
}
hideElement('selector-example');



// use push function to add the new developer to the developers array
function addDeveloper(devloper) {
    developers.push(devloper);
}
addDeveloper(smartassDeveloper);


// use sort function to order the developers by the number of skills they have, in descending order
function orderDevelopersBySkillCount(developers) {
    developers.sort((a, b) => b.skills.length - a.skills.length);
}
orderDevelopersBySkillCount(developers);


// use filter to create a new array of developers who have more than 5 skills
function getSkilledDevelopers(developers) {
    return developers.filter(d => d.skills.length > 5);
}
console.log(getSkilledDevelopers(developers));


// use map function to create a new array of strings with the format "Name - X skills"
function getDevelopersWithSkillCount(developers) {
    return developers.map(d => d.name + ' - ' + d.skills.length + ' skills');
}
console.log(getDevelopersWithSkillCount(developers));


function createList(header, items, id) {
    let elementPlayground = document.getElementById(id);
    let h4 = document.createElement('h4');
    h4.id = 'list-header';
    h4.textContent = header;
    elementPlayground.appendChild(h4);

    let ul = document.createElement('ul');
    ul.id = 'list';
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = items[i];
        ul.appendChild(li);
    }
    elementPlayground.appendChild(ul);
}
let developerNames = developers.map(d => d.name);
createList('Developers', developerNames, 'list-playground');

function highlightSkilledDevelopers() {
    let items = document.querySelectorAll('#list-playground' + ' ul' + ' li');
    let skilledDevelopers = getSkilledDevelopers(developers).map(d => d.name);
    items.forEach(item => {
        if (skilledDevelopers.includes(item.textContent)) {
            item.classList.add('highlighted-item');
        }
    });
}
highlightSkilledDevelopers();


function clearElement(id) {
    if (!id) {
        console.error('No id provided to clearElement function');
        return;
    }
    let element = document.getElementById(id);
    element.innerHTML = '';
}
clearElement();

function fillGrid() {
    fillGrid1();
    fillGrid2();
    fillGrid3();
}
fillGrid();

function fillGrid1() {
    clearElement('div1');
    let grid = document.getElementById('div1');
    let h4 = document.createElement('h4');
    h4.innerHTML = "Skilled Developers";
    grid.appendChild(h4);
    let developersWithMoreThan5Skills = getSkilledDevelopers(developers);
    developersWithMoreThan5Skills.forEach(d => {
        let p = document.createElement('p');
        p.innerHTML = d.name;
        grid.appendChild(p);
    });
}

function fillGrid2() {
    clearElement('div2');
    let grid = document.getElementById('div2');
    let h4 = document.createElement('h4');
    h4.innerHTML = "Developers with long names";
    grid.appendChild(h4);
    developers.forEach(d => {
        if(d.name.length > 12) {
            let p = document.createElement('p');
            p.innerHTML = d.name;
            grid.appendChild(p);
        }
    });
}

function fillGrid3() {
    clearElement('div3');
    let grid = document.getElementById('div3');
    let h4 = document.createElement('h4');
    h4.innerHTML = "Companies";
    grid.appendChild(h4);
    let companies = countDevelopersByCompanies(developers);
    for (const company in companies) {
        let p = document.createElement('p');
        p.innerHTML = company + ': ' + companies[company];
        if(companies[company] < 2) {
            p.classList.add('alert', 'alert-danger');
        }
        else if(companies[company] < 5) {
            p.classList.add('alert', 'alert-primary');
        }
        else{
            p.classList.add('alert', 'alert-success');
        }
        grid.appendChild(p);
    }
}

function countDevelopersByCompanies(developers) {
    let companies = {};
    developers.forEach(d => {
        let company = d.email.split('@')[1].split('.')[0];
        if (companies[company]) {
            companies[company]++;;
        } else {
            companies[company] = 1;
        }
    });
    return companies;
}