function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const bkgImages = {
  bkgImage: loadImage("./img/map/testmap_base.png"),
  topBkgImage: loadImage("./img/map/testmap_top.png"),
};

const pickachuImages = {
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
  // Add more pickachuImages here if needed
};
const walkAnimationsPikachu = [];
const attackAnimationsPikachu = [];
const quickStrikeAnimationsPikachu = [];
const shootAnimationsPikachu = [];
const shockAnimationsPikachu = [];
const sleepAnimationsPikachu = [];
const hurtAnimationsPikachu = [];
const idleAnimationsPikachu = [];
const swingAnimationsPikachu = [];
const doubleAnimationsPikachu = [];
const hopAnimationsPikachu = [];
const chargeAnimationsPikachu = [];
const rotateAnimationsPikachu = [];
const eventSleepAnimationsPikachu = [];
const wakeAnimationsPikachu = [];
const eatAnimationsPikachu = [];
const tumbleAnimationsPikachu = [];
const poseAnimationsPikachu = [];
const pullAnimationsPikachu = [];
const painAnimationsPikachu = [];
const floatAnimationsPikachu = [];
const deepBreathAnimationsPikachu = [];
const sitAnimationsPikachu = [];
const lookUpAnimationsPikachu = [];
const sinkAnimationsPikachu = [];
const tripAnimationsPikachu = [];
const layingAnimationsPikachu = [];
const leapForthAnimationsPikachu = [];
const cringeAnimationsPikachu = [];
const lostBalanceAnimationsPikachu = [];
const tumbleBackAnimationsPikachu = [];
const faintAnimationsPikachu = [];
const hitGroundAnimationsPikachu = [];
// Remove the shadow arrays

const animConfigPikachu = [
  {
    name: "walk",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.walkAnim,
    shadowImage: pickachuImages.walkShadow,
  },
  {
    name: "attack",
    frames: 10,
    frameWidth: 80,
    frameHeight: 80,
    playerImage: pickachuImages.attackAnim,
    shadowImage: pickachuImages.attackShadow,
  },
  {
    name: "quickStrike",
    frames: 10,
    frameWidth: 120,
    frameHeight: 136,
    playerImage: pickachuImages.quickStrikeAnim,
    shadowImage: pickachuImages.quickStrikeShadow,
  },
  {
    name: "shoot",
    frames: 11,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: pickachuImages.shootAnim,
    shadowImage: pickachuImages.shootShadow,
  },
  {
    name: "shock",
    frames: 13,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: pickachuImages.shockAnim,
    shadowImage: pickachuImages.shockShadow,
  },
  {
    name: "sleep",
    frames: 2,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.sleepAnim,
    shadowImage: pickachuImages.sleepShadow,
  },
  {
    name: "hurt",
    frames: 2,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: pickachuImages.hurtAnim,
    shadowImage: pickachuImages.hurtShadow,
  },
  {
    name: "idle",
    frames: 6,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: pickachuImages.idleAnim,
    shadowImage: pickachuImages.idleShadow,
  },
  {
    name: "swing",
    frames: 9,
    frameWidth: 80,
    frameHeight: 96,
    playerImage: pickachuImages.swingAnim,
    shadowImage: pickachuImages.swingShadow,
  },
  {
    name: "double",
    frames: 16,
    frameWidth: 64,
    frameHeight: 64,
    playerImage: pickachuImages.doubleAnim,
    shadowImage: pickachuImages.doubleShadow,
  },
  {
    name: "hop",
    frames: 10,
    frameWidth: 40,
    frameHeight: 88,
    playerImage: pickachuImages.hopAnim,
    shadowImage: pickachuImages.hopShadow,
  },
  {
    name: "charge",
    frames: 10,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: pickachuImages.chargeAnim,
    shadowImage: pickachuImages.chargeShadow,
  },
  {
    name: "rotate",
    frames: 9,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.rotateAnim,
    shadowImage: pickachuImages.rotateShadow,
  },
  {
    name: "eventSleep",
    frames: 2,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: pickachuImages.eventSleepAnim,
    shadowImage: pickachuImages.eventSleepShadow,
  },
  {
    name: "wake",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: pickachuImages.wakeAnim,
    shadowImage: pickachuImages.wakeShadow,
  },
  {
    name: "eat",
    frames: 4,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: pickachuImages.eatAnim,
    shadowImage: pickachuImages.eatShadow,
  },
  {
    name: "tumble",
    frames: 8,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: pickachuImages.tumbleAnim,
    shadowImage: pickachuImages.tumbleShadow,
  },
  {
    name: "pose",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.poseAnim,
    shadowImage: pickachuImages.poseShadow,
  },
  {
    name: "pull",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.pullAnim,
    shadowImage: pickachuImages.pullShadow,
  },
  {
    name: "pain",
    frames: 12,
    frameWidth: 40,
    frameHeight: 48,
    playerImage: pickachuImages.painAnim,
    shadowImage: pickachuImages.painShadow,
  },
  {
    name: "float",
    frames: 4,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: pickachuImages.floatAnim,
    shadowImage: pickachuImages.floatShadow,
  },
  {
    name: "deepBreath",
    frames: 9,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: pickachuImages.deepBreathAnim,
    shadowImage: pickachuImages.deepBreathShadow,
  },
  {
    name: "sit",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.sitAnim,
    shadowImage: pickachuImages.sitShadow,
  },
  {
    name: "lookUp",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.lookUpAnim,
    shadowImage: pickachuImages.lookUpShadow,
  },
  {
    name: "sink",
    frames: 12,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: pickachuImages.sinkAnim,
    shadowImage: pickachuImages.sinkShadow,
  },
  {
    name: "trip",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: pickachuImages.tripAnim,
    shadowImage: pickachuImages.tripShadow,
  },
  {
    name: "laying",
    frames: 1,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: pickachuImages.layingAnim,
    shadowImage: pickachuImages.layingShadow,
  },
  {
    name: "leapForth",
    frames: 5,
    frameWidth: 24,
    frameHeight: 72,
    playerImage: pickachuImages.leapForthAnim,
    shadowImage: pickachuImages.leapForthShadow,
  },
  {
    name: "cringe",
    frames: 2,
    frameWidth: 24,
    frameHeight: 64,
    playerImage: pickachuImages.cringeAnim,
    shadowImage: pickachuImages.cringeShadow,
  },
  {
    name: "lostBalance",
    frames: 2,
    frameWidth: 32,
    frameHeight: 46,
    playerImage: pickachuImages.lostBalanceAnim,
    shadowImage: pickachuImages.lostBalanceShadow,
  },
  {
    name: "tumbleBack",
    frames: 10,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pickachuImages.tumbleBackAnim,
    shadowImage: pickachuImages.tumbleBackShadow,
  },
  {
    name: "faint",
    frames: 4,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: pickachuImages.faintAnim,
    shadowImage: pickachuImages.faintShadow,
  },
  {
    name: "hitGround",
    frames: 8,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: pickachuImages.hitGroundAnim,
    shadowImage: pickachuImages.hitGroundShadow,
  },
  // ... Repeat this for other animation configurations
];


const animationData = {
  walk: { config: animConfigPikachu[0], animations: walkAnimationsPikachu },
  attack: { config: animConfigPikachu[1], animations: attackAnimationsPikachu },
  quickStrike: { config: animConfigPikachu[2], animations: quickStrikeAnimationsPikachu },
  shoot: { config: animConfigPikachu[3], animations: shootAnimationsPikachu },
  shock: { config: animConfigPikachu[4], animations: shockAnimationsPikachu },
  sleep: { config: animConfigPikachu[5], animations: sleepAnimationsPikachu },
  hurt: { config: animConfigPikachu[6], animations: hurtAnimationsPikachu },
  idle: { config: animConfigPikachu[7], animations: idleAnimationsPikachu },
  swing: { config: animConfigPikachu[8], animations: swingAnimationsPikachu },
  double: { config: animConfigPikachu[9], animations: doubleAnimationsPikachu },
  hop: { config: animConfigPikachu[10], animations: hopAnimationsPikachu },
  charge: { config: animConfigPikachu[11], animations: chargeAnimationsPikachu },
  rotate: { config: animConfigPikachu[12], animations: rotateAnimationsPikachu },
  eventSleep: { config: animConfigPikachu[13], animations: eventSleepAnimationsPikachu },
  wake: { config: animConfigPikachu[14], animations: wakeAnimationsPikachu },
  eat: { config: animConfigPikachu[15], animations: eatAnimationsPikachu },
  tumble: { config: animConfigPikachu[16], animations: tumbleAnimationsPikachu },
  pose: { config: animConfigPikachu[17], animations: poseAnimationsPikachu },
  pull: { config: animConfigPikachu[18], animations: pullAnimationsPikachu },
  pain: { config: animConfigPikachu[19], animations: painAnimationsPikachu },
  float: { config: animConfigPikachu[20], animations: floatAnimationsPikachu },
  deepBreath: { config: animConfigPikachu[21], animations: deepBreathAnimationsPikachu },
  sit: { config: animConfigPikachu[22], animations: sitAnimationsPikachu },
  lookUp: { config: animConfigPikachu[23], animations: lookUpAnimationsPikachu },
  sink: { config: animConfigPikachu[24], animations: sinkAnimationsPikachu },
  trip: { config: animConfigPikachu[25], animations: tripAnimationsPikachu },
  laying: { config: animConfigPikachu[26], animations: layingAnimationsPikachu },
  leapForth: { config: animConfigPikachu[27], animations: leapForthAnimationsPikachu },
  cringe: { config: animConfigPikachu[28], animations: cringeAnimationsPikachu },
  lostBalance: { config: animConfigPikachu[29], animations: lostBalanceAnimationsPikachu },
  tumbleBack: { config: animConfigPikachu[30], animations: tumbleBackAnimationsPikachu },
  faint: { config: animConfigPikachu[31], animations: faintAnimationsPikachu },
  hitGround: { config: animConfigPikachu[32], animations: hitGroundAnimationsPikachu },
  // Add more animations here if needed
};


