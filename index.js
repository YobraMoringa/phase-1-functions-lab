// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    return pickup < 42 ? 8 : pickup - 42;
}

function distanceFromHqInFeet(pickup) {
    return pickup < 42 ? 8 * 264 : (pickup - 42) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return start < destination ? (destination - start) * 264 : (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = (start - destination) * 264;

    switch (true) {
        case (distanceInFeet < 400):
            return 0;
        case (distanceInFeet >= 400 && distanceInFeet <= 2000):
            return (distanceInFeet - 400) * 0.02;
        case (distanceInFeet > 2000 && distanceInFeet <= 2500):
            return 25;
        case (distanceInFeet > 2500):
            return 'cannot travel that far';
    }
}