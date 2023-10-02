const urlParams = new URLSearchParams(window.location.search);
const emotion = urlParams.get('emotion');

let message;
let message2;
switch (emotion) {
  case 'happy':
    message = 'Looks like you feel happy now.';
    message2 = 'I also feel happy a lot, and happiness is the emotion I most often have.';
    break;
  case 'sad':
    message = 'Looks like you feel sad now.';
    message2 = 'I\'m sorry you\'re feeling sad right now, I get sadness from time to time too.';
    break;
  case 'angry':
    message = 'Looks like you feel angry now.';
    message2 = 'I\'m sorry you\'re feeling angry right now, I get anger coming up too.';
    break;
  case 'surprised':
    message = 'Looks like you feel surprised now.';
    message2 = 'I got surprised a lot too.';
    break;
  default:
    message = 'Unable to determine your emotion.';
    message2 = '';
}

let textElement = document.getElementById('text');
textElement.innerHTML = message;

let clickCount = 0;
document.body.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        textElement.classList.add('fade-out');
        setTimeout(function() {
            textElement.innerHTML = message2;
            textElement.classList.remove('fade-out');
        }, 1000); 
    }
});
