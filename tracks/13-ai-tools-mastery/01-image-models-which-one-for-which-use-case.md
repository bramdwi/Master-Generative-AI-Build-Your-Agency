# Model Gambar - Yang Mana untuk Kasus Penggunaan Yang Mana

> Panduan pembeli dan matriks keputusan teknis untuk memilih model pembuatan gambar AI yang tepat untuk setiap hasil materi iklan.

**Lacak:** Penguasaan Alat AI
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Lanskap pembuatan gambar AI bergerak dengan kecepatan yang memusingkan. Pembuat konten kewalahan dengan pilihan: Midjourney v6, FLUX 1.1 Pro, SDXL, Ideogram v2, DALL-E 3, dan model LoRA khusus.

Banyak pembuat konten yang terjebak dalam penggunaan satu alat untuk semuanya. Misalnya, menggunakan Midjourney untuk rendering tipografi yang rumit (yang menghasilkan teks kacau) atau menggunakan DALL-E 3 untuk foto wajah perusahaan yang fotorealistik (yang menghasilkan tekstur kulit plastik yang terlalu jenuh).

Jika Anda tidak mencocokkan model dengan persyaratan materi iklan yang tepat, Anda membuang-buang waktu untuk mengatasi keterbatasan model alih-alih mengirimkan aset yang siap untuk klien.

---

## Konsep

Setiap model gambar AI memiliki kekuatan dan keunggulan arsitektur yang berbeda:

```
Creative Requirement ──► Architectural Match ──► Selected Model ──► Client Output
```

### 4 Dimensi Evaluasi Gambar Inti:

1. **Fotorealisme & Akurasi Tekstur:** Seberapa autentiknya model tersebut menampilkan tekstur mikro kulit, keruntuhan pencahayaan, dan tenunan kain. (Model utama: **FLUX 1.1 Pro** / **FLUX Schnell**).
2. **Tipografi & Rendering Teks:** Akurasi saat menghasilkan kata-kata yang dieja dengan jelas di dalam logo, papan tanda, dan poster. (Model utama: **Ideogram v2** / **FLUX**).
3. **Kepatuhan Cepat & Komposisi Spasial Kompleks:** Seberapa akurat model mengikuti instruksi spasial multi-subjek (misalnya, *"cangkir keramik biru di sebelah kiri buku catatan kulit"*). (Model utama: **DALL-E 3** / **FLUX**).
4. **Gaya Artistik & Estetika Pelukis:** Penilaian warna yang kohesif, default pencahayaan sinematik, dan ilustrasi bergaya. (Model utama: **Midjourney v6**).

---

## Lakukan itu

### Langkah 1: Analisis Persyaratan Singkat Klien
Buka [`templates/image-model-selection-guide.md`](templates/image-model-selection-guide.md). Tentukan kendala utama proyek:
* **Foto Realistik Headshots / Produk:** Membutuhkan hamburan di bawah permukaan dan pori-pori kulit -> **FLUX 1.1 Pro / muapi `/nano-banana-2`**.
* **Tipografi Grafis & Kutipan Merchandise:** Membutuhkan ejaan huruf yang sempurna -> **Ideogram v2 / FLUX**.
* **Seni & Papan Cerita Konsep Sinematik:** Membutuhkan default pencahayaan yang indah -> **Midjourney v6**.

### Langkah 2: Konfigurasikan Parameter Model
Sesuaikan pengaturan inferensi berdasarkan keluaran target:
* Untuk model FLUX: Tetapkan skala panduan `3.5`, langkah `28` hingga `40`.
* Untuk Midjourney v6: Tetapkan `--stylize 100-250` untuk fotorealisme atau `--stylize 500+` untuk bakat artistik.

### Langkah 3: Audit Render pada Zoom 100%.
Periksa tepian, keterbacaan teks, dan geometri jari untuk memastikan pilihan model memenuhi persyaratan singkat.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/model-benchmark-comparison.jpg" alt="Perbandingan Tolok Ukur Model Gambar AI" width="480">
<img src="templates/examples/tools-workflow-motion.gif" alt="Alat Workflow Motion Loop (I2V)" width="480">
</p>
<p align="center"><sub>AI Image Model Benchmark Infographic (Left) ──► Image-to-Video Workflow Loop (Right) · Video File: <a href="templates/examples/tools-workflow-motion.mp4">templates/examples/tools-workflow-motion.mp4</a></sub></p>

**Studi Kasus Keputusan Model: "Kampanye Pakaian Mode Tinggi"**

* **Persyaratan:** Foto produk studio 8k dengan tipografi merek yang dapat dibaca pada hoodie hitam.
* **Alat yang Diuji A (DALL-E 3):** Ejaan teks bagus, tetapi tekstur kulit tampak seperti lilin dan plastik.
* **Alat B yang Diuji (FLUX 1.1 Pro / muapi):** Pori-pori kulit sempurna, tenunan kain tajam, ejaan tipografi tepat.
* **Seleksi Akhir:** **FLUX 1.1 Pro** memberikan 100% persetujuan klien.

---

## Bandingkan Alat

| Model | Kekuatan | Kelemahan | Kasus Penggunaan Terbaik |
|---|---|---|---|
| **FLUX 1.1 Pro / Schnell** | Kulit fotorealistik, rendering teks tingkat atas, kepatuhan cepat yang tinggi | Membutuhkan petunjuk pencahayaan yang eksplisit | Foto perusahaan, merchandise POD, konten stok |
| **Tengah perjalanan v6** | Estetika luar biasa yang unggul, default warna sinematik | Ejaan teks bisa melayang, antarmuka Discord berpemilik | Seni konsep, papan cerita film, kreatif sosial |
| **Ideogram v2** | Tipografi vektor & tata letak logo yang tak tertandingi | Fotorealisme lebih rendah pada kulit manusia | Poster, desain teks pakaian, lencana |
| **DALL-E 3** | Kepatuhan cepat yang tinggi untuk konsep sederhana | Tekstur kulit kartun yang terlalu jenuh | Brainstorming konseptual cepat |

---

## Luncurkan

* **Bangun Saluran Multi-Model:** Gunakan FLUX untuk pembuatan aset dasar, Ideogram untuk hamparan teks, dan Midjourney untuk eksplorasi suasana artistik.

---

## Latihan

1. **Mudah:** Buat grafis logo 1 kata di Ideogram v2 vs. Midjourney v6 dan bandingkan akurasi ejaan teks.
2. **Sedang:** Render potret perusahaan menggunakan FLUX 1.1 Pro dan periksa tekstur mikro kulit dengan pemangkasan 100%.
3. **Sulit:** Buat matriks keputusan pemilihan alat untuk kampanye klien 3 bagian yang memerlukan foto wajah, logo, dan spanduk sinematik.

---

## Templat

* [`templates/image-model-selection-guide.md`](templates/image-model-selection-guide.md) — Matriks perbandingan arsitektur, aturan kepatuhan yang cepat, dan tolok ukur resolusi.

---

[Track Overview](README.md) · Berikutnya: [Video Models — Which One for Which Use Case →](02-video-models-which-one-for-which-use-case.md)
