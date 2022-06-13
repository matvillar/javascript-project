const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
  const html = `  <li
  class="text-light list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;
  ul.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim().toLowerCase();

  if (todo === '') {
    const error = document.querySelector('.error');
    error.classList.remove('d-none');
  } else {
    generateTemplate(todo);
    addForm.reset();
  }
});

//Delete Todos
ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

//Filtered
const filteredTerm = (term) => {
  console.log(term);
};

//Keyup search

search.addEventListener('keypup', () => {
  const term = search.value.trim();
  filteredTerm(term);
});

// //Filter the todos

// const filterTodos = (term) => {
//   Array.from(ul.children)
//     .filter((todo) => !todo.textContent.includes(term))
//     .forEach((todo) => todo.classList.add('filtered'));

//   Array.from(ul.children)
//     .filter((todo) => todo.textContent.includes(term))
//     .forEach((todo) => todo.classList.remove('filtered'));
// };

// //Search bar --- keyup event
// search.addEventListener('keyup', (e) => {
//   const term = search.value.trim().toLowerCase();
//   filterTodos(term);
// });
