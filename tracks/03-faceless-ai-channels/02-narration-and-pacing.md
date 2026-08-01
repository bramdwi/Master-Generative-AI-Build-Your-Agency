# Narasi & Kecepatan yang Sesuai Durasi

> Visual menceritakan kisahnya, tetapi durasi audio mengontrol pengeditan.

**Lagu:** Saluran AI Tanpa Wajah
**Waktu:** ~45 menit
**Prasyarat:** Pemilihan Niche & Pipeline Skrip

## Masalahnya

Kesalahan umum dalam pembuatan konten AI adalah membuat video b-roll terlebih dahulu, lalu mencoba merekam atau membuat sulih suara agar sesuai dengan garis waktu visual. Hasilnya hampir selalu berupa bencana: narator harus berbicara dengan sangat cepat selama klip pendek, atau berhenti dengan canggung selama klip panjang agar tetap sinkron. Kecepatannya terasa dibuat-buat, dan penonton langsung berhenti menonton.

Dalam produksi video tanpa wajah profesional, **trek audio adalah inti dari keseluruhan linimasa**.

Jika Anda mencoba mengedit video tanpa trek audio yang terkunci, Anda akan menghabiskan waktu berjam-jam untuk meregangkan, memotong, dan mengambil ulang file suara. Anda memerlukan alur kerja terstruktur yang menetapkan inti narasi terlebih dahulu, memungkinkan Anda memotong dan menyinkronkan elemen visual ke milidetik audio yang tepat.

## Konsep

Prinsip inti produksi saluran tanpa wajah adalah **Pertemuan Narasi-Pertama**.

```
Script Text  →  Voice Generation  →  Duration Logging  →  Video Clipping/Gen  →  Timeline Sync
```

1. **The Audio Spine:** Anda membuat file suara terlebih dahulu. Durasi file-file ini menentukan kecepatan timeline.
2. **Kecepatan Visual:** Umpan video berdurasi pendek memerlukan tingkat perubahan visual yang tinggi. Rentang retensi visual rata-rata sangat pendek — Anda harus beralih ke gambar baru, memotong, memperbesar, atau klip b-roll setiap **2,5 hingga 4,0 detik**.
3. **Pemetaan Kata-ke-Durasi:** Jika Anda berbicara dengan kecepatan rata-rata 150 kata per menit, setiap kata membutuhkan waktu sekitar 0,4 detik. Kalimat 10 kata memerlukan klip video berdurasi 4 detik.

*Catatan Alur Kerja Otomatis:* Anda dapat mereferensikan aplikasi [`AI-Youtube-Shorts-Generator`](https://github.com/Anil-matcha/awesome-generative-ai-apps/tree/main/video_generation/AI-Youtube-Shorts-Generator) dari repositori saudaranya, yang menunjukkan cara mencocokkan segmen audio dengan aset video secara otomatis secara terprogram.

---

## Lakukan itu

### Langkah 1: Hasilkan Audio Narasi
Ambil naskah percakapan Anda dari Modul 1. Bagilah menjadi kalimat-kalimat individual atau blok pemikiran pendek. Hasilkan file-file ini secara batch menggunakan model TTS premium (misalnya ElevenLabs). Simpan setiap file dengan nomor urut (misalnya, `01_hook.mp3`, `02_problem.mp3`).

### Langkah 2: Catat Durasi Audio
Impor file audio ke editor atau skrip utilitas Anda. Ukur durasi pasti setiap file hingga satu tempat desimal. Catat hasilnya di [`templates/narration-duration-log.md`](templates/narration-duration-log.md) Anda.
* *Contoh:* `01_hook.mp3` = 4,2 detik.

### Langkah 3: Tentukan Kebutuhan Visual B-Roll
Untuk setiap baris audio yang dicatat, rencanakan aset visual yang cocok:
* Untuk garis 4,2 detik, Anda memerlukan aset visual yang dapat ditampilkan tepat 4,2 detik.
* Jika Anda membuat video (yang biasanya menghasilkan klip berdurasi 4 atau 5 detik), Anda akan mengimpor video dan memotong bingkai tambahan agar sesuai dengan panjang audio.

### Langkah 4: Susun Garis Waktu
Tempatkan semua file narasi secara berurutan di trek audio utama Anda (A1). Pangkas semua suara bising atau keheningan di awal dan akhir setiap klip sehingga suara mengalir secara alami tanpa jeda.

### Langkah 5: Tempatkan dan Pangkas Klip Video
Tempatkan klip b-roll Anda pada trek video V1, cocokkan potongannya persis dengan batas file audio. Tambahkan animasi skala halus (zoom-in lambat 10%) ke klip statis untuk menjaga layar tetap dinamis selama pemotongan.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/faceless-anchor.jpg" alt="Anchor Visual Narasi" width="240">
<img src="templates/examples/faceless-clip.gif" alt="Loop Video yang Disinkronkan Narasi (I2V)" width="240">
</p>
<p align="center"><sub>Narration Anchor Image (Left) ──► Image-to-Video Narration Loop (Right) · Video File: <a href="templates/examples/faceless-clip.mp4">templates/examples/faceless-clip.mp4</a></sub></p>

**Pengaturan Timeline untuk "Automate Smarter" (10 detik pertama)**



* **Audio Spine (Trek A1):**
* `01_hook.mp3`: *"Jika Anda masih menyalin faktur secara manual ke perangkat lunak akuntansi, Anda membuang waktu lima jam seminggu."* (Durasi: **4,2 detik**).
* `02_problem.mp3`: *"Sebagian besar pekerja lepas berpikir mereka harus membayar asisten virtual untuk melakukan ini."* (Durasi: **3,8 detik**).

* **Pemetaan Aset Visual (Track V1):**
* **Visual 1 (0:00 - 0:04.2):** Klip video yang dihasilkan dari seseorang yang sedang mengetik di laptop. Klip aslinya berdurasi 5,0 detik. Potong 0,8 detik terakhir untuk mencocokkan `01_hook.mp3`. Terapkan zoom digital lambat.
* **Visual 2 (0:04.2 - 0:08.0):** Gambar diam kalkulator close-up dengan layar kesalahan. Karena ini adalah gambar diam, rentangkan gambar tersebut pada timeline hingga tepat 3,8 detik agar cocok dengan `02_problem.mp3`. Terapkan efek pan-down kamera.

**Hasilnya:** Pemotongan visual terjadi tepat pada 4,2 detik, tepat saat narator menyelesaikan kalimat hook. Tidak ada suasana mati, dan perubahan visual mengatur ulang rentang perhatian pemirsa.

---

## Bandingkan Alat

| Jalur Produksi | Kemampuan | Upaya Pengaturan | Terbaik untuk |
|---|---|---|---|
| **Manual NLE Editor** (CapCut/Tayang Perdana) | Garis waktu seret dan lepas, kontrol pemotongan manual, penyesuaian volume audio yang mudah, dan transisi bawaan. | Rendah | Video layar lebar dan klip pendek berkualitas tinggi yang disesuaikan. |
| **Otomasi Terprogram** (`AI-Youtube-Shorts-Generator`) | Secara otomatis mengambil input skrip dan suara, mengumpulkan aset stok yang cocok, dan merender timeline video secara terprogram. | Tinggi (Membutuhkan pengaturan repositori dan ketergantungan Python) | Memproduksi video berdurasi pendek secara massal di berbagai saluran dengan volume yang besar. |
| **API ElevenLabs** (melalui muapi) | Kecepatan percakapan terbaik, infleksi suara alami, dan mendukung pembuatan dialog skrip multi-suara. | Rendah | Sulih suara naratif dan penjelasan profesional. |

Untuk pengoperasian saluran tunggal, pengeditan manual di dalam CapCut adalah cara tercepat untuk mendapatkan tempo berkualitas tinggi. Untuk menjalankan jaringan yang terdiri dari 5+ saluran, menyiapkan pipeline terprogram seperti `AI-Youtube-Shorts-Generator` sangat penting untuk meningkatkan skala pembuatan konten tanpa menghabiskan waktu pengeditan.

---

## Luncurkan

**Cara mengoptimalkan alur kerja Anda:**
* **Direktori Templat:** Siapkan templat folder lokal yang bersih di komputer Anda:
  ```
  [project-folder]/
  ├── audio/          # Narrations and voiceovers
  ├── visuals/        # Generated b-roll and graphics
  ├── project_files/  # Saved CapCut/Premiere project
  └── exports/        # Completed renders
  ```
* **Render Batch:** Buat semua audio narasi terlebih dahulu, catat di templat log Anda, lalu buat semua latar belakang video secara batch. Ini membuat Anda tetap fokus pada satu waktu, menggandakan kecepatan pengeditan Anda.

---

## Latihan

1. **Mudah:** Buat klip sulih suara 10 detik. Catat durasi pastinya. Edit klip video latar belakang untuk mencocokkan durasinya dengan frame.
2. **Sedang:** Ambil skrip berdurasi 30 detik. Bagilah menjadi 6 kalimat pendek. Hasilkan klip suara. Catatlah di Log Durasi Narasi. Rencanakan dan kompilasi 6 aset visual yang sesuai dengan durasi setiap klip.
3. **Sulit:** Siapkan aplikasi `AI-Youtube-Shorts-Generator` secara lokal, konfigurasikan dengan kunci API Anda, dan buat video vertikal lengkap secara otomatis dari perintah teks.

---

## Templat

* [`templates/narration-duration-log.md`](templates/narration-duration-log.md) — log garis waktu untuk mencocokkan potongan visual dengan durasi trek audio.

---

[← Niche Selection & Script Pipeline](01-niche-and-script.md) · Berikutnya: [Honest RPM & Earnings Math →](03-rpm-and-earnings.md)
