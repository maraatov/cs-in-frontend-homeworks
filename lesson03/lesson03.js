function fizzbuzz() {
  let counter = 0n;
  return {
    next: function() {
      counter++
      const multiple_of_five = (counter % 5n) === 0n
      const multiple_of_three = (counter % 3n) === 0n
      switch (true) {
        case multiple_of_three:
          return 'Fizz'
        case multiple_of_five:
          return 'Buzz'
        case multiple_of_three && multiple_of_five:
          return 'FizzBuzz'
        default:
          return counter
      }
    }
  }
}

const myFizzBazz = fizzbuzz();

console.log(myFizzBazz.next()) // 1n
console.log(myFizzBazz.next()) // 2n
console.log(myFizzBazz.next()) // Fizz
console.log(myFizzBazz.next()) // 4n
console.log(myFizzBazz.next()) // Buzz
