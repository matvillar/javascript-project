const addTodo = document.querySelector('.form2');
const ul = document.querySelector('.list ul');
const error = document.querySelector('.error');
const search = document.querySelector('.bar input');

const createTodo = (todo) => {
  const li = `<li class="each-li">
  <span>${todo}</span><i class="fa-solid fa-delete-left"></i>
</li>`;
  ul.innerHTML += li;
};

addTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addTodo.add.value.trim().toLowerCase();

  if (todo === '') {
    error.classList.remove('d-none');
  } else {
    error.classList.add('d-none');
    createTodo(todo);
  }
  addTodo.reset();
});

// Delete todo

ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-delete-left')) {
    e.target.parentElement.remove();
  }
});

//Filtered
const filteredTerm = (term) => {
  Array.from(ul.children)
    .filter((child) => {
      return !child.textContent.includes(term);
    })
    .forEach((child) => {
      child.classList.add('d-none');
    });
  Array.from(ul.children)
    .filter((child) => {
      return child.textContent.includes(term);
    })
    .forEach((child) => {
      child.classList.remove('d-none');
    });
};

//Keyup search

search.addEventListener('keyup', (e) => {
  const term = search.value.trim();
  filteredTerm(term);
});
