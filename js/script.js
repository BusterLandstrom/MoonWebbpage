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
var color = ["blue","red","yellow","pink","purple","green","orange","magenta","brown"]; 
var colorRand = "blue";
var imgWidth = window.innerHeight/8;
var imgHeight = window.innerWidth/8;
var patreonX = window.innerWidth - window.innerWidth/2;
var patreonY = window.innerHeight - window.innerHeight/2;
var youtubeY = patreonY + imgHeight + 10;
var patreonImg = document.getElementById('PatreonImg');
var bgr = document.getElementById("bgr");
var ytpic = document.getElementById("ytpic");

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
    WIDTH = window.innerWidth - 30;
    HEIGHT = window.innerHeight - 39;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx.beginPath();
    ctx.arc(ballX,ballY,80,0,2*Math.PI);
    
    createImage(bgr, 0, 0, canvas.width, canvas.height);

    // Fill with gradient
    ctx.fillStyle = colorRand;
    ctx.fill();
    ctx.strokeStyle = colorRand;
    imgWidth = WIDTH/9;
    imgHeight = HEIGHT/9;
    patreonX = WIDTH - WIDTH/2 - imgWidth/2;
    patreonY = HEIGHT - HEIGHT/2- imgHeight/2;
    youtubeY = patreonY + imgHeight + 10;

    ballX += xVel;
    ballY += 4 * yVel;

    /**/ // Checking for bounds On the x axis
    if (ballX >= WIDTH - 80) {
        ballX = WIDTH - 80;
        xVel = -4;
        colorRand = color[Math.floor((Math.random() * 10) + 1)];
    } else if (ballX <= 0 + 80) {
        ballX = 0 + 80;
        xVel = 4;
        colorRand = color[Math.floor((Math.random() * 10) + 1)];
    }
    /**/

    /**/ // Checking for bounds On the y axis
    if (ballY >= HEIGHT - 80) {
        ballY = HEIGHT - 80;
        yVel = -1;
        colorRand = color[Math.floor((Math.random() * 10) + 1)];
    } else if (ballY <= 0 + 80) {
        ballY = 0 + 80;
        yVel = 1;
        colorRand = color[Math.floor((Math.random() * 10) + 1)];
    }
    /**/
    createImage(patreonImg, patreonX, patreonY, imgWidth, imgHeight);
    createImage(ytpic, patreonX, youtubeY, imgWidth, imgHeight);

    
}

/**/ //patreon button click function
function onPatreonClickEvent(e){
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    var endX = patreonX + imgWidth;
    var endY = patreonY + imgHeight;
    if((x>=patreonX && y>=patreonY) && (x<=endX && y<=endY)){
       window.open("https://www.patreon.com/BusterLandstrom");
    }
 };
 /**/

/**/ //patreon button click function
function onYouTubeClickEvent(e){
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    var endX = patreonX + imgWidth;
    var endY = youtubeY + imgHeight;
    if((x>=patreonX && y>=youtubeY) && (x<=endX && y<=endY)){
       window.open("https://www.youtube.com/channel/UCMS3myfHCv1bG5zSjROC_zA");
    }
 };
 /**/

update();

canvas.addEventListener('mousedown', function(e) {
    onPatreonClickEvent(e);
    onYouTubeClickEvent(e);
})

/**/ //Appending canvas to main
let main = document.getElementsByTagName('main')[0];
main.appendChild(canvas);
/**/