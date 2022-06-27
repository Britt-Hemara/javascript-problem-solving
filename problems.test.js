import {
  sum, 
  sayHello, 
  cheerName,
  reverseWord,
  stringIncludes,
  createArray,
  addToArray,
  mergeArray,
  arrayLength,
  sayHelloMultiple,
  removeNegativeNumbers,
  doubleAll
} from './problems'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('says Hello there!', () => {
  expect(sayHello('there')).toBe('Hello there!');
});

test('says namenamename', () => {
  expect(cheerName('name', 3)).toBe('namenamename');
});

test('Reverses a word', () => {
  expect(reverseWord('word')).toBe('drow');
});

test('does string include x', () => {
  expect(stringIncludes('service', 'v')).toBe(true);
});

test('create an array of a given length', () => {
  expect(createArray(3)).toStrictEqual(new Array(3));
});

test('adds an item to array', () => {
  let arr = ["test"]
  let result = addToArray(arr, "test2")
  expect(result).toStrictEqual(["test", "test2"])
});

test('merge two arrays', () => {
  let arr = ["test"]
  let arr2 = ["test2"]
  expect(mergeArray(arr, arr2)).toStrictEqual(["test", "test2"])
});

test('print array length', () => {
  let arr = ["test", "test2", "test3"]
  expect(arrayLength(arr)).toBe(`There are 3 items in the array`)
});

test('say hello to everyone in the array', () => {
  let arr = ["frank", "mary", "kath"]
  expect(sayHelloMultiple(arr)).toEqual(["Hello frank!", "Hello mary!", "Hello kath!"])
});

test('double every number in an array', () => {
  let arr = [2, 3, 6, 9]
  expect(doubleAll(arr)).toEqual([4, 6, 12, 18])
});

test('return only positive numbers', () => {
  let arr = [2, 3, 6, 9]
  expect(removeNegativeNumbers(arr)).toEqual([2, 6])
});
