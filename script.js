// Lista das pastas dos projetos
const projectFolders = [
  'jogo-da-velha-js',
  'clima-js',
  'relogio-js',
  'bateria-js',
  'blog_fake_json',
  'jogo_luta_FP',
  'jogo_luta_POO'
];

const projectsDiv = document.getElementById('projects');
const baseInput = document.getElementById('base');
const preview = document.getElementById('preview');

function makeCard(name) {
  const el = document.createElement('div');
  el.className = 'proj';

  const title = document.createElement('h3');
  title.textContent = name;
  el.appendChild(title);

  const row = document.createElement('div');
  row.className = 'row';

  // Abrir na mesma aba
  const aOpen = document.createElement('a');
  aOpen.className = 'button open';
  aOpen.textContent = 'Abrir';
  aOpen.href = '#';
  aOpen.addEventListener('click', e => {
    e.preventDefault();
    const url = buildUrl(name);
    window.location.href = url;
  });

  // Abrir em nova aba
  const aNew = document.createElement('a');
  aNew.className = 'button newtab';
  aNew.textContent = 'Abrir em nova aba';
  aNew.href = buildUrl(name);
  aNew.target = '_blank';

  row.appendChild(aOpen);
  row.appendChild(aNew);
  el.appendChild(row);


  // Abrir no preview (iframe)
  if (!projectsNoIframe(name)) {
    const aPrev = document.createElement('button');
    aPrev.className = 'button preview';
    aPrev.textContent = 'Abrir no preview';
    aPrev.addEventListener('click', () => {
      const url = buildUrl(name);
      preview.style.display = 'block';
      preview.src = url;
      preview.scrollIntoView({ behavior: 'smooth' });
    });

    row.appendChild(aPrev);
  }

  return el;
}

function buildUrl(folder) {
  const base = baseInput.value.trim() || './';
  let sep = base.endsWith('/') ? '' : '/';
  return base + sep + folder + '/';
}

projectFolders.forEach(p => projectsDiv.appendChild(makeCard(p)));

function projectsNoIframe(name) {
  let projects = [
    'clima-js',
  ]

  for (let projectName of projects) {
    if (projectName == name) {
      return true;
    }
  }

  return false;
}
