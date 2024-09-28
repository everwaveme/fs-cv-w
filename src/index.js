import './scss/main.scss';

//tabs toggle
const tabs = document.querySelectorAll('.js-tab');
const lists = document.querySelectorAll('.js-list');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (event) => {

    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    event.target.classList.add('active');

    lists.forEach((list) => {
      list.classList.remove('active');
    })

    lists[index].classList.add('active');
  });
});
