const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to draw everything
function drawScene() {
    // Load and draw background image
    const background = new Image();
    background.src = 'images/background1.jpg';
    background.onload = function() {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawForegroundImages();
    };
}

function drawForegroundImages() {
    // Load and draw first foreground image
    const foreground1 = new Image();
    foreground1.src = 'images/Jerry_The_Mouse-removebg-preview.png';
    foreground1.onload = function() {
        ctx.drawImage(foreground1, 50, 300, 200, 200);
        
        // Load and draw second foreground image
        const foreground2 = new Image();
        foreground2.src = 'images/Tom_The_Cat-removebg-preview.png';
        foreground2.onload = function() {
            ctx.drawImage(foreground2, 500, 400, 250, 150);
            addText();
        };
    };
}

function addText() {
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Faizan Khan', 20, 50);
    
    ctx.font = '24px Arial';
    ctx.fillStyle = 'yellow';
    ctx.fillText('Moody Characters', canvas.width - 20, canvas.height - 20);
}

// Call drawScene to start the drawing process
drawScene();

// Optional: Add resize functionality
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawScene(); // Redraw everything when resized
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call once to set initial size
