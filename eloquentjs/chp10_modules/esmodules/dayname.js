const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

// export keyword can be put in front of a function, class, or binding definition
export function dayName(number) {
    return names[number];
}

export function dayNumber(name) {
    return names.indexOf(name);
}

export default ["Winter", "Spring", "Summer", "Autumn"];