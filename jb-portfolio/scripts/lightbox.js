// Simple vanilla lightbox
(function () {
  const galleries = document.querySelectorAll('[data-lightbox]');
  if (!galleries.length) return;
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.9);display:none;align-items:center;justify-content:center;z-index:9999;padding:2rem;';
  const img = document.createElement('img');
  img.style.maxWidth = '95%'; img.style.maxHeight = '95%'; img.style.borderRadius = '8px';
  overlay.appendChild(img);
  overlay.addEventListener('click', () => overlay.style.display = 'none');
  document.body.appendChild(overlay);
  galleries.forEach(g => {
    g.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        img.src = a.getAttribute('href');
        overlay.style.display = 'flex';
      });
    });
  });
})();
