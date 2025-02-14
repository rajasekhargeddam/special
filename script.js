const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let moveCount = 0; // Track movements

// Ensure "No" button starts in a safe position
window.onload = () => {
    setTimeout(positionNoButton, 100); // Give layout time to load
};

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'OMG! Thank you, sunshine! 💜😊';
    noBtn.style.display = 'none'; // Hide "No" button
});

// Move "No" button on hover (desktop) & click (mobile)
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    if (moveCount < 10) {  
        positionNoButton();
        moveCount++;
    } else {
        noBtn.innerText = "You have no choice! 😂";
        setTimeout(() => {
            question.innerHTML = 'Yay! You said YES! 💜🎉';
            noBtn.style.display = 'none';
        }, 1000);
    }
}

// Position "No" button randomly while avoiding "Yes"
function positionNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    let newX, newY;
    let maxAttempts = 100; // Prevent infinite loop
    let attempts = 0;

    do {
        newX = Math.random() * (wrapperRect.width - noBtnRect.width);
        newY = Math.random() * (wrapperRect.height - noBtnRect.height);
        attempts++;
    } while (isOverlapping(newX, newY, yesBtnRect) && attempts < maxAttempts);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Prevent overlap with "Yes" button
function isOverlapping(x, y, yesBtnRect) {
    const buffer = 30; // Minimum safe distance

    return (
        x < yesBtnRect.right + buffer &&
        x + noBtn.clientWidth > yesBtnRect.left - buffer &&
        y < yesBtnRect.bottom + buffer &&
        y + noBtn.clientHeight > yesBtnRect.top - buffer
    );
}
