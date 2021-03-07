function firstFunction(name) {
    console.log("Hello firstFunction! My name is " + name) 
}

firstFunction("Marina")
firstFunction("Elena")
firstFunction("Dasha")

function buttonFunction(girlname) {
    alert("Желаю счатья и огромного здоровья, " + girlname + "! Цветочки под кнопкой специально для тебя!")
}

//функция, которая вычисляет квадрат числа
function square(x) {
    return x * x
}

console.log(square(5))

//функция, которая проверяет, является ли треугольник прямоугольным. Числа натуральные
function pifagor(x,y,z) {
     if ( x * x + y * y == z * z){
         return true
     } else {
         if ( x * x + z * z == y * y ){
             return true
         } else {
             if ( z * z + y * y == x * x) {
                 return true
             } else {
                 return false
             }
         }
     }
}

console.log(pifagor(4,5,3))
console.log(pifagor(100,6,3))
console.log(pifagor(1,2,3))

//Домашнее задание
//в дальнейшем я буду писать TODO, это значить, то что нужно сделать.
/*
1) Предложить более оптимальное решение задачи про прямоугольный треугольник
2) Сделать так, чтобы при нажатии на картинку, на экране выскакивало сообщение "Какие красивые цветочки!"
3) Написать функцию, на вход которой подается 3 числа, a,b,c. На выходе оно должно выдавать сумму ТОЛЬКО ЧЕТНЫХ чисел.
*/