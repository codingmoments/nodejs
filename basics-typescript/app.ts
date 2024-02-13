const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: number[] = [];
const numResults2: Array<number> = [];

type NumOrString = number | string;
type MyResult = { value: number; timestamp: Date };

interface ResultObject {
  value: number; timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObject: MyResult) {
  console.log('object = ', resultObject.value);
}

buttonElement.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  const result = add(+num1, +num2);
  console.log('result = ', result);
  numResults.push(result as number);
  console.log('numResults = ', numResults);
  printResult({ value: result as number, timestamp: new Date() });
})

const myPromise = new Promise<String>((resovle, reject) => {
  setTimeout(() => {
    resovle('It worked!');
  }, 1000);
});

myPromise.then((result) => { console.log(result.split('w')) });