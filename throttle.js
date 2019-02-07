function throttle(func, timeLimit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= timeLimit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, timeLimit - (Date.now() - lastRan));
    }
  }
}

let colorChange = throttle(function () {
  let colors = ['orange', 'red', 'blue', 'green', 'brown', 
                'purple', 'black'];
  let btn = document.getElementsByClassName('throttle')
  let num = Math.floor((10 * (Math.random(0))) % colors.length)
  btn[0].style.backgroundColor = `${colors[num]}`
}, 1000)
