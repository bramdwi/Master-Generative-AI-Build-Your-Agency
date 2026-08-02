# Desain Gambar Kecil AI

> Judulnya membuat mereka berpikir; thumbnail membuat mereka mengklik.

**Lacak:** AI Content Factory
**Waktu:** ~40 menit
**Prasyarat:** Jalur Produksi Multi-Langkah

## Masalahnya

Anda dapat menghabiskan 20 jam untuk membuat skrip, mengisi suara, dan mengedit video berdurasi panjang, tetapi jika gambar mini Anda gagal menarik klik, video Anda akan mati pada saat kedatangan. Algoritme rekomendasi mengukur **Rasio Klik-Tayang (RKT)**. Jika RKT Anda di bawah **3%**, platform menganggap video tersebut tidak menarik dan berhenti menampilkannya kepada pemirsa baru.

Kebanyakan pemula mendesain gambar mini yang berantakan: gambar mini tersebut dikemas dalam teks 10 kata, menggunakan gambar latar belakang dengan kontras rendah, atau melapisi beberapa logo. Di layar ponsel, thumbnail ini tampak buram dan tidak terbaca.

Untuk menskalakan tampilan pabrik, Anda memerlukan proses berulang untuk menghasilkan aset visual dengan kontras tinggi dan konsep tinggi yang menonjol di layar seluler.

## Konsep

Gambar mini dengan RKT tinggi mengandalkan tiga prinsip psikologis dan visual:

### 1. Aturan 3 Detik:
Penonton yang melihat thumbnail harus memahami topik video dan kaitan emosionalnya dalam waktu kurang dari 3 detik. Desain harus memiliki **satu subjek yang jelas** dan teks maksimal **3 kata**. Jangan mengulang judul video di teks thumbnail.

### 2. Kontras Visual Tinggi:
Sebagian besar feed media sosial menggunakan latar belakang putih atau gelap. Agar menonjol, gambar mini Anda harus menggunakan palet warna yang kontras (misalnya biru neon yang bersinar, emas cerah, atau hijau cerah dengan latar belakang gelap dan minimalis).

```
[Sub-subject / Text] ─── (Rule of Thirds) ─── [Glowing focal subject]
```

### 3. Penempatan Subjek Fokus:
Tempatkan subjek visual utama Anda (wajah, objek, bagan) di sepertiga kiri atau kanan bingkai. Tempatkan hamparan teks tebal Anda di sepertiga sebaliknya. Hindari menempatkan elemen penting di pojok kanan bawah, tempat platform menutupi stempel waktu durasi video.

---

## Lakukan itu

### Langkah 1: Hasilkan Aset Latar Belakang
Pilih pola prompt dari [`templates/thumbnail-prompt-library.md`](templates/thumbnail-prompt-library.md). Jalankan `nano-banana-2` (setel rasio aspek ke `16:9` untuk layar lebar atau `1:1` untuk umpan persegi).
* *Contoh petunjuk:* Bagan batang digital hijau bercahaya modern yang mengambang di kantor mewah minimalis.

### Langkah 2: Impor ke Alat Komposisi Anda
Buka editor gambar Anda (misalnya Canva atau Photoshop). Tetapkan resolusi kanvas Anda ke `1280 x 720` piksel. Masukkan gambar yang dihasilkan.

### Langkah 3: Peningkatan Saturasi & Kontras
Grafik tanpa wajah bisa terlihat datar. Terapkan penyesuaian ini:
* Tingkatkan **Kontras** sebesar **+15%** untuk menggelapkan bayangan dan sorotan menonjol.
* Tingkatkan **Saturasi** sebesar **+12%** untuk membuat warna menjadi cerah.
* Terapkan sedikit **blur** (Gaussian blur, ukuran: 5) pada latar belakang untuk memisahkan subjek.

### Langkah 4: Tambahkan Hamparan Teks
Tulislah kalimat singkat yang bernilai tinggi (maksimal 3 kata):
* **Font:** Gunakan font sans-serif yang sangat tebal (misalnya Archivo Black).
* **Warna:** Putih (`#FFFFFF`) atau Kuning (`#FFD700`).
* **Garis Besar:** Tambahkan bayangan hitam tebal atau guratan (lebar: 12) untuk memastikan keterbacaan terhadap elemen latar belakang apa pun.

### Langkah 5: Audit Pratinjau Seluler
Perkecil layar editor Anda hingga gambar kecilnya seukuran koin (skala sekitar 10%). Jika Anda tidak dapat membaca teks atau mengenali subjek utama, hilangkan detail latar belakang dan perbesar subjek.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/get-rich-automated-thumbnail.jpg" alt="Desain Gambar Kecil" width="280">
<img src="templates/examples/thumbnail-motion-clip.gif" alt="Gerakan Thumbnail Bersinar (I2V)" width="280">
</p>
<p align="center"><sub>High-CTR Thumbnail Image (Left) ──► Image-to-Video Motion (Right) · Video File: <a href="templates/examples/thumbnail-motion-clip.mp4">templates/examples/thumbnail-motion-clip.mp4</a></sub></p>

**Desain Gambar Kecil: "Menjadi Kaya Secara Otomatis"**



* **Pembuatan Aset:**
* Model: `nano-banana-2` melalui muapi.
* Prompt: Kunci perak bersinar bersinar dengan cahaya biru, membuka kunci fisik.
* **Hamparan Teks:**
* Pilihan teks: *"OTOMATISKAN INI"*
* Penataan gaya: Montserrat Extra-Bold, font Kuning dengan garis luar hitam tebal.
* **Komposisi Tata Letak:**
* Kunci biru bercahaya terletak di sepertiga kanan kanvas.
* Teks tebal ditempatkan pada sepertiga kiri.
* Sudut kanan bawah tetap bersih dari detail penting.

**Hasilnya:** Kontras tinggi antara cahaya biru yang bersinar dan latar belakang gelap langsung menarik perhatian. Teksnya tebal dan mudah dibaca bahkan pada ukuran layar ponsel yang kecil.

**Thumbnail di bawah ini asli, bukan tiruan** — dibuat melalui `nano-banana-2` (rasio aspek layar lebar 16:9) dengan hamparan teks yang ditambahkan secara terprogram, sehingga Anda dapat melihat seperti apa sebenarnya komposisi akhir dengan RKT tinggi:

<p align="center"><img src="templates/examples/get-rich-automated-thumbnail.jpg" alt="Generated high-CTR thumbnail example" width="280"></p>

*Bagaimana ini sebenarnya diproduksi, end to end, melalui API & skrip muapi:*
1. Menghasilkan adegan latar belakang dasar dengan **`nano-banana-2`** (teks-ke-gambar, $0,06/gambar) dengan rasio aspek layar lebar `16:9`.
2. Mengunduh gambar dan menggunakan pustaka `Pillow` Python untuk melapisi teks kuning **"AUTOMATE THIS"** di sepertiga kiri dengan guratan bayangan hitam tebal.

---

## Bandingkan Alat

| Jalur Generasi | Kualitas | Kecepatan | Kustomisasi |
|---|---|---|---|
| **`nano-banana-2`** (melalui muapi) | Tinggi | Cepat (Dihasilkan dalam waktu kurang dari 15 detik) | Bagus (Dengan cepat mencocokkan petunjuknya) |
| **Tengah perjalanan v6** | Sangat Tinggi | Lambat (Membutuhkan antarmuka Discord dan proses generasi lambat) | Tinggi |
| **Difusi Lokal Stabil** | Tinggi | Sedang (Membutuhkan pengaturan GPU yang kuat) | Sangat Tinggi (Mendukung ControlNet) |

Untuk content factory volume, menggunakan `nano-banana-2` melalui muapi adalah jalur tercepat. Ini memungkinkan Anda mengotomatiskan pembuatan thumbnail langsung di dalam alat skrip Anda, mengekspor aset visual yang cocok di sepanjang skrip Anda berjalan.

---

## Luncurkan

**Cara mengelola RKT dalam produksi:**
* **Pertukaran 24 Jam:** Jika Anda mengupload video dan RKT-nya di bawah **3%** setelah 24 jam, jangan hapus video tersebut. Cukup buat thumbnail baru dengan skema warna berbeda dan tukar. Hal ini dapat langsung menyelamatkan distribusi video.
* **Jaga file teks tetap bersih:** Simpan folder template "tata letak teks RKT tinggi" di Canva sehingga Anda dapat menarik dan melepas gambar yang dihasilkan di belakang kotak teks yang telah ditata gayanya, sehingga mengurangi waktu desain menjadi kurang dari 3 menit.

---

## Latihan

1. **Mudah:** Buat gambar konseptual menggunakan `nano-banana-2`. Tingkatkan kontrasnya sebesar 15% dan saturasinya sebesar 10%.
2. **Sedang:** Rancang tata letak gambar mini 1280x720. Tempatkan subjek di sepertiga kanan, dan tulis hamparan teks 2 kata di sepertiga kiri. Terapkan drop shadow hitam tebal ke teks.
3. **Sulit:** Lakukan "audit pratinjau seluler" pada tiga gambar mini pesaing Anda. Petakan ukuran teks dan subjek fokusnya, dan tuliskan dua perubahan yang akan Anda lakukan untuk meningkatkan keterbacaan dalam skala kecil.

---

## Template

* [`templates/thumbnail-prompt-library.md`](templates/thumbnail-prompt-library.md) — perintah gambar yang diuji untuk latar belakang RKT tinggi.

---

[← Building a YouTube Shorts Factory](03-youtube-shorts-factory.md) · Berikutnya: [Batching & Scheduling at Volume →](05-batching-and-scheduling.md)
