const version=window.BIBLE_APP_VERSION_V1||'3.1.135';
const startupScriptsV3119=['app.js?v='+version,'progress-map.js?v='+version];

function paintStoredReadingPointV3163(){
  try{
    const active=JSON.parse(localStorage.getItem('activeReadingPoint')||'null');
    const previous=JSON.parse(localStorage.getItem('lastReadingPoint')||'null');
    const point=active?.bookKey?active:(previous?.bookKey?previous:null);
    if(!point)return;
    const reference=String(point.ref||'').trim();
    if(!reference)return;
    const homeRef=document.getElementById('homeContinueRef');
    if(homeRef)homeRef.textContent=reference;
    const continueButton=document.getElementById('continueReading');
    if(continueButton){continueButton.textContent='Ir a: '+reference;continueButton.disabled=false}
    const homeButton=document.getElementById('homeContinue');
    if(homeButton)homeButton.disabled=false;
  }catch(error){console.warn('No se pudo anticipar el punto de lectura',error)}
}
function waitV3119(milliseconds){return new Promise(resolve=>setTimeout(resolve,milliseconds))}
async function retryV3119(action,delays=[0,450,1100]){
  let lastError=null;
  for(const delay of delays){if(delay)await waitV3119(delay);try{return await action()}catch(error){lastError=error}}
  throw lastError||new Error('No se pudo completar el arranque');
}
function loadClassicScriptV3119(source){
  return new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src=source;script.dataset.bibliaStartupV3119='1';
    script.onload=()=>resolve(script);script.onerror=()=>{script.remove();reject(new Error('No se pudo cargar '+source))};document.head.appendChild(script);
  });
}
function safeCloseV3119(panel,status){
  status.textContent='La Biblia permanece detenida y no ha modificado tus datos. Ya puedes cerrarla desde aplicaciones recientes.';
  try{window.close()}catch(_){ }
  panel.querySelectorAll('button').forEach(button=>button.disabled=true);
}
function showRecoveryV3119(kind,error,source=''){
  document.getElementById('bibliaStartupRecoveryV3119')?.remove();
  const storageProblem=kind==='storage';
  const panel=document.createElement('div');panel.id='bibliaStartupRecoveryV3119';panel.style.cssText='position:fixed;inset:0;z-index:999999;background:#101113;color:#fff;padding:24px;font:17px/1.5 system-ui;display:flex;align-items:center;justify-content:center;text-align:center;overflow:auto';
  const card=document.createElement('section');card.style.cssText='width:min(100%,560px);padding:30px 24px;border:1px solid rgba(224,185,83,.65);border-radius:26px;background:linear-gradient(160deg,#202329,#15171b);box-shadow:0 20px 60px rgba(0,0,0,.48)';
  const mark=document.createElement('div');mark.textContent='✓';mark.style.cssText='width:58px;height:58px;margin:0 auto 18px;border:2px solid #e0b953;border-radius:50%;display:grid;place-items:center;color:#f2d477;font-size:32px;font-weight:700';
  const title=document.createElement('h1');title.textContent=storageProblem?'Acceso temporalmente ocupado':'No se pudo cargar un archivo';title.style.cssText='margin:0 0 14px;font-size:26px';
  const safety=document.createElement('p');safety.textContent=storageProblem?'Tus datos están seguros y no se ha modificado nada.':'Tus datos personales permanecen protegidos.';safety.style.cssText='margin:0 0 12px;color:#f2d477;font-weight:700';
  const explanation=document.createElement('p');explanation.textContent=storageProblem?'La Biblia lo ha intentado varias veces, pero el almacenamiento sigue ocupado. Cierra cualquier otra ventana de la Biblia y vuelve a intentarlo.':'La Biblia lo ha intentado varias veces, pero no ha podido cargar un archivo necesario. Comprueba la conexión y vuelve a intentarlo.';explanation.style.cssText='margin:0 auto 22px;max-width:470px;color:#e3e3e3';
  const actions=document.createElement('div');actions.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px';
  const retry=document.createElement('button');retry.type='button';retry.textContent='Intentar de nuevo';retry.style.cssText='border:1px solid #d8ad46;border-radius:16px;padding:13px 12px;background:#e8cf91;color:#171717;font-weight:700';
  const close=document.createElement('button');close.type='button';close.textContent='Cerrar con seguridad';close.style.cssText='border:1px solid #6c7078;border-radius:16px;padding:13px 12px;background:#2b2e34;color:#fff';
  const status=document.createElement('p');status.style.cssText='min-height:24px;margin:18px 0 0;color:#bfc2c8;font-size:14px';
  const details=document.createElement('details');details.style.cssText='margin-top:16px;color:#9fa3ab;font-size:13px;text-align:left';
  const summary=document.createElement('summary');summary.textContent='Detalle técnico';
  const detail=document.createElement('p');detail.textContent=(source?source+': ':'')+String(error?.message||error||'Error desconocido');detail.style.cssText='overflow-wrap:anywhere';
  retry.onclick=()=>{retry.disabled=true;close.disabled=true;retry.textContent='Reintentando…';status.textContent='Volviendo a comprobar el almacenamiento y los archivos…';setTimeout(()=>location.reload(),120)};
  close.onclick=()=>safeCloseV3119(panel,status);
  actions.append(retry,close);details.append(summary,detail);card.append(mark,title,safety,explanation,actions,status,details);panel.appendChild(card);document.body.appendChild(panel);
}
async function startBibliaV3119(){
  try{window.__BIBLE_STORAGE_BOOTSTRAP_V1__=await retryV3119(()=>window.BibleStorageV1.bootstrap());paintStoredReadingPointV3163()}
  catch(error){console.error('No se pudo abrir el almacenamiento ampliado',error);showRecoveryV3119('storage',error);return}
  for(const source of startupScriptsV3119){
    try{await retryV3119(()=>loadClassicScriptV3119(source))}
    catch(error){console.error('No se pudo cargar un archivo de la Biblia',error);showRecoveryV3119('file',error,source);return}
  }
}
await startBibliaV3119();
window.addEventListener('biblia-storage-error',event=>{const message=event?.detail?.message||'No se pudo guardar el último cambio';if(typeof window.toast==='function')window.toast(message);else console.error(message)});
