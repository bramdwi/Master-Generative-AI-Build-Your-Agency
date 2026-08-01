# Konversi Suara Bernyanyi & Sintesis Vokal

> Sintesiskan melodi, tiru artisnya.

**Lagu:** AI Audio & Musik
**Waktu:** ~30 menit
**Prasyarat:** Kloning Suara & Dasar-dasar TTS

## Masalahnya

Anda ingin membuat lagu tema khusus, iklan musik, atau lagu intro parodi untuk klien, namun Anda tidak bisa menyanyi. Mempekerjakan vokalis studio profesional untuk proyek satu kali itu mahal, dan mencoba menyanyikan vokal sendiri akan mengakibatkan kesalahan nada atau rentang yang tidak dapat dicapai oleh suara Anda.

Model Text-to-Speech (TTS) standar tidak dapat bernyanyi. Jika Anda memberi mereka lirik, mereka akan membacanya seperti ceramah yang membosankan, tanpa ritme, melodi, atau pengaturan waktu.

Untuk menghasilkan konten musik tanpa nyanyian, Anda perlu menerapkan alur **Konversi Suara Bernyanyi (SVC)** — alat yang mengambil suara Anda sebagai masukan dan keluaran melodi yang sama yang dinyanyikan dalam timbre vokal (kualitas suara) yang sangat berbeda. Teknologi ini memungkinkan Anda merekam "vokal pemandu" dasar (meskipun Anda bernyanyi dengan buruk atau berbicara sesuai ritme) dan mengubah timbre vokal menjadi suara nyanyian model profesional, sambil mempertahankan nada, waktu, dan melodi asli.

## Konsep

Alur sintesis vokal bergantung pada **Retrieval-based Voice Conversion (RVC)** — sebuah teknik yang mencari karakteristik suara penyanyi target dari model terlatih dan memproyeksikannya ke vokal pemandu Anda — dikombinasikan dengan **Timbre Transfer** (menukar "warna" unik sebuah suara sambil menjaga nada dan timingnya tetap utuh):

```
Source Guide Vocal  ──►  Pitch Correction (Auto-Tune)  ──►  RVC Timbre Transfer  ──►  Target Singing Master
```

* **Konversi Suara-ke-Suara:** Tidak seperti teks-ke-ucapan, suara-ke-suara memerlukan masukan audio. Ini mengabaikan *teks* kata-kata dan menganalisis *nada* (frekuensi dasar) dan *volume* amplop. Kemudian menukar pita suara (tanda tangan timbre) dari pembicara sumber dengan model target.
* **Ekstraksi Acapella:** Vokal pemandu sumber harus kering dan terisolasi — artinya hanya suara Anda tanpa musik latar yang diputar. Misalnya, jika Anda merekam diri Anda bernyanyi saat trek piano diputar di dalam ruangan, konverter juga akan mencoba mengubah nada piano tersebut menjadi suara nyanyian, sehingga menghasilkan pekikan digital yang menggelegar. Rekam vokal pemandu Anda dalam keheningan, lalu masukkan kembali musiknya setelahnya.
* **Transposisi (Pergeseran Pitch):** Jika Anda seorang editor pria yang merekam vokal pemandu untuk avatar wanita, Anda harus mengubah posisi nada sebanyak **+12 seminada** (satu oktaf penuh) sehingga model dapat memproses vokal dalam rentang nada alami penyanyi target. Konfigurasikan parameter ini di dalam [`templates/vocal-conversion-brief.md`](templates/vocal-conversion-brief.md).

---

## Lakukan itu

### Langkah 1: Siapkan Vokal Panduan Anda
Rekam trek vokal kering yang menyanyikan liriknya. Jangan khawatir jika suara Anda terdengar datar. Impor trek ke editor Anda. Terapkan alat koreksi nada (seperti GSnap atau Auto-Tune) untuk memasukkan not vokal ke kunci musik yang benar. Simpan trek bersih sebagai `guide_vocal.wav`.

### Langkah 2: Konfigurasikan Model Konversi
Buka antarmuka RVC Anda (atau hubungi `/voice-to-voice` API). Unggah `guide_vocal.wav`.
* **Pilih Model Target:** Pilih model vokal yang sesuai dengan karakter Anda (misalnya `emma_singing_v2`).
* **Transposisi:** Menyetel pergeseran nada. Jika panduan pria -> target wanita: setel ke **+12 seminada**. Jika panduan wanita -> target pria: setel ke **-12 seminada**.

### Langkah 3: Konfigurasikan Pengaturan Pengambilan
Bereksperimenlah dengan parameter berikut:
* **Tingkat Indeks Pengambilan Fitur (Target: 0,65 - 0,70):** Mengontrol seberapa banyak karakter model target yang diproyeksikan. Jika diatur terlalu tinggi (misalnya 0,90), maka akan terdengar seperti robot; jika disetel terlalu rendah (misalnya 0,40), nada penyanyi pemandu aslinya akan terlalu banyak dipertahankan.
* **Perlindungan Konsonan (Target: 0.33):** Melindungi konsonan tak bersuara ("s", "t", "sh") agar tidak terdengar seperti suara statis digital.

### Langkah 4: Jalankan Transfer Timbre
Klik convert untuk mengkompilasi trek. Unduh file keluaran `.wav`.

### Langkah 5: Bersihkan dan Campur Vokal Akhir
Impor trek nyanyian yang dikonversi kembali ke editor audio Anda. Tambahkan reverb pelat halus dan penundaan stereo untuk membuat vokal menyatu dengan trek musik latar instrumental. Batasi tingkat puncak vokal hingga -3dB.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/singing-vocal-studio.jpg" alt="Studio Vokal Bernyanyi" width="280">
<img src="templates/examples/singing-vocal-studio-clip.gif" alt="Vocal Studio Motion (I2V)" width="280">
</p>
<p align="center"><sub>Singing Studio Image (Left) ──► Image-to-Video Studio Bokeh Motion (Right) · Video File: <a href="templates/examples/singing-vocal-studio-clip.mp4">templates/examples/singing-vocal-studio-clip.mp4</a></sub></p>

**Membuat Vokal Lagu Tema (Panduan Pria Avatar Emma)**



* **Rekaman Panduan:** Seorang editor pria merekam nyanyian vokal panduan dasar: *"Otomatiskan SaaS Anda..."* dalam kuncinya. Koreksi nada mengubah nada menjadi C-Major.
* **Pengaturan RVC:**
* Model Sasaran: `emma_singing_v2` (perempuan).
* Pergeseran Pitch: **+12 seminada** (untuk menggeser rentang pria ke oktaf wanita).
* Nilai Indeks: **0,68**.
* **Sintesis Audio:** File yang dikonversi menghasilkan vokal wanita yang bersih dan menyanyikan melodi dengan timbre suara Emma.
* **Mixing Station:** Trek vokal dicampur dengan backing track lofi, reverb disetel ke 15% basah, dikuasai hingga -16 LUFS.

**Hasilnya:** Avatar memiliki lagu tema khusus. Suara nyanyiannya on-pitch, natural, dan sangat cocok dengan profil karakter visual.

---

## Bandingkan Alat

| Platform / Alat | Kualitas Konversi | Pembayaran / Biaya Kredit | Upaya Pengaturan |
|---|---|---|---|
| **Konversi Suara Berbasis Pengambilan (RVC)** | Tinggi (Sangat baik untuk nyanyian bergaya dan konversi cepat) | **Gratis** (berjalan secara lokal di GPU) | Sedang (Memerlukan skrip WebUI yang berjalan) |
| **Suara-ke-Suara ElevenLabs** | Ultra-Tinggi (Mempertahankan infleksi vokal dan napas yang kompleks) | Tinggi (Ditagih per karakter yang dihasilkan) | Rendah (Dasbor web sederhana) |
| **Jadi-Vits-SVC 4.0** | Sangat Tinggi | Gratis | Tinggi (Pipa pelatihan Python kompleks) |

Untuk pembuatan konten yang cepat dan hemat biaya, menjalankan RVC v2 pada GPU lokal adalah metode standarnya. Ini memungkinkan Anda mengonversi beberapa trek tanpa biaya kredit API. Untuk realisme vokal maksimum dan integrasi pernapasan, ElevenLabs Voice-to-Voice memberikan fidelitas tertinggi.

---

## Luncurkan

**Cara mengelola hak cipta:**
* **Gunakan model suara terbuka:** Jangan pernah menggunakan model RVC yang dilatih pada bintang pop terkenal (seperti Drake atau Ariana Grande) untuk proyek klien komersial atau saluran yang dimonetisasi. Platform secara aktif menghapus jejak ini, dan Anda dapat menghadapi tuntutan hukum hak cipta.
* **Latih model nyanyian khusus:** Minta penyanyi lokal merekam tangga nada dan lagu berdurasi 20 menit, latih model khusus, dan kunci kepemilikan IP suara tersebut untuk agensi Anda.

---

## Latihan

1. **Mudah:** Rekam trek panduan 10 detik tentang diri Anda yang berbicara dengan suara nyanyian yang berirama.
2. **Sedang:** Kirimkan trek panduan Anda ke konverter suara-ke-suara dengan pergeseran nada +12 seminada. Analisis pergeseran oktaf.
3. **Sulit:** Menghasilkan loop vokal lengkap selama 15 detik. Ekstrak panduan acapella, jalankan auto-tune, ubah timbre menggunakan RVC, terapkan penundaan dan reverb, dan gabungkan kembali dalam loop instrumental.

---

## Templat

* [`templates/vocal-conversion-brief.md`](templates/vocal-conversion-brief.md) — daftar periksa persiapan acapella, bagan transposisi, dan log pengambilan.

---

[← AI Music & Sound Effects](04-music-sfx-generation.md) · [Track overview](README.md)
