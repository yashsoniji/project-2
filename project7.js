const item = document.querySelector('#item');
const todoBox = document.querySelector('#to-do-box');

item.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    addtodo(item.value);
    item.value = '';
  }
});

const addtodo = (item) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark"></i>`;

  listItem.addEventListener('click', function () {
    this.classList.toggle('done');
  });
  listItem.querySelector('i').addEventListener('click', function () {
    listItem.remove();
  });

  todoBox.appendChild(listItem);
};
