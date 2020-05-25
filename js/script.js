/**/ //Setting up the canvas
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.setAttribute("class", "border");
/**/

var dy = 0;
var dx = 0;
var angle = 0;

var ballX = 0;
var ballY = 0;
var yVel = 1;
var xVel = 1;
var color = ["blue","red","yellow","pink","purple","green","orange","aquamarine","LightPink"]; 
var colorRand = "blue";
var patreonWidth = window.innerHeight/4;
var patreonHeight = window.innerWidth/4;
var patreonX = window.innerWidth - window.innerWidth/2 - patreonWidth;
var patreonY = window.innerHeight - window.innerHeight/2 - patreonHeight;
var patreonImg = document.getElementById('PatreonImg');

/**/ //createText function for easy text creation
createText = function(fillStyles, fonts, fontsize, text, x, y) {
    ctx.font = fontsize + " " + fonts;
    ctx.fillStyle = fillStyles;
    ctx.fillText(text, x, y);
};
/**/

/**/ //Create image function for easier image creation and nameing
createImage = function(img, x, y, dheight, dwidth){
    ctx.drawImage(img, x, y, dheight, dwidth);
};
/**/
function update(){
    requestAnimationFrame(update);
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    WIDTH = window.innerWidth - 22;
    HEIGHT = window.innerHeight - 22;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx.beginPath();
    ctx.arc(ballX,ballY,80,0,2*Math.PI);

    // Fill with gradient
    ctx.fillStyle = colorRand;
    ctx.fill();
    ctx.strokeStyle = colorRand;
    ctx.stroke();
    patreonWidth = window.innerHeight/4;
    patreonHeight = window.innerWidth/4;
    patreonX = window.innerWidth - window.innerWidth/2 - patreonWidth;
    patreonY = window.innerHeight - window.innerHeight/2 - patreonHeight;

    ballX += xVel;
    ballY += 4 * yVel;

    /**/ // Checking for bounds On the x axis
    if (ballX >= window.innerWidth - 80) {
        ballX = window.innerWidth - 80;
        xVel = -4;
        colorRand = color[Math.floor((Math.random() * 9))];
    } else if (ballX <= 0 + 80) {
        ballX = 0 + 80;
        xVel = 4;
        colorRand = color[Math.floor((Math.random() * 9))];
    }
    /**/

    /**/ // Checking for bounds On the y axis
    if (ballY >= window.innerHeight - 80) {
        ballY = window.innerHeight - 80;
        yVel = -1;
        colorRand = color[Math.floor((Math.random() * 9))];
    } else if (ballY <= 0 + 80) {
        ballY = 0 + 80;
        yVel = 1;
        colorRand = color[Math.floor((Math.random() * 9))];
    }
    /**/
    createImage(patreonImg, patreonX, patreonY, patreonHeight, patreonWidth);
    
}

/**/ //patreon button click function
function onPatreonClickEvent(e){
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var endX = patreonX + patreonWidth;
    var endY = patreonY + patreonHeight;
    if((x>=patreonX && y>=patreonY) && (x<=endX && y<=endY)){
       window.open('https://www.patreon.com/BusterLandstrom');
    }
 };
 /**/

update();

/**/ //Appending canvas to main
let main = document.getElementsByTagName('main')[0];
main.appendChild(canvas);
/**/