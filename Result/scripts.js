const urlParams = new URLSearchParams(window.location.search);
const emotion = urlParams.get('emotion');

let message;
let message2;
let datalink;
switch (emotion) {
  case 'happy':
    message = 'Looks like you feel happy now.';
    message2 = 'I also feel happy. Happiness is my primary emotion, so I want to keep track of what behaviors or activities make me feel happy so that I can better understand and control my emotions.';
    datalink = "Happy/happy.html"
    break;
  case 'sad':
    message = 'Looks like you feel sad now.';
    message2 = 'What\'s bothering you? I feel sad sometimes too, and this affects my mental health and productivity. Therefore I want to further understand my emotions and find ways to alleviate them by documenting events and activities that may make me sad.';
    datalink = "Sad/sad.html"
    break;
  case 'angry':
    message = 'Looks like you feel angry now.';
    message2 = 'I understand that controlling emotions can be difficult. That\'s why I\'ve been tracking various events and activities in my life and taking note of what events might cause me anger, and how often they occur, to better understand my emotions. ';
    datalink = "Angry/angry.html"
    break;
  case 'surprised':
    message = 'Looks like you feel surprised now.';
    message2 = 'I also have moments of surprise sometimes, and this can have good or bad effects. Therefore I want to record the specific events and causes that make me to be surprised. Hopefully I can discover some patterns from it.';
    datalink = "Surprised/surprised.html"
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
    } else if (clickCount === 2) {
      window.location.href = datalink;
  }
});

