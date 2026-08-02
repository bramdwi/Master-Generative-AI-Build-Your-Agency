# Lembar Spesifikasi Uji Coba Virtual

Gunakan template ini untuk menentukan parameter garmen dan model untuk menjalankan generasi uji coba virtual.

## 1. Parameter Pakaian
* **Nama Garmen:** misalnya Kemeja Linen Kancing Klasik
* **Kategori:** [x] Atasan / [ ] Bawahan / [ ] Pakaian Luar / [ ] Gaun Penuh
* **Bahan/Tekstur:** Linen rami organik tenunan ringan.
* **Spesifikasi Warna:** Off-white / Krem `#F5F2EB`.
* **Foto Sumber Pakaian:** `raw_garment_01.png` (foto manekin datar transparan terisolasi).

## 2. Demografi Model Sasaran
* **Gender/Presentasi:** misalnya, Pria / Maskulin
* **Rentang Usia:** misalnya 25 - 35 tahun
* **Profil Etnis:** misalnya, Asia Timur
* **Tipe Tubuh:** [ ] Ramping / [x] Atletis / [ ] Melengkung / [ ] Besar & Tinggi

## 3. Detail Masker & Komposisi
* **Strategi Masker Inpaint:** [x] Jaga wajah dan kulit, ganti pakaian / [ ] Jaga pakaian, tukar model wajah/tubuh
* **Tingkat Pemasangan Draping:** `0.75` (kemiripan tinggi dengan lipatan pakaian asli).
* **Pelestarian Detail Kerah:** [x] Jaga agar kerah tetap terbuka / [ ] Kancingkan

## 4. Log Operasional Jalankan

| Jalankan # | Perintah Model | Peringkat Kesesuaian (1-10) | Peringkat Tekstur Kain | Penyelarasan Kotak Batas | Catatan |
|:---:|---|---|---|---|---|
| 1 | "Model pria Asia Timur, bertubuh atletis..." | 8/10 | 9/10 | Pusat | Garis lipatan alami |
| 2 | "Model yang sama, berdiri di studio..." | 9/10 | 9/10 | Pusat | Pertandingan bayangan |
| 3 | | | | | |
