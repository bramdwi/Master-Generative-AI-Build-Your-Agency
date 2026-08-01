# Alur Kerja Batch untuk Katalog

> Konsistensi inilah yang mengubah foto-foto individual menjadi katalog merek.

**Lagu:** Fotografi Produk AI & E-commerce
**Waktu:** ~45 menit
**Prasyarat:** Dasar-dasar Pemotretan Produk

## Masalahnya

Merek jarang hanya menjual satu barang saja. Mereka meluncurkan koleksi katalog lengkap yang berisi 20, 50, atau 200 variasi (seperti 10 profil aroma berbeda dari botol parfum yang sama, atau pola warna berbeda dari botol air yang sama).

Jika Anda mendesain setiap latar belakang dari awal, sudut pencahayaan, bayangan, dan koordinat kamera akan berbeda. Saat ditampilkan di halaman katalog, produk akan terlihat berantakan dan melompat-lompat di layar saat pengguna menggulir.

Mendesain variasi ini satu per satu juga sangat lambat. Jika Anda menghabiskan 1 jam untuk mengedit setiap produk, katalog yang berisi 50 item akan menghabiskan waktu seminggu, sehingga menghancurkan margin agensi Anda. Anda memerlukan alur kerja batch untuk menjaga tata letak tetap identik dan merender katalog dalam hitungan menit.

## Konsep

Penskalaan produksi katalog memerlukan **Standarisasi Tata Letak**, **Penyematan Cepat**, dan **Penyembunyian Batch**:

```
[20 Product Images] ──► Batch Background Remover ──► Locked Backdrop Prompt ──► Template Bounding Box ──► Export WebP
```

* **Penyematan Segera:** Untuk memastikan lingkungan latar belakang tetap sama, gunakan perintah dan seed yang sama untuk adegan latar belakang. Jangan membuat latar belakang baru untuk setiap produk. Tempatkan produk pada gambar latar belakang yang *sama* telah dirender sebelumnya.
* **Standarisasi Tata Letak:** Tetapkan koordinat kotak pembatas yang kaku. Dalam jajaran produk, semua kontainer harus berada pada garis dasar vertikal yang sama (koordinat Y) dan menempati persentase tinggi relatif yang sama di dalam bingkai.
* **Penyembunyian Batch:** Gunakan panggilan folder API terprogram atau alat batch untuk menghapus latar belakang secara massal. Ini menghilangkan kebutuhan untuk mengklik secara manual dan menghapus piksel untuk setiap item.

---

## Lakukan itu

### Langkah 1: Siapkan Folder Katalog Anda
Buka [`templates/batch-catalog-spec.md`](templates/batch-catalog-spec.md). Bangun struktur folder lokal Anda untuk memisahkan file yang sedang dalam proses dari aset yang sudah selesai:
* Tempatkan semua foto produk mentah di `01_raw_assets/`.
* Beri nama file berdasarkan SKU produknya (misalnya, `sku_lavender_01.jpg`, `sku_rose_02.jpg`).

### Langkah 2: Hapus Latar Belakang Secara Batch
Jalankan alat penghapus latar belakang batch. Jika menggunakan Photoshop:
* Buka File -> Skrip -> Pemroses Gambar.
* Atur folder sumber ke `01_raw_assets/` dan pilih "Simpan sebagai PSD".
* Buka panel tindakan, rekam tindakan baru: pilih Subjek, terapkan Mask, dan simpan sebagai PNG transparan. Jalankan tindakan batch pada folder untuk mengeluarkan file ke `02_isolated_masks/`.
Jika menggunakan API, jalankan skrip Python untuk mengirim file folder ke `/remove-background` dan unduh hasilnya.

### Langkah 3: Pilih dan Kunci Latar Belakang Anda
Hasilkan dan pilih gambar latar studio dengan performa terbaik. Skala dan pusatkan blok travertine atau permukaan alas. Simpan gambar master tunggal ini sebagai `master_background.jpg`.

### Langkah 4: Buat Template Alignment
Buka `master_background.jpg` di editor foto Anda. Tarik ke bawah pemandu penggaris horizontal untuk mengatur ketinggian garis dasar di mana bagian bawah produk akan menyentuh permukaan alas. Tandai pemandu samping untuk mewakili batas bantalan maksimum. Simpan dokumen ini sebagai `catalog_template.psd`.

### Langkah 5: Jalankan Pengomposisian Batch
Impor topeng PNG terisolasi Anda ke dalam templat:
* Sejajarkan setiap dasar masker produk dengan panduan garis dasar horizontal.
* Skala Proporsional: Pastikan setiap variasi memenuhi kotak pembatas standar (misalnya tinggi 80%).
* Gandakan layer bayangan di bawah produk. Karena pencahayaannya identik, lapisan kontak dan drop shadow yang sama dapat digunakan kembali di semua file.
* Simpan setiap grup lapisan variasi produk secara terpisah, dan ekspor file sebagai WebP ke `05_final_deliver/`.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/batch-skincare-grid.jpg" alt="Kisi Perawatan Kulit" width="280">
<img src="templates/examples/batch-skincare-grid-clip.gif" alt="Katalog Batch Motion (I2V)" width="280">
</p>
<p align="center"><sub>Skincare Collection Catalog Image (Left) ──► Image-to-Video Batch Lighting Motion (Right) · Video File: <a href="templates/examples/batch-skincare-grid-clip.mp4">templates/examples/batch-skincare-grid-clip.mp4</a></sub></p>

**Pembaruan Katalog Batch untuk Merek Perawatan Kulit**



* **Cakupan Katalog:** 5 tetes serum wajah yang berbeda (Mawar, Lavender, Mentimun, Pohon Teh, Jeruk).
* **Penyiapan Dasar:**
* Lingkungan utama: Langkan marmer travertine dengan latar belakang plesteran berwarna krem.
* Koordinat dasar: Tetapkan pada Y: 800 piksel pada kanvas persegi berukuran 1920x1920 piksel.
* Tinggi produk: Distandarisasi hingga tepat 1100 piksel.
* **Pemrosesan Batch:**
* Jalankan penghapusan latar belakang seluruh folder pada 5 gambar produk mentah.
* Mengimpor semua 5 topeng PNG ke dalam templat PSD.
* Mengalihkan setiap lapisan penetes satu per satu (di Photoshop: klik ikon mata di sebelah lapisan untuk menampilkan/menyembunyikannya), menjaga bayangan dasar dan lapisan latar belakang tetap identik.
* **Hasil:** Menghasilkan 5 gambar katalog yang sangat cocok dengan pencahayaan, bayangan, dan ukuran yang seragam dalam waktu kurang dari 10 menit.

---

## Bandingkan Alat

| Platform / Alat | Kecepatan Otomatisasi | Kesesuaian Alur Kerja | Terbaik untuk |
|---|---|---|---|
| **Tindakan Batch Photoshop** | Tinggi (Memproses folder lokal menggunakan hotkey yang direkam) | Luar Biasa (Mempertahankan kontrol manual atas penyesuaian) | Desainer profesional mengelola penyesuaian lapisan yang rumit. |
| **API Batch Ruang Foto** | Ultra-High (Memproses ratusan file secara bersamaan di cloud) | Bagus | Operasi toko bervolume tinggi dengan tata letak sederhana. |
| **Bantal Python (PIL)** | Sangat Tinggi | Bagus (Membutuhkan penulisan skrip python) | Pemrogram mengotomatiskan hamparan katalog massal. |

Untuk agensi desain, merekam tindakan batch di Photoshop adalah alur kerja terbaik. Hal ini memungkinkan Anda untuk mengotomatiskan tugas yang berulang (masking, mengimpor, memposisikan) sambil memberi Anda kebebasan untuk mengubah bayangan akhir secara manual untuk QA berkualitas tinggi. Untuk katalog besar (misalnya 500+ item), Batch API Photoroom menyediakan eksekusi cloud tercepat.

---

## Luncurkan

**Cara mengatur nama file:**
* **Gunakan tag SKU standar:** Selalu beri nama file Anda menggunakan kode SKU produk (misalnya, `SKU-BOT-01.webp`). Hal ini memungkinkan pengembang web mengimpor dan menautkan gambar ke daftar produk yang benar secara otomatis melalui spreadsheet CSV, sehingga menghemat waktu berjam-jam untuk mengunggah secara manual.
* **Jaga agar ukuran kanvas tetap seragam:** Pastikan semua gambar akhir yang diekspor diekspor dengan rasio aspek yang sama (misalnya, 2000x2000 piksel persegi). Pencocokan bentuk persegi dan vertikal akan menyebabkan kisi tata letak e-niaga Anda rusak.

---

## Latihan

1. **Mudah:** Siapkan folder direktori standar (`01_raw_assets/`, `02_isolated_masks/`, `03_ai_backgrounds/`, `04_composite_drafts/`, `05_final_deliver/`) di komputer Anda.
2. **Medium:** Rekam Action Photoshop (atau tulis skrip Python dasar) untuk menskalakan gambar menjadi 1080x1080 piksel dan menambahkan batas luar 10%.
3. **Keras:** Proses batch 3 kaleng minuman berwarna berbeda. Tempatkan mereka di tepian latar belakang yang sama pada koordinat garis dasar yang sama, terapkan lapisan drop shadow yang sama, dan ekspor 3 file WebP katalog yang cocok.

---

## Templat

* [`templates/batch-catalog-spec.md`](templates/batch-catalog-spec.md) — pengaturan direktori, peta kotak pembatas, log katalog, dan daftar periksa alur kerja.

---

[← Selling as a Productized Service](03-productized-service.md) · [Track overview](README.md)
