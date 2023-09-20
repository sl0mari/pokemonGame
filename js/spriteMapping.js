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

 
  // Use a function to populate the arrays based on the configuration
  function populateAnimationsAndShadows(animConfig) {
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
  populateAnimationsAndShadows(animConfigPikachu);