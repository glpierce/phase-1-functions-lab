function distanceFromHqInBlocks(someValue) {
    let blockDistance = someValue - 42;
    if (blockDistance < 0) {
        blockDistance = blockDistance * -1;
    }
    return blockDistance;
  }

function distanceFromHqInFeet(someValue) {
    let blockDistance = distanceFromHqInBlocks(someValue);
    return blockDistance * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blockDistance = start - destination;
    if (blockDistance < 0) {
        blockDistance = blockDistance * -1;
    }
    return blockDistance * 264;
  }

  function calculatesFarePrice(start, destination) {
    let feetDistance = distanceTravelledInFeet(start, destination);
    if (feetDistance <= 400) {
        return 0;
    } else if (400 < feetDistance && feetDistance <= 2000) {
        return (2 * (feetDistance - 400)) / 100;
    } else if (2000 < feetDistance && feetDistance <= 2500) {
        return 25;
    } else if (feetDistance > 2500) {
        return `cannot travel that far`;
    }
  }