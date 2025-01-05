// import {dayName} from "./dayname.js";
//
// let now = new Date();
// console.log(`Today is ${dayName(now.getDay())}`);

// import looki from "./dayname.js";
// console.log(looki);
// -> SyntaxError: The requested module './dayname.js' does not provide an export named 'default'

// import seasons, {dayName as nomDeJour} from "./dayname.js";
// console.log(nomDeJour(3));
// console.log(seasons[2]);

import seasons, * as dayName from "./dayname.js";
console.log(dayName.dayName(3));
console.log(seasons[2]);