const dogButton = document.getElementById("dog");
const techButton = document.getElementById("technologist");
const threadButton = document.getElementById("thread");
const babyButton = document.getElementById("baby");
const aboutImg = document.getElementById("about-img");

let currentButton = document.querySelector(".selected-emoji");
// SET AND DISPLAY CURRENT IMAGE
const setNewCurrentButton = (nextCurrent) => {
    currentButton.classList.remove('selected-emoji')
    currentButton = nextCurrent;
    currentButton.classList.add('selected-emoji')

    if(techButton === currentButton) aboutImg.src="/assets/kf.png";
    if(dogButton === currentButton) aboutImg.src="/assets/blue.jpg";
    if(threadButton === currentButton) aboutImg.src="/assets/creativekayla.jpg";
    if(babyButton === currentButton) aboutImg.src="/assets/babykayla.JPG"; 
}

    dogButton.addEventListener("click", () => setNewCurrentButton(dogButton));
    techButton.addEventListener("click", () => setNewCurrentButton(techButton));
    threadButton.addEventListener("click", () => setNewCurrentButton(threadButton));
    babyButton.addEventListener("click", () => setNewCurrentButton(babyButton));
