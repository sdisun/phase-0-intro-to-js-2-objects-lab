const employee = {
    name: "Sam",
    address: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee}
    newObj[key] = value;
    return newObj;
}

function destrictivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.address = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    delete employee.address;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {

}