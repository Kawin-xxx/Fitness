const tab = document.querySelector('.subscriptions');
const buttons = tab.querySelectorAll('.tab__button');
const containers = tab.querySelectorAll('.subscriptions__list');

let onButtonClick = (event) => {
  const id = event.currentTarget.id;

  buttons.forEach((button) => {
    if (button.getAttribute('id') === id) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  containers.forEach((container) => {
    if (container.getAttribute('aria-label') === id) {
      container.classList.remove('visually-hidden');
    } else {
      container.classList.add('visually-hidden');
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
});
