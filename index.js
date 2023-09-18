function scuberGreetingForFeet(){
  // Write your code here!
  function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
        return 'gives customers a free sample if the ride is less than or equal to 400 feet';
    } else if (distance > 2000 && distance <= 2500) {
        return 'charges 30 dollars for a distance over 2000 feet';
    } else if (distance > 2500) {
        return 'does not allow rides over 2500 feet';
    }
}

module.exports = scuberGreetingForFeet;

}

function ternaryCheckCity(){
  // Write your code here!
  function ternaryCheckCity(city) {
    return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

module.exports = ternaryCheckCity;

}

function switchOnCharmFromTip(){
  // Write your code here!
  function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
            return 'Thank you so much.';
        case 'not as generous':
            return 'Thank you.';
        default:
            return 'Bye.';
    }
}

module.exports = switchOnCharmFromTip;

}