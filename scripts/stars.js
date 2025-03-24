const stars = document.querySelectorAll('.stars li');
const defaultSrc = '../assets/images/path.png';
const activeSrc = '../assets/images/Активная звезда.png';

let selectedIndex = -1; // индекс последней выбранной звезды

stars.forEach((star, index) => {
  // Подсветка при наведении
    star.addEventListener('mouseenter', () => {
    stars.forEach((item, i) => {
        item.querySelector('img').src = (i <= index) ? activeSrc : defaultSrc;
    });
    });

  // Возврат к выбранному значению при уходе мыши
    star.addEventListener('mouseleave', () => {
    stars.forEach((item, i) => {
        item.querySelector('img').src = (i <= selectedIndex) ? activeSrc : defaultSrc;
    });
    });

  // Клик по звезде — фиксируем выбор
    star.addEventListener('click', () => {
    selectedIndex = index;
    stars.forEach((item, i) => {
        item.querySelector('img').src = (i <= selectedIndex) ? activeSrc : defaultSrc;
    });
    });
});
