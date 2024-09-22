function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const myNumber = getRandomInt(7);
  if (myNumber < 6) {
    alert = "lower";
  } else {
    alert = "higer";
  }
  console.log(myNumber)

