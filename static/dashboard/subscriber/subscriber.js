'use strict';
console.log("DOM Loaded")

const body = document.querySelector('body')
body.addEventListener('onLoad', bodyLoaded())

//
function bodyLoaded() {
    // call all info
    getUserDetails();
}

function getUserDetails() {
    // need to make a backend call to get user info
    // username
    let name = "Username";
    document.getElementById("username").innerHTML = name;
    // balance
    let balance = 0.0;
    document.getElementById("balance").innerHTML = balance;
}