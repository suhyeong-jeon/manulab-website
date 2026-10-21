(() => {
  'use strict';
  const controls = document.querySelector('.publication-controls');
  if (!controls) return;
  const input = document.querySelector('#pub-search');
  const select = document.querySelector('#pub-year');
  const reset = document.querySelector('#pub-reset');
  const count = document.querySelector('.publication-count');
  const empty = document.querySelector('#pub-empty');
  const papers = Array.from(document.querySelectorAll('.publication'));
  const normalize = value => value.normalize('NFKD').toLowerCase();
  const entries = papers.map(element => ({element, text:normalize(element.textContent), year:element.dataset.year}));
  const filter = () => {
    const terms = normalize(input.value.trim()).split(' ').filter(Boolean);
    let shown = 0;
    entries.forEach(({element,text,year}) => {
      const visible = (select.value === 'all' || year === select.value) && terms.every(term => text.includes(term));
      element.hidden = !visible;
      if (visible) shown++;
    });
    count.textContent = shown + ' of ' + papers.length + ' publications';
    empty.hidden = shown !== 0;
  };
  controls.hidden = false;
  input.addEventListener('input',filter);
  select.addEventListener('change',filter);
  reset.addEventListener('click',() => { input.value=''; select.value='all'; filter(); input.focus(); });
  filter();
})();
