// min

let age = Number(prompt('Enter your age'))

if (age >= 1 && age < 12) {
  alert('You are child')
} else if (age >= 12 && age <= 17) {
  alert('you are teenager')
} else if (age >= 18 && age <= 59) {
  alert('You are adult')
} else if (age > 60) {
  alert('You are very old')
} else {
  alert('Plese enter the curent number your age')
}

let num = Number(prompt('Enter a number from 1 to 9'))

if (num === '1') {
  alert('!')
} else if (num === 2) {
  alert('@')
} else if (num === 3) {
  alert('#')
} else if (num === 4) {
  alert('$')
} else if (num === 5) {
  alert('%')
} else if (num === 6) {
  alert('^')
} else if (num === 7) {
  alert('&')
} else if (num === 8) {
  alert('*')
} else if (num === 9) {
  alert('(')
} else {
  alert('Plese enter the curent number')
}

alert('The sum of the numbers entered earlier ' + (age + num))

let num1 = prompt('Enter the number')

let num2 = prompt('Enter two number')

function gcd(num1, num2) {
  if (num2) {
    return gcd(num2, num1 % num2)
  } else {
    return Math.abs(num1)
  }
}

alert('The largest common divisor ' + gcd(num1, num2))

let numDivisor = prompt('Enter the number'),
  divisor = [],
  i = 1

while (i < numDivisor) {
  if (numDivisor % i == 0) divisor.push(i)

  i = i + 1
}

alert(divisor)
