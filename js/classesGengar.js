function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const gengarImages = {
  walkAnim: loadImage("./img/pokemonSprites/0065/Walk-Anim.png"),
  walkShadow: loadImage("./img/pokemonSprites/0065/Walk-Shadow.png"),
  attackAnim: loadImage("./img/pokemonSprites/0065/Attack-Anim.png"),
  attackShadow: loadImage("./img/pokemonSprites/0065/Attack-Shadow.png"),
  quickStrikeAnim: loadImage("./img/pokemonSprites/0065/QuickStrike-Anim.png"),
  quickStrikeShadow: loadImage(
    "./img/pokemonSprites/0065/QuickStrike-Shadow.png"
  ),
  shootAnim: loadImage("./img/pokemonSprites/0065/Shoot-Anim.png"),
  shootShadow: loadImage("./img/pokemonSprites/0065/Shoot-Shadow.png"),
  shockAnim: loadImage("./img/pokemonSprites/0065/Shock-Anim.png"),
  shockShadow: loadImage("./img/pokemonSprites/0065/Shock-Shadow.png"),
  sleepAnim: loadImage("./img/pokemonSprites/0065/Sleep-Anim.png"),
  sleepShadow: loadImage("./img/pokemonSprites/0065/Sleep-Shadow.png"),
  hurtAnim: loadImage("./img/pokemonSprites/0065/Hurt-Anim.png"),
  hurtShadow: loadImage("./img/pokemonSprites/0065/Hurt-Shadow.png"),
  idleAnim: loadImage("./img/pokemonSprites/0065/Idle-Anim.png"),
  idleShadow: loadImage("./img/pokemonSprites/0065/Idle-Shadow.png"),
  swingAnim: loadImage("./img/pokemonSprites/0065/Swing-Anim.png"),
  swingShadow: loadImage("./img/pokemonSprites/0065/Swing-Shadow.png"),
  doubleAnim: loadImage("./img/pokemonSprites/0065/Double-Anim.png"),
  doubleShadow: loadImage("./img/pokemonSprites/0065/Double-Shadow.png"),
  hopAnim: loadImage("./img/pokemonSprites/0065/Hop-Anim.png"),
  hopShadow: loadImage("./img/pokemonSprites/0065/Hop-Shadow.png"),
  chargeAnim: loadImage("./img/pokemonSprites/0065/Charge-Anim.png"),
  chargeShadow: loadImage("./img/pokemonSprites/0065/Charge-Shadow.png"),
  rotateAnim: loadImage("./img/pokemonSprites/0065/Rotate-Anim.png"),
  rotateShadow: loadImage("./img/pokemonSprites/0065/Rotate-Shadow.png"),
  eventSleepAnim: loadImage("./img/pokemonSprites/0065/EventSleep-Anim.png"),
  eventSleepShadow: loadImage(
    "./img/pokemonSprites/0065/EventSleep-Shadow.png"
  ),
  wakeAnim: loadImage("./img/pokemonSprites/0065/Wake-Anim.png"),
  wakeShadow: loadImage("./img/pokemonSprites/0065/Wake-Shadow.png"),
  eatAnim: loadImage("./img/pokemonSprites/0065/Eat-Anim.png"),
  eatShadow: loadImage("./img/pokemonSprites/0065/Eat-Shadow.png"),
  tumbleAnim: loadImage("./img/pokemonSprites/0065/Tumble-Anim.png"),
  tumbleShadow: loadImage("./img/pokemonSprites/0065/Tumble-Shadow.png"),
  poseAnim: loadImage("./img/pokemonSprites/0065/Pose-Anim.png"),
  poseShadow: loadImage("./img/pokemonSprites/0065/Pose-Shadow.png"),
  pullAnim: loadImage("./img/pokemonSprites/0065/Pull-Anim.png"),
  pullShadow: loadImage("./img/pokemonSprites/0065/Pull-Shadow.png"),
  painAnim: loadImage("./img/pokemonSprites/0065/Pain-Anim.png"),
  painShadow: loadImage("./img/pokemonSprites/0065/Pain-Shadow.png"),
  floatAnim: loadImage("./img/pokemonSprites/0065/Float-Anim.png"),
  floatShadow: loadImage("./img/pokemonSprites/0065/Float-Shadow.png"),
  deepBreathAnim: loadImage("./img/pokemonSprites/0065/DeepBreath-Anim.png"),
  deepBreathShadow: loadImage(
    "./img/pokemonSprites/0065/DeepBreath-Shadow.png"
  ),
  sitAnim: loadImage("./img/pokemonSprites/0065/Sit-Anim.png"),
  sitShadow: loadImage("./img/pokemonSprites/0065/Sit-Shadow.png"),
  lookUpAnim: loadImage("./img/pokemonSprites/0065/LookUp-Anim.png"),
  lookUpShadow: loadImage("./img/pokemonSprites/0065/LookUp-Shadow.png"),
  sinkAnim: loadImage("./img/pokemonSprites/0065/Sink-Anim.png"),
  sinkShadow: loadImage("./img/pokemonSprites/0065/Sink-Shadow.png"),
  tripAnim: loadImage("./img/pokemonSprites/0065/Trip-Anim.png"),
  tripShadow: loadImage("./img/pokemonSprites/0065/Trip-Shadow.png"),
  layingAnim: loadImage("./img/pokemonSprites/0065/Laying-Anim.png"),
  layingShadow: loadImage("./img/pokemonSprites/0065/Laying-Shadow.png"),
  leapForthAnim: loadImage("./img/pokemonSprites/0065/LeapForth-Anim.png"),
  leapForthShadow: loadImage("./img/pokemonSprites/0065/LeapForth-Shadow.png"),
  cringeAnim: loadImage("./img/pokemonSprites/0065/Cringe-Anim.png"),
  cringeShadow: loadImage("./img/pokemonSprites/0065/Cringe-Shadow.png"),
  lostBalanceAnim: loadImage("./img/pokemonSprites/0065/LostBalance-Anim.png"),
  lostBalanceShadow: loadImage(
    "./img/pokemonSprites/0065/LostBalance-Shadow.png"
  ),
  tumbleBackAnim: loadImage("./img/pokemonSprites/0065/TumbleBack-Anim.png"),
  tumbleBackShadow: loadImage(
    "./img/pokemonSprites/0065/TumbleBack-Shadow.png"
  ),
  faintAnim: loadImage("./img/pokemonSprites/0065/Faint-Anim.png"),
  faintShadow: loadImage("./img/pokemonSprites/0065/Faint-Shadow.png"),
  hitGroundAnim: loadImage("./img/pokemonSprites/0065/HitGround-Anim.png"),
  hitGroundShadow: loadImage("./img/pokemonSprites/0065/HitGround-Shadow.png"),
  // Add more gengarImages here if needed
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

const animConfigGengar = [
  {
    name: "walk",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.walkAnim,
    shadowImage: gengarImages.walkShadow,
  },
  {
    name: "attack",
    frames: 10,
    frameWidth: 80,
    frameHeight: 80,
    playerImage: gengarImages.attackAnim,
    shadowImage: gengarImages.attackShadow,
  },
  {
    name: "quickStrike",
    frames: 10,
    frameWidth: 120,
    frameHeight: 136,
    playerImage: gengarImages.quickStrikeAnim,
    shadowImage: gengarImages.quickStrikeShadow,
  },
  {
    name: "shoot",
    frames: 11,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: gengarImages.shootAnim,
    shadowImage: gengarImages.shootShadow,
  },
  {
    name: "shock",
    frames: 13,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: gengarImages.shockAnim,
    shadowImage: gengarImages.shockShadow,
  },
  {
    name: "sleep",
    frames: 2,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.sleepAnim,
    shadowImage: gengarImages.sleepShadow,
  },
  {
    name: "hurt",
    frames: 2,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: gengarImages.hurtAnim,
    shadowImage: gengarImages.hurtShadow,
  },
  {
    name: "idle",
    frames: 6,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: gengarImages.idleAnim,
    shadowImage: gengarImages.idleShadow,
  },
  {
    name: "swing",
    frames: 9,
    frameWidth: 80,
    frameHeight: 96,
    playerImage: gengarImages.swingAnim,
    shadowImage: gengarImages.swingShadow,
  },
  {
    name: "double",
    frames: 16,
    frameWidth: 64,
    frameHeight: 64,
    playerImage: gengarImages.doubleAnim,
    shadowImage: gengarImages.doubleShadow,
  },
  {
    name: "hop",
    frames: 10,
    frameWidth: 40,
    frameHeight: 88,
    playerImage: gengarImages.hopAnim,
    shadowImage: gengarImages.hopShadow,
  },
  {
    name: "charge",
    frames: 10,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: gengarImages.chargeAnim,
    shadowImage: gengarImages.chargeShadow,
  },
  {
    name: "rotate",
    frames: 9,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.rotateAnim,
    shadowImage: gengarImages.rotateShadow,
  },
  {
    name: "eventSleep",
    frames: 2,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: gengarImages.eventSleepAnim,
    shadowImage: gengarImages.eventSleepShadow,
  },
  {
    name: "wake",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: gengarImages.wakeAnim,
    shadowImage: gengarImages.wakeShadow,
  },
  {
    name: "eat",
    frames: 4,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: gengarImages.eatAnim,
    shadowImage: gengarImages.eatShadow,
  },
  {
    name: "tumble",
    frames: 8,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: gengarImages.tumbleAnim,
    shadowImage: gengarImages.tumbleShadow,
  },
  {
    name: "pose",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.poseAnim,
    shadowImage: gengarImages.poseShadow,
  },
  {
    name: "pull",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.pullAnim,
    shadowImage: gengarImages.pullShadow,
  },
  {
    name: "pain",
    frames: 12,
    frameWidth: 40,
    frameHeight: 48,
    playerImage: gengarImages.painAnim,
    shadowImage: gengarImages.painShadow,
  },
  {
    name: "float",
    frames: 4,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: gengarImages.floatAnim,
    shadowImage: gengarImages.floatShadow,
  },
  {
    name: "deepBreath",
    frames: 9,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: gengarImages.deepBreathAnim,
    shadowImage: gengarImages.deepBreathShadow,
  },
  {
    name: "sit",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.sitAnim,
    shadowImage: gengarImages.sitShadow,
  },
  {
    name: "lookUp",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.lookUpAnim,
    shadowImage: gengarImages.lookUpShadow,
  },
  {
    name: "sink",
    frames: 12,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: gengarImages.sinkAnim,
    shadowImage: gengarImages.sinkShadow,
  },
  {
    name: "trip",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: gengarImages.tripAnim,
    shadowImage: gengarImages.tripShadow,
  },
  {
    name: "laying",
    frames: 1,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: gengarImages.layingAnim,
    shadowImage: gengarImages.layingShadow,
  },
  {
    name: "leapForth",
    frames: 5,
    frameWidth: 24,
    frameHeight: 72,
    playerImage: gengarImages.leapForthAnim,
    shadowImage: gengarImages.leapForthShadow,
  },
  {
    name: "cringe",
    frames: 2,
    frameWidth: 24,
    frameHeight: 64,
    playerImage: gengarImages.cringeAnim,
    shadowImage: gengarImages.cringeShadow,
  },
  {
    name: "lostBalance",
    frames: 2,
    frameWidth: 32,
    frameHeight: 46,
    playerImage: gengarImages.lostBalanceAnim,
    shadowImage: gengarImages.lostBalanceShadow,
  },
  {
    name: "tumbleBack",
    frames: 10,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: gengarImages.tumbleBackAnim,
    shadowImage: gengarImages.tumbleBackShadow,
  },
  {
    name: "faint",
    frames: 4,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: gengarImages.faintAnim,
    shadowImage: gengarImages.faintShadow,
  },
  {
    name: "hitGround",
    frames: 8,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: gengarImages.hitGroundAnim,
    shadowImage: gengarImages.hitGroundShadow,
  },
  // ... Repeat this for other animation configurations
];


const animationData = {
  walk: { config: animConfigGengar[0], animations: walkAnimationsGengar },
  attack: { config: animConfigGengar[1], animations: attackAnimationsGengar },
  quickStrike: { config: animConfigGengar[2], animations: quickStrikeAnimationsGengar },
  shoot: { config: animConfigGengar[3], animations: shootAnimationsGengar },
  shock: { config: animConfigGengar[4], animations: shockAnimationsGengar },
  sleep: { config: animConfigGengar[5], animations: sleepAnimationsGengar },
  hurt: { config: animConfigGengar[6], animations: hurtAnimationsGengar },
  idle: { config: animConfigGengar[7], animations: idleAnimationsGengar },
  swing: { config: animConfigGengar[8], animations: swingAnimationsGengar },
  double: { config: animConfigGengar[9], animations: doubleAnimationsGengar },
  hop: { config: animConfigGengar[10], animations: hopAnimationsGengar },
  charge: { config: animConfigGengar[11], animations: chargeAnimationsGengar },
  rotate: { config: animConfigGengar[12], animations: rotateAnimationsGengar },
  eventSleep: { config: animConfigGengar[13], animations: eventSleepAnimationsGengar },
  wake: { config: animConfigGengar[14], animations: wakeAnimationsGengar },
  eat: { config: animConfigGengar[15], animations: eatAnimationsGengar },
  tumble: { config: animConfigGengar[16], animations: tumbleAnimationsGengar },
  pose: { config: animConfigGengar[17], animations: poseAnimationsGengar },
  pull: { config: animConfigGengar[18], animations: pullAnimationsGengar },
  pain: { config: animConfigGengar[19], animations: painAnimationsGengar },
  float: { config: animConfigGengar[20], animations: floatAnimationsGengar },
  deepBreath: { config: animConfigGengar[21], animations: deepBreathAnimationsGengar },
  sit: { config: animConfigGengar[22], animations: sitAnimationsGengar },
  lookUp: { config: animConfigGengar[23], animations: lookUpAnimationsGengar },
  sink: { config: animConfigGengar[24], animations: sinkAnimationsGengar },
  trip: { config: animConfigGengar[25], animations: tripAnimationsGengar },
  laying: { config: animConfigGengar[26], animations: layingAnimationsGengar },
  leapForth: { config: animConfigGengar[27], animations: leapForthAnimationsGengar },
  cringe: { config: animConfigGengar[28], animations: cringeAnimationsGengar },
  lostBalance: { config: animConfigGengar[29], animations: lostBalanceAnimationsGengar },
  tumbleBack: { config: animConfigGengar[30], animations: tumbleBackAnimationsGengar },
  faint: { config: animConfigGengar[31], animations: faintAnimationsGengar },
  hitGround: { config: animConfigGengar[32], animations: hitGroundAnimationsGengar },
  // Add more animations here if needed
};



