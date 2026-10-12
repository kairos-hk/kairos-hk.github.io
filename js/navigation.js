(function () {
  'use strict';
  var button = document.querySelector('.menu-toggle');
  var menu = document.getElementById('site-nav');
  function setMenu(open) {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
  }
  if (button && menu) {
    button.addEventListener('click', function () { setMenu(button.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (event) { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { setMenu(false); button.focus(); }
    });
    var desktop = window.matchMedia('(min-width: 768px)');
    function resetMenu(event) { if (event.matches) setMenu(false); }
    if (desktop.addEventListener) desktop.addEventListener('change', resetMenu);
    else desktop.addListener(resetMenu);
  }

  var search = document.getElementById('publication-search');
  if (!search) return;
  var cards = Array.from(document.querySelectorAll('[data-publication]'));
  var filters = Array.from(document.querySelectorAll('[data-filter]'));
  var count = document.getElementById('results-count');
  var empty = document.getElementById('publication-empty');
  var active = 'all';
  var index = cards.map(function (card) { return {card: card, text: card.textContent.normalize('NFKC').toLocaleLowerCase()}; });
  function update() {
    var query = search.value.normalize('NFKC').toLocaleLowerCase().trim();
    var terms = query.split(/\s+/).filter(Boolean);
    var visible = 0;
    index.forEach(function (item) {
      var matches = (active === 'all' || item.card.dataset.category === active) && terms.every(function (term) { return item.text.indexOf(term) !== -1; });
      item.card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = query || active !== 'all' ? visible + (visible === 1 ? ' result found' : ' results found') : cards.length + ' publications and talks';
    empty.hidden = visible !== 0;
  }
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      active = filter.dataset.filter;
      filters.forEach(function (item) { item.setAttribute('aria-pressed', String(item === filter)); });
      update();
    });
  });
  search.addEventListener('input', update);
  document.querySelector('[data-publication-tools]').hidden = false;
}());
