// Bintang
const night = document.querySelector('.night');
for (let i = 0; i < 90; i++) {
  const s = document.createElement('i'), z = Math.random() * 2 + 1;
  s.className = 'star';
  s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${z}px;height:${z}px;--t:${1 + Math.random() * 3}s`;
  night.appendChild(s);
}

// Judul muncul kata demi kata  (ganti teks di sini)
const title = document.querySelector('.title');
'Aku Punya Sesuatu'.split(' ').forEach((w, i) => {
  const s = document.createElement('span');
  s.textContent = w;
  s.style.setProperty('--d', (0.3 + i * 0.5) + 's');
  title.appendChild(s);
});
