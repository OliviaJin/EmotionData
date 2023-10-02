const urlParams = new URLSearchParams(window.location.search);
const emotion = urlParams.get('emotion');

let message;
let message2;
switch (emotion) {
  case 'happy':
    message = 'Looks like you feel happy now.';
    message2 = 'I\'m happy too, happiness is the emotion I most often have.';
    break;
  case 'sad':
    message = 'Looks like you feel sad now.';
    message2 = 'What\'s bothering you? You can talk to a friend, it will make you feel better';
    break;
  case 'angry':
    message = 'Looks like you feel angry now.';
    message2 = 'I also experience anger from time to time, I understand that controlling emotions can be difficult';
    break;
  case 'surprised':
    message = 'Looks like you feel surprised now.';
    message2 = 'I often have moments of surprise in my daily life.';
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
