let numberOfScenario = 1

function nextMove() {
    let text = document.getElementById("changeText")
    let img = document.getElementById("changeImg")
    let invisibleButton = document.getElementById("invisibleButton")
    showMeNewScenario(text, img, numberOfScenario, invisibleButton)
    numberOfScenario++
}

function goToStart(){
    let text = document.getElementById("changeText")
    let img = document.getElementById("changeImg")
    let invisibleButton = document.getElementById("invisibleButton")
    numberOfScenario = 1
    text.innerHTML = "НАЧАЛО!!!"
    img.src = "1.jpg"
    invisibleButton.style.display = "none"
}

function showMeNewScenario(element, img, numberOfScenario, invisibleButton) {
    console.log(numberOfScenario)
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
        default:    
            element.innerHTML = "КОНЕЦ!!!"
            invisibleButton.style.display = ""
      }
}

//TODO
//Используя макет, который был сделан в предыдущем задании, придумать не меньше 3 сценариев. 
//Как минимум должен меняться текст в каждом из сценарии.
//В конце должна появиться кнопка, которая предложит пройти все сценарии заново.