"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const numResults2 = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObject) {
    console.log('object = ', resultObject.value);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log('result = ', result);
    numResults.push(result);
    console.log('numResults = ', numResults);
    printResult({ value: result, timestamp: new Date() });
});
const myPromise = new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle('It worked!');
    }, 1000);
});
myPromise.then((result) => { console.log(result.split('w')); });
