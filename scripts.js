document.body.addEventListener('click', function() {
    console.log('Body clicked!'); // Log a message to the console when the body is clicked
    clickCount++; 
    console.log('Click count:', clickCount); // Log the current click count
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
