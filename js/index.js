function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const images = {
  bkgImage: loadImage("./img/map/testmap_base.png"),
  walkAnim: loadImage("./img/pokemonSprites/0025/Walk-Anim.png"),
  walkShadow: loadImage("./img/pokemonSprites/0025/Walk-Shadow.png"),
  attackAnim: loadImage("./img/pokemonSprites/0025/Attack-Anim.png"),
  attackShadow: loadImage("./img/pokemonSprites/0025/Attack-Shadow.png"),
  quickStrikeAnim: loadImage("./img/pokemonSprites/0025/QuickStrike-Anim.png"),
  quickStrikeShadow: loadImage(
    "./img/pokemonSprites/0025/QuickStrike-Shadow.png"
  ),
  shootAnim: loadImage("./img/pokemonSprites/0025/Shoot-Anim.png"),
  shootShadow: loadImage("./img/pokemonSprites/0025/Shoot-Shadow.png"),
  shockAnim: loadImage("./img/pokemonSprites/0025/Shock-Anim.png"),
  shockShadow: loadImage("./img/pokemonSprites/0025/Shock-Shadow.png"),
  sleepAnim: loadImage("./img/pokemonSprites/0025/Sleep-Anim.png"),
  sleepShadow: loadImage("./img/pokemonSprites/0025/Sleep-Shadow.png"),
  hurtAnim: loadImage("./img/pokemonSprites/0025/Hurt-Anim.png"),
  hurtShadow: loadImage("./img/pokemonSprites/0025/Hurt-Shadow.png"),
  idleAnim: loadImage("./img/pokemonSprites/0025/Idle-Anim.png"),
  idleShadow: loadImage("./img/pokemonSprites/0025/Idle-Shadow.png"),
  swingAnim: loadImage("./img/pokemonSprites/0025/Swing-Anim.png"),
  swingShadow: loadImage("./img/pokemonSprites/0025/Swing-Shadow.png"),
  doubleAnim: loadImage("./img/pokemonSprites/0025/Double-Anim.png"),
  doubleShadow: loadImage("./img/pokemonSprites/0025/Double-Shadow.png"),
  hopAnim: loadImage("./img/pokemonSprites/0025/Hop-Anim.png"),
  hopShadow: loadImage("./img/pokemonSprites/0025/Hop-Shadow.png"),
  chargeAnim: loadImage("./img/pokemonSprites/0025/Charge-Anim.png"),
  chargeShadow: loadImage("./img/pokemonSprites/0025/Charge-Shadow.png"),
  rotateAnim: loadImage("./img/pokemonSprites/0025/Rotate-Anim.png"),
  rotateShadow: loadImage("./img/pokemonSprites/0025/Rotate-Shadow.png"),
  eventSleepAnim: loadImage("./img/pokemonSprites/0025/EventSleep-Anim.png"),
  eventSleepShadow: loadImage(
    "./img/pokemonSprites/0025/EventSleep-Shadow.png"
  ),
  wakeAnim: loadImage("./img/pokemonSprites/0025/Wake-Anim.png"),
  wakeShadow: loadImage("./img/pokemonSprites/0025/Wake-Shadow.png"),
  eatAnim: loadImage("./img/pokemonSprites/0025/Eat-Anim.png"),
  eatShadow: loadImage("./img/pokemonSprites/0025/Eat-Shadow.png"),
  tumbleAnim: loadImage("./img/pokemonSprites/0025/Tumble-Anim.png"),
  tumbleShadow: loadImage("./img/pokemonSprites/0025/Tumble-Shadow.png"),
  poseAnim: loadImage("./img/pokemonSprites/0025/Pose-Anim.png"),
  poseShadow: loadImage("./img/pokemonSprites/0025/Pose-Shadow.png"),
  pullAnim: loadImage("./img/pokemonSprites/0025/Pull-Anim.png"),
  pullShadow: loadImage("./img/pokemonSprites/0025/Pull-Shadow.png"),
  painAnim: loadImage("./img/pokemonSprites/0025/Pain-Anim.png"),
  painShadow: loadImage("./img/pokemonSprites/0025/Pain-Shadow.png"),
  floatAnim: loadImage("./img/pokemonSprites/0025/Float-Anim.png"),
  floatShadow: loadImage("./img/pokemonSprites/0025/Float-Shadow.png"),
  deepBreathAnim: loadImage("./img/pokemonSprites/0025/DeepBreath-Anim.png"),
  deepBreathShadow: loadImage(
    "./img/pokemonSprites/0025/DeepBreath-Shadow.png"
  ),
  sitAnim: loadImage("./img/pokemonSprites/0025/Sit-Anim.png"),
  sitShadow: loadImage("./img/pokemonSprites/0025/Sit-Shadow.png"),
  lookUpAnim: loadImage("./img/pokemonSprites/0025/LookUp-Anim.png"),
  lookUpShadow: loadImage("./img/pokemonSprites/0025/LookUp-Shadow.png"),
  sinkAnim: loadImage("./img/pokemonSprites/0025/Sink-Anim.png"),
  sinkShadow: loadImage("./img/pokemonSprites/0025/Sink-Shadow.png"),
  tripAnim: loadImage("./img/pokemonSprites/0025/Trip-Anim.png"),
  tripShadow: loadImage("./img/pokemonSprites/0025/Trip-Shadow.png"),
  layingAnim: loadImage("./img/pokemonSprites/0025/Laying-Anim.png"),
  layingShadow: loadImage("./img/pokemonSprites/0025/Laying-Shadow.png"),
  leapForthAnim: loadImage("./img/pokemonSprites/0025/LeapForth-Anim.png"),
  leapForthShadow: loadImage("./img/pokemonSprites/0025/LeapForth-Shadow.png"),
  cringeAnim: loadImage("./img/pokemonSprites/0025/Cringe-Anim.png"),
  cringeShadow: loadImage("./img/pokemonSprites/0025/Cringe-Shadow.png"),
  lostBalanceAnim: loadImage("./img/pokemonSprites/0025/LostBalance-Anim.png"),
  lostBalanceShadow: loadImage(
    "./img/pokemonSprites/0025/LostBalance-Shadow.png"
  ),
  tumbleBackAnim: loadImage("./img/pokemonSprites/0025/TumbleBack-Anim.png"),
  tumbleBackShadow: loadImage(
    "./img/pokemonSprites/0025/TumbleBack-Shadow.png"
  ),
  faintAnim: loadImage("./img/pokemonSprites/0025/Faint-Anim.png"),
  faintShadow: loadImage("./img/pokemonSprites/0025/Faint-Shadow.png"),
  hitGroundAnim: loadImage("./img/pokemonSprites/0025/HitGround-Anim.png"),
  hitGroundShadow: loadImage("./img/pokemonSprites/0025/HitGround-Shadow.png"),
  // Add more images here if needed
};

const walkAnimations = [];
const attackAnimations = [];
const quickStrikeAnimations = [];
const shootAnimations = [];
const shockAnimations = [];
const sleepAnimations = [];
const hurtAnimations = [];
const idleAnimations = [];
const swingAnimations = [];
const doubleAnimations = [];
const hopAnimations = [];
const chargeAnimations = [];
const rotateAnimations = [];
const eventSleepAnimations = [];
const wakeAnimations = [];
const eatAnimations = [];
const tumbleAnimations = [];
const poseAnimations = [];
const pullAnimations = [];
const painAnimations = [];
const floatAnimations = [];
const deepBreathAnimations = [];
const sitAnimations = [];
const lookUpAnimations = [];
const sinkAnimations = [];
const tripAnimations = [];
const layingAnimations = [];
const leapForthAnimations = [];
const cringeAnimations = [];
const lostBalanceAnimations = [];
const tumbleBackAnimations = [];
const faintAnimations = [];
const hitGroundAnimations = [];
// Remove the shadow arrays

const animConfig = [
  {
    name: "walk",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.walkAnim,
    shadowImage: images.walkShadow,
  },
  {
    name: "attack",
    frames: 10,
    frameWidth: 80,
    frameHeight: 80,
    playerImage: images.attackAnim,
    shadowImage: images.attackShadow,
  },
  {
    name: "quickStrike",
    frames: 10,
    frameWidth: 120,
    frameHeight: 136,
    playerImage: images.quickStrikeAnim,
    shadowImage: images.quickStrikeShadow,
  },
  {
    name: "shoot",
    frames: 11,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: images.shootAnim,
    shadowImage: images.shootShadow,
  },
  {
    name: "shock",
    frames: 13,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: images.shockAnim,
    shadowImage: images.shockShadow,
  },
  {
    name: "sleep",
    frames: 2,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.sleepAnim,
    shadowImage: images.sleepShadow,
  },
  {
    name: "hurt",
    frames: 2,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: images.hurtAnim,
    shadowImage: images.hurtShadow,
  },
  {
    name: "idle",
    frames: 6,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: images.idleAnim,
    shadowImage: images.idleShadow,
  },
  {
    name: "swing",
    frames: 9,
    frameWidth: 80,
    frameHeight: 96,
    playerImage: images.swingAnim,
    shadowImage: images.swingShadow,
  },
  {
    name: "double",
    frames: 16,
    frameWidth: 64,
    frameHeight: 64,
    playerImage: images.doubleAnim,
    shadowImage: images.doubleShadow,
  },
  {
    name: "hop",
    frames: 10,
    frameWidth: 40,
    frameHeight: 88,
    playerImage: images.hopAnim,
    shadowImage: images.hopShadow,
  },
  {
    name: "charge",
    frames: 10,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: images.chargeAnim,
    shadowImage: images.chargeShadow,
  },
  {
    name: "rotate",
    frames: 9,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.rotateAnim,
    shadowImage: images.rotateShadow,
  },
  {
    name: "eventSleep",
    frames: 2,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: images.eventSleepAnim,
    shadowImage: images.eventSleepShadow,
  },
  {
    name: "wake",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: images.wakeAnim,
    shadowImage: images.wakeShadow,
  },
  {
    name: "eat",
    frames: 4,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: images.eatAnim,
    shadowImage: images.eatShadow,
  },
  {
    name: "tumble",
    frames: 8,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: images.tumbleAnim,
    shadowImage: images.tumbleShadow,
  },
  {
    name: "pose",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.poseAnim,
    shadowImage: images.poseShadow,
  },
  {
    name: "pull",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.pullAnim,
    shadowImage: images.pullShadow,
  },
  {
    name: "pain",
    frames: 12,
    frameWidth: 40,
    frameHeight: 48,
    playerImage: images.painAnim,
    shadowImage: images.painShadow,
  },
  {
    name: "float",
    frames: 4,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: images.floatAnim,
    shadowImage: images.floatShadow,
  },
  {
    name: "deepBreath",
    frames: 9,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: images.deepBreathAnim,
    shadowImage: images.deepBreathShadow,
  },
  {
    name: "sit",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.sitAnim,
    shadowImage: images.sitShadow,
  },
  {
    name: "lookUp",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.lookUpAnim,
    shadowImage: images.lookUpShadow,
  },
  {
    name: "sink",
    frames: 12,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: images.sinkAnim,
    shadowImage: images.sinkShadow,
  },
  {
    name: "trip",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: images.tripAnim,
    shadowImage: images.tripShadow,
  },
  {
    name: "laying",
    frames: 1,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: images.layingAnim,
    shadowImage: images.layingShadow,
  },
  {
    name: "leapForth",
    frames: 5,
    frameWidth: 24,
    frameHeight: 72,
    playerImage: images.leapForthAnim,
    shadowImage: images.leapForthShadow,
  },
  {
    name: "cringe",
    frames: 2,
    frameWidth: 24,
    frameHeight: 64,
    playerImage: images.cringeAnim,
    shadowImage: images.cringeShadow,
  },
  {
    name: "lostBalance",
    frames: 2,
    frameWidth: 32,
    frameHeight: 46,
    playerImage: images.lostBalanceAnim,
    shadowImage: images.lostBalanceShadow,
  },
  {
    name: "tumbleBack",
    frames: 10,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: images.tumbleBackAnim,
    shadowImage: images.tumbleBackShadow,
  },
  {
    name: "faint",
    frames: 4,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: images.faintAnim,
    shadowImage: images.faintShadow,
  },
  {
    name: "hitGround",
    frames: 8,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: images.hitGroundAnim,
    shadowImage: images.hitGroundShadow,
  },
  // ... Repeat this for other animation configurations
];

const stateMap = {
  walk: 0,
  attack: 1,
  quickStrike: 2,
  shoot: 3,
  shock: 4,
  sleep: 5,
  hurt: 6,
  idle: 7,
  swing: 8,
  double: 9,
  hop: 10,
  charge: 11,
  rotate: 12,
  eventSleep: 13,
  wake: 14,
  eat: 15,
  tumble: 16,
  pose: 17,
  pull: 18,
  pain: 19,
  float: 20,
  deepBreath: 21,
  sit: 22,
  lookUp: 23,
  sink: 24,
  trip: 25,
  laying: 26,
  leapForth: 27,
  cringe: 28,
  lostBalance: 29,
  tumbleBack: 30,
  faint: 31,
  hitGround: 32,
  // Add more entries as needed for other states
};

const player = {
  playerState: "walk",
  stateType: 0,
  playerDirection: "south",
  moveSpeed: 1,
  positionY: 0,
  positionX: 0,
  keyPresses: {},
  moveAmount: 10,
  hasMoved: false,
};

const spriteDirections = [
  {
    name: "south",
  },
  {
    name: "southEast",
  },
  {
    name: "east",
  },
  {
    name: "northEast",
  },
  {
    name: "north",
  },
  {
    name: "northWest",
  },
  {
    name: "west",
  },
  {
    name: "southWest",
  },
];

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

const animationData = {
  walk: { config: animConfig[0], animations: walkAnimations },
  attack: { config: animConfig[1], animations: attackAnimations },
  quickStrike: { config: animConfig[2], animations: quickStrikeAnimations },
  shoot: { config: animConfig[3], animations: shootAnimations },
  shock: { config: animConfig[4], animations: shockAnimations },
  sleep: { config: animConfig[5], animations: sleepAnimations },
  hurt: { config: animConfig[6], animations: hurtAnimations },
  idle: { config: animConfig[7], animations: idleAnimations },
  swing: { config: animConfig[8], animations: swingAnimations },
  double: { config: animConfig[9], animations: doubleAnimations },
  hop: { config: animConfig[10], animations: hopAnimations },
  charge: { config: animConfig[11], animations: chargeAnimations },
  rotate: { config: animConfig[12], animations: rotateAnimations },
  eventSleep: { config: animConfig[13], animations: eventSleepAnimations },
  wake: { config: animConfig[14], animations: wakeAnimations },
  eat: { config: animConfig[15], animations: eatAnimations },
  tumble: { config: animConfig[16], animations: tumbleAnimations },
  pose: { config: animConfig[17], animations: poseAnimations },
  pull: { config: animConfig[18], animations: pullAnimations },
  pain: { config: animConfig[19], animations: painAnimations },
  float: { config: animConfig[20], animations: floatAnimations },
  deepBreath: { config: animConfig[21], animations: deepBreathAnimations },
  sit: { config: animConfig[22], animations: sitAnimations },
  lookUp: { config: animConfig[23], animations: lookUpAnimations },
  sink: { config: animConfig[24], animations: sinkAnimations },
  trip: { config: animConfig[25], animations: tripAnimations },
  laying: { config: animConfig[26], animations: layingAnimations },
  leapForth: { config: animConfig[27], animations: leapForthAnimations },
  cringe: { config: animConfig[28], animations: cringeAnimations },
  lostBalance: { config: animConfig[29], animations: lostBalanceAnimations },
  tumbleBack: { config: animConfig[30], animations: tumbleBackAnimations },
  faint: { config: animConfig[31], animations: faintAnimations },
  hitGround: { config: animConfig[32], animations: hitGroundAnimations },
  // Add more animations here if needed
};

// Use a function to populate the arrays based on the configuration
function populateAnimationsAndShadows() {
  animConfig.forEach((config, index) => {
    let currentAnimation = animationData[config.name];

    spriteDirections.forEach((direction, index) => {
      const frames = { loc: [] };
      for (let j = 0; j < config.frames; j++) {
        const positionX = j * config.frameWidth;
        const positionY = index * config.frameHeight;
        frames.loc.push({ x: positionX, y: positionY });
      }

      currentAnimation[direction.name] = frames;
    });
  });
}
console.log(animationData);
populateAnimationsAndShadows();

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
