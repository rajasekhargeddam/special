const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
let noClickCount = 0;

// 💜 Yes Button Click Event
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'OMG, Thank You! 💜';
    noBtn.style.display = 'none'; // Hide No button after Yes is clicked
});

// 💜 No Button Movement Logic
noBtn.addEventListener('mouseover', () => {
    if (noClickCount >= 10) return; // Stop moving after 10 clicks

    let x = Math.random() * (window.innerWidth - noBtn.clientWidth - 40);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight - 40);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noClickCount++;

    if (noClickCount >= 10) {
        setTimeout(() => {
            noBtn.style.display = 'none'; // Hide No button after 10 moves
        }, 500);
    }
});
