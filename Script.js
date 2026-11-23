const container = document.getElementById('units');
const search = document.getElementById('searchInput');
const filter = document.getElementById('unitFilter');

const completed = JSON.parse(localStorage.getItem('webtechCompleted') || '{}');

function render() {
  const q = search.value.trim().toLowerCase();
  const f = filter.value;
  let html = '';

  syllabusUnits.forEach((unit, i) => {
    if (f !== 'all' && f !== String(i + 1)) return;

    const topics = unit.topics.filter(t =>
      (t.title + ' ' + t.content + ' ' + t.key + ' ' + t.example)
        .toLowerCase().includes(q)
    );

    if (q && !topics.length) return;

    html += `<article class="unit-card">
      <div class="unit-head" data-unit="${i}">
        <div class="unit-num">0${i + 1}</div>
        <div>
          <h3>Unit ${i + 1} · ${unit.title}</h3>
          <p>${unit.summary}</p>
        </div>
        <span class="unit-meta">${unit.topics.length} topics</span>
        <span class="chevron">⌄</span>
      </div>
      <div class="topic-list" id="unit-${i}">`;

    topics.forEach(t => {
      const id = `${i}-${unit.topics.indexOf(t)}`;
      const isDone = !!completed[id];

      html += `<div class="topic" id="topic-${id}">
        <div class="topic-title">
          <input class="done-check" type="checkbox" data-id="${id}"
            ${isDone ? 'checked' : ''} aria-label="Mark ${t.title} complete">
          <h4>${t.title}</h4>
          <span class="arrow">＋</span>
        </div>
        <div class="topic-body">
          <p>${t.content}</p>
          <h5>Key points to remember</h5>
          <p>${t.key}</p>
          <div class="example">
            <strong>Example / application:</strong> ${t.example}
          </div>
        </div>
      </div>`;
    });

    html += '</div></article>';
  });

  container.innerHTML = html ||
    '<div class="no-results">No matching topics found. Try another keyword.</div>';

  document.querySelectorAll('.unit-head').forEach(h => {
    h.addEventListener('click', () => {
      const el = document.getElementById('unit-' + h.dataset.unit);
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
      h.querySelector('.chevron').textContent =
        el.style.display === 'none' ? '›' : '⌄';
    });
  });

  document.querySelectorAll('.topic-title').forEach(h => {
    h.addEventListener('click', e => {
      if (e.target.classList.contains('done-check')) return;
      const t = h.parentElement;
      t.classList.toggle('open');
      h.querySelector('.arrow').textContent =
        t.classList.contains('open') ? '−' : '＋';
    });
  });

  document.querySelectorAll('.done-check').forEach(c => {
    c.addEventListener('change', () => {
      completed[c.dataset.id] = c.checked;
      localStorage.setItem('webtechCompleted', JSON.stringify(completed));
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  let total = 0, done = 0;

  syllabusUnits.forEach((u, i) => {
    u.topics.forEach((t, j) => {
      total++;
      if (completed[`${i}-${j}`]) done++;
    });
  });

  const pct = Math.round(done / total * 100);

  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '% complete';
  document.getElementById('progressCount').textContent =
    `${done} of ${total} topics completed`;
}

search.addEventListener('input', render);
filter.addEventListener('change', render);

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem(
    'webtechTheme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

if (localStorage.getItem('webtechTheme') === 'dark') {
  document.body.classList.add('dark');
}

render();
