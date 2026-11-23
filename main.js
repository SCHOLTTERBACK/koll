const $ = s => document.querySelector(s);
const mk = (cls, parent, style) => {
  const e = document.createElement('div');
  e.className = cls;
  if (style) e.style.cssText = style;
  parent.appendChild(e);
  return e;
};
const rnd = (a, b) => a + Math.random() * (b - a);
const flowers = $('.flowers');

// Bintang
for (let i = 0; i < 90; i++) {
  const z = rnd(1, 3);
  mk('star', $('.night'), `left:${rnd(0, 100)}%;top:${rnd(0, 70)}%;width:${z}px;height:${z}px;--t:${rnd(1, 4)}s`);
}

// Riak air
for (let i = 0; i < 5; i++) mk('ripple', $('.pond'), `left:${rnd(0, 85)}%;top:${rnd(30, 80)}%;--d:${i * 1.1}s`);

// Daun teratai di air
for (let i = 0; i < 9; i++) mk('pad', flowers, `--x:${rnd(4, 96)}%;--b:${rnd(1, 9)}%;--pw:${rnd(10, 16)}em;--d:${rnd(.2, 3)}s`);

// 6 bunga teratai: putih, merah muda, merah, kuning, ungu, biru
// x = posisi, b = jarak dari bawah, h = tinggi tangkai (em), k = ukuran bunga
const LOTUS = [
  { x: 10, b: 9,  h: 22, k: .9,  c: '#c9d6ee', c2: '#ffffff' }, // putih
  { x: 27, b: 6,  h: 30, k: 1.1, c: '#ff4f9a', c2: '#ffc6e0' }, // merah muda
  { x: 44, b: 10, h: 24, k: 1,   c: '#d1122d', c2: '#ff6b81' }, // merah
  { x: 60, b: 5,  h: 32, k: 1.1, c: '#f5a700', c2: '#fff07a' }, // kuning
  { x: 77, b: 10, h: 23, k: 1,   c: '#7a2cf0', c2: '#d3b4ff' }, // ungu
  { x: 91, b: 7,  h: 28, k: .95, c: '#1f6fe0', c2: '#a9d6ff' }  // biru
];
// [jumlah kelopak, sudut sebaran, lebar, tinggi, kecerahan]
const ROWS = [[7, 150, 4.2, 9, .8], [5, 100, 3.8, 7.6, .95], [3, 50, 3.2, 6, 1.1]];

LOTUS.forEach((f, i) => {
  const d0 = +(0.3 + i * 0.35).toFixed(2);
  const fl = mk('flower', flowers, `--x:${f.x}%;--b:${f.b}%;--sh:${f.h}em;--k:${f.k};--c:${f.c};--c2:${f.c2};--d0:${d0}s;--z:${20 - f.b}`);
  mk('flower__stem', fl);
  const sway = mk('sway', mk('lotus', fl));
  ROWS.forEach(([n, span, w, h, br], r) => {
    for (let j = 0; j < n; j++) {
      const pd = (d0 + 1.6 + r * 0.3 + j * 0.06).toFixed(2);
      mk('petal', sway, `--r:${-span / 2 + j * span / (n - 1)}deg;--w:${w}em;--h:${h}em;--br:${br};--pd:${pd}s`);
    }
  });
  mk('core', sway, `--cd:${(d0 + 2.6).toFixed(2)}s`);
});

// Kunang-kunang
for (let i = 0; i < 24; i++) mk('light', document.body, `left:${rnd(2, 98)}%;top:${rnd(35, 90)}%;--dx:${rnd(-40, 40)}px;--t:${rnd(3, 7)}s`);

// Mulai animasi, lalu ketik pesan  (ganti teks di sini)
window.onload = () => setTimeout(() => {
  document.body.classList.remove('not-loaded');
  setTimeout(() => {
    const el = $('#title'), msg = 'AKU SAYANG KAMU';
    let i = 0;
    const t = setInterval(() => { el.textContent = msg.slice(0, ++i); if (i >= msg.length) clearInterval(t); }, 180);
  }, 6000);
}, 1000);
