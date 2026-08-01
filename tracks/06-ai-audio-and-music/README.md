# Trek 6 — AI Audio & Musik

> Kloning suara, terjemahan, sulih suara, produksi podcast, dan musik AI — trek yang menjadi sandaran setiap trek video.

Lima modul, secara berurutan. Masing-masing adalah satu file penurunan harga — klik langsung, tanpa subfolder. Setiap modul mengikuti struktur yang sama: Masalah → Konsep → Lakukan → Bandingkan Alat → Luncurkan → Latihan.

**"Templat" di bawah** = templat yang dapat digunakan kembali yang dihasilkan setiap modul (lembar spesifikasi, daftar periksa, pustaka) — file aktual yang Anda isi dan gunakan kembali, disimpan di [`templates/`](templates/).

| # | Modul | Waktu | Membutuhkan |
|:---:|---|:---:|---|
| 1 | [Voice Cloning & TTS Basics](01-voice-cloning-tts.md) | ~40 menit | — |
| 2 | [AI Dubbing & Translation](02-dubbing-translation.md) | ~45 menit | Modul 1 |
| 3 | [Podcast Production & Audio Cleaning](03-podcast-production.md) | ~35 menit | — |
| 4 | [AI Music & Sound Effects](04-music-sfx-generation.md) | ~35 menit | — |
| 5 | [Singing Voice Conversion & Vocal Synthesis](05-singing-vocal-synthesis.md) | ~30 menit | Modul 1 |

---

### 1.[Voice Cloning & TTS Basics](01-voice-cloning-tts.md)

> Komputer membaca teks; klon membaca ruangan.

- Latih profil suara khusus dengan fidelitas tinggi di ElevenLabs menggunakan sampel ucapan yang bersih dan kering.
- Konfigurasikan penggeser stabilitas dan kejelasan untuk memungkinkan ekspresi alami tanpa distorsi digital.
- Rekam audio pelatihan di lingkungan terisolasi menggunakan mikrofon kondensor cardioid.

**Templat:** [`voice-cloning-spec.md`](templates/voice-cloning-spec.md)

### 2.[AI Dubbing & Translation](02-dubbing-translation.md)

> Sebuah video yang hanya berbicara dalam satu bahasa hanya menjangkau sebagian kecil dunia.

- Sulih suara dan terjemahkan narasi ke dalam berbagai bahasa target sambil mempertahankan suara asli pembicara.
- Kompres kecepatan bicara secara terprogram untuk menyesuaikan frasa asing ke dalam batas waktu visual yang ketat.
- Lokalkan deskripsi teks video dan judul saluran menggunakan daftar periksa terjemahan.

**Templat:** [`dubbing-translation-checklist.md`](templates/dubbing-translation-checklist.md)

### 3.[Podcast Production & Audio Cleaning](03-podcast-production.md)

> Audio buruk dimatikan; audio yang bagus didengarkan berjam-jam.

- Bersihkan rekaman suara dengan memotong gemuruh di bawah 80Hz dan menghilangkan kebisingan di bawah -48dB.
- Menghaluskan puncak volume dan mengompres rentang dinamis menggunakan ambang batas kompresor 3:1 standar.
- Batasi dan normalkan campuran mono dan stereo yang telah selesai untuk menentukan standar kenyaringan.

**Templat:** [`podcast-production-sheet.md`](templates/podcast-production-sheet.md)

### 4.[AI Music & Sound Effects](04-music-sfx-generation.md)

> Suara yang tepat mengubah b-roll menjadi film.

- Tulis petunjuk musik terstruktur yang menentukan tempo (BPM), instrumen, dan pengecualian vokal.
- Secara otomatis menurunkan level musik latar belakang menggunakan batas pengecilan otomatis saat narasi sedang berbicara.
- Hasilkan sapuan transisi yang bersih dan ketukan tombol secara terpisah.

**Templat:** [`audio-prompt-library.md`](templates/audio-prompt-library.md)

### 5.[Singing Voice Conversion & Vocal Synthesis](05-singing-vocal-synthesis.md)

> Sintesiskan melodi, tiru artisnya.

- Konversi warna nada suara menggunakan model konversi suara berbasis pengambilan (RVC).
- Variasi nada yang benar dalam rekaman vokal pemandu menggunakan filter jepretan nada sebelum konversi.
- Sesuaikan nilai pergeseran nada berdasarkan oktaf untuk mengonversi trek panduan dalam rentang vokal pria dan wanita.

**Templat:** [`vocal-conversion-brief.md`](templates/vocal-conversion-brief.md)

---

Semua templat ada di [`templates/`](templates/). Untuk status di 9 trek lainnya, lihat [ROADMAP.md](../../ROADMAP.md).
