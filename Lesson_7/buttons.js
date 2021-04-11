let numberOfScenario = 1
let numberOfCups = 1
let numberOfDiamonds = 1 

let timerId = setInterval(() => {
    if (numberOfCups < 5) {
        numberOfCups++
        let cups = document.getElementById("cups")
        cups.innerHTML = "Количество чашечек: " + numberOfCups
    }  
}, 3000);

function nextMove() {
    let text = document.getElementById("changeText")
    let img = document.getElementById("changeImg")
    let butGTS = document.getElementById("buttonGoToStart")
    let cups = document.getElementById("cups")

    if (numberOfCups != 0) {
        showMeNewScenario(text, img, numberOfScenario, butGTS)
        numberOfScenario++
        numberOfCups--
        cups.innerHTML = "Количество чашечек: " + numberOfCups
    } 
}

function goToStart(){
    let text = document.getElementById("changeText")
    let img = document.getElementById("changeImg")
    let butGTS = document.getElementById("buttonGoToStart")
    let cups = document.getElementById("cups")
    let diamonds = document.getElementById("diamonds")

    numberOfScenario = 1
    numberOfDiamonds = 1
    numberOfCups = 1

    text.innerHTML = "НАЧАЛО!!!"
    img.src = "1.jpg"
    butGTS.style.display = "none"
    cups.innerHTML = "Количество чашечек: " + numberOfCups
    diamonds.innerHTML = "Количество бриллиантов: " + numberOfDiamonds

}

function showMeNewScenario(element, img, numberOfScenario, butGTS) {
    switch (numberOfScenario) {
        case 1:   
            element.innerHTML = "Мой первый сценарий"
            break;
        case 2:   
            element.innerHTML = "Мой второй сценарий"
            break;
        case 3:   
            element.innerHTML = "Мой третий сценарий"
            img.src = "2.jpeg"
            break;
        case 4:   
            element.innerHTML = "Мой четвертый сценарий"
            questionsOn(4)
            break;
        case 5:   
            element.innerHTML = "Мой пятый сценарий"
            break;
        default:    
            element.innerHTML = "КОНЕЦ!!!"
            butGTS.style.display = ""
      }
}

function questionsOn(number) {
    let blockQuestions = document.getElementById("blockQuestions")
    let firstAns = document.getElementById("firstAns")
    let secondAns = document.getElementById("secondAns")
    let thirdAns = document.getElementById("thirdAns")
    let fourthAns = document.getElementById("fourthAns")
    let buttonNextMove = document.getElementById("buttonNextMove")

    blockQuestions.style.display = ""
    buttonNextMove.style.display = "none"

    switch(number) {
        case 4:
            firstAns.onclick = () => calculateDiamonds(1, buttonNextMove, blockQuestions)
            secondAns.onclick = () => calculateDiamonds(-1, buttonNextMove, blockQuestions)
            thirdAns.onclick = () => calculateDiamonds(2, buttonNextMove, blockQuestions)
            fourthAns.onclick = () => calculateDiamonds(-2, buttonNextMove, blockQuestions)

            firstAns.innerHTML = "Получить 1 бриллиант"
            secondAns.innerHTML = "Потратить 1 бриллиант"
            thirdAns.innerHTML = "Получить 2 бриллианта"
            fourthAns.innerHTML = "Потратить 2 бриллианта"
            break;

    }
}

function calculateDiamonds(number, buttonNextMove, blockQuestions) {
    if (numberOfDiamonds + number >= 0) {
        numberOfDiamonds = numberOfDiamonds + number
        let diamonds = document.getElementById("diamonds")
        diamonds.innerHTML = "Количество бриллиантов: " + numberOfDiamonds

        blockQuestions.style.display = "none"
        buttonNextMove.style.display = ""
    } else {
        alert("Извините, не достаточно бриллиантиков")
    }
    
}

//TODO
//Используя макет, который был сделан в предыдущем задании, придумать не меньше 5 сценариев. 
//Как минимум должен меняться текст в каждом из сценарии и картинку в одном из них. 
//Должны показываться бриллиантики, чашечки и один из вопросов должен менять количество бриллиантиков.
//В конце должна появиться кнопка, которая возвращает на начало
//Когда возвращаемся на начало, нужно сбросить все чашечки, алмазики и сценарии