let textElement = document.getElementById('text');
let clickCount = 0; 

document.body.addEventListener('click', function() {
    console.log('Body clicked!');
    clickCount++;
    console.log('Click count:', clickCount);

    if (clickCount === 1) {
        textElement.classList.add('fade-out');
        setTimeout(function() {
            textElement.innerHTML = "How are you feeling right now?";
            textElement.classList.remove('fade-out');
        }, 1000);
    } else if (clickCount === 2) {
        window.location.href = "FaceExpression/index.html";
    }
});


