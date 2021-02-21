console.log("Hello console!")

let num1 = 1
let num2 = 2
let sum = num1 + num2

console.log(sum)

// Операции с числами

console.log("1 + 2 = ", 1 + 2)
console.log("1 + 100 = ", 1 + 100)
console.log("0.1 + 0.2 = ", 0.1 + 0.2)
console.log("((1/3) + 5 - 5) * 3", ((1/3) + 5 - 5) * 3)
console.log("0.1", 0.1)

//Операции со сравнением чисел

console.log(" 1 === 2 true or false? ", 1 === 2)
console.log(" 1 === 1 true or false? ", 1 === 1)
console.log(" 0.1 + 0.2 === 0.3 true or false? ", 0.1 + 0.2 === 0.3)
console.log(" 0.3 - 0.2 - 0.1 < Number.MIN_VALUE", 0.3 - 0.2 - 0.1 < Number.MIN_VALUE)

// Операции со строками
let word1 = 'Hello'
let word2 = 'world'
let word3 = '!'

let sentence = word1 + ' ' + word2 + ' ' + word3

console.log(sentence)

console.log(" 'Hello' + ' ' + 'world' + ' ' + '!' = ", 'Hello' + ' ' + 'world' + ' ' + '!')
console.log("hello" - "o")

let len = sentence.length
console.log('длина ', len)

let lastChar = sentence.charAt(sentence.length - 1)
console.log(lastChar)

let sub = sentence.substring(1,4)
console.log(sub)

let i = sentence.indexOf('!')
console.log(i)

//операции со сравнением строк

console.log("'i' == 'i' = ", 'i' == 'i')
console.log("'23' == '23' = ", '23' == '23')
console.log("'23wef' == '90ekd' = ", '23wef' == '90ekd')

// операции со строками, числами и boolean 

console.log("'1' == 1", 1 == '1')
console.log("'1' === 1", 1 === '1')
console.log("'1' === true", true == '1')
console.log("'0' !== true", '0' !== true)
console.log("'0' == !true", '0' == !true)
console.log("!0 == true", !0 == true)

console.log("'1' + 1 = ", '1' + 1)
console.log("1 + '1' = ", 1 + '1')
console.log("1 - '1' = ", 1 - '1')
console.log("'11' - 1 = ", '11' - 1)
console.log("'11' - '1' = ", '11' - '1')
console.log("22 + '33' + 44 = ", 22 + '33' + 44)
console.log("22 + '33' - 44 + '55' = ", 22 + '33' - 44 + '55')