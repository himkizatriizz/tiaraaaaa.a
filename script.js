/* ===== PrivatEku — Interactivity ===== */

/* ---------- Data: Silabus ---------- */
const courses = [
  { num: '01', title: 'Pengertian Data Pribadi', desc: 'Membedakan data umum vs spesifik dan mengapa keduanya dilindungi hukum.' },
  { num: '02', title: 'UU PDP & Hak Subjek Data', desc: '8 hak yang kamu miliki berdasarkan UU No. 27 Tahun 2022.' },
  { num: '03', title: 'Prinsip Pelindungan Data', desc: '7 prinsip dasar: transparansi, minimalisasi, akuntabilitas, dan lainnya.' },
  { num: '04', title: 'Jejak Digital', desc: 'Active vs passive footprint — apa yang diam-diam dicatat aplikasi.' },
  { num: '05', title: 'Membaca Kebijakan Privasi', desc: '7 bagian penting + red flags yang harus diwaspadai.' },
  { num: '06', title: 'Risiko & Ancaman', desc: 'Phishing, data breach, oversharing, SIM swap, dan dampaknya.' },
  { num: '07', title: 'Langkah Praktis', desc: 'Checklist keamanan: password, 2FA, izin aplikasi, transaksi.' },
  { num: '08', title: 'Menuntut Hak & Melapor', desc: 'Alur pengaduan: bukti → pengendali → Komdigi → polisi.' },
];

const courseGrid = document.getElementById('course-grid');
courses.forEach((c, i) => {
  const card = document.createElement('a');
  card.href = '#materi-1';
  card.className = 'course-card reveal';
  card.style.transitionDelay = (i * 0.06) + 's';
  card.innerHTML = `<span class="cc-num">BAB ${c.num}</span><h4>${c.title}</h4><p>${c.desc}</p>`;
  courseGrid.appendChild(card);
});

/* ---------- Data: Tips ---------- */
const tips = [
  // Akun
  { cat: 'akun', title: 'Password Unik', desc: 'Jangan pakai password yang sama di dua aplikasi. Satu kebocoran = semua akun ikut bocor.' },
  { cat: 'akun', title: 'Aktifkan 2FA', desc: 'Gunakan authenticator app (Google Authenticator/Authy), bukan SMS yang bisa di-SIM swap.' },
  { cat: 'akun', title: 'Password Manager', desc: 'Simpan semua password di manager terenkripsi (Bitwarden, 1Password). Cukup hafal satu master password.' },
  { cat: 'akun', title: 'Cek Perangkat Terhubung', desc: 'Rutin cek daftar perangkat login di pengaturan akun — keluarkan yang tidak dikenal.' },
  { cat: 'akun', title: 'Email Pemulihan Aman', desc: 'Pastikan email pemulihan pakai password kuat dan 2FA sendiri.' },
  { cat: 'akun', title: 'Username Tidak Terlalu Pribadi', desc: 'Hindari username yang mengandung nama lengkap, tanggal lahir, atau nomor HP.' },
  { cat: 'akun', title: 'Keluar dari Perangkat Publik', desc: 'Selalu logout dari komputer/wifi publik, jangan cuma tutup browser.' },
  { cat: 'akun', title: 'Update Rutin', desc: 'Update OS & aplikasi segera — patch keamanan menutup celah yang bisa dieksploitasi.' },
  // Media sosial
  { cat: 'sosmed', title: 'Mode Private Akun', desc: 'Batasi siapa yang bisa melihat postingan, teman, dan daftar kontakmu.' },
  { cat: 'sosmed', title: 'Matikan Geotag', desc: 'Foto dengan lokasi tersembunyi mencegah orang tahu rumah/kamu sedang tidak ada.' },
  { cat: 'sosmed', title: 'Jangan Posting Bukti Identitas', desc: 'KTP, KK, paspor, boarding pass, dan struk belanja = bahan penipuan.' },
  { cat: 'sosmed', title: 'Audit Tag Foto', desc: 'Nonaktifkan auto-tag wajah dan tinjau siapa yang bisa menandaimu.' },
  { cat: 'sosmed', title: 'Hati-hati Kuis & Aplikasi', desc: 'Kuis "kamu hewan apa" sering mencuri jawaban keamanan akunmu.' },
  { cat: 'sosmed', title: 'Batasi Data Lahir Publik', desc: 'Tanggal lahir lengkap mempermudah cracking password dan jawaban keamanan.' },
  { cat: 'sosmed', title: 'Cek Pengaturan Audiens', desc: 'Periksa ulang pengaturan privasi setelah update aplikasi — sering berubah diam-diam.' },
  { cat: 'sosmed', title: 'Hati-hati Third-Party Login', desc: 'Login via Google/Facebook membagikan data akun ke aplikasi tersebut — pertimbangkan.' },
  // Aplikasi
  { cat: 'aplikasi', title: 'Audit Izin Bulanan', desc: 'Pengaturan → Aplikasi → Izin. Cabut izin yang tidak relevan dengan fungsi aplikasi.' },
  { cat: 'aplikasi', title: 'Tolak Izin Berlebihan', desc: 'Aplikasi senter tidak butuh akses kontak. Kalau ragu, tolak.' },
  { cat: 'aplikasi', title: 'Hapus Aplikasi Tak Terpakai', desc: 'Aplikasi yang jarang dipakai tetap bisa mengumpulkan data di background.' },
  { cat: 'aplikasi', title: 'Baca Sebelum Install', desc: 'Periksa rating, jumlah download, dan kebijakan privasi — terutama aplikasi baru.' },
  { cat: 'aplikasi', title: 'Email/No HP Sekunder', desc: 'Pakai email alias untuk registrasi layanan yang tidak penting.' },
  { cat: 'aplikasi', title: 'Matikan Izin Iklan Personalisasi', desc: 'Di Android/iOS ada toggle "ad personalization" — matikan untuk mengurangi tracking.' },
  { cat: 'aplikasi', title: 'Hindari Aplikasi Sampingan', desc: 'Aplikasi bajakan/modded sering menyisipkan malware pencuri data.' },
  { cat: 'aplikasi', title: 'Cek Kebijakan Perubahan', desc: 'Beberapa aplikasi mengubah kebijakan privasi — cek notifikasi update secara berkala.' },
  // Keuangan
  { cat: 'keuangan', title: 'HTTPS Saja', desc: 'Pastikan URL diawali https:// dan ada ikon gembok sebelum memasukkan data kartu.' },
  { cat: 'keuangan', title: 'Notifikasi Transaksi', desc: 'Aktifkan SMS/push notifikasi untuk setiap transaksi — deteksi dini penipuan.' },
  { cat: 'keuangan', title: 'Jangan Simpan CVV', desc: 'CVV di belakang kartu tidak boleh disimpan di situs/aplikasi mana pun.' },
  { cat: 'keuangan', title: 'Limit Autodebet', desc: 'Atur limit harian e-wallet/banking untuk meminimalkan kerugian jika diretas.' },
  { cat: 'keuangan', title: 'Waspada QRIS Palsu', desc: 'Cek nama merchant sebelum konfirmasi pembayaran QRIS.' },
  { cat: 'keuangan', title: 'PIN & OTP Rahasia', desc: 'Tidak ada pihak resmi yang akan pernah meminta PIN, OTP, atau password-mu.' },
  { cat: 'keuangan', title: 'Kartu Virtual untuk Online', desc: 'Gunakan virtual card dengan limit kecil untuk transaksi online.' },
  { cat: 'keuangan', title: 'Cek Mutasi Rutin', desc: 'Review mutasi rekening/e-wallet seminggu sekali untuk transaksi mencurigakan.' },
  // Anak & keluarga
  { cat: 'anak', title: 'Parental Control', desc: 'Aktifkan kontrol orang tua untuk membatasi aplikasi dan konten anak.' },
  { cat: 'anak', title: 'Jangan Posting Anak', desc: 'Pertimbangkan privasi anak — posting foto anak tanpa izin bisa jadi jejak digital mereka.' },
  { cat: 'anak', title: 'Edukasi Digital Dini', desc: 'Ajarkan anak tentang data pribadi, cyberbullying, dan bahaya predator online.' },
  { cat: 'anak', title: 'Akun Anak Terpisah', desc: 'Buat akun anak dengan email terpisah dan password yang kamu pegang.' },
  { cat: 'anak', title: 'Batasi Geolokasi Anak', desc: 'Matikan share lokasi real-time anak ke publik di media sosial.' },
  { cat: 'anak', title: 'Aturan Gadget Keluarga', desc: 'Sepakati jam penggunaan gadget dan aturan berbagi data dengan keluarga.' },
  { cat: 'anak', title: 'Laporkan Konten Berbahaya', desc: 'Kenali fitur report/block dan ajarkan anak menggunakannya dengan benar.' },
  { cat: 'anak', title: 'Pantau Jejak Digital Anak', desc: 'Cari nama anak secara berkala di Google untuk melihat jejak digitalnya.' },
];

const tipsGrid = document.getElementById('tips-grid');
const savedTips = JSON.parse(localStorage.getItem('pd-tips') || '[]');

function renderTips(filter = 'all') {
  tipsGrid.innerHTML = '';
  tips.filter(t => filter === 'all' || t.cat === filter).forEach((t, i) => {
    const idx = tips.indexOf(t);
    const card = document.createElement('div');
    card.className = 'tip-card reveal visible' + (savedTips.includes(idx) ? ' done' : '');
    card.innerHTML = `
      <span class="tip-cat">${t.cat}</span>
      <h5>${t.title}</h5>
      <p>${t.desc}</p>`;
    card.addEventListener('click', () => {
      const pos = savedTips.indexOf(idx);
      if (pos > -1) savedTips.splice(pos, 1); else savedTips.push(idx);
      localStorage.setItem('pd-tips', JSON.stringify(savedTips));
      card.classList.toggle('done');
    });
    tipsGrid.appendChild(card);
  });
}
renderTips();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTips(btn.dataset.filter);
  });
});

/* ---------- Data: Glosarium ---------- */
const glossary = [
  { term: 'Data Pribadi', def: 'Informasi tentang orang perseorangan yang dapat mengidentifikasi seseorang, langsung maupun tidak langsung.', en: 'Personal Data' },
  { term: 'Subjek Data', def: 'Orang yang datanya diproses — yaitu kamu sebagai pengguna aplikasi.', en: 'Data Subject' },
  { term: 'Pengendali Data', def: 'Pihak yang menentukan tujuan dan cara pemrosesan data, misal penyedia aplikasi.', en: 'Data Controller' },
  { term: 'Prosesor Data', def: 'Pihak yang memproses data atas nama pengendali, misal cloud hosting.', en: 'Data Processor' },
  { term: 'UU PDP', def: 'Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.', en: 'Indonesian PDP Law' },
  { term: 'GDPR', def: 'Regulasi pelindungan data Uni Eropa — sering jadi acuan standar global.', en: 'General Data Protection Regulation' },
  { term: 'Kebijakan Privasi', def: 'Dokumen resmi yang menjelaskan pengumpulan dan penggunaan datamu.', en: 'Privacy Policy' },
  { term: 'Jejak Digital', def: 'Seluruh data yang kamu tinggalkan saat beraktivitas online.', en: 'Digital Footprint' },
  { term: 'Active Footprint', def: 'Jejak digital yang kamu kirim secara sadar — postingan, komentar, formulir.', en: 'Active Footprint' },
  { term: 'Passive Footprint', def: 'Jejak digital yang direkam diam-diam — IP, lokasi, perilaku.', en: 'Passive Footprint' },
  { term: '2FA / MFA', def: 'Autentikasi dua/multi faktor — lapisan keamanan kedua selain password.', en: 'Two-Factor Authentication' },
  { term: 'Phishing', def: 'Penipuan lewat email/pesan palsu untuk mencuri kredensial atau data.', en: 'Phishing' },
  { term: 'Data Breach', def: 'Kebocoran data akibat peretasan atau kelalaian keamanan server.', en: 'Data Breach' },
  { term: 'Oversharing', def: 'Berbagi terlalu banyak informasi pribadi di media sosial.', en: 'Oversharing' },
  { term: 'Tracking Pixel', def: 'Gambar tak terlihat di email/web yang melacak apakah kamu membukanya.', en: 'Tracking Pixel' },
  { term: 'Cookie', def: 'File kecil di browser yang menyimpan preferensi dan perilakumu.', en: 'Cookie' },
  { term: 'SIM Swap', def: 'Pindah nomor HP ke kartu lain untuk membajak OTP dan akun.', en: 'SIM Swap' },
  { term: 'Metadata', def: 'Data tentang data — misal kapan/kamera apa foto diambil, bukan isi fotonya.', en: 'Metadata' },
  { term: 'Encrypted', def: 'Data yang diacak sehingga hanya pemilik kunci yang bisa membacanya.', en: 'Encrypted' },
  { term: 'End-to-End Encryption', def: 'Enkripsi di mana hanya pengirim dan penerima yang bisa membaca pesan.', en: 'E2EE' },
  { term: 'VPN', def: 'Virtual Private Network — menyembunyikan IP dan mengenkripsi koneksi.', en: 'Virtual Private Network' },
  { term: 'Data Minimization', def: 'Prinsip hanya mengumpulkan data yang benar-benar diperlukan.', en: 'Data Minimization' },
  { term: 'Right to be Forgotten', def: 'Hak menghapus data pribadi dari sistem suatu layanan.', en: 'Hak Untuk Dilupakan' },
  { term: 'Consent / Persetujuan', def: 'Izin yang kamu berikan untuk pemrosesan data — harus sukarela dan bisa ditarik.', en: 'Consent' },
  { term: 'Profiling', def: 'Analisis perilaku untuk membuat profil — sering dipakai untuk iklan targeting.', en: 'Profiling' },
  { term: 'Ad Personalization', def: 'Iklan yang disesuaikan berdasarkan data perilaku dan minatmu.', en: 'Ad Personalization' },
  { term: 'Zero-Knowledge', def: 'Sistem enkripsi di mana penyedia layanan pun tidak bisa membaca datamu.', en: 'Zero-Knowledge' },
  { term: 'Deepfake', def: 'Pemalsuan video/audio yang tampak nyata — bisa dipakai untuk penipuan.', en: 'Deepfake' },
  { term: 'Botnet', def: 'Jaringan perangkat yang dibajak untuk serangan — sering via malware.', en: 'Botnet' },
  { term: 'Portabilitas Data', def: 'Hak memindahkan data pribadimu ke layanan lain.', en: 'Data Portability' },
];

const glossaryGrid = document.getElementById('glossary-grid');
const searchInput = document.getElementById('glossary-search');

function renderGlossary(q = '') {
  glossaryGrid.innerHTML = '';
  const query = q.toLowerCase();
  glossary.filter(g =>
    g.term.toLowerCase().includes(query) ||
    g.def.toLowerCase().includes(query) ||
    g.en.toLowerCase().includes(query)
  ).forEach(g => {
    const card = document.createElement('div');
    card.className = 'gloss-card';
    card.innerHTML = `<h5>${g.term}</h5><p>${g.def} <code>${g.en}</code></p>`;
    glossaryGrid.appendChild(card);
  });
  if (glossaryGrid.children.length === 0) {
    glossaryGrid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;text-align:center">Tidak ada istilah yang cocok.</p>';
  }
}
renderGlossary();
searchInput.addEventListener('input', e => renderGlossary(e.target.value));

/* ---------- Kuis ---------- */
const quizQuestions = [
  { q: 'Data pribadi yang bersifat spesifik menurut UU PDP meliputi...', opts: ['Nama dan email', 'Data kesehatan dan data keuangan', 'Username dan foto profil', 'Alamat dan nomor telepon'], a: 1, exp: 'Data kesehatan, keuangan, biometrik, dan data anak termasuk kategori spesifik yang lebih sensitif.' },
  { q: 'UU Pelindungan Data Pribadi Indonesia adalah UU nomor...', opts: ['11 Tahun 2008', '27 Tahun 2022', '19 Tahun 2016', '8 Tahun 2010'], a: 1, exp: 'UU No. 27 Tahun 2022 mengatur pelindungan data pribadi di Indonesia.' },
  { q: 'Hak untuk menghapus data pribadi dikenal juga sebagai...', opts: ['Right to access', 'Right to be forgotten', 'Right to portability', 'Right to object'], a: 1, exp: '"Right to be forgotten" adalah hak meminta penghapusan data.' },
  { q: 'Prinsip "data minimization" berarti...', opts: ['Mengumpulkan semua data sebanyak mungkin', 'Hanya mengumpulkan data yang benar-benar diperlukan', 'Menyimpan data selamanya', 'Membagikan data ke semua pihak'], a: 1, exp: 'Minimalisasi data: kumpulkan hanya yang dibutuhkan untuk tujuan tertentu.' },
  { q: 'Jejak digital yang direkam diam-diam oleh aplikasi disebut...', opts: ['Active footprint', 'Passive footprint', 'Digital legacy', 'Online reputation'], a: 1, exp: 'Passive footprint seperti IP address, lokasi, dan perilaku direkam tanpa sadar.' },
  { q: 'Metode autentikasi paling aman selain password adalah...', opts: ['SMS OTP', 'Email OTP', 'Authenticator app (TOTP)', 'Pertanyaan keamanan'], a: 2, exp: 'Authenticator app lebih aman dari SMS yang rentan SIM swap.' },
  { q: 'Sebuah aplikasi meminta akses ke daftar kontakmu padahal fungsinya hanya senter. Apa yang sebaiknya dilakukan?', opts: ['Izinkan saja untuk fitur bonus', 'Tolak izin tersebut', 'Hapus data kontak setelahnya', 'Biarkan selama tidak disalahgunakan'], a: 1, exp: 'Prinsip least privilege: tolak izin yang tidak relevan dengan fungsi aplikasi.' },
  { q: 'Tanda bahaya dalam kebijakan privasi aplikasi adalah...', opts: ['Bahasa yang jelas dan detail', 'Ada kontak DPO resmi', 'Satu tombol setuju untuk semua pemrosesan data', 'Menjelaskan retensi data'], a: 2, exp: '"All-in-one consent" melanggar prinsip persetujuan yang spesifik dan terpisah.' },
  { q: 'Phishing adalah...', opts: ['Serangan malware melalui email', 'Penipuan memakai pesan palsu untuk mencuri data', 'Kebocoran data dari server', 'Pelacakan perilaku browsing'], a: 1, exp: 'Phishing menggunakan pesan/email palsu untuk mengelabui korban menyerahkan kredensial.' },
  { q: 'SIM swap attack menargetkan...', opts: ['Password akun media sosial', 'Nomor HP untuk membajak OTP', 'Kartu kredit fisik', 'Email perusahaan'], a: 1, exp: 'Penyerang memindahkan nomor HP korban untuk menerima OTP reset password.' },
  { q: 'Apa yang sebaiknya dilakukan jika menemukan transaksi mencurigakan di rekening?', opts: ['Abaikan saja', 'Lapor ke bank dan blokir kartu segera', 'Tunggu beberapa hari', 'Bagikan ke media sosial dulu'], a: 1, exp: 'Segera blokir kartu dan hubungi bank — waktu respons sangat penting.' },
  { q: 'Data yang dikumpulkan aplikasi untuk iklan yang disesuaikan disebut...', opts: ['Essential data', 'Analytics & tracking data', 'Authentication data', 'Backup data'], a: 1, exp: 'Data perilaku seperti klik, durasi, dan lokasi dipakai untuk profiling iklan.' },
  { q: 'Lembaga pemerintah yang menangani pengaduan pelanggaran UU PDP adalah...', opts: ['BI', 'Komdigi', 'KPK', 'BSSN'], a: 1, exp: 'Kementerian Komunikasi dan Digital (Komdigi) adalah otoritas PDP Indonesia.' },
  { q: 'Manakah yang BUKAN contoh data pribadi spesifik?', opts: ['Hasil pemeriksaan kesehatan', 'Nomor rekening bank', 'Agama seseorang', 'Alamat email'], a: 3, exp: 'Email termasuk data pribadi umum, bukan spesifik.' },
  { q: 'Langkah pertama saat data pribadimu disalahgunakan adalah...', opts: ['Hapus semua akun', 'Kumpulkan bukti (screenshot, URL, tanggal)', 'Langsung post di media sosial', 'Ganti nomor HP'], a: 1, exp: 'Bukti yang lengkap memperkuat pengaduan ke pengendali data dan otoritas.' },
];

let quizIdx = 0, quizScore = 0, answered = false;
const $ = id => document.getElementById(id);

$('start-quiz').addEventListener('click', () => {
  $('quiz-start').classList.add('hidden');
  $('quiz-body').classList.remove('hidden');
  renderQuestion();
});

function renderQuestion() {
  answered = false;
  const q = quizQuestions[quizIdx];
  $('quiz-qnum').textContent = `Soal ${quizIdx + 1}/${quizQuestions.length}`;
  $('quiz-score').textContent = `Skor: ${quizScore}`;
  $('quiz-bar').style.width = `${(quizIdx / quizQuestions.length) * 100}%`;
  $('quiz-question').textContent = q.q;
  $('quiz-feedback').classList.add('hidden');
  $('next-quiz').classList.add('hidden');
  $('next-quiz').textContent = quizIdx === quizQuestions.length - 1 ? 'Lihat Hasil 🏁' : 'Soal Berikutnya →';

  const opts = [...q.opts];
  const shuffled = opts.map((text, i) => ({ text, correct: i === q.a }))
    .sort(() => Math.random() - 0.5);

  const container = $('quiz-options');
  container.innerHTML = '';
  shuffled.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt.text}`;
    btn.addEventListener('click', () => selectAnswer(btn, opt.correct, q.exp));
    container.appendChild(btn);
  });
}

function selectAnswer(btn, correct, exp) {
  if (answered) return;
  answered = true;
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  if (correct) {
    btn.classList.add('correct');
    quizScore++;
    $('quiz-score').textContent = `Skor: ${quizScore}`;
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (!b.classList.contains('wrong') && b.textContent.slice(3) === quizQuestions[quizIdx].opts[quizQuestions[quizIdx].a]) {
        b.classList.add('correct');
      }
    });
  }
  const fb = $('quiz-feedback');
  fb.textContent = (correct ? '✅ Benar! ' : '❌ Kurang tepat. ') + exp;
  fb.className = 'quiz-feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.classList.remove('hidden');
  $('next-quiz').classList.remove('hidden');
}

$('next-quiz').addEventListener('click', () => {
  quizIdx++;
  if (quizIdx >= quizQuestions.length) showResult();
  else renderQuestion();
});

function showResult() {
  $('quiz-body').classList.add('hidden');
  $('quiz-result').classList.remove('hidden');
  const pct = Math.round((quizScore / quizQuestions.length) * 100);
  $('result-circle').style.setProperty('--score-deg', pct * 3.6 + 'deg');
  $('result-circle').innerHTML = `<span>${pct}%</span>`;
  $('result-title').textContent = pct >= 80 ? 'Luar Biasa! 🏆' : pct >= 60 ? 'Bagus! 👍' : 'Terus Belajar! 📚';
  $('result-msg').textContent = `${quizScore} dari ${quizQuestions.length} benar. ${pct >= 80 ? 'Kamu sudah menguasai materi dengan baik.' : pct >= 60 ? 'Cukup baik — ulangi bab yang masih meragukan.' : 'Baca ulang materi Bab 1–8 lalu coba lagi.'}`;
}

$('restart-quiz').addEventListener('click', () => {
  quizIdx = 0; quizScore = 0;
  $('quiz-result').classList.add('hidden');
  $('quiz-start').classList.remove('hidden');
});

/* ---------- Navbar mobile ---------- */
const navToggle = $('nav-toggle'), navMenu = $('nav-menu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navMenu.classList.remove('open'))
);

/* ---------- Progress bar ---------- */
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  $('progress-bar').style.width = pct + '%';
}, { passive: true });

/* ---------- Reveal on scroll ---------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---------- Counter animation ---------- */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      const dur = 1500, start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }
  }, { threshold: 0.5 });
  obs.observe(el);
});
