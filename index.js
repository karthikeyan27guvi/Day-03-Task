//a.Print odd numbers in array
//anonymous function
const printOddNumbers =(arr) => {
    arr.forEach(num => {
        if (num %2 !== 0){
            console.log(num);
        }
    })
}
printOddNumbers([1,2,3,4,5,6,7,8,9]);

//IIFE
(function(arr) {
    arr.forEach(num =>{
        if (num %2 !== 0) {
            console.log(num);
        }
    })
})
printOddNumbers([1,2,3,4,5,6,7,8,9]);
//________________________________________________________________________________________

//b.convert all the strings to title caps in a string array:
//anonymous function
const convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(convertToTitleCaps(["hello", "coimbatore"]));

// IIFE
((arr) => {
    const result = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(result);
})(["hello", "coimbatore"]);
//__________________________________________________________________________________________

//c.Sum of all numbers in an array
// Anonymous Function
var arr = [1, 2, 3, 4, 5];

var sum = (function() {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})();

console.log(sum);

//IIFE
const arr = [1, 2, 3, 4, 5];

const sum = (function(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
})(arr);
console.log(sum);
//________________________________________________________________________________________
//d.Return all the prime numbers in an array
//anonymous

const arr = [1, 2, 3, 4, 5,6,7,8,9];

const getPrimeNumbers = (arr) => {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
};

console.log(getPrimeNumbers(arr));


//IIFE

const arr = [1, 2, 3, 4, 5,6,7,8,9];

((arr) => {
    const primes = arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
    console.log(primes);
})(arr);
//________________________________________________________________________________________
//e.Return all the palindromes in an array
//Anonymous

const arr = ["radar", "hello", "level"];

const getPalindromes = (arr) => {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

console.log(getPalindromes(arr));

//IIFE

const arr = ["radar", "hello", "level"];

((arr) => {
    const palindromes = arr.filter(str => str === str.split('').reverse().join(''));
    console.log(palindromes);
})(arr);
//____________________________________________________________________________________
//f.Return median of two sorted arrays of the same size
//anonymous
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const medianOfArrays = (arr1, arr2) => {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
        return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
    } else {
        return mergedArr[mid];
    }
};

console.log(medianOfArrays(arr1, arr2));

//IIFE

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

((arr1, arr2) => {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
        console.log((mergedArr[mid - 1] + mergedArr[mid]) / 2);
    } else {
        console.log(mergedArr[mid]);
    }
})(arr1, arr2);
//___________________________________________________________________________________________

//g.Remove duplicates from an array in anonymous and IIFE functions
//anonymous

const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
const removeDups = arr => [...new Set(arr)];
const result = removeDups(arr);
console.log(result);

//IIFE
const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
const result = (() => {
  const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
  return [...new Set(arr)];
})();
console.log(result);
//__________________________________________________________________________________________
//h.Rotate an array by k times
//anonymous
const rotateArray = (arr, k) => {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  console.log(rotateArray(arr.slice(), k));

  //IIFE

  const rotateArray = (() => {
    const rotate = (arr, k) => {
      for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
      }
      return arr;
    }
    return rotate;
  })();
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  console.log(rotateArray(arr.slice(), k));
  //_________________________________________________________________________________________