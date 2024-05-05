const columns = document.querySelectorAll('.grid__column');
const grid = document.getElementById('grid');

columns.forEach((column) => {
  column.addEventListener('click', (evt) => {
    columns.forEach((column, idx) => {
      if (column === evt.currentTarget) {
        column.classList.add('grid__column--state-open');
        grid.dataset.open = idx + 1;
      } else {
        column.classList.remove('grid__column--state-open');
      }
    });
  });
});
