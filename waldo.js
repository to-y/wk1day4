
var list = ["Alice", "Bob", "Waldo", "Winston"]

list.forEach(function findWaldo(arr, i) {
   if (arr == "Waldo") {
      actionWhenFound(arr, i);   // execute callback
    }

})

function actionWhenFound(arr, index) {
  console.log("Found "+ arr + " at index " + index);
}

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

list.forEach(findBob = (arr,i) => {
  if (arr == "Bob") {
    actionWhenFound(arr, i);
  }

})