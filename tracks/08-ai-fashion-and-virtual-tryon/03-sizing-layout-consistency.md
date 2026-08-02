# Sizing & Layout Consistency

> Proporsi membangun kanvas; penyelarasan membangun brand.

**Track:** AI Fashion & Virtual Try-On
**Waktu:** ~35 menit
**Prasyarat:** Garment Try-on untuk E-commerce Fashion

## Masalahnya

Saat menjelajahi toko pakaian online, konsistensi merupakan kunci menuju pengalaman yang profesional. Jika ukuran kepala model berubah-ubah, atau jika garis dasar bahu bergeser naik dan turun saat Anda memilih kemeja yang berbeda, situs web akan terlihat murah dan berantakan.

Jika Anda mencoba menyelaraskan setiap gambar virtual try-on secara manual mengandalkan perkiraan mata, Anda akan membuat kesalahan. Beberapa model akan tampak terlalu tinggi, yang lain terlalu pendek, dan penyelarasan pakaian menjadi tidak konsisten.

Guna membangun katalog brand yang profesional, Anda wajib menerapkan grid layout yang terstandarisasi serta menjaga seluruh proporsi model, tinggi badan, dan pose tetap sejajar di seluruh koleksi Anda.

## Konsep

Standardisasi tata letak katalog fashion bertumpu pada **Bounding Margins**, **Baseline Joint Coordinates**, serta **Pose Templates**:

```
Model Try-On Render ──► Import into Grid Canvas ──► Joint Guide Alignment ──► Baseline Stabilization ──► Export WebP
```

- **Aturan Shoulder Baseline:** Bahu merupakan titik acuan dari setiap pakaian. Untuk menyelaraskan kemeja, jaket, atau gaun, senantiasa selaraskan persendian bahu model ke koordinat vertikal (Y-axis) yang sama dalam template Anda. Hal ini menjaga garis dada dan leher tetap konsisten di seluruh grid listing Anda.
- **Margin Aspect Ratio:** Saluran e-commerce membutuhkan margin yang spesifik. Untuk format vertikal standar 4:5 (1080x1350px), pertahankan margin bawah **10%** untuk kaki dan margin atas **12%** untuk ruang kepala guna mencegah hamparan teks menutupi model.
- **Penyelarasan Center Seam:** Garis jahitan tengah vertikal pada pakaian (garis ritsleting atau kancing) harus sejajar sempurna dengan titik tengah horizontal kanvas (X-axis center). Ini mencegah produk tampak miring atau tidak presisi di tengah.

## Lakukan itu

### Langkah 1: Atur Canvas Grid

Buka [`templates/mannequin-alignment-template.md`](templates/mannequin-alignment-template.md). Konfigurasikan panduan kanvas pada editor Anda:

- Atur ukuran kanvas menjadi **1080 x 1350px**.
- Tambahkan panduan tengah vertikal pada **X: 540px**.
- Tambahkan panduan baseline horizontal: Shoulder Line pada **Y: 400px**, Waist Line pada **Y: 750px**, Hip Line pada **Y: 950px**.

### Langkah 2: Impor Model Layer

Impor layer model try-on yang telah Anda hasilkan ke dalam template. Posisikan secara proporsional di tengah.

### Langkah 3: Selaraskan Bahu

Ubah skala layer model secara proporsional (tahan tombol `Shift` pada editor Anda):

- Geser layer model hingga jahitan bahu kiri dan kanan sejajar sempurna dengan panduan horizontal **Shoulder Line (Y: 400px)**.
- Biarkan bagian kepala dan kaki menyesuaikan ukurannya secara alami. Ini memastikan penempatan dada dan tubuh bagian atas seragam di seluruh listing produk.

### Langkah 4: Selaraskan Center Seam

Geser layer model ke kiri atau kanan hingga kancing kerah atau garis ritsleting kemeja sejajar sempurna dengan **Center Vertical Guide (X: 540px)**.

### Langkah 5: Verifikasi Margin & Ekspor

Lakukan pemeriksaan QA secara visual:

- Pastikan bagian atas kepala model tidak melewati garis batas aman atas.
- Pastikan tangan dan bagian samping tidak melewati panduan jarak tepi.
Sembunyikan layer template grid, lalu ekspor berkas sebagai WebP. Ulangi proses ini untuk seluruh item dalam koleksi katalog.

## Contoh yang berhasil

**Menyelaraskan Koleksi Windbreaker 5 Item**

- **Resolusi Katalog:** Vertikal 1080x1350px.
- **Pengaturan Baseline:**
  - Panduan Tengah: X: 540px.
  - Panduan Bahu Y: 400px.
  - Panduan Pinggang Y: 750px.
- **Eksekusi:**
  - Mengimpor 5 render model VTO terpisah (Windbreaker Hitam, Biru, Oranye, Merah, Abu-abu).
  - Mengubah skala setiap layer sehingga jahitan bahu jaket menempel pada garis Y: 400px.
  - Memosisikan setiap garis ritsleting tepat di tengah vertikal.
- **Hasilnya:** Saat menjelajahi halaman katalog, model berdiri pada tinggi dan posisi tengah yang persis sama, memungkinkan pembeli berfokus membandingkan warna produk tanpa gangguan visual.

## Bandingkan Alat

| Platform / Tool | Automation Capability | Layout Control | Best for |
| --- | --- | --- | --- |
| **Photoshop / Photopea** | Low (Membutuhkan penyesuaian skala manual ke panduan) | Ultra-High (Panduan visual dengan presisi piksel) | Pemeriksaan QA foto listing kelas atas. |
| **Python Pillow (PIL)** | Ultra-High (Dapat menulis skrip untuk memotong dan menyelaraskan mata/bahu secara otomatis mengandalkan keypoints) | Medium | Pemrosesan batch terprogram untuk kumpulan data katalog besar. |
| **Figma** | Low | High | Membuat mockup antarmuka pengguna dan memeriksa konsistensi tata letak halaman. |

Untuk QA desain, menggunakan garis panduan horizontal Photoshop merupakan alur kerja terbaik. Bagi pengembang yang mengelola basis data besar (seperti pembaruan katalog fashion 1000+ item), menulis skrip Python menggunakan keypoint detection model (seperti YOLO-pose) untuk mendeteksi persendian bahu dan memotong kanvas secara otomatis merupakan cara standar untuk mengakselerasi pipeline.

## Luncurkan

**Cara mengelola template pose:**

- **Kunci sudut kamera:** Pertahankan tinggi kamera setinggi dada (sekitar 4 kaki dari permukaan tanah) untuk seluruh fotografi katalog. Mengubah tinggi kamera (seperti foto dari sudut rendah berbanding sudut tinggi) akan mengubah perspektif, sehingga mustahil untuk menyelaraskan koordinat baseline.
- **Gunakan baseline terstandarisasi:** Dokumentasikan pengaturan grid Anda dalam berkas [`templates/mannequin-alignment-template.md`](templates/mannequin-alignment-template.md) lalu bagikan kepada tim desain Anda.

## Latihan

1. **Mudah:** Buka photo editor lalu buat garis panduan untuk tata letak e-commerce persegi 1:1 (Bahu pada Y: 300px, Pinggang pada Y: 600px).
2. **Sedang:** Impor 2 foto model lalu ubah skalanya agar bahu mereka sejajar sempurna dengan garis panduan Anda. Beralih antar layer untuk memverifikasi keselarasan.
3. **Sulit:** Susun daftar periksa untuk melakukan QA pada 10 halaman listing pakaian. Tuliskan 4 potensi kesalahan penyelarasan (seperti ritsleting tidak di tengah, kepala terpotong) beserta cara memperbaikinya.

## Template

- [`templates/mannequin-alignment-template.md`](templates/mannequin-alignment-template.md) — ukuran kanvas, batasan margin, pemetaan koordinat baseline, dan daftar periksa QA.

---

[← Sebelum: Lookbook Studio Berkonversi Tinggi](02-studio-lookbooks.md) · [Track overview](README.md) · Berikutnya: [Studi Kasus Konversi Sebelum/Sesudah →](04-conversion-cases.md)
