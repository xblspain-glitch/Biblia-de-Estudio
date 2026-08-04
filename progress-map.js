/* V3.1.15 · Mapa del progreso (módulo independiente)
   Solo lee state.books y chapterReadingProgressV316. No escribe datos. */
(function(){
  'use strict';

  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[ch]);
  }

  function getBooks(){
    try{
      return Array.isArray(state?.books) ? state.books : [];
    }catch(_){
      return [];
    }
  }

  function getProgressStore(){
    try{
      if(typeof loadChapterReadingProgressV316 === 'function'){
        loadChapterReadingProgressV316();
      }
      return chapterReadingProgressV316 && typeof chapterReadingProgressV316 === 'object'
        ? chapterReadingProgressV316 : {};
    }catch(_){
      return {};
    }
  }

  function bookName(book){
    try{
      if(typeof displayBook === 'function') return displayBook(book);
    }catch(_){ }
    return String(book?.name || book?.title || book?.key || 'Libro').replaceAll('_',' ');
  }

  function calculateBook(book, store){
    const total = Math.max(0, Number(book?.chapters) || 0);
    let completed = 0;
    let inProgress = 0;

    for(let chapter = 1; chapter <= total; chapter += 1){
      const item = store[`${book.key}:${chapter}`];
      if(item?.completed){
        completed += 1;
      }else if((Number(item?.read) || 0) > 0){
        inProgress += 1;
      }
    }

    let status = 'not-started';
    if(total > 0 && completed >= total) status = 'completed';
    else if(completed > 0 || inProgress > 0) status = 'in-progress';

    return {
      total,
      completed,
      inProgress,
      pending: Math.max(0, total - completed - inProgress),
      status,
      percent: total ? Math.max(0, Math.min(100, completed / total * 100)) : 0
    };
  }

  function statusLabel(status){
    if(status === 'completed') return 'Completado';
    if(status === 'in-progress') return 'En curso';
    return 'Sin empezar';
  }

  function createCard(book, store){
    const info = calculateBook(book, store);
    return `<button class="progress-map-book ${info.status}" type="button" data-progress-book="${escapeHtml(book.key)}" aria-expanded="false">
      <span class="progress-map-book-head">
        <strong>${escapeHtml(bookName(book))}</strong>
        <small>${statusLabel(info.status)}</small>
      </span>
      <span class="progress-map-book-count">${info.completed} de ${info.total} capítulos</span>
      <span class="progress-map-book-bar" aria-hidden="true"><i style="width:${info.percent}%"></i></span>
      <span class="progress-map-book-detail" hidden>
        <span>${info.completed} completados</span>
        <span>${info.inProgress} en curso</span>
        <span>${info.pending} sin empezar</span>
      </span>
    </button>`;
  }

  function createTestament(title, books, store){
    return `<section class="progress-map-testament">
      <h3>${title}</h3>
      <div class="progress-map-grid">${books.map(book => createCard(book, store)).join('')}</div>
    </section>`;
  }

  function render(){
    const content = document.getElementById('myWordJourneyContent');
    if(!content || !content.children.length) return;

    content.querySelector('#progressMap66BooksV3115')?.remove();

    const books = getBooks();
    if(!books.length) return;

    const store = getProgressStore();
    const details = books.map(book => calculateBook(book, store));
    const completed = details.filter(item => item.status === 'completed').length;
    const inProgress = details.filter(item => item.status === 'in-progress').length;
    const notStarted = details.filter(item => item.status === 'not-started').length;

    const section = document.createElement('section');
    section.id = 'progressMap66BooksV3115';
    section.className = 'word-journey-section progress-map-section';
    section.innerHTML = `<h2>Mapa del progreso</h2>
      <p class="progress-map-intro">Estado de los 66 libros según los capítulos que has recorrido.</p>
      <div class="progress-map-summary">
        <div><strong>${completed}</strong><span>Completados</span></div>
        <div><strong>${inProgress}</strong><span>En curso</span></div>
        <div><strong>${notStarted}</strong><span>Sin empezar</span></div>
      </div>
      ${createTestament('Antiguo Testamento', books.slice(0,39), store)}
      ${createTestament('Nuevo Testamento', books.slice(39), store)}`;

    const sections = content.querySelectorAll(':scope > .word-journey-section');
    const monthlySection = sections.length ? sections[sections.length - 1] : null;
    if(monthlySection) content.insertBefore(section, monthlySection);
    else content.appendChild(section);
  }

  function scheduleRender(){
    requestAnimationFrame(() => requestAnimationFrame(render));
  }

  document.addEventListener('click', event => {
    const card = event.target.closest?.('[data-progress-book]');
    if(!card) return;
    const detail = card.querySelector('.progress-map-book-detail');
    if(!detail) return;
    const opening = detail.hidden;
    detail.hidden = !opening;
    card.setAttribute('aria-expanded', opening ? 'true' : 'false');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('myWordJourneyContent');
    if(!content) return;
    new MutationObserver(scheduleRender).observe(content, {childList:true});
    document.getElementById('myWordJourneyBtn')?.addEventListener('click', scheduleRender);
  });
})();
