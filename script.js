// script.js
const wordsList = [
    { 1: "Apple", 2: "Banana", 3: "Cherry", 4: "Date", 5: "Fig", 6: "Grapes", 7: "Honeydew" },
    { 1: "Orange", 2: "Pear", 3: "Quince", 4: "Raspberry", 5: "Strawberry", 6: "Tomato", 7: "Uva" },
    // Add more sets of words as needed
];

let currentIndex = 0;

function createCard(number) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="front">${number}</div>
    <div class="back">${wordsList[currentIndex][number]}</div>
  `;
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
    return card;
}

function renderCards() {
    const container = document.querySelector('.card-container');
    container.innerHTML = '';
    for (let i = 1; i <= 7; i++) {
        const card = createCard(i);
        container.appendChild(card);
    }
}

function changeWords() {
    currentIndex = (currentIndex + 1) % wordsList.length;
    renderCards();
}

renderCards();
