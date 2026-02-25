// Typing Effect
const textArray = [
    "Aspiring Full Stack Developer",
    "Cyber Security Engineer",
    "Future Cloud Security Engineer"
];

let typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});