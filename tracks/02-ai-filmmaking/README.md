# Jalur 2: Pembuatan Film AI

> Film pendek, video musik, trailer, dan dokumenter — dibuat tanpa kru.

Lima modul, secara berurutan. Masing-masing adalah satu file penurunan harga — klik langsung, tanpa subfolder. Setiap modul mengikuti struktur yang sama: Masalah → Konsep → Lakukan → Bandingkan Alat → Luncurkan → Latihan.

**"Template" di bawah** = template yang dapat digunakan kembali yang dihasilkan setiap modul (template skenario, daftar pengambilan gambar, lembar persyaratan) — file sebenarnya yang Anda isi dan gunakan kembali, disimpan di [`templates/`](templates/).

| # | Modul | Waktu | Membutuhkan |
|:---:|---|:---:|---|
| 1 | [Screenplay & Story Generation](01-screenplay-and-story.md) | ~40 menit | — |
| 2 | [Storyboarding & Shot Planning](02-storyboarding-and-shots.md) | ~40 menit | Modul 1 |
| 3 | [Camera Movement & Cinematography Prompts](03-camera-movement.md) | ~50 menit | Modul 1–2 |
| 4 | [Assembling a Short Film](04-assembling-short-film.md) | ~50 menit | Modul 1–3 |
| 5 | [Selling Short-Form Films](05-selling-short-films.md) | ~30 menit | Modul 1, 4 |

---

### 1.[Screenplay & Story Generation](01-screenplay-and-story.md)

> Naskah yang bagus itu murah; jarang ada cerita bagus yang benar-benar bisa difilmkan oleh AI.

- Pelajari batasan fisik dan karakter unik model video generatif modern.
- Susun tindakan skenario visual untuk digandakan secara langsung sesuai petunjuk teks.
- Manfaatkan LLM Umum (Claude/Gemini) untuk menghasilkan perintah terstruktur, bukan tindakan umum.

**Template:** [`screenplay-prompt-template.md`](templates/screenplay-prompt-template.md) · [`ai-film-brief.md`](templates/ai-film-brief.md)

### 2.[Storyboarding & Shot Planning](02-storyboarding-and-shots.md)

> Papan cerita adalah cetak biru yang menghentikan Anda membakar kredit pada pembuatan video secara acak.

- Tetapkan karakter yang konsisten (lemari pakaian, fitur wajah, gaya) menggunakan referensi gambar statis.
- Manfaatkan awalan dan benih yang cepat untuk menyelaraskan pencahayaan dan palet warna sebelum membuat video.
- Rancang daftar jepretan kamera lengkap yang sesuai dengan hierarki visual (Lebar, Sedang, Close-up).

**Template:** [`shot-list-template.md`](templates/shot-list-template.md) · [`style-guide-template.md`](templates/style-guide-template.md)

### 3.[Camera Movement & Cinematography Prompts](03-camera-movement.md)

> Pergerakan kamera adalah perbedaan antara tayangan slide AI dan film.

- Terapkan kata kerja sinematografi dinamis (dolly, track, tilt, crane) daripada istilah gerak umum.
- Kondisikan generator video pada frame pertama storyboard untuk mengunci komposisi awal.
- Kontrol artefak rendering menggunakan nilai kekuatan gerakan dan penggeser kecepatan.

**Template:** [`motion-prompt-library.md`](templates/motion-prompt-library.md) · [`cinematography-cheat-sheet.md`](templates/cinematography-cheat-sheet.md)

### 4.[Assembling a Short Film](04-assembling-short-film.md)

> Film ini tidak dibuat di generator; itu dibuat di editor.

- Potong, pangkas, dan gabungkan klip video senyap untuk membangun ritme adegan.
- Siapkan garis waktu desain suara berlapis-lapis: narasi sulih suara, nada ruangan sekitar yang berkelanjutan, Foley SFX, dan skor.
- Klip terpisah tingkat warna menggunakan LUT untuk mencapai nada visual dan suasana sinematik yang terpadu.

**Template:** [`sound-design-checklist.md`](templates/sound-design-checklist.md)

### 5.[Selling Short-Form Films](05-selling-short-films.md)

> Festival menginginkan ceritanya; sponsor menginginkan perhatian; platform menginginkan aset tersebut.

- Struktur pengemasan film langsung (master layar lebar, potongan vertikal, trek audio tanpa suara yang bersih).
- Menargetkan dan menyusun proposal promosi sponsor merek untuk penempatan produk.
- Negosiasikan biaya platform dimuka dan bagi hasil untuk drama vertikal episodik.

**Template:** [`sponsorship-pitch-template.md`](templates/sponsorship-pitch-template.md) · [`licensing-agreement-sheet.md`](templates/licensing-agreement-sheet.md)

---

Semua template ada di [`templates/`](templates/). Untuk status di 14 trek lainnya, lihat [ROADMAP.md](../../ROADMAP.md).
