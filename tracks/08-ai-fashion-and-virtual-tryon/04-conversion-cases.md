# Kasus Sebelum/Sesudah Konversi

> Model nyata meningkatkan klik; kecocokan yang akurat mengurangi pengembalian.

**Lagu:** Mode AI & Uji Coba Virtual
**Waktu:** ~45 menit
**Prasyarat:** Tidak ada

## Masalahnya

E-commerce fesyen mengalami kebocoran keuntungan besar-besaran: **Tingkat Pengembalian Tinggi**. Rata-rata, toko pakaian online melihat tingkat pengembalian antara **20% dan 40%**. Alasan utamanya? Kesalahan terkait kesesuaian (seperti *"kemeja lebih pas daripada yang terlihat di gantungan"* atau *"Saya tidak menyadari berapa panjang kelimannya"*). Memproses pengembalian, mengirimkan paket kembali, dan menyortir stok di gudang menghancurkan margin keuntungan.

Pada saat yang sama, penggunaan gambar manekin statis menghasilkan tingkat konversi yang rendah karena pembeli tidak dapat memvisualisasikan pakaian pada tubuh aslinya.

Untuk meningkatkan skala merek fesyen, Anda tidak hanya harus meningkatkan penjualan (CVR) tetapi juga secara aktif mengurangi keuntungan dengan memberikan visual model yang akurat dan konsisten serta sesuai ekspektasi.

## Konsep

Keekonomian pengoptimalan pakaian bergantung pada **Pengurangan Tingkat Pengembalian**, **Representasi Beragam**, dan **Transparansi yang Sesuai**:

```
Identify Fit-Related Returns ──► Deploy AI Try-On Models ──► Add Fit Callouts ──► Measure CVR & Returns Lift
```

### 1. Mengurangi Perbedaan Kesesuaian:
Tembakan manekin hantu menyembunyikan tirai kain. Dengan menampilkan pakaian pada model dengan ukuran tubuh tertentu (tinggi, dada, pinggang), Anda memberikan pelanggan titik referensi yang realistis, sehingga mengurangi kesalahan pembelian ukuran.

### 2. Personalisasi Model Beragam:
Jika pelanggan hanya melihat pakaian dengan model ramping setinggi 6 kaki, mereka mungkin ragu untuk membeli jika modelnya berbeda. Uji coba AI memungkinkan Anda menampilkan gaun yang sama pada berbagai bentuk tubuh (langsing, atletis, berlekuk). Pembeli yang melihat produk dengan model yang cocok dengan tipe tubuh mereka **40%** lebih besar kemungkinannya untuk melakukan konversi.

### 3. Hapus Hamparan Visual:
Gabungkan komposit model Anda dengan hamparan teks jelas yang merinci pengukuran model:

```
[ Model Height: 5'10" / 178cm ] ──► [ Model Build: Athletic ] ──► [ Wearing Size: Medium ]
```

---

## Lakukan itu

### Langkah 1: Analisis Hambatan Tingkat Pengembalian
Buka [`templates/fashion-cvr-tracker.md`](templates/fashion-cvr-tracker.md). Tinjau data logistik pengembalian toko Anda:
* Hitung persentase tingkat pengembalian Anda.
* Baca log alasan pengembalian. Jika lebih dari **50%** pengembalian menyebutkan *"terlalu kecil"*, *"terlalu besar"*, atau *"tidak pas"*, lanjutkan untuk mengoptimalkan daftar model.

### Langkah 2: Siapkan Model Representasi yang Sesuai
Pilih pakaian terlaris Anda. Hasilkan tiga variasi model percobaan yang mewakili tipe tubuh berbeda (misalnya langsing, atletis, berlekuk) saat mengenakan item, mengikuti alur kerja Modul 1.

### Langkah 3: Tambahkan Kartu Info Pengukuran Model
Di editor foto Anda, tambahkan bilah teks bersih dan kontras rendah di bagian bawah gambar daftar:
* *Contoh:* `"Model is 5'9\" (175cm), athletic build, wearing size Small."`
Pastikan font sesuai dengan panduan gaya merek Anda.

### Langkah 4: Jalankan Tes Daftar A/B
Konfigurasikan aplikasi pengujian toko Anda:
* **Kontrol (Varian A):** Foto galeri manekin hantu standar.
* **Pengujian (Varian B):** Foto model AI yang ditingkatkan menampilkan tipe tubuh dan info pengukuran berbeda.
Bagi lalu lintas masuk 50/50.

### Langkah 5: Pantau CVR dan Pengembalian
Biarkan pengujian terpisah berjalan selama 30 hari (pengujian pakaian memerlukan siklus yang lebih lama untuk melacak pengiriman kembali):
* Periksa tingkat konversi dan tingkat pengembalian untuk kedua varian.
* Hitung margin laba bersih setelah dikurangi biaya pengiriman kembali.
Jika Varian B menunjukkan penurunan pengembalian dan peningkatan penjualan, dorong perubahan tersebut ke seluruh kategori produk.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/denim-model-measurements.jpg" alt="Pengukuran Model Denim" width="240">
<img src="templates/examples/denim-model-clip.gif" alt="Denim Fit Video Motion (I2V)" width="240">
</p>
<p align="center"><sub>Denim Sizing Image (Left) ──► Image-to-Video Model Fit Motion (Right) · Video File: <a href="templates/examples/denim-model-clip.mp4">templates/examples/denim-model-clip.mp4</a></sub></p>

**Pengurangan Pengembalian Terkait Kesesuaian untuk Merek Denim**



* **Status Dasar:** Sebuah merek jeans premium mengalami **tingkat pengembalian sebesar 28%**. Foto produk hanya menampilkan gambar datar, sehingga menyebabkan kebingungan ukuran bagi pelanggan.
* **Strategi Desain Ulang (Varian B):**
* Foto uji coba model yang dihasilkan menampilkan jeans pada tiga model: Model 1 (5'11", bentuk ramping, ukuran 26), Model 2 (5'8", bentuk melengkung, ukuran 30), dan Model 3 (5'6", bentuk mungil, ukuran 25).
* Menambahkan tag teks yang jelas dengan tinggi model dan ukuran pinggang.
* **Hasil Tes Terpisah 30 Hari:**
* Tingkat Pengembalian Varian A: **28,0%** (280 unit dikembalikan dari 1.000 unit terjual).
* Tingkat Pengembalian Varian B: **16,5%** (165 unit dikembalikan dari 1.000 unit terjual).
* Peningkatan CVR Varian B: **+38%** (Konversi melonjak dari 1,8% menjadi 2,5%).
* **Dampak Finansial:** Menghemat **$4.600 biaya pengiriman kembali** dan meningkatkan pendapatan bersih sebesar **$7.000** dalam satu bulan.

---

## Bandingkan Alat

| Platform / Alat | Tujuan Optimasi | Tingkat Integrasi | Terbaik untuk |
|---|---|---|---|
| **Pengembalian Loop / Gorgia** | Pelacakan alasan portal pengembalian dan keluhan pelanggan | Tinggi (Tautan aplikasi Shopify Langsung) | Mengidentifikasi keberatan ukuran tertentu dan mengembalikan log. |
| **Google Analytics 4 (GA4)** | Pelacakan corong dan penurunan halaman | Sedang | Melacak titik pengantaran pengguna selama pembayaran keranjang. |
| **Aliran Shopify** | Mengotomatiskan tag layanan pelanggan | Sedang | Memberi tag pada SKU dengan pengembalian tinggi secara otomatis untuk prioritas desain. |

Gunakan Loop Returns untuk melacak alasan pelanggan mengembalikan barang (misalnya, ukurannya terlalu kecil). Basis data ini memberi tahu Anda produk mana yang memerlukan pembaruan visual segera. Gabungkan ini dengan GA4 untuk memantau rasio pentalan halaman produk.

---

## Luncurkan

**Cara mengelola visual ukuran:**
* **Jaga agar detail ukuran tetap akurat:** Jangan pernah berbohong tentang tinggi model atau ukuran pakaian di lapisan luar Anda. Jika Anda mencantumkan model yang mengenakan ukuran Medium padahal sebenarnya mereka mengenakan XS, pelanggan akan memesan ukuran yang salah, sehingga menyebabkan pengembalian meningkat.
* **Koordinasikan bilah skala katalog:** Jaga konsistensi pedoman tata letak Anda (Modul 3) sehingga info ukuran berada di lokasi visual yang sama di setiap halaman.

---

## Latihan

1. **Mudah:** Buka listingan fesyen dan hitung tingkat pengembaliannya jika terjual 500 unit dan dikembalikan 90.
2. **Medium:** Lengkapi CVR dan log Pengembalian di [`templates/fashion-cvr-tracker.md`](templates/fashion-cvr-tracker.md) menggunakan data tiruan.
3. **Sulit:** Rancang gambar galeri utama untuk gaun. Tempatkan model yang mengenakan gaun tersebut, tambahkan overlay info ukuran di bagian bawah, sejajarkan dengan margin keamanan standar, dan ekspor file WebP yang siap untuk seluler.

---

## Templat

* [`templates/fashion-cvr-tracker.md`](templates/fashion-cvr-tracker.md) — tabel konversi, metrik tingkat pengembalian, log pengujian terpisah, dan daftar periksa CRO.

---

[← Sizing & Layout consistency](03-sizing-layout-consistency.md) · [Track overview](README.md)
