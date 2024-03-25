function speedChecker(speed) {
    let maxSpeed = 70;
    let pointDeduction = 5;
    if (speed < maxSpeed) {
      console.log("Ok");
      return;
    }
    let reducePoints = (speed - maxSpeed) / pointDeduction;
    if (reducePoints >= 12) {
      console.log("License suspended");
      return;
    } else {
      console.log(
        `You have been deducted ${reducePoints} points from your licence`
      );
    }
  }