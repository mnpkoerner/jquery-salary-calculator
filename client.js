$(document).ready(readyNow)
function readyNow() {
    $('#submitButton').on('click', runAndRender)
    $
}
let employees = [];


function runAndRender() {
    let newEmployee = addToArray();
    emptyInputs();
    addToTable(newEmployee);
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
    let newRow = $(`<tr class="employeeInTable">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button class="deleteButton">DELETE</button></td>
    `);
    $('#addEmployeeTable').append(newRow);
}
