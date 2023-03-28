const counters = $('[data-counter]');
const speed = 2000;
const offset = 50;

$(window).on('scroll', function () {
  if ($(window).scrollTop() + $(window).height() > $('#about-info').offset().top) {
    // починаємо виконувати лічильники
    counters.each(function () {
      let count = 0;
      const targetCount = parseInt($(this).text());
      const increment = Math.ceil(targetCount / ((speed / offset) * 2));
      let timeout;

      const updateCounter = () => {
        count += increment;
        if (count >= targetCount) {
          clearInterval(timeout);
          count = targetCount;
        }
        $(this).text(count);
      };

      timeout = setInterval(updateCounter, offset);
    });

    // відмінюємо спостереження цілі
    $(window).off('scroll');
  }
});
