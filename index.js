//Do the below programs in arrow functions.
//a.Print odd numbers in an array

const array = [1, 2, 3, 4, 5];

const printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(array);
//___________________________________________________________________________
//b.Convert all the strings to title caps in a string array

const arr = ["hi", "my", "name", "karthikeyan"];

const convertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

console.log(convertToTitleCaps(arr));
//_____________________________________________________________________________________
//c.Sum of all numbers in an array

const arr = [1, 2, 3, 4, 5];

const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumOfNumbers(arr));
//______________________________________________________________________________________
//d.Return all the prime numbers 

const arr = [1, 2, 3, 4, 5];

const getPrimeNumbers = arr => {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
};

console.log(getPrimeNumbers(arr));
//__________________________________________________________________________________________
//e.Return all the palindromes in an array 

const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => arr.filter(isPalindrome);

const arr = ['level', 'hello', 'madam', 'world', 'racecar'];
console.log(getPalindromes(arr));
//_________________________________________________________________________________________