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
  