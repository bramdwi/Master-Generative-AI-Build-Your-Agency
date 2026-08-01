# Uji Coba Garmen untuk Fashion E-commerce

> Sebuah pakaian hanya menjadi hidup ketika ia bergerak bersama tubuh manusia.

**Lagu:** Mode AI & Uji Coba Virtual
**Waktu:** ~45 menit
**Prasyarat:** Tidak ada

## Masalahnya

Untuk merek fesyen e-niaga, pemesanan model, penata rambut/penata rias, fotografer, dan persewaan studio merupakan biaya berulang yang sangat besar. Satu pemotretan lini produk dapat menghabiskan biaya lebih dari $5.000 dan memerlukan waktu berminggu-minggu untuk mengeditnya.

Untuk menghemat uang, merek sering kali mengandalkan flat-lays (pakaian yang diletakkan rata di atas meja) atau "manekin hantu" (pakaian di atas boneka plastik yang telah diedit). Meski murahan, foto-foto ini terlihat datar dan membosankan. Pelanggan ingin melihat bagaimana kain menutupi, melipat, menyesuaikan, dan serasi dengan tubuh orang sungguhan. Tanpa foto model manusia, merek fesyen akan mengalami rasio klik-tayang yang rendah dan tingkat pengembalian yang tinggi karena pelanggan tidak dapat menilai kecocokannya.

Untuk meluncurkan desain baru secara instan tanpa pemotretan fisik, Anda perlu menerapkan alur **Virtual Try-On (VTO)** — sebuah teknologi yang mengambil foto pakaian datar dan menggantungkannya secara digital ke tubuh model, sehingga menghasilkan foto produk yang pas dan realistis tanpa pemotretan fisik.

## Konsep

Alur kerja sintesis fesyen menggunakan **Segmentasi Garmen**, **Difusi Virtual Try-On (VTO)**, dan **Draping Fitting**:

```
Flat Garment Photo ──► Garment Mask Extraction ──► VTO Model Alignment ──► Timbre-Draping Synthesis
```

* **Menjaga Integritas Pakaian:** Tidak seperti generator gambar standar yang mengubah detail pakaian, model VTO menggunakan gambar pakaian referensi. Teknologi ini mengisolasi pakaian, menganalisis tekstur, jahitan, kancing, dan polanya, serta menggantungkannya ke tubuh model target sambil mempertahankan **95%** detail fisik aslinya.
* **Transfer Manekin-ke-Model:** Jika Anda sudah memiliki foto manekin hantu, mesin VTO dapat menggunakan pose manekin sebagai panduan struktural, mengganti anggota badan dan kepala plastik dengan model asli, dan menjaga ukurannya tetap pas.
* **Demografi Model Khusus:** Anda dapat menukar etnis, usia, tinggi badan, dan bentuk tubuh model sambil tetap menggunakan pakaian yang sama. Hal ini memungkinkan merek untuk secara instan mempersonalisasi halaman arahan mereka untuk target pasar regional yang berbeda.

---

## Lakukan itu

### Langkah 1: Siapkan Foto Referensi Pakaian Anda
Fotolah pakaian fisik Anda dalam posisi datar atau di atas manekin. Pastikan gambarnya datar, fokus, dan diambil di bawah cahaya matahari yang cerah. Hapus latar belakang menggunakan pemotong subjek AI untuk mengisolasi pakaian. Simpan sebagai `garment_ref.png`.

### Langkah 2: Tentukan Demografi Model
Buka lembar spesifikasi percobaan Anda di [`templates/tryon-spec-sheet.md`](templates/tryon-spec-sheet.md). Dokumentasikan parameter model target:
* *Contoh:* Pria Asia Timur, 28 tahun, bertubuh atletis, berdiri di lingkungan studio.

### Langkah 3: Pilih Pose Model Target
Jika jalur percobaan Anda mendukung model referensi, unggah foto model dengan pose yang Anda inginkan (misalnya Pose A: berdiri tegak, tangan di samping). Jika menggunakan model edit teks ke gambar (seperti `nano-banana-2-edit`), unggah foto manekin asli, tutupi area pakaian, dan tulis deskripsi model target Anda.

### Langkah 4: Jalankan Mesin Draping VTO
Kirimkan aset Anda ke mesin uji coba (seperti IDM-TryOn atau Kolors VTO API):
* Berikan `garment_ref.png` sebagai input pakaian.
* Berikan gambar pose model atau perintah teks sebagai input tubuh target.
* Atur tingkat pemasangan tirai ke **0,75** (menyeimbangkan pelestarian detail kain dengan kerutan gerakan tubuh yang realistis).
Hasilkan dan unduh keluaran `.jpg`.

### Langkah 5: Lakukan Kontrol Kualitas Detail
Perbesar gambar akhir dan periksa area utama berikut:
* **Bagian Kerah & Kancing:** Pastikan bentuk kerah tajam dan tidak buram atau menyatu dengan kulit.
* **Manset & Garis Kelim:** Pastikan tangan melewati manset kemeja secara alami, dan keliman bawah lurus.
* **Cetakan & Tekstur:** Pastikan garis, cetakan, atau logo mengikuti lekuk dan lipatan alami tubuh model.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/linen-shirt-vto.jpg" alt="Manekin Hantu Kemeja Linen vs Model VTO" width="480">
<br>
<img src="templates/examples/linen-shirt-motion.gif" alt="Loop Gerakan Kemeja Linen (I2V)" width="360">
</p>
<p align="center"><sub>Virtual Try-On Model Image (Top) ──► Image-to-Video Fabric Motion Loop (Bottom) · Video File: <a href="templates/examples/linen-shirt-motion.mp4">templates/examples/linen-shirt-motion.mp4</a></sub></p>

**Tukar Manekin Kemeja Linen dengan Model**



* **Masukan Garmen:** Manekin hantu datar yang diambil dari kemeja berkancing linen putih pucat.
* **Model Target:** Model pria bule berusia 30 tahun dengan tubuh atletis.
* **VTO Pipeline:** Panggilan API IDM-TryOn.
* `garment_image` = `linen_shirt.png`
* `model_image` = `reference_male_model.jpg`
* **Hasil Sintesis:** Kemeja linen off-white disampirkan pada model. Kancingnya bening, garis jahitannya tajam, dan tekstur garis silang kain linen tetap terjaga sepenuhnya. Bayangan lembut terlihat alami di bawah kerah kemeja.

**Hasilnya:** Merek ini meningkatkan halaman katalog online mereka dari manekin plastik menjadi foto model profesional, sehingga meningkatkan persepsi nilai premium dari kemeja tersebut.

---

## Bandingkan Alat

| Platform / Alat | Pelestarian Detil | Kustomisasi Pose | Terbaik untuk |
|---|---|---|---|
| **IDM-Coba** | Ultra-Tinggi (Mempertahankan pola, tekstur, dan jahitan kain yang rumit) | Sedang | Membuat foto katalog daftar e-niaga dengan ketelitian tinggi. |
| **Percobaan Virtual Kolors** | Tinggi | Tinggi (Sangat baik dalam menyesuaikan kain dengan pose yang rumit) | Buku tampilan editorial mode kreatif dan grafik sosial. |
| **Kling AI Gambar-ke-Video** | Sedang | Tinggi (Dapat menganimasikan model berjalan sambil mengenakan pakaian) | Membuat loop video pendek tentang model berjalan. |

Untuk halaman detail produk standar (PDP) di Shopify atau Amazon, IDM-TryOn adalah alat pilihan karena menjaga logo, teks, dan tekstur kain pakaian tetap tajam. Untuk iklan banner media sosial yang membutuhkan model dengan pose aktif (berlari, melompat), Kolors VTO memberikan penyesuaian pose yang lebih baik.

---

## Luncurkan

**Cara mengatur gambar katalog:**
* **Jaga konsistensi model:** Gunakan wajah dan tubuh model target yang sama persis di satu halaman kategori produk. Jika pembeli mengklik kaos dan wajah model berubah pada setiap item, tata letak toko akan terlihat amatir dan tidak konsisten.
* **Simpan templat resolusi tinggi:** Simpan templat pose model teratas Anda di folder master. Saat Anda merilis lini garmen baru, gunakan kembali pose yang sama untuk mempercepat rendering batch.

---

## Latihan

1. **Mudah:** Memotret t-shirt flat-lay. Gunakan pemotong latar belakang untuk membuat topeng PNG pakaian bersih.
2. **Medium:** Kirimkan PNG kaos Anda ke alat uji coba virtual. Hasilkan model pria dan model wanita yang mengenakan kemeja yang sama.
3. **Sulit:** Dengan menggunakan gambar manekin hantu dari jaket berkancing, jalankan saluran pipa VTO. Tinjau tepi kerah dan jahitan manset pada zoom 200%. Perbaiki pendarahan perbatasan menggunakan editor foto.

---

## Templat

* [`templates/tryon-spec-sheet.md`](templates/tryon-spec-sheet.md) — spesifikasi garmen, bagan demografi model, target masker, dan pemeriksaan QA.

---

[Track overview](README.md) · Berikutnya: [High-converting Studio Lookbooks →](02-studio-lookbooks.md)
