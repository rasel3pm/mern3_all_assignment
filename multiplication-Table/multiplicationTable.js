// Write a program that generates a multiplication table for a given number using a for loop.

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    //get multiplication result
    const result = i * num;

    const product = `${num} * ${i} = ${result}`;
    console.log(product);
  }
}

//function call
multiplicationTable(10);
