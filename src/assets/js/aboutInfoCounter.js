const counters = document.querySelectorAll('[data-counter]');
const speed = 1500;
const offset = 50;

counters.forEach(counter => {
  let count = 0;
  const targetCount = parseInt(counter.innerText);
  const increment = Math.ceil(targetCount / ((speed / offset) * 2));
  let timeout;

  const updateCounter = () => {
    count += increment;
    if (count >= targetCount) {
      clearInterval(timeout);
      count = targetCount;
    }
    counter.innerText = count;
  };

  timeout = setInterval(updateCounter, offset);
});
