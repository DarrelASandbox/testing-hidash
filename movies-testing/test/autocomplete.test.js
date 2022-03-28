// Run createAutoComplete before each test.
beforeEach(() => {
  document.querySelector('#target').innerHTML = '';

  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Soft Cactus' },
        { Title: 'Green Chicken' },
        { Title: 'Whale' },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it('Dropdown start closed', () => {
  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', () => {
  const input = document.querySelector('input');
  input.value = 'soft cactus';
  input.dispatchEvent(new Event('input'));
  expect(dropdown.className).to.include('is-active');
});
