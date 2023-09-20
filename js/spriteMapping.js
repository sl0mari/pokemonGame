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