const canvas = document.getElementById("line-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = [
    "#8C3030", // Brown
    "#8C2E73", // Yellow
    "#F2C84B", // Small Yellow
    "#BF244E", // Small Pink
    "#FFC0CB", // Small Blue
    "#F2D399", // Purple
    "#D92949"  // Red
];

const probabilities = [3, 9, 12, 14, 17, 24, 21]; // Corresponding to the color probabilities

const hoverTexts = document.querySelectorAll('.hover-text');

const getRandomColor = () => {
    const randomNum = Math.random() * 100;
    let sum = 0;
    for (let i = 0; i < colors.length; i++) {
        sum += probabilities[i];
        if (randomNum <= sum) {
            return colors[i];
        }
    }
    // Default to white if something goes wrong
    return "#FFFFFF";
};

const drawCurve = () => {
    const startX = 0;
    const startY = canvas.height / 2;
    const endX = canvas.width;
    const endY = canvas.height / 2;
    const controlX1 = canvas.width / 4;
    const controlY1 = Math.random() * canvas.height;
    const controlX2 = (canvas.width / 4) * 3;
    const controlY2 = Math.random() * canvas.height;
    const color = getRandomColor();

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Show the corresponding text near the cursor when hovering over the line
    canvas.addEventListener('mousemove', (e) => {
        hoverTexts.forEach((text) => {
            text.style.display = 'none';
        });

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        if (ctx.isPointInStroke(mouseX, mouseY)) {
            if (color === '#8C3030') {
                document.querySelector('.hover-text.red').style.display = 'block';
                document.querySelector('.hover-text.red').style.left = mouseX + 'px';
                document.querySelector('.hover-text.red').style.top = mouseY - 40 + 'px';
            } else if (color === '#8C2E73') {
                document.querySelector('.hover-text.green').style.display = 'block';
                document.querySelector('.hover-text.green').style.left = mouseX + 'px';
                document.querySelector('.hover-text.green').style.top = mouseY - 40 + 'px';
            } else if (color === '#F2C84B') {
                document.querySelector('.hover-text.blue').style.display = 'block';
                document.querySelector('.hover-text.blue').style.left = mouseX + 'px';
                document.querySelector('.hover-text.blue').style.top = mouseY - 40 + 'px';
            } else if (color === '#BF244E') {
                document.querySelector('.hover-text.yellow').style.display = 'block';
                document.querySelector('.hover-text.yellow').style.left = mouseX + 'px';
                document.querySelector('.hover-text.yellow').style.top = mouseY - 40 + 'px';
            } else if (color === '#FFC0CB') {
                document.querySelector('.hover-text.pink').style.display = 'block';
                document.querySelector('.hover-text.pink').style.left = mouseX + 'px';
                document.querySelector('.hover-text.pink').style.top = mouseY - 40 + 'px';
            } else if (color === '#F2D399') {
                document.querySelector('.hover-text.white').style.display = 'block';
                document.querySelector('.hover-text.white').style.left = mouseX + 'px';
                document.querySelector('.hover-text.white').style.top = mouseY - 40 + 'px';
            } else if (color === '#D92949') {
                document.querySelector('.hover-text.orange').style.display = 'block';
                document.querySelector('.hover-text.orange').style.left = mouseX + 'px';
                document.querySelector('.hover-text.orange').style.top = mouseY - 40 + 'px';
            }
        }
    });
};

document.getElementById("draw-button").addEventListener("click", () => {
    drawCurve();
});