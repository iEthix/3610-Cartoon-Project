//Create a hill using an ellipse
function drawHill(context, color, centerX, centerY, radiusX, radiusY) {
  context.beginPath();
  context.ellipse(centerX, centerY, radiusX, radiusY, 0, Math.PI, 0);
  context.fillStyle = color;
  context.closePath();
  context.fill();
  context.strokeStyle = "black";
  context.stroke();
}

//Create birds using arcs
function drawBirds(context, centerX, centerY, radius) {
  context.beginPath();
  context.arc(centerX - radius, centerY, radius, Math.PI, 0);
  context.strokeStyle = "black";
  context.stroke();
  context.beginPath();
  context.arc(centerX + radius, centerY, radius, Math.PI, 0);
  context.strokeStyle = "black";
  context.stroke();
}

function drawGrass(ctx, startX, startY, spikeWidth, spikeHeight, spikeCount) {
  for (let i = 0; i < spikeCount; i++) {
    ctx.beginPath();
    ctx.moveTo(startX + i * spikeWidth, startY);
    ctx.lineTo(startX + i * spikeWidth + spikeWidth / 2, startY - spikeHeight);
    ctx.lineTo(startX + (i + 1) * spikeWidth, startY);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
}

//Create the sun with rays
function drawSunWithRays(
  context,
  centerX,
  centerY,
  sunRadius,
  rayLength,
  rayCount,
  rayThickness
) {
  //Draw the sun
  context.beginPath();
  context.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
  context.fillStyle = "orange";
  context.fill();

  context.lineWidth = rayThickness;

  //Draw the rays around the sun
  for (let i = 0; i < rayCount; i++) {
    let angle = ((Math.PI * 2) / rayCount) * i;
    let rayStartX = centerX + sunRadius * Math.cos(angle);
    let rayStartY = centerY + sunRadius * Math.sin(angle);
    let rayEndX = centerX + (sunRadius + rayLength) * Math.cos(angle);
    let rayEndY = centerY + (sunRadius + rayLength) * Math.sin(angle);

    context.beginPath();
    context.moveTo(rayStartX, rayStartY);
    context.lineTo(rayEndX, rayEndY);
    context.strokeStyle = "yellow";
    context.stroke();
  }
}

//Create the rocket shape
function drawRocket(context, x, y, width, rotation) {
  context.save();
  context.translate(x, y);
  context.rotate(rotation);
  context.save();
  context.scale(0.6, 1.2);
  context.beginPath();
  context.arc(0, 0, width / 2, 0, Math.PI * 2, false);
  context.fillStyle = "gray";
  context.fill();
  context.restore();
  context.strokeStyle = "black";
  context.stroke();

  //Create circular Window
  context.beginPath();
  context.arc(0, 0, width * 0.165, 0, Math.PI * 2);
  context.fillStyle = "white";
  context.strokeStyle = "black";
  context.fill();
  context.stroke();

  context.restore();
}

//Create rocket fins
function drawRocketFins(context, x, y, width, height, rotation) {
  context.save();
  context.translate(x, y);
  context.rotate(rotation);
  context.translate(-x, -y);

  //Right fin
  context.beginPath();
  context.moveTo(x + width * 0.85, y);
  context.quadraticCurveTo(
    x + width * 2,
    y + height * 0.2,
    x + width * 0.75,
    y + height * 0.45
  );
  context.quadraticCurveTo(
    x + width * 1.2,
    y + height * 0.2,
    x + width * 0.6,
    y + height * 0.25
  );
  context.lineWidth = 1.3;
  context.fillStyle = "lightgray";
  context.fill();
  context.strokeStyle = "black";
  context.stroke();

  //Left Fin
  context.beginPath();
  context.moveTo(x - width * 0.85, y);
  context.quadraticCurveTo(
    x - width * 2,
    y + height * 0.2,
    x - width * 0.75,
    y + height * 0.45
  );
  context.quadraticCurveTo(
    x - width * 1.2,
    y + height * 0.2,
    x - width * 0.6,
    y + height * 0.25
  );
  context.lineWidth = 1.3;
  context.fillStyle = "lightgray";
  context.strokeStyle = "black";
  context.closePath();
  context.fill();
  context.stroke();

  //Middle Fin
  context.beginPath();
  const horizontalRadius = width * 0.1;
  const verticalRadius = height * 0.24;
  context.ellipse(
    x,
    y + height * 0.23,
    horizontalRadius,
    verticalRadius,
    0,
    0,
    2 * Math.PI
  );
  context.fillStyle = "lightgray";
  context.fill();
  context.strokeStyle = "black";
  context.stroke();

  context.restore();
}

function drawPropeller(context, x, y, width, height, rotation) {
  context.save();

  //Translate to the center of the propeller
  context.translate(x, y);

  //Apply rotation if specified
  context.rotate(rotation);

  context.beginPath();
  context.moveTo(-width / 4, height / 2);
  context.lineTo(-width / 2, height);
  context.lineTo(width / 2, height);
  context.lineTo(width / 4, height / 2);
  context.closePath();
  context.fillStyle = "silver";
  context.fill();
  context.strokeStyle = "black";
  context.stroke();

  context.restore();
}
//Draw flame at the bottom of the propeller
function drawFlames(context, x, y, width, height, rotation) {
  context.save();

  context.translate(x + width / 2, y + height / 2);

  context.rotate(rotation);

  context.translate(-x - width / 2, -y - height / 2);

  context.beginPath();
  for (let i = 0; i < 5; i++) {
    context.moveTo(x + (i * width) / 10, y);
    context.lineTo(x + ((i + 0.5) * width) / 10, y + height);
    context.lineTo(x + ((i + 1) * width) / 10, y);
  }
  context.fillStyle = "orange";
  context.fill();

  context.beginPath();
  for (let i = 0; i < 5; i++) {
    context.moveTo(x + (i * width) / 10, y + height / 2);
    context.lineTo(x + ((i + 0.5) * width) / 10, y + height);
    context.lineTo(x + ((i + 1) * width) / 10, y + height / 2);
  }
  context.fillStyle = "red";
  context.fill();
  context.restore();
}

//Create the moon with craters
function drawMoon(context, x, y, width) {
  //Create gradient for 3D effect
  var grd = context.createRadialGradient(x, y, 0, x, y, width);
  grd.addColorStop(0, "lightgray");
  grd.addColorStop(1, "gray");

  context.beginPath();
  context.arc(x, y, width, 0, Math.PI * 2, false);
  context.fillStyle = grd;
  context.fill();
  context.stroke();

  //Draw craters
  var craterSize = width / 8;
  context.fillStyle = "darkgray";
  context.beginPath();
  context.arc(x + width / 4, y + width / 4, craterSize, 0, Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.arc(x - width / 3, y - width / 3, craterSize, 0, Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.arc(x + width / 2, y - width / 2, craterSize, 0, Math.PI * 2, false);
  context.fill();
}

//Create the Earth
function drawEarth(context, x, y, width, height) {
  var earthImg = new Image();
  earthImg.src = "earth.jpg";
  earthImg.onload = function () {
    context.drawImage(earthImg, x, y, width, height);
  };
}

//Draw stars on the canvas
function drawStars(canvas, context, starsCount) {
  for (var i = 0; i < starsCount; i++) {
    var starX = Math.random() * canvas.width;
    var starY = Math.random() * canvas.height;
    context.fillStyle = "white";
    context.beginPath();
    context.arc(starX, starY, 1, 0, Math.PI * 2, false);
    context.fill();
  }
}

//Draw craters
function drawCrater(context, x, y, width, height) {
  //Draw the main ellipse
  context.beginPath();
  context.ellipse(x, y, width / 2, height / 2, 0, 0, 2 * Math.PI);
  context.fillStyle = "darkgray";
  context.fill();
  context.stroke();

  //Draw the inner arc
  var arcRadius = width / 2;
  var arcCenterY = y + height / 2 - arcRadius / 10 - 5;
  var startAngle = 0;
  var endAngle = Math.PI;

  context.beginPath();
  context.ellipse(
    x,
    arcCenterY,
    arcRadius,
    arcRadius / 10,
    0,
    startAngle,
    endAngle,
    true
  );
  context.lineWidth = 2;
  context.stroke();
}

//Draw the first scene
function drawRocketLaunchScene(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.canvas.style.border = "2px solid black";
  context.canvas.style.backgroundColor = "lightblue";

  drawSunWithRays(context, 800, 100, 50, 30, 12, 2);
  drawHill(context, "green", 450, 480, 500, 150);
  drawBirds(context, 200, 150, 10);
  drawBirds(context, 300, 100, 10);
  drawBirds(context, 400, 200, 10);
  drawBirds(context, 600, 150, 10);
  drawGrass(context, 150, 450, 10, 20, 10);
  drawGrass(context, 650, 450, 10, 20, 10);
  drawGrass(context, 320, 400, 10, 20, 10);
  drawRocket(context, 450, 250, 200, 0);
  drawPropeller(context, 450, 310, 100, 100, 0);
  drawRocketFins(context, 450, 300, 67, 200, 0);
}

//Draw the second scene
function drawRocketFlyingScene(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.canvas.style.border = "2px solid black";
  context.canvas.style.backgroundColor = "black";

  drawStars(context.canvas, context, 500);
  drawEarth(context, 700, 130, 210, 200);
  drawMoon(context, 100, 300, 50);

  drawRocket(context, 450, 240, 160, -Math.PI / 2);
  drawPropeller(context, 450, 240, 75, 150, -Math.PI / 2);
  drawRocketFins(context, 480, 240, 50, 200, -Math.PI / 2);
  drawFlames(context, 560, 168, 150, 70, -Math.PI / 2);
}

//Draw the third scene
function drawRocketMoonLandingScene(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.canvas.style.border = "2px solid black";
  context.canvas.style.backgroundColor = "black";

  drawStars(context.canvas, context, 500);
  drawHill(context, "gray", 450, 480, 750, 200);
  drawCrater(context, 100, 390, 120, 25);
  drawCrater(context, 650, 330, 120, 25);
  drawCrater(context, 300, 350, 100, 25);
  drawCrater(context, 280, 450, 75, 25);
  drawCrater(context, 690, 400, 70, 25);
  drawCrater(context, 600, 450, 125, 25);
  drawCrater(context, 810, 430, 60, 25);

  drawRocket(context, 450, 250, 200, 0);
  drawPropeller(context, 450, 310, 100, 100, 0);
  drawRocketFins(context, 450, 300, 67, 200, 0);
}

//Create the flag
function drawFlag(context, originX, originY, flagWidth, flagHeight) {
  context.save();
  context.translate(originX, originY);
  context.scale(
    flagWidth / context.canvas.clientWidth,
    flagHeight / context.canvas.clientHeight
  );
  stripes(context);
  field(context);
  context.restore();
}

//Function to draw the stripes
function stripes(context) {
  var stripecount = 13;
  for (var x = 0; x < stripecount; x++) {
    var color = x % 2 ? "#FFFFFF" : "#B22234";
    var lateralstart = (context.canvas.clientHeight / stripecount) * x;
    var lateralend = context.canvas.clientHeight / stripecount;
    context.fillStyle = color;
    context.fillRect(0, lateralstart, context.canvas.clientWidth, lateralend);
  }
}

//Function to draw the field
function field(context, cantonwidth, cantonheight) {
  var cantonwidth = (context.canvas.clientWidth * 2) / 5;
  var cantonheight = context.canvas.clientHeight * 0.54;
  context.fillStyle = "#3C3B6E";
  context.fillRect(0, 0, cantonwidth, cantonheight);
  stars(context, cantonwidth, cantonheight);
}

//Draws a grid of stars within a specified area on the canvas
function stars(context, cantonwidth, cantonheight) {
  var starrowcount = 9;
  var starradius = ((context.canvas.clientHeight / 13) * (4 / 5)) / 2;
  var ypos = cantonheight / 10;
  for (var x = 0; x < starrowcount; x++) {
    if (x % 2) {
      xpos = cantonwidth / 7;
      for (var j = 0; j < 5; j++) {
        star(context, xpos, ypos, starradius, 5, 0.35);
        xpos = xpos + cantonwidth / 6;
      }
    } else {
      xpos = cantonwidth / 15;
      for (var i = 0; i < 6; i++) {
        star(context, xpos, ypos, starradius, 5, 0.35);
        xpos = xpos + cantonwidth / 6;
      }
    }
    ypos = ypos + cantonheight / 10;
  }
}

//Draws a single star on the canvas
function star(context, x, y, r, p, m) {
  context.fillStyle = "#FFFFFF";
  context.save();
  context.beginPath();
  context.translate(x, y);
  context.moveTo(0, 0 - r);
  for (var i = 0; i < p; i++) {
    context.rotate(Math.PI / p);
    context.lineTo(0, 0 - r * m);
    context.rotate(Math.PI / p);
    context.lineTo(0, 0 - r);
  }
  context.fill();
  context.restore();
}

//Draw the final scene
function drawRocketMissionCompleteScene(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.canvas.style.border = "2px solid black";
  context.canvas.style.backgroundColor = "black";

  drawStars(context.canvas, context, 500);
  drawHill(context, "gray", 450, 480, 750, 200);
  drawCrater(context, 100, 390, 120, 25);
  drawCrater(context, 650, 330, 120, 25);
  drawCrater(context, 300, 350, 100, 25);
  drawCrater(context, 280, 450, 75, 25);
  drawCrater(context, 690, 400, 70, 25);
  drawCrater(context, 600, 450, 125, 25);
  drawCrater(context, 810, 430, 60, 25);

  drawRocket(context, 450, 250, 200, 0);
  drawPropeller(context, 450, 310, 100, 100, 0);
  drawRocketFins(context, 450, 300, 67, 200, 0);

  var flagOriginX = 120;
  var flagOriginY = 200;
  var flagWidth = 200;
  var flagHeight = 100;

  context.beginPath();
  context.rect(120, 290, 10, 80);
  context.fillStyle = "gray";
  context.fill();
  context.stroke();

  drawFlag(context, flagOriginX, flagOriginY, flagWidth, flagHeight);
}

//Get the canvas contexts
var rocketLaunchCanvas = document.querySelector("#rocket-launch");
var rocketLaunchContext = rocketLaunchCanvas.getContext("2d");
drawRocketLaunchScene(rocketLaunchContext);

var rocketFlyingCanvas = document.querySelector("#rocket-flying");
var rocketFlyingContext = rocketFlyingCanvas.getContext("2d");
drawRocketFlyingScene(rocketFlyingContext);

var rocketMoonLandingCanvas = document.querySelector("#rocket-moon-landing");
var rocketMoonLandingContext = rocketMoonLandingCanvas.getContext("2d");
drawRocketMoonLandingScene(rocketMoonLandingContext);

var rocketMissionCompleteCanvas = document.querySelector(
  "#rocket-mission-complete"
);
var rocketMissionCompleteContext = rocketMissionCompleteCanvas.getContext("2d");
drawRocketMissionCompleteScene(rocketMissionCompleteContext);
