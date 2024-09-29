import './scss/main.scss';

//tabs toggle
const tabs = document.querySelectorAll('.js-tab');
const lists = document.querySelectorAll('.js-list');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (event) => {

    if (event.target.classList.contains('active') && lists[index].classList.contains('active')) {
      return;
    }

    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    lists.forEach((list) => {
      list.classList.remove('active');
    })

    event.target.classList.add('active');
    lists[index].classList.add('active');
  });
});
