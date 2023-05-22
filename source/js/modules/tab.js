const tab = document.querySelector('.subscriptions');
const buttons = tab.querySelectorAll('.tab__button');
const containers = tab.querySelectorAll('.subscriptions__list');

let tabOff = () => {
  let lists = document.querySelectorAll('.subscriptions__list');
  
  for (let i = 0; i < lists.length; i++) {
    let items = lists[i].querySelectorAll('.subscriptions__item');
    let buttonsHidden = lists[i].querySelectorAll('.subscriptions__button');
 
    for (let j = 0; j < items.length; j++) {
      if (!lists[i].classList.contains('visually-hidden')) {
        items[j].tabIndex = 0;
        buttonsHidden[j].tabIndex = 0;
      } else {
        items[j].tabIndex = -1;
        buttonsHidden[j].tabIndex = -1;
      }
    }
  }
}

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

  tabOff();
};

buttons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
});
