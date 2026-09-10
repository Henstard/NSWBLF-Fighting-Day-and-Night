function nextNight() {
    rightNight.classList.add("reallyHidden");
    const first = document.getElementById("firstNight");
    const second = document.getElementById("secondNight");
    const third = document.getElementById("thirdNight");
    let toRemove;
    let toBring;
    if (!first.classList.contains("hidden")) {
        theBody.classList.remove("firstNightBG");
        theBody.classList.add("secondNightBG");
        toRemove = first;
        toBring = second;
    } else if (!second.classList.contains("hidden")) {
        theBody.classList.remove("secondNightBG");
        theBody.classList.add("thirdNightBG");
        toRemove = second;
        toBring = third;
    } else if (!third.classList.contains("hidden")) {
        theBody.classList.remove("thirdNightBG");
        theBody.classList.add("firstNightBG");
        toRemove = third;
        toBring = first;
    }
    toRemove.classList.remove("panelEntry");
    toRemove.classList.add("hidden");
    toRemove.classList.add("panelHide");
    toBring.classList.remove("hidden");
    toBring.classList.remove("panelHide");
    toBring.classList.add("panelEntry");
    toBring.addEventListener('animationend', () => {
        rightNight.classList.remove("reallyHidden");
    })
    wait 
}

function nextDay() {
    rightDay.classList.add("reallyHidden");
    const first = document.getElementById("firstDay");
    const second = document.getElementById("secondDay");
    const third = document.getElementById("thirdDay");
    let toRemove;
    let toBring;
    if (!first.classList.contains("hidden")) {
        theBody.classList.remove("firstDayBG");
        theBody.classList.add("secondDayBG");
        toRemove = first;
        toBring = second;
    } else if (!second.classList.contains("hidden")) {
        theBody.classList.remove("secondDayBG");
        theBody.classList.add("thirdDayBG");
        toRemove = second;
        toBring = third;
    } else if (!third.classList.contains("hidden")) {
        theBody.classList.remove("thirdDayBG");
        theBody.classList.add("firstDayBG");
        toRemove = third;
        toBring = first;
    }
    toRemove.classList.remove("panelEntry");
    toRemove.classList.add("hidden");
    toRemove.classList.add("panelHide");
    toBring.classList.remove("hidden");
    toBring.classList.remove("panelHide");
    toBring.classList.add("panelEntry");
    toBring.addEventListener('animationend', () => {
        rightDay.classList.remove("reallyHidden");
    })
    wait 
}