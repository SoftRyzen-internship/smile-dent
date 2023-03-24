const counters = document.querySelectorAll('[data-counter]');
const speed = 1500;
const offset = 50;

// функція зворотного виклику для спостереження цілі
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // починаємо виконувати лічильники
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

      // відмінюємо спостереження цілі
      observer.unobserve(entry.target);
    }
  });
};

// створюємо новий екземпляр IntersectionObserver
const observer = new IntersectionObserver(callback);

// додаємо ціль для спостереження
const sectionAboutInfo = document.querySelector('#about-info');
observer.observe(sectionAboutInfo);
