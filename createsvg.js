const createSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
createSvg.setAttribute("id", "mySvg");
createSvg.setAttribute("width", "400");
createSvg.setAttribute("height", "400");
createSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
document.body.appendChild(createSvg);
const svg = document.getElementById("mySvg");
const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
square.setAttribute("width", "50");
square.setAttribute("height", "50");
svg.appendChild(square);
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;
let speed = 0.5;
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function animateSquare() {
    square.setAttribute("fill", getRandomColor());
    square.setAttribute("x", x);
    square.setAttribute("y", y);

    x += dx * speed;
    y += dy * speed;

    if (x + 50 > svg.clientWidth || x < 0) {
        dx = -dx;
    }
    if (y + 50 > svg.clientHeight || y < 0) {
        dy = -dy;
    }
    requestAnimationFrame(animateSquare);
}

function loadAnimation(){
    const x = document.getElementById("mySvg");
    x.addEventListener('click', function(){
        animateSquare()
    })
}

// Call the loadAnimation function to set up the event listener
loadAnimation();
