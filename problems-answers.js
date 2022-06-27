// Add two numbers together
export function sum(a, b) {
    return a + b;
}

// Use a template string
export function sayHello(name){
    return `Hello ${name}!`
}

// Cheer (repeat) a name x number of times
export function cheerName(name, times){
    return name.repeat(times)
}

// Reverse a word
export function reverseWord(word){
    return word.split("").reverse().join("");
}

// Check a string to see if it includes x
export function stringIncludes(word, x){
    return word.includes(x)
}

// Create empty array
export function createArray(length){
    return new Array(length)
}

// Add items to array
export function addToArray(array, item){
    array.push(item)
    return array
}

// Merge arrays
export function mergeArray(array, array2){
    return array.concat(array2)
}

// Print length of array
export function arrayLength(array){
    return `There are ${array.length} items in the array`
}

// Say hello to every name in an array
// We want to return ["hello name!", "hello name2!"]
export function sayHelloMultiple(arr){
    return arr.map(name => {
        return `Hello ${name}!`
    })
}

// Double every number
// NOTE: use forEach here
export function doubleAll(arr){
    arr.forEach(multiply)
    return arr
}

function multiply(item, index, arr){
    arr[index] = item * 2
}

// Only return even numbers, use modulo operator
export function removeNegativeNumbers(arr){
    return arr.filter(item => item % 2 == 0)
}