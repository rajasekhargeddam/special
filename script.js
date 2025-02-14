const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let moveCount = 0; // Track movements

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'OMG! Thank you, sunshine! 💜😊';
    noBtn.style.display = 'none'; // Hide the "No" button
});

// Detect hover on desktop and tap on mobile
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    if (moveCount < 10) {  // Now disappears after 10 movements
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        let newX, newY;
        do {
            newX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
            newY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
        } while (isOverlapping(newX, newY));

        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
        moveCount++;
    } else {
        noBtn.innerText = "You have no choice! 😂";
        setTimeout(() => {
            question.innerHTML = 'Yay! You said YES! 💜🎉';
            noBtn.style.display = 'none';
        }, 1000);
    }
}

function isOverlapping(x, y) {
    const buffer = 10;
    const noBtnRect = noBtn.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();

    return (
        x < yesBtnRect.right + buffer &&
        x + noBtnRect.width > yesBtnRect.left - buffer &&
        y < yesBtnRect.bottom + buffer &&
        y + noBtnRect.height > yesBtnRect.top - buffer
    );
}
