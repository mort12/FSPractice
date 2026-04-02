import myJson from './developers.json' with {type: 'json'};
const developers = myJson.developers;

function averageAge(developers) {
    let totalAge = 0;
    for (let i = 0; i < developers.length; i++) {
        const developer = developers[i];
        totalAge += developer.age;
    }
    const average = totalAge/developers.length;
    document.getElementById('Q1').textContent = average.toFixed(2);
    return average;
}
averageAge(developers);

function averageSalaryOfFrontend(developers) {
    let count = 0;
    let totalSalary = 0;
    let frontendDevelopers = developers.filter(frontendFilter);
    for (let i = 0; i < frontendDevelopers.length; i++) {
        const developer = frontendDevelopers[i];    
        totalSalary += developer.salary;
        count++;
    }
    const average = totalSalary / count;
    document.getElementById('Q2').textContent = average.toFixed(2);    
    return average;
}

function frontendFilter(developer) {
  return developer.job === "Frontend Developer";
}
averageSalaryOfFrontend(developers);

function mostSkilledDeveloper(developers) {
    let maxSkillIndex = 0;
    for (let i = 1; i < developers.length; i++) {
        const developer = developers[i];
        if(developer.skills.length > developers[maxSkillIndex].skills.length) {
            maxSkillIndex = i;
        }
    }
    const mostSkilled = developers[maxSkillIndex];
    document.getElementById('Q3').textContent = mostSkilled.name;
    return mostSkilled;
}
mostSkilledDeveloper(developers);

function biggestCompany(developers) {
    let companies = {};
    for (let i = 1; i < developers.length; i++) {
        const developer = developers[i];
        let company =developer.email.split('@')[1].split('.')[0];
        if(companies[company]) {
            companies[company]++;
        } else {
            companies[company] = 1;
        }
    }
    let maxCompany = '';
    let maxCount = 0;
    for (let company in companies) {
        if (companies[company] > maxCount) {
            maxCount = companies[company];
            maxCompany = company;
        }
    }
    document.getElementById('Q4').textContent = maxCompany;
    return maxCompany;
}
biggestCompany(developers);

function youngestDeveloperSalary(developers) {
    let minAgeIndex = 0;
    for (let i = 1; i < developers.length; i++) {
        const developer = developers[i];
        if(developer.age < developers[minAgeIndex].age) {
            minAgeIndex = i;
        }
    }
    const youngest = developers[minAgeIndex];
    document.getElementById('Q5').textContent = youngest.name + " - "+ youngest.salary;
    return youngest;
}
youngestDeveloperSalary(developers);

function salaryDifferenceOfYoungestAndOldestDevelopers(developers) {
    let youngest = youngestDeveloper(developers);
    let oldest = oldestDeveloper(developers);
    const difference = Math.abs(oldest.salary - youngest.salary);
    document.getElementById('Q6').textContent = difference;
    return difference;
}

function youngestDeveloper(developers) {
    let minAgeIndex = 0;
    for (let i = 1; i < developers.length; i++) {
        const developer = developers[i];
        if(developer.age < developers[minAgeIndex].age) {
            minAgeIndex = i;
        }
    }
    const youngest = developers[minAgeIndex];
    return youngest;
}

function oldestDeveloper(developers) {
    let maxAgeIndex = 0;
    for (let i = 1; i < developers.length; i++) {
        const developer = developers[i];
        if(developer.age > developers[maxAgeIndex].age) {
            maxAgeIndex = i;
        }
    }
    const oldest = developers[maxAgeIndex];
    return oldest;
}
salaryDifferenceOfYoungestAndOldestDevelopers(developers);

function averageSalariesByJobs(developers) {
    let salaries = {};
    for (let i = 0; i < developers.length; i++) {
        const developer = developers[i];
        if(salaries[developer.job]) {
            salaries[developer.job].push(developer.salary);
        } else {
            salaries[developer.job] = [developer.salary];
        }    
    }
    loadTableData(salaries)
    return salaries;
}

function average(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

function loadTableData(salaries) {
    const table = document.getElementById('Q7');
    //table.innerHTML = "";
    for (let job in salaries) {
        const averageSalary = average(salaries[job]);
        const row = table.insertRow();
        const jobCell = row.insertCell(0);
        const salaryCell = row.insertCell(1);
        jobCell.textContent = job;
        salaryCell.textContent = averageSalary.toFixed(2);
        salaryCell.classList.add('salary-cell');
    }
}

averageSalariesByJobs(developers);

function formatTableStyle() {
    const table = document.getElementById('Q7');
    const cells = table.getElementsByClassName('salary-cell');
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        let cellStyle = cell.style;
        let cellValue = cell.textContent;
        if(cellValue > 700000){
            cellStyle.color = 'green';
        }
        else if(cellValue > 400000){
            cellStyle.color = 'yellow';
        }
        else{
            cellStyle.color = 'red';
        }
    }
}
formatTableStyle();