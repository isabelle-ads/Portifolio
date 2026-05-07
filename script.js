AOS.init({ duration: 1000, once: true });

const textElement = document.getElementById('typewriter-text');
const phrases = ["Estudante de ADS","Desenvolvedora Full Stack", "Entusiasta de IA"];
let pIndex = 0; let cIndex = 0; let isDeleting = false;

function type() {
    const current = phrases[pIndex];
    if (isDeleting) {
        textElement.textContent = current.substring(0, cIndex - 1);
        cIndex--;
    } else {
        textElement.textContent = current.substring(0, cIndex + 1);
        cIndex++;
    }

    let speed = isDeleting ? 30 : 80;
    if (!isDeleting && cIndex === current.length) {
        isDeleting = true; speed = 1000;
    } else if (isDeleting && cIndex === 0) {
        isDeleting = false; pIndex = (pIndex + 1) % phrases.length; speed = 200;
    }
    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', type);