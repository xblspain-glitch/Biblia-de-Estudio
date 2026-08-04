/* V3.1.17 · Mapa del progreso y sincronización (módulo independiente)
   La interfaz se actualiza sin reconstruirse continuamente. */
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

    const books = getBooks();
    if(!books.length) return;

    const store = getProgressStore();
    const details = books.map(book => calculateBook(book, store));
    const completed = details.filter(item => item.status === 'completed').length;
    const inProgress = details.filter(item => item.status === 'in-progress').length;
    const notStarted = details.filter(item => item.status === 'not-started').length;

    let section = content.querySelector('#progressMap66BooksV3115');
    const isNew = !section;
    if(!section){
      section = document.createElement('section');
      section.id = 'progressMap66BooksV3115';
      section.className = 'word-journey-section progress-map-section';
    }
    section.innerHTML = `<h2>Mapa del progreso</h2>
      <p class="progress-map-intro">Estado de los 66 libros según los capítulos que has recorrido.</p>
      <div class="progress-map-sync-row">
        <button id="progressMapSyncBtnV3116" class="progress-map-sync-btn" type="button">Sincronizar libros ya leídos</button>
        <small>Para incorporar libros terminados antes de activar el seguimiento por capítulos.</small>
      </div>
      <div class="progress-map-summary">
        <div><strong>${completed}</strong><span>Completados</span></div>
        <div><strong>${inProgress}</strong><span>En curso</span></div>
        <div><strong>${notStarted}</strong><span>Sin empezar</span></div>
      </div>
      ${createTestament('Antiguo Testamento', books.slice(0,39), store)}
      ${createTestament('Nuevo Testamento', books.slice(39), store)}`;

    if(isNew){
      const sections = content.querySelectorAll(':scope > .word-journey-section');
      const monthlySection = sections.length ? sections[sections.length - 1] : null;
      if(monthlySection) content.insertBefore(section, monthlySection);
      else content.appendChild(section);
    }

    /* Enlace directo: evita depender únicamente de la delegación global. */
    section.querySelector('#progressMapSyncBtnV3116')?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      openSyncDialog();
    });
  }


  function existingCompletedBookKeys(){
    const books=getBooks();
    const store=getProgressStore();
    return new Set(books.filter(book=>calculateBook(book,store).status==='completed').map(book=>book.key));
  }

  function openSyncDialog(){
    document.getElementById('progressMapSyncDialogV3116')?.remove();
    const books=getBooks();
    const completed=existingCompletedBookKeys();
    const overlay=document.createElement('div');
    overlay.id='progressMapSyncDialogV3116';
    overlay.className='progress-map-sync-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-modal','true');
    overlay.innerHTML=`<div class="progress-map-sync-dialog">
      <button class="progress-map-sync-close" type="button" aria-label="Cerrar">×</button>
      <h3>Sincronizar libros ya leídos</h3>
      <p>Seleccione únicamente los libros que ya había terminado antes de activar el seguimiento. No se asignará una fecha antigua ni se añadirán al mes actual.</p>
      <div class="progress-map-sync-actions-top">
        <button type="button" data-sync-action="all">Seleccionar todos</button>
        <button type="button" data-sync-action="none">Quitar selección</button>
      </div>
      <div class="progress-map-sync-list">
        ${books.map((book,index)=>`<label class="progress-map-sync-item ${completed.has(book.key)?'already-completed':''}">
          <input type="checkbox" value="${escapeHtml(book.key)}" ${completed.has(book.key)?'checked disabled':''}>
          <span><strong>${escapeHtml(bookName(book))}</strong><small>${completed.has(book.key)?'Ya completado en el mapa':`${book.chapters} capítulos`}</small></span>
        </label>`).join('')}
      </div>
      <div class="progress-map-sync-footer">
        <button type="button" class="progress-map-sync-cancel">Cancelar</button>
        <button type="button" class="progress-map-sync-confirm">Sincronizar seleccionados</button>
      </div>
    </div>`;
    document.body.appendChild(overlay);

    const close=()=>overlay.remove();
    overlay.querySelector('.progress-map-sync-close')?.addEventListener('click',close);
    overlay.querySelector('.progress-map-sync-cancel')?.addEventListener('click',close);
    overlay.addEventListener('click',event=>{if(event.target===overlay)close()});
    overlay.querySelector('[data-sync-action="all"]')?.addEventListener('click',()=>{
      overlay.querySelectorAll('input[type="checkbox"]:not(:disabled)').forEach(input=>input.checked=true);
    });
    overlay.querySelector('[data-sync-action="none"]')?.addEventListener('click',()=>{
      overlay.querySelectorAll('input[type="checkbox"]:not(:disabled)').forEach(input=>input.checked=false);
    });
    overlay.querySelector('.progress-map-sync-confirm')?.addEventListener('click',()=>{
      const selected=[...overlay.querySelectorAll('input[type="checkbox"]:checked:not(:disabled)')].map(input=>input.value);
      if(!selected.length){
        alert('No ha seleccionado ningún libro nuevo.');
        return;
      }
      const names=selected.map(key=>bookName(books.find(book=>book.key===key))).filter(Boolean);
      const message=`Se marcarán como completados ${selected.length} ${selected.length===1?'libro':'libros'}:\n\n${names.join(', ')}\n\n¿Desea continuar?`;
      if(!confirm(message))return;
      synchronizeSelectedBooks(selected);
      close();
      render();
      alert(`${selected.length} ${selected.length===1?'libro incorporado':'libros incorporados'} al mapa de progreso.`);
    });
  }

  window.openProgressMapSyncDialogV3117=openSyncDialog;

  function synchronizeSelectedBooks(bookKeys){
    const books=getBooks();
    const store=getProgressStore();
    for(const key of bookKeys){
      const book=books.find(item=>item.key===key);
      if(!book)continue;
      const totalChapters=Math.max(0,Number(book.chapters)||0);
      for(let chapter=1;chapter<=totalChapters;chapter+=1){
        const progressKey=`${book.key}:${chapter}`;
        const previous=store[progressKey]&&typeof store[progressKey]==='object'?store[progressKey]:{};
        store[progressKey]={
          ...previous,
          read:Math.max(1,Number(previous.read)||0),
          total:Math.max(1,Number(previous.total)||1),
          completed:true,
          readCount:Math.max(1,Number(previous.readCount)||0),
          firstCompletedAt:Number(previous.firstCompletedAt)||0,
          lastCompletedAt:Number(previous.lastCompletedAt)||0,
          updatedAt:Number(previous.updatedAt)||0,
          importedHistorical:true
        };
      }
    }
    try{
      if(typeof saveChapterReadingProgressV316==='function'){
        saveChapterReadingProgressV316();
      }else{
        localStorage.setItem('biblia_chapter_reading_progress_v316',JSON.stringify(store));
      }
    }catch(error){
      console.error('No se pudo guardar la sincronización de libros',error);
      alert('No se pudo guardar la sincronización. No se han eliminado datos existentes.');
    }
  }

  function scheduleRender(){
    requestAnimationFrame(() => requestAnimationFrame(render));
  }

  document.addEventListener('click', event => {
    if(event.target.closest?.('#progressMapSyncBtnV3116')){
      openSyncDialog();
      return;
    }
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

    const observer = new MutationObserver(() => {
      if(content.children.length && !content.querySelector('#progressMap66BooksV3115')){
        scheduleRender();
      }
    });
    observer.observe(content, {childList:true});

    document.getElementById('myWordJourneyBtn')?.addEventListener('click', scheduleRender);
  });
})();
