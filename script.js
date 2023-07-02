function findOptimalParkingPosition(rackSize, parkedBicycles) {
    // Sort the parked bicycles in ascending order
    parkedBicycles.sort((a, b) => a - b);
  
    // Initialize variables to track the maximum distance and its position
    let maxDistance = 0;
    let position = 0;
  
    // Iterate over the parked bicycles
    for (let i = 0; i < parkedBicycles.length - 1; i++) {
      const currDistance = (parkedBicycles[i + 1] - parkedBicycles[i]) / 2;
      if (currDistance > maxDistance) {
        maxDistance = currDistance;
        position = parkedBicycles[i] + currDistance;
      }
    }
  
    //  Check if the distance between the first parked bicycle and the rack's start is greater
    // than the current maximum distance
    if (parkedBicycles[0] > maxDistance) {
      maxDistance = parkedBicycles[0];
      position = maxDistance / 2; 
    }
  
    // Check if the distance between the last parked bicycle and the rack's end is greater
    // than the current maximum distance
    if (rackSize - parkedBicycles[parkedBicycles.length - 1] > maxDistance) {
      maxDistance = rackSize - parkedBicycles[parkedBicycles.length - 1];
      position = rackSize - maxDistance / 2;
    }
  
    return position;
  }
  
  // Example usage:
  const rackSize = 100;
  const parkedBicycles = [1, 25, 99];
  const optimalPosition = findOptimalParkingPosition(rackSize, parkedBicycles);
  
  console.log("Optimal parking position:", optimalPosition);