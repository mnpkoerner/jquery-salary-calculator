$(document).ready(readyNow)
function readyNow() {
    $('#submitButton').on('click', runAndRender);
    $('#addEmployeeTable').on('click', '.deleteButton', deleteAndRender)
}
let employees = [];


function runAndRender() {
    let newEmployee = addToArray();
    emptyInputs();
    addToTable(newEmployee);
    calculateMonthlyExpenses(employees);
}

function deleteAndRender() {
    let delRow = $(this).parent().parent();
    deleteFromDom(delRow);
    //remove from the array
    //calculate
}

function deleteFromDom(deleter) {
    deleter.remove();
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

function addToTable(employee) {
    let newRow = $(`<tr class="employeeInTable tableRow">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button class="deleteButton">DELETE</button></td>
    `);
    $('#addEmployeeTable').append(newRow);
}

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
