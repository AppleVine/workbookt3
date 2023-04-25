let numbers = [1, 2, 3, 4, 5];

let filteredArr = numbers.filter((element) => {
    return element % 2 === 0;
  });
  
  console.log(filteredArr); // output: [2, 4]