// set temp for kelvin
const kelvin = 293;

// converted kelvin to celsius
const celsius = kelvin - 273;

//calculate Fahrenheit
let fahrenheit = Math.floor(celsius*((9/5)+32));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
