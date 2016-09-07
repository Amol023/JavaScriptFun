'use strict'
// /*************************************************************
//   Bubble sort
// *************************************************************/
// //  Method 1:
// function bubbleSort(array) {
//   const sort = array.slice();
//
//   for (let i = 0; i < sort.length; i++) {
//     for (let j = 0; j < sort.length; j++) {
//       if (sort[j+1] && sort[j] > sort[j + 1]) {
//         let temp = sort[j];
//         sort[j] = sort[j + 1];
//         sort[j + 1] = temp;
//       }
//     }
//   }
//   return sort;
// }
//
// //  Method 2:
// function bubblesort(array) {
//   let sorted = true;
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       let temp = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = temp;
//       sorted = false;
//     }
//   }
//   return !sorted ? bubblesort(array) : array;
// }
//
// /*************************************************************
//   Closure
// *************************************************************/
// //Classic closure example - to see that closures store REFERENCES to the variables
// //not the value of the variable itself --> Thus it takes the most updated value
//
// function celebId() {
//   var ID = 999;
//   return {
//     getID: function() {
//         return ID;
//     },
//     setID: function (n) {
//         ID = n;
//     }
//   }
// }
//
// var amolID = celebId();
//
// console.log(amolID.getID());
// amolID.setID(1000);
// console.log(amolID.getID());
//
// /*************************************************************
//   Are they the same?
//   function comp(a,b) -- should check if all element in array b
//   are the square of all the elements in array a
// *************************************************************/
//   function comp(array1, array2){
//     //your code here
//     var count = 0;
//     if (array1 === null || array2 === null) {
//       return false;
//     }
//     array1 = array1.sort((a,b) => a - b);
//     array2 = array2.sort((a,b) => a - b);
//
//     for (var i = 0; i < array1.length; i++) {
//       if (Math.pow(array1[i], 2) === array2[i]) {
//         count++;
//       }
//     }
//
//     if (count === array1.length) {
//       return true;
//     }
//     return false;
//   }
// //  Optimized/Favorite solution
//   function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
//   }
//
//   /*************************************************************
//     Alphabet Position
//   *************************************************************/
//   const alphabetObject = {
//     'a': 1,
//     'b': 2,
//     'c': 3,
//     'd': 4,
//     'e': 5,
//     'f': 6,
//     'g': 7,
//     'h': 8,
//     'i': 9,
//     'j': 10,
//     'k': 11,
//     'l': 12,
//     'm': 13,
//     'n': 14,
//     'o': 15,
//     'p': 16,
//     'q': 17,
//     'r': 18,
//     's': 19,
//     't': 20,
//     'u': 21,
//     'v': 22,
//     'w': 23,
//     'x': 24,
//     'y': 25,
//     'z': 26
//   }
//   function alphabetPosition(text) {
//     const strArr = text.toLowerCase().replace(/\s/g, '').split('');
//     const alphabetNum = [];
//
//     for (let i = 0; i < strArr.length; i++) {
//       if (alphabetObject[strArr[i]]) {
//         alphabetNum.push(alphabetObject[strArr[i]])
//       }
//     }
//     return alphabetNum.join(' ');
//   }
//   console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// //  Clever solution
//   let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

/*************************************************************
  Pascal's Triangle
*************************************************************/
// function pascal(depth) {
//   if (depth === 0) {
//     return [[]];
//   }
//   const pascalTriangle = [[1]];
//   for (let i = 0; i < depth - 1; i++) {
//     const subArray = [];
//     subArray.push(1);
//     for(let j = 0; j < pascalTriangle[i].length - 1; j++) {
//       if (pascalTriangle[i][j + 1]) {
//         subArray.push(pascalTriangle[i][j] + pascalTriangle[i][j + 1])
//       }
//     }
//     subArray.push(1)
//     pascalTriangle.push(subArray);
//   }
//   return pascalTriangle
// }

/*************************************************************
  Reverse words in a string
*************************************************************/
// function reverseWords(str) {
//   return str.split(' ').map((i) => i.split('').reverse().join('')).join(' ');
// }
// console.log(reverseWords('This is just an example of how you can write your own TDD tests'))


/*************************************************************
  Sudoku solution validator
*************************************************************/


function rotateMatrix (matrix) {
   const resultArr = [];
   let lastRow = matrix[matrix.length - 1];

   for (let newRow = 0; newRow < lastRow.length; newRow++) {
     const newRows = [];
     for (let newCol = matrix.length - 1; newCol >= 0; newCol--) {
       newRows.push(matrix[newCol][newRow]);
     }
     resultArr.push(newRows.reverse());
   }
   return resultArr;
 }

function validSolution(board) {
  const rotated = rotateMatrix(board);
  console.log(board == rotated)
  function compare(board, rotated) {
    for (let k = 0; k < board[0].length; k++) {
      for(var i = board[k].length; i--;) {
        if(board[k][i] !== rotated[k][i])
        return false;
      }
      return true;
      }
    }
  }

  console.log(compare(board, rotated))
  let valid = false;

  for (let i = 0 ; i < board.length; i++) {
    for(let j = 0 ; j < board[i].length; j++) {
      if (j !== (board[i].lastIndexOf(board[i][j])) || j !== (rotated[i].lastIndexOf(rotated[i][j]))) {
        return valid;
      }
    }
  }
  valid = true;
  return valid;
}

console.log(validSolution([ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
                            [ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
                            [ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],
                            [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
                            [ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
                            [ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],
                            [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
                            [ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
                            [ 9, 7, 8, 3, 1, 2, 6, 4, 5 ] ]))
