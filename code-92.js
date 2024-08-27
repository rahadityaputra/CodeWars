// Human Readable Time

function humanReadable (seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds - (hours * 3600) - (minutes * 60);
  
  return `${changeDigit(hours)}:${changeDigit(minutes)}:${changeDigit(seconds)}`;
}

function changeDigit(number) {
  if (number < 10) {
    return `0${number}`
  } else {
    return `${number}`;
  }
}

// testing
console.log(humanReadable(1));
