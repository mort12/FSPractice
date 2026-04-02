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
//hideElement('selector-example');



// use push function to add the new developer to the developers array
function addDeveloper(devloper) {

}
// addDeveloper(smartassDeveloper);


// use sort function to order the developers by the number of skills they have, in descending order
function orderDevelopersBySkillCount(developers) {

}
//orderDevelopersBySkillCount(developers);


// use filter to create a new array of developers who have more than 5 skills
function getSkilledDevelopers(developers) {

}
// console.log(getSkilledDevelopers(developers));


// use map function to create a new array of strings with the format "Name - X skills"
function getDevelopersWithSkillCount(developers) {

}
// console.log(getDevelopersWithSkillCount(developers));


function createList(header, items, id) {
    // implement the function to create a list with the given header and items, and append it to the element with the given id
}
let developerNames = developers.map(d => d.name);
createList('Developers', developerNames, 'list-playground');

function highlightSkilledDevelopers() {

}
//highlightSkilledDevelopers();


function clearElement(id) {
    if(!id) {
        console.error('No id provided to clearElement function');
        return;
    }
    // implement the function to clear the content of the element with the given id
}
//clearElement();

function fillGrid(){

}