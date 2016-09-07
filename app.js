/*************************************************************
  Bubble sort
*************************************************************/
//  Method 1:
function bubbleSort(array) {
  const sort = array.slice();

  for (let i = 0; i < sort.length; i++) {
    for (let j = 0; j < sort.length; j++) {
      if (sort[j+1] && sort[j] > sort[j + 1]) {
        let temp = sort[j];
        sort[j] = sort[j + 1];
        sort[j + 1] = temp;
      }
    }
  }
  return sort;
}

//  Method 2:
function bubblesort(array) {
  let sorted = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      sorted = false;
    }
  }
  return !sorted ? bubblesort(array) : array;
}
