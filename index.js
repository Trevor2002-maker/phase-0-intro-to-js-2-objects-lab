// Write your solution in this file!
const employee ={
    name:"Victoria",
    streetAddress:"9355-00200"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newObject ={...employee}
    newObject[key] = value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const delObject={...employee};
    delete delObject[key]
    return delObject;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}