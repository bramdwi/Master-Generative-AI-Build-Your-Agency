# Apa yang Sebenarnya Dijual di Pasar Saham

> Identifikasi ceruk saham komersial dengan permintaan tinggi dan hasilkan aset visual berlisensi yang benar-benar diunduh oleh pembeli.

**Lacak:** Konten & Lisensi Stok AI
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Pasar stok fotografi dipenuhi dengan gambar AI umum: lanskap fantasi, kota cyber futuristik, dan potret estetika acak. Pemula mengunggah ribuan gambar umum ini ke Adobe Stock atau Shutterstock, hanya untuk menghasilkan **$0,00 total royalti**.

Pembeli pasar (agen iklan, editor berita, tim desain perusahaan, dan agen pemasaran) tidak mencari karya seni—mereka mencari **konsep komersial yang menggambarkan masalah bisnis tertentu**:
* Para profesional bisnis berjabat tangan dalam sebuah kesepakatan.
* Instalasi pembangkit listrik tenaga surya energi terbarukan.
* Beragam petugas kesehatan mendiskusikan grafik pasien.
* Konsep pelanggaran data keamanan cyber.

Jika Anda menghasilkan karya seni cantik tanpa kasus penggunaan komersial, gambar Anda akan berada di bagian bawah hasil pencarian pasar selamanya.

---

## Konsep

Jalur lisensi saham AI bergantung pada **Analisis Tren Komersial**, **Penandaan Metadata IPTC** (IPTC = Dewan Telekomunikasi Pers Internasional — skema standar industri untuk menyematkan judul, kata kunci, dan bidang hak cipta di dalam file gambar), dan **Kepatuhan Rilis Properti**:

```
Commercial Demand Search ──► Concept Prompting ──► Quality Audit & Upscale ──► IPTC Keywording ──► Marketplace Submission
```

### 4 Pilar Permintaan Saham Komersial:

1. **Kategori Komersial dengan Permintaan Tinggi:**
* **Bisnis & Korporasi:** Rapat tim, jabat tangan di kantor, panggilan video jarak jauh, presentasi eksekutif.
* **Teknologi & Keamanan Siber:** Ruang server, komputasi awan AI, keamanan data, autentikasi biometrik.
* **Perawatan Kesehatan & Kebugaran:** Penelitian medis, kepercayaan dokter-pasien, terapi kesehatan mental, laboratorium bioteknologi.
* **Energi & Keberlanjutan Ramah Lingkungan:** Turbin angin, pengisian daya kendaraan listrik, panel surya, arsitektur berkelanjutan.
2. **Ruang Salin (Ruang Negatif untuk Hamparan Teks):** Pembeli saham memerlukan ruang untuk menambahkan judul, logo, dan teks promosi. Gambar dengan latar belakang yang bersih dan rapi (misalnya, ruang negatif di 30% kiri atau atas bingkai) terjual 4x lebih sering dibandingkan komposisi yang ramai dan berantakan.
3. **Tanpa Merek Dagang / Artefak Merek:** Agen stok menolak gambar yang berisi logo merek yang dapat dikenali (Apple, Nike, BMW), arsitektur bermerek dagang, atau karya seni berhak cipta.

---

## Lakukan itu

### Langkah 1: Teliti Kata Kunci Trending di Adobe Stock Insights
Buka Portal Kontributor Saham Adobe. Periksa **"Ringkasan Tren Permintaan" bulanan untuk menemukan istilah penelusuran komersial yang tidak ada atau memiliki konversi tinggi (misalnya, *"berbagai kantor modern jabat tangan eksekutif"*).

### Langkah 2: Rakit Stock Prompt dengan Copy Space
Buka [`templates/stock-metadata-template.md`](templates/stock-metadata-template.md). Draf prompt stok komersial dengan ruang fotokopi:
* **Mengingatkan:**
> __KODE INLINE_0__
* **Perintah Negatif:**
> __KODE INLINE_0__

### Langkah 3: Periksa Artefak pada Zoom 100%.
Sebelum mengirimkan ke portal stok, periksa detail penting:
* **Geometri Tangan & Jari:** Pastikan jabat tangan memuat tepat 5 jari per tangan tanpa melengkung.
* **Refleksi Mata & Cahaya Tangkap:** Pastikan pupil berbentuk bulat dan jernih.

### Langkah 4: Tambahkan Metadata IPTC (Judul, Kata Kunci, Kategori)
Gunakan editor IPTC (ExifTool atau stock tagger) untuk menyematkan 30+ kata kunci komersial yang ditargetkan (misalnya, *perjanjian, kemitraan, kesepakatan, jabat tangan, bisnis, perusahaan, eksekutif, rapat, kantor, kerja tim, kepercayaan*).

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/corporate-handshake-stock.jpg" alt="Foto Saham Komersial Jabat Tangan Perusahaan" width="480">
<img src="templates/examples/stock-catalog-motion.gif" alt="Katalog Saham Video Motion (I2V)" width="480">
</p>
<p align="center"><sub>Commercial Stock Photograph (Left) ──► Image-to-Video Stock Motion Clip (Right) · Video File: <a href="templates/examples/stock-catalog-motion.mp4">templates/examples/stock-catalog-motion.mp4</a></sub></p>

**Analisis Kinerja Aset Saham untuk "Konsep Jabat Tangan Perusahaan"**

* **Pasar:** Adobe Stock & Freepik.
* **Kategori:** Bisnis / Keuangan / Kemitraan Perusahaan.
* **Tag Metadata:** 38 kata kunci komersial + tag spasi salin.
* **Unduhan:** 142 unduhan lisensi dalam 90 hari.
* **Pendapatan Royalti:** **$142,00** penghasilan berulang pasif dari 1 render gambar.

---

## Bandingkan Alat

| Pasar Saham | Penerimaan Gambar AI | Struktur Royalti | Terbaik Untuk |
|---|---|---|---|
| **Stok Adobe** | **Diterima** (membutuhkan tag AI) | 33% per unduhan ($0,33 hingga $9,90+) | Pendapatan tertinggi per unduhan |
| **Gratispik Premium** | **Diterima** | Kumpulan bayar per unduh (~$0,05 hingga $0,15) | Unduhan volume tinggi |
| **Shutterstock** | Dibatasi (khusus AI internal) | Bervariasi | Penyerahan stok non-AI |

---

## Luncurkan

* **Tandai Unggahan Anda dengan Benar:** Selalu centang kotak **"Dibuat menggunakan alat AI Generatif"** saat mengunggah ke Adobe Stock. Menyembunyikan asal AI berisiko terhadap penangguhan akun.

---

## Latihan

1. **Mudah:** Teliti 3 istilah penelusuran komersial yang sedang tren di Adobe Stock.
2. **Medium:** Menghasilkan foto stok komersial yang menampilkan ruang fotokopi untuk judul.
3. **Sulit:** Tandai gambar Anda dengan 30+ kata kunci IPTC komersial dan kirimkan ke portal kontributor stok.

---

## Template

* [`templates/stock-metadata-template.md`](templates/stock-metadata-template.md) — Skema penandaan metadata, panduan ruang penyalinan, dan daftar periksa pengiriman agensi.

---

[Track Overview](README.md) · Berikutnya: [Batch-Generating a Licensable Catalog →](02-batch-generating-a-licensable-catalog.md)
