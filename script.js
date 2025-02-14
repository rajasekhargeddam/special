const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let moveCount = 0; // Track movements

// Adjust initial position of "No" button
window.onload = () => {
    positionNoButton();
};

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'OMG! Thank you, sunshine! 💜😊';
    noBtn.style.display = 'none'; // Hide the "No" button
});

// Detect hover on desktop and tap on mobile
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    if (moveCount < 10) {  // Now disappears after 10 movements
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

// Set random position for "No" button (avoiding overlap)
function positionNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    let newX, newY;
    do {
        newX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
        newY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    } while (isOverlapping(newX, newY, yesBtnRect));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Prevents overlapping with Yes button
function isOverlapping(x, y, yesBtnRect) {
    const buffer = 20; // Minimum distance between Yes & No

    return (
        x < yesBtnRect.right + buffer &&
        x + noBtn.clientWidth > yesBtnRect.left - buffer &&
        y < yesBtnRect.bottom + buffer &&
        y + noBtn.clientHeight > yesBtnRect.top - buffer
    );
}
