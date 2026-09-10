function nextNight() {
    console.log("bro");
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