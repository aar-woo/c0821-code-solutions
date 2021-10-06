let count = 3;
const intervalId = setInterval(() => {
  if (count >= 1) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast Off!');
    clearInterval(intervalId);
  }
}, 1000);
