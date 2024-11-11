"use strict";
function add(one, two) {
    return one + two;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// object -> function -> method
const poorUser = {
    name: "zubi",
    balance: 0,
    addBalance(balance) {
        return `this is our amount ${this.balance + balance}`;
    },
};
const arr = [10, 11, 15];
const newArray = arr.map((e) => e * e);
