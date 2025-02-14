const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let moveCount = 0;

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'OMG! Thank you, sunshine! 💜😊';
    noBtn.style.display = 'none'; // Hide the "No" button
});

noBtn.addEventListener('mouseenter', () => {
    if (moveCount < 10) {
        moveNoButton();
        moveCount++;
    } else {
        noBtn.innerText = "You have no choice! 😂";
        setTimeout(() => {
            question.innerHTML = 'Yay! You said YES! 💜🎉';
            noBtn.style.display = 'none';
        }, 1000);
    }
});

function moveNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    let newX, newY;

    do {
        newX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
        newY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    } while (isOverlapping(newX, newY));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
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
