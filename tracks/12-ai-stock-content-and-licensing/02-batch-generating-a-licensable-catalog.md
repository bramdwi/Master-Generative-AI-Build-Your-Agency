# Pembuatan Batch Katalog yang Dapat Dilisensikan

> Buat 500+ katalog stok aset menggunakan pengelompokan cepat otomatis, peningkatan AI, dan penandaan metadata CSV.

**Lacak:** Konten & Lisensi Stok AI
**Waktu:** ~40 menit
**Prasyarat:** [01: What Sells on Stock Marketplaces](01-what-actually-sells-on-stock-marketplaces.md)

## Masalahnya

Lisensi saham adalah **permainan angka volume**. Menghasilkan $500 hingga $2.000+ per bulan dalam royalti pasif memerlukan portofolio **500 hingga 2.000+ aset komersial berkualitas tinggi**.

Membuat, meningkatkan, memasukkan kata kunci, dan mengunggah gambar satu per satu membutuhkan waktu 15 menit per gambar. Menerbitkan 500 gambar secara manual dengan kecepatan seperti itu akan memakan waktu lebih dari 125 jam kerja manual yang membosankan.

Tanpa alur kerja otomatisasi batch, pembuat konten berhenti sebelum mencapai ukuran katalog yang diperlukan untuk membuka pendapatan pasif yang bertambah.

---

## Konsep

**Saluran Pabrik Stok Otomatis** memproses gambar secara massal:

```
Batch Prompt Matrix ──► Automated Generation ──► 4x Upscale Pipeline ──► Auto-CSV Metadata Tagging ──► FTP Batch Upload
```

### Pilar Otomasi:

1. **Pembuatan API Batch:** Memanggil `/nano-banana-2` melalui skrip Python untuk menghasilkan 50 gambar dalam sekali proses.
2. **Peningkatan AI Massal:** Memproses gambar mentah berukuran 1024 piksel melalui peningkatan skala batch untuk mencapai **4000px+ (12+ Megapiksel)** yang dibutuhkan oleh agen stok.
3. **Penyerapan Metadata CSV:** Portal stok (seperti Adobe Stock dan Freepik) menerima file CSV yang berisi `filename, title, keywords, category`, sehingga menghilangkan entri teks manual.

---

## Lakukan itu

### Langkah 1: Buat Array Prompt Batch
Buka [`templates/stock-metadata-template.md`](templates/stock-metadata-template.md). Tentukan matriks cepat yang menargetkan konsep teknologi komersial:
* __KODE INLINE_0__
* Gantikan `[TECH_CONCEPT]` dengan: `AI cloud data server`, `biometric facial scanner`, `cyber security firewall node`, `quantum computer processor`.

### Langkah 2: Jalankan Skrip API Batch
Jalankan skrip pembuatan Anda untuk menghasilkan 20 gambar stok beresolusi tinggi ke dalam direktori `output_raw/`.

### Langkah 3: Batch Kelas Atas & Periksa
Lewatkan semua gambar melalui peningkatan AI untuk mencapai resolusi 4000px+. Saring setiap render yang memiliki gangguan visual atau distorsi tangan.

### Langkah 4: Buat Otomatis Metadata CSV & Unggah melalui FTP
Hasilkan judul pemetaan file `metadata.csv` dan 30 kata kunci untuk setiap file. Unggah batch melalui FTP langsung ke Portal Kontributor Adobe Stock.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/future-technology-stock.jpg" alt="Foto Saham Komersial Teknologi Masa Depan" width="480">
</p>
<p align="center"><sub>Commercial High-Tech Stock Photograph (Batch Catalog Asset)</sub></p>

**Hasil Kampanye Batch untuk "Keamanan Cyber ​​& Koleksi Teknologi"**

* **Aset yang Dihasilkan:** 100 gambar stok komersial berteknologi tinggi.
* **Waktu Pemrosesan Batch:** 45 menit eksekusi otomatis.
* **Katalog yang Diunggah:** 88 gambar yang disetujui (tingkat penerimaan 88% di Adobe Stock).
* **Kinerja Bulanan:** 215 unduhan menghasilkan **$236,50/bulan** dalam bentuk royalti berulang.

---

## Bandingkan Alat

| Platform / Alat | Otomatisasi Batch | Kualitas Keluaran | Terbaik Untuk |
|---|---|---|---|
| **muapi `/nano-banana-2` + Python** | Ultra-Tinggi (50 gambar per skrip API dijalankan) | Tinggi (Pembingkaian komersial yang dikontrol dengan cepat) | Pembuatan katalog massal untuk bidang bisnis, teknologi, dan perawatan kesehatan |
| **Adobe Firefly (Kredit Batch)** | Sedang (mode batch UI Web, hingga 10 sekaligus) | Sangat Tinggi (Kompatibilitas Asli Adobe Stock) | Pengajuan langsung ke portal kontributor Adobe Stock |
| **FLUX Lokal (Antrian UI Nyaman)** | Tinggi (Render offline tidak terbatas) | Tinggi | Pembuat konten bervolume tinggi dengan GPU lokal yang menginginkan nol biaya kredit API |

---

## Luncurkan

* **Pertahankan Tingkat Penerimaan Tinggi:** Pertahankan tingkat persetujuan Anda di atas 80% pada Adobe Stock dengan memeriksa secara menyeluruh pemotongan zoom 100% untuk mencari artefak kebisingan sebelum mengunggah.

---

## Latihan

1. **Mudah:** Membuat judul dan kata kunci pemetaan template metadata CSV untuk 5 stok foto.
2. **Sedang:** Batch menghasilkan 10 foto stok komersial yang menargetkan ceruk energi terbarukan.
3. **Sulit:** Menyiapkan unggahan otomatis FTP untuk pengiriman batch 25 aset stok ke portal kontributor.

---

## Templat

* [`templates/stock-metadata-template.md`](templates/stock-metadata-template.md) — Kumpulan skema CSV, pustaka penandaan kata kunci, dan panduan pengunggahan FTP.

---

[← What Actually Sells](01-what-actually-sells-on-stock-marketplaces.md) · Berikutnya: [Licensing Models & Passive-Income Expectations →](03-licensing-models-and-passive-income.md)
