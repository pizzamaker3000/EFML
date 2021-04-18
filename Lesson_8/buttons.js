let numberOfScenario = 1
let numberOfCups = 1
let numberOfDiamonds = 1 
let numberOfPlot = 1

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

    switch (numberOfPlot) {
        case 1:
            text.innerHTML = "НАЧАЛО Первого сюжета"
            img.src = "1.jpg"
            butGTS.style.display = "none"
            cups.innerHTML = "Количество чашечек: " + numberOfCups
            diamonds.innerHTML = "Количество бриллиантов: " + numberOfDiamonds
            break;
        default:   
            text.innerHTML = "НАЧАЛО других сюжетов"
            img.src = "1.jpg"
            butGTS.style.display = "none"
            cups.innerHTML = "Количество чашечек: " + numberOfCups
            diamonds.innerHTML = "Количество бриллиантов: " + numberOfDiamonds
            break;
    }
    

}

function showMeNewScenario(element, img, numberOfScenario, butGTS) {
    switch(numberOfPlot) {
        case 1:
            switch (numberOfScenario) {
                case 1:   
                    element.innerHTML = "Мой первый сценарий первого сюжета"
                    break;
                case 2:   
                    element.innerHTML = "Мой второй сценарий первого сюжета"
                    break;
                case 3:   
                    element.innerHTML = "Мой третий сценарий первого сюжета"
                    img.src = "2.jpeg"
                    break;
                case 4:   
                    element.innerHTML = "Мой четвертый сценарий первого сюжета"
                    questionsOn(4)
                    break;
                case 5:   
                    element.innerHTML = "Мой пятый сценарий первого сюжета"
                    break;
                default:    
                    element.innerHTML = "КОНЕЦ первого сюжета"
                    butGTS.style.display = ""
              }
            break;
        default:
            switch (numberOfScenario) {
                case 1:   
                    element.innerHTML = "Мой первый сценарий других сюжетов"
                    break;
                case 2:   
                    element.innerHTML = "Мой второй сценарий других сюжетов"
                    break;
                case 3:   
                    element.innerHTML = "Мой третий сценарий других сюжетов"
                    img.src = "2.jpeg"
                    break;
                case 4:   
                    element.innerHTML = "Мой четвертый сценарий других сюжетов"
                    questionsOn(4)
                    break;
                case 5:   
                    element.innerHTML = "Мой пятый сценарий других сюжетов"
                    break;
                default:    
                    element.innerHTML = "КОНЕЦ других сюжетова"
                    butGTS.style.display = ""
              }
            break;
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

function choosePlot(number){
    numberOfPlot = number
    goToStart()
}

//TODO
//Собраться в группу, и сделать 3-4 полноценных сюжета.