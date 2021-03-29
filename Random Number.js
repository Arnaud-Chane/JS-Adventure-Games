function getRandomInt(x, y) {
  min = Math.ceil(x);
  max = Math.floor(y);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let number = getRandomInt(0, 20);
alert(number);