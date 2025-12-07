const cometContainer = document.querySelector('.comet-container');

function createComet() {
    const comet = document.createElement('div');
    comet.classList.add('comet');

    // Start somewhere at the top of the screen
    const startX = Math.random() * window.innerWidth;
    const startY = -20; // just above the viewport
    const endX = startX + 200 + Math.random() * 200;
    const endY = window.innerHeight + 20; // exit below viewport

    comet.style.setProperty('--start-x', startX + 'px');
    comet.style.setProperty('--start-y', startY + 'px');
    comet.style.setProperty('--end-x', endX + 'px');
    comet.style.setProperty('--end-y', endY + 'px');

    // Random duration
    const duration = 2 + Math.random() * 2;
    comet.style.animation = `comet-move ${duration}s linear forwards`;

    cometContainer.appendChild(comet);

    comet.addEventListener('animationend', () => comet.remove());
}
const comet = document.createElement('div');
comet.classList.add('comet');

const size = Math.random() * 15 + 10; // 10px to 25px
comet.style.width = size + 'px';
comet.style.height = size + 'px';
comet.style.boxShadow = `
    0 0 ${size * 2}px white,
    0 0 ${size * 4}px white,
    0 0 ${size * 6}px gold
`;


// Spawn a comet every 10 seconds
setInterval(createComet, 10000);

// Spawn one immediately for testing
createComet();
