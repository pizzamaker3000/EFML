// Как образом можно задать переменные? В чем отличие par от par2?
let par = 1
const par2 = 7
par = 100
console.log(par)
console.log(par2)
// Как можно задать функцию и как ее можно вызывать?
function func() {
    console.log("Привет я в функции fucn!")
}
func()
// Что такое область видимости переменной и функции?
let parFucn1 = 100
function func1() {
    let parInsideFunc1 = "Я в функции func1"
    console.log(parInsideFunc1)
    console.log(parFucn1)
}
func1()

//console.log(parInsideFunc1)

const func2 = (parFunc21, parFunc22, parFunc23) => {
    function funcInsidefunc2 () {
        console.log("Я функция funcInsidefunc2")
    }
    return funcInsidefunc2
}

//funcInsidefunc2()

func2()()

//Несколько примеров на сложение/вычитаение/проверку на true/false

console.log("0.1 + 0.2 = ", 0.1 + 0.2)
console.log("Привет + Саша = ", "Приввет" + "Саша")
console.log("Привет - Саша = ", "Приввет" - "Саша")
console.log("'4' + '5' = ", '4' + '5')
console.log("'4' - '5' = ", '4' - '5')
console.log("4 - '5' = ", 4 - '5')
console.log("4 + '5' = ", 4 + '5')
console.log("4 + 6 + '5' = ", 4 + 6 + '5')
console.log("'4' == 4 =" , '4' == 4)
console.log("'4' === 4 =" , '4' === 4)
console.log("false == 0 =" , false == 0)
console.log("true == 0 =" , true == 0)

//Напишем функцию для нахождения площади круга

function caltulatedSquareCircle(r) {
    return Math.PI * r * r
}

console.log(caltulatedSquareCircle(4))

//Напишем функцию, которая определяет, можно ли из 3 сторон сложить треугольник или нет
function isThisATriangle (a, b, c){
    if ( a + b <= c) {
        return false
    } else {
        if ( a + c <= b) {
            return false
        } else {
            if ( b + c <= a) {
                return false
            }
        }
    }
    return true
}

console.log(isThisATriangle (4, 5, 9))
console.log(isThisATriangle (3, 9, 15))
console.log(isThisATriangle (8, 9, 7))

//Задачи со строками
let srt = "Я хочу сыграть с тобой в шахматы"
console.log(srt.length)
console.log(srt.substring(srt.length-7))
console.log(srt.indexOf("сыграть"))
console.log(srt.charAt(5))

//Функция на нажатие кнопки
function buttonFunction(){
    console.log("Ты погладил свинюшку")
}

function mouseFunction(){
    console.log("Ты гладишь морскую свинку")
}