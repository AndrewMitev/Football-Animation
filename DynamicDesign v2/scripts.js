import settings from "./settings.js";

(function(){
    // Set Logos
    var logos = document.querySelectorAll(".main-logo");
    if(logos.length === 2){
        logos[0].setAttribute("src", settings.firstTeamLogo);
        logos[1].setAttribute("src", settings.secondTeamLogo);
    }

    // Set background colors
    let firtsBackground = document.querySelector(".left");
    firtsBackground.style.setProperty("--first-background-color", settings.firstBackgroundColor);

    let secondBackground = document.querySelector(".right");
    secondBackground.style.setProperty("--second-background-color", settings.secondBackgroundColor);

    // Set headings
    let title = document.querySelector(".title");
    let titleShadow = document.querySelector(".title-shadow");
    title.textContent = settings.title;
    titleShadow.textContent = settings.title;

    let description = document.querySelector("span.description");
    description.textContent = settings.description;

    let firstName = document.querySelector(".first-name");
    firstName.textContent = settings.firstTeamName;

    let secondName = document.querySelector(".second-name");
    secondName.textContent = settings.secondTeamName;

    const flexed = document.querySelector(".flexed");
    for(const url of settings.optionalLogos) {
        let newImage = document.createElement("img");
        newImage.classList.add("child");
        newImage.setAttribute("src", url);
        flexed.appendChild(newImage);
    }
})();

(function(){
    var titleShadow = document.querySelector(".title-shadow");
    var text = titleShadow.textContent;
    titleShadow.textContent = '';
    for(const [index, letter] of text.split('').entries()) {
        titleShadow.innerHTML += `<span style="animation-delay: ${index * 150 + 5500}ms;">${letter}</span>`;
    }
})();