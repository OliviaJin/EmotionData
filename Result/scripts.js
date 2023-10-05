const urlParams = new URLSearchParams(window.location.search);
const emotion = urlParams.get('emotion');

let message;
let message2;
let datalink;
switch (emotion) {
  case 'happy':
    message = 'Looks like you are happy now.';
    message2 = 'I am also happy. Happiness is everything to me, <br> so I want to keep track of the events that bring me happiness <br> <br>  <p style="font-size:20px;"> click anywhere to explore my data 🤗</p>';
    datalink = "Happy/happy.html"
    break;
  case 'sad':
    message = 'Looks like you are sad now.';
    message2 = 'What\'s bothering you? <br>I feel sad sometimes too, and this affects my mental health and productivity <br>To further understand my emotions, I record the events that make me sad <br> <br> <p style="font-size:20px;"> click anywhere to explore my data 🤗</p>';
    datalink = "Sad/sad.html"
    break;
  case 'angry':
    message = 'Looks like you are angry now.';
    message2 = 'I understand that emotional control can be difficult. <br> In fact, to understand my emotions better, I\'ve been tracking various events in my life that make me angry <br> <br> <p style="font-size:20px;"> click anywhere to explore my data 🤗</p>';
    datalink = "Angry/angry.html"
    break;
  case 'surprised':
    message = 'Looks like you are surprised now.';
    message2 = 'I often get surprised by many things in my life, good or bad. <br> I like to record them and the reason why they surprised me <br> <br> <p style="font-size:20px;"> click anywhere to explore my data 🤗</p>';
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

