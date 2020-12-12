$(document).ready(readyNow)
function readyNow() {
    $('#submitButton').on('click', runAndRender);
    $('#addEmployeeTable').on('click', '.deleteButton', deleteAndRender)
}//Huge thanks to Mike Dunn on the dynamic click listener. I thought I understood how to write one
//after the color boxes assignment, but he helped troubleshoot this for me when I got stuck
let employees = [];


function runAndRender() {
    let newEmployee = addToArray();
    emptyInputs();
    addToTable(employees)
    calculateMonthlyExpenses(employees);
}

function deleteAndRender() {
    let deleteAtIndex = Number($(this).attr('id'));
    let rowToDelete = $(this).parent().parent();
    deleteFromDom(rowToDelete);
    deleteFromArray(deleteAtIndex);
    calculateMonthlyExpenses(employees);
    //remove from the array
    //calculate
}

function deleteFromDom(deleter) {
    deleter.remove();
}

function deleteFromArray(index) {
    employees.splice(index, 1);
    addToTable(employees);
}


function addToArray() {
    let newEmployee = {
        firstName: $('#employeeFirstName').val(),
        lastName: $('#employeeLastName').val(),
        employeeID: $('#employeeID').val(),
        title: $('#employeeTitle').val(),
        annualSalary: Number($('#employeeAnnualSalary').val()),
        monthlySalary: Number($('#employeeAnnualSalary').val()) / 12,
    }
    employees.push(newEmployee);
    console.log(employees)
    return newEmployee;
}

function emptyInputs() {
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#employeeAnnualSalary').val('');
    $('#employeeAnnualSalary').val('');
}

function addToTable(employees) {
    let header = $(`<tr class="tableRow">
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th>REMOVE</th>
        </tr>`)
    $('#addEmployeeTable').empty();
    $('#addEmployeeTable').append(header);
    let newRow
    for (let i = 0; i < employees.length; i++) {
        newRow = $(`<tr>
        <td>${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td>${employees[i].employeeID}</td>
        <td>${employees[i].title}</td>
        <td>${employees[i].annualSalary}</td>
        <td><button class="deleteButton" id="${i}">DELETE</button></td>`)
        $('#addEmployeeTable').append(newRow);
    }

}
//something is wrong, it deletes the table head


function calculateMonthlyExpenses(employeeArray) {
    let el = $('#footerTitle');
    el.empty();
    let sum = 0;
    for (employee of employeeArray) {
        sum += employee.monthlySalary;
    }
    if (sum > 20000) {
        el.append(`<span class="toRed">Total Monthly Expenses: $${Math.round(sum)}</span>`)
    }
    else if (sum <= 20000) {
        el.append(`<span>Total Monthly Expenses: $${Math.round(sum)}</span>`)
    }
}


// addToTable(newEmployee); original version, called inside runAndRender

// function addToTable(employee) {
//     let newRow = $(`<tr>
//         <td>${employee.firstName}</td>
//         <td>${employee.lastName}</td>
//         <td>${employee.employeeID}</td>
//         <td>${employee.title}</td>
//         <td>${employee.annualSalary}</td>
//         <td><button class="deleteButton" id="${employee.employeeID}">DELETE</button></td>
//     `);
//     $('#addEmployeeTable').append(newRow);
// }
//OG version just took the inputs, created an object, pushed it into an array, and printed that object on the DOM
//I pushed the object into the array to use later in calculating the monthly expenses,
//BUT
//wasn't populating the DOM with the contents of the array.
//Big thanks to Chris Emmerfol and Mike Dunn for sharing the idea of populating the DOM with
//the contents of the array. I implemented their idea in the updated add to table function
