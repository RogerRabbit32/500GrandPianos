import wordsList from './data.js';


let currentIndex = 0;

function createCard(number) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInfo = wordsList[currentIndex][number];
    const hasCross = cardInfo.hasCross;
    const content = hasCross ? '&#10006;' : cardInfo.content;

    card.innerHTML = `
    <div class="front">${number}</div>
    <div class="back">${content}</div>
  `;

    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });

    if (hasCross) {
        card.classList.add('cross-card');
        card.classList.add(cardInfo.crossPosition); // Add a class for cross position
    }

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

window.changeWords = function () {
    flipAllCardsBack(); // Flip all cards back first
    currentIndex = (currentIndex + 1) % wordsList.length;
    renderCards();
}

function flipAllCardsBack() {
    const flippedCards = document.querySelectorAll('.card.flipped');
    flippedCards.forEach(card => card.classList.remove('flipped'));
}

renderCards();
