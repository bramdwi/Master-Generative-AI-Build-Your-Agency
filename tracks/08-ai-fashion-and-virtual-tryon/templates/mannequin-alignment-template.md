# Templat Penyelarasan Manekin

Gunakan templat ini untuk menstandardisasi proporsi, margin, dan koordinat pose saat memindahkan pakaian dari foto manekin datar ke model.

## 1. Dimensi Kanvas & Batas Margin
* **Ukuran Kotak Standar:** 1080 x 1350 piksel (vertikal Instagram / potret Shopify).
* **Margin Keamanan Atas (Kelonggaran kepala):** 150 piksel dari batas atas.
* **Margin Keamanan Bawah (Garis dasar kaki):** 100 piksel dari batas bawah.
* **Padding Samping (Batas bahu):** 200 piksel dari batas kiri dan kanan.

## 2. Pose Koordinat Dasar

Tetapkan pusat vertikal untuk sendi rangka utama:
* **Garis Hidung/Mata:** Y = 250 piksel
* **Garis Bahu:** Y = 400 piksel
* **Garis Pinggang:** Y = 750px
* **Garis Pinggul:** Y = 950 piksel
* **Garis Pergelangan Kaki/Kaki:** Y = 1250 piksel

## 3. Registri Referensi Pose

Pilih kategori pose:
* [x] **Pose A (Lurus Frontal):** Tangan di samping, kaki dibuka selebar bahu (paling baik untuk kaos dan kemeja standar).
* [ ] **Pose B (Sudut Tiga Perempat):** Model sedikit diputar untuk menunjukkan jahitan samping dan kedalaman tudung (paling baik untuk pakaian luar dan ransel).
* [ ] **Pose C (Gerakan Berirama):** Pose berjalan ke depan (paling baik untuk menggantungkan linen, jas hujan, dan kain mengalir).

## 4. Daftar Periksa Kontrol Kualitas Penyelarasan
* [ ] Jahitan bagian tengah garmen sejajar dengan garis vertikal tengah kanvas (X = 540 piksel).
* [ ] Selongsongnya simetris tanpa distorsi peregangan digital.
* [ ] Panjang hemline sesuai dengan spesifikasi fisik asli produk.
* [ ] Jahitan bahu sejajar dengan struktur bahu fisik model.
