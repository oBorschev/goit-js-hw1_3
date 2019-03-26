"use strict";

const country = prompt("Input your country");
let coast;

switch (country) {
  case "China":
    coast = 100;
    alert(`Delivery in ${country} will coast ${coast}`);
    break;

  case "South America":
    coast = 250;
    alert(`Delivery in ${country} will coast ${coast}`);
    break;

  case "Australia":
    coast = 170;
    alert(`Delivery in ${country} will coast ${coast}`);
    break;

  case "India":
    coast = 80;
    alert(`Delivery in ${country} will coast ${coast}`);
    break;

  case "Jamaica":
    coast = 170;
    alert(`Delivery in ${country} will coast ${coast}`);
    break;
}
