// Get the button, span, and img elements
const button = document.querySelector('#switch button');
const span = document.querySelector('#switch span');
const body = document.body;
const img = document.querySelector('#profile img');

// Add event listener to the button
button.addEventListener('click', () => {
    // Toggle the light and dark modes
    body.classList.toggle('light');

    // Update the image source based on the current mode
    if (body.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png');
    } else {
        img.setAttribute('src', './assets/avatar-light.png');
    }
});