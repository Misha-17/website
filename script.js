/* The space between: small, useful interactions. No tracking or remote requests. */
'use strict';

(function researchExplorer() {
  const buttons = [...document.querySelectorAll('[data-question]')];
  if (!buttons.length) return;
  const panels = [...document.querySelectorAll('.research-panel')];
  const announcement = document.querySelector('#research-announcement');
  function selectQuestion(key, announce) {
    if (!buttons.some(button => button.dataset.question === key)) return;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.question === key)));
    panels.forEach(panel => panel.hidden = panel.id !== 'panel-' + key);
    const active = document.getElementById('panel-' + key);
    if (announce && announcement) announcement.textContent = active.querySelector('h3').textContent;
  }
  buttons.forEach(button => button.addEventListener('click', () => selectQuestion(button.dataset.question, true)));
  selectQuestion('control', false);
})();

(function publicationsLibrary() {
  const filters = [...document.querySelectorAll('[data-filter]')];
  const records = [...document.querySelectorAll('.publication[data-category]')];
  const count = document.querySelector('#filter-count');
  if (!filters.length) return;
  function setFilter(category) {
    let shown = 0;
    records.forEach(record => {
      record.hidden = category !== 'all' && record.dataset.category !== category;
      if (!record.hidden) shown++;
    });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    if (count) count.textContent = shown + (shown === 1 ? ' RESEARCH RECORD' : ' RESEARCH RECORDS');
  }
  filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
  // A direct link to a paper must remain usable after a visitor filters the list.
  window.addEventListener('hashchange', () => {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    const record = records.find(item => item.id === id);
    if (record && record.hidden) {
      setFilter('all');
      requestAnimationFrame(() => record.scrollIntoView({block: 'start'}));
    }
  });
})();

let noticeTimeout;
function notifyCopy(message) {
  const notice = document.querySelector('#copy-notice');
  if (!notice) return;
  clearTimeout(noticeTimeout);
  notice.textContent = message;
  notice.classList.add('visible');
  noticeTimeout = setTimeout(() => notice.classList.remove('visible'), 3800);
}

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const citation = document.getElementById(button.dataset.copy);
    if (!citation) return;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(citation.textContent.trim());
      button.textContent = 'Citation copied';
      notifyCopy('Citation copied.');
      setTimeout(() => { button.textContent = 'Copy citation'; }, 2500);
    } catch (_) {
      citation.hidden = false;
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(citation);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      button.textContent = 'Citation shown below';
      notifyCopy('The citation is selected below. Copy it with your usual keyboard or touch controls.');
    }
  });
});

document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
