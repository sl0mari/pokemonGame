function checkDirection() {
  angleMath();
  //switch row of spritesheet for proper direction
  if (angle > 180) {
    angle = angle - 360;
  }
  switch (true) {
    case angle <= 22.5 && angle > -22.5:
      //east
      player.playerDirection = spriteDirections[2].name;
      break;
    case angle <= 67.5 && angle > 22.5:
      //southeast
      player.playerDirection = spriteDirections[1].name;
      break;
    case angle <= 112.5 && angle > 67.5:
      //south
      player.playerDirection = spriteDirections[0].name;
      break;
    case angle <= 157.5 && angle > 112.5:
      //southwest
      player.playerDirection = spriteDirections[7].name;
      break;
    case angle <= -157.5 || angle > 157.5:
      //west
      player.playerDirection = spriteDirections[6].name;
      break;
    case angle <= -112.5 && angle > -157.5:
      //northwest
      player.playerDirection = spriteDirections[5].name;
      break;
    case angle <= -67.5 && angle > -112.5:
      //north
      player.playerDirection = spriteDirections[4].name;
      break;
    case angle <= -22.5 && angle > -67.5:
      //northeast
      player.playerDirection = spriteDirections[3].name;
      break;
  }
}

function stateCheck() {
  player.stateType = stateMap[player.playerState] || 0; // Default to walk if not found
}

function atan2Normalized(x, y) {
  let degrees = (Math.atan2(y, x) * 180) / Math.PI;
  if (Math.abs(degrees) >= 180) {
    degrees = 45 - degrees;
  } else {
    degrees = 90 - degrees;
  }
  return degrees;
}

function angleMath() {
  //base movement off of offset character coordinates to center  head of character
  xD =
    mouse.x - (player.positionX + animConfig[player.stateType].frameWidth / 2);
  yD =
    mouse.y - (player.positionY + animConfig[player.stateType].frameHeight / 4);
  //get the angle of the mouse relative to the character
  angle = atan2Normalized(yD, xD);
  //get the length of the vector from character to mouse
  hypotenuse = Math.hypot(xD, yD);
}
//difference between mouse and character's positions
let xD = 0;
let yD = 0;
//angle of the mouse relative to the character
let angle = 0;
//length of the vector from character to mouse
let hypotenuse = 0;
// ... (Previous code for image loading and animation configuration)

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = 800;
canvas.width = 600;
ctx.imageSmoothingEnabled = false;

let isShiftKeyPressed = false;

const mouse = {
  x: null,
  y: null,
  present: false,
  clicked: false,
  moved: false,
};

let gameFrame = 0;
const staggerFrames = 24;

function moveCharacter(animationInfo) {
  checkDirection();
  stateCheck();
  let deltaX = xD / hypotenuse;
  let deltaY = yD / hypotenuse;

  // Check if the Shift key is held down before allowing movement
  if (isShiftKeyPressed) {
    if (
      player.positionX + deltaX >= 0 &&
      player.positionX + animationInfo.config.frameWidth + deltaX <= canvas.width
    ) {
      player.positionX += deltaX * player.moveSpeed;
    }
    if (
      player.positionY + deltaY >= 0 &&
      player.positionY + animationInfo.config.frameHeight + deltaY <=
        canvas.height
    ) {
      player.positionY += deltaY * player.moveSpeed;
    }
  }
}
let idle =0;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const animationInfo = animationData[player.playerState];

  // Update mouse position and calculate character state


  if (animationInfo) {

    const currentAnimationData = animationInfo.config;
    const currentState = player.playerState;
    const currentDirection = spriteDirections.indexOf(player.playerDirection);
    const currentAnimation = animationInfo.animations;
    const playerDirection = player.playerDirection;

    const position =
      Math.floor(gameFrame / staggerFrames) % currentAnimationData.frames;
    const directionY = animationInfo[player.playerDirection].loc[position].y;

    const frameX = currentAnimationData.frameWidth * position;


    if (
      player.positionX > mouse.x + 25 ||
      player.positionY > mouse.y + 25 ||
      player.positionX < mouse.x - 25 ||
      player.positionY < mouse.y - 25
    ) {
      player.playerState = "walk";
      moveCharacter(animationInfo);
    } 
    else if (idle) {
      player.playerState = "idle";
      player.stateType = 7;
      idle++;
      console.log(idle);
    }
    
    ctx.drawImage(
      animationInfo.config.shadowImage,
      frameX,
      directionY,
      animationInfo.config.frameWidth,
      animationInfo.config.frameHeight,
      player.positionX,
      player.positionY,
      animationInfo.config.frameWidth,
      animationInfo.config.frameHeight
    );
    ctx.drawImage(
      animationInfo.config.playerImage,
      frameX,
      directionY,
      animationInfo.config.frameWidth,
      animationInfo.config.frameHeight,
      player.positionX,
      player.positionY,
      animationInfo.config.frameWidth,
      animationInfo.config.frameHeight
    );
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

function mouseMoveListener(e) {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;
}

function mouseOverListener(e) {
  mouse.present = true;
}

function mouseOutListener(e) {
  mouse.present = false;
}

// Event listener for the Shift key press
window.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    isShiftKeyPressed = true;
  }
});

// Event listener for the Shift key release
window.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    isShiftKeyPressed = false;
  }
});


canvas.addEventListener("mousemove", mouseMoveListener);
canvas.addEventListener("mouseover", mouseOverListener);
canvas.addEventListener("mouseout", mouseOutListener);

// Start the animation loop
animate();
