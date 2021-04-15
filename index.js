// Code your solution in this file!

function distanceFromHqInBlocks(dist) {
    return Math.abs(dist - 42);
};

function distanceFromHqInFeet(block) {
    let dist = distanceFromHqInBlocks(block);
    return (dist * 264);
};

function distanceTravelledInFeet(north, south) {
    return Math.abs((north - south) * 264);
};

function calculatesFarePrice(start, finish) {
    let dist = distanceTravelledInFeet(start, finish)
    // let dist = Math.abs(total - 400);
    console.log(dist)
    if (dist < 400) {
        return 0;
    } else if (dist > 400 && dist < 2000) {
        return ((dist - 400) * .02);
    } else if (dist > 2000 && dist < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
};