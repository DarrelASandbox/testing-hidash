const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 2000);
  });
};

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

it('After searching, dropdown opens up', async () => {
  const input = document.querySelector('input');
  input.value = 'soft cactus';
  input.dispatchEvent(new Event('input'));

  // waitFor() is implemented for debounce() in autocomplete.js
  await waitFor('.dropdown-item');
  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).to.include('is-active');
});

it('After searching, displays some results', async () => {
  const input = document.querySelector('input');
  input.value = 'soft cactus';
  input.dispatchEvent(new Event('input'));

  // waitFor() is implemented for debounce() in autocomplete.js
  await waitFor('.dropdown-item');
  const items = document.querySelectorAll('.dropdown-item');
  expect(items.length).to.equal(3);
  // expect(items).to.have.lengthOf(3);
});
