it('Shows an autocomplete', () => {
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
