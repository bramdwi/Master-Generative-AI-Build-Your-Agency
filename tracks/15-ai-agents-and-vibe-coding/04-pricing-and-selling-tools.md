# Alat Penetapan Harga & Penjualan yang Anda Buat Dengan Agen

> Ubah alat mikro menjadi aliran pendapatan pasif berulang menggunakan Gumroad, LemonSqueezy, dan jaringan afiliasi pembuat konten.

**Lacak:** Agen AI & Vibe-Coding untuk Kreator
**Waktu:** ~40 menit
**Prasyarat:** [02: Building Your First Sellable Micro-Tool](02-building-your-first-sellable-micro-tool.md), [03: The Vibe-Coding Workflow](03-vibe-coding-workflow.md)

## Masalahnya

Kebanyakan pembuat konten yang membuat alat mikro yang berfungsi dengan biaya rendah atau tidak mengenakan biaya sama sekali. Mereka memposting alat ini secara gratis di GitHub, mendapatkan 200 bintang, dan menghasilkan $0.

Yang lain memberi harga berdasarkan firasat — $5 karena *"ini hanya skrip"* — tanpa memahami bahwa pembeli membayar untuk **menghemat waktu**, bukan kompleksitas kode. Sebuah skrip yang menghemat 10 jam per minggu bernilai jauh lebih dari $5 terlepas dari betapa sederhananya tampilannya.

Sementara itu, kelompok minoritas yang menentukan harga dengan benar dan mendaftar di platform yang tepat menemukan bahwa satu alat dengan cakupan yang baik dapat menghasilkan **$500 hingga $3.000 dalam 30 hari pertama** dari beberapa ribu audiens kreator.

---

## Konsep

**Tumpukan Monetisasi Alat Pembuat Konten** dijual melalui tiga saluran secara bersamaan:

```
Micro-Tool ──► Direct Gumroad/LemonSqueezy Page ──► Creator Community Launch ──► Affiliate Partner Network ──► Passive Recurring Revenue
```

### Rumus Harga Alat:

$$\text{Harga Alat} = \text{Jam yang Dihemat Per Bulan} \times \text{Tarif Per Jam Pembeli} \times 0,10$$

> **Bahasa Inggris Biasa:** Harga alat Anda kira-kira **10% dari nilai bulanan yang dihemat pembeli**. Jika alat Anda menghemat 8 jam/bulan penelitian kata kunci bagi penjual Etsy, dan waktu mereka bernilai $25/jam, alat tersebut menghemat $200/bulan — jadi kenakan biaya **$20 satu kali** (atau $9/bulan jika memerlukan biaya API berkelanjutan).

### Pilihan Model Penetapan Harga:

1. **Lisensi Satu Kali Seumur Hidup (Paling Populer untuk Skrip):** Pembayaran tunggal, pembeli memiliki alat tersebut selamanya. Terbaik untuk skrip Python tanpa biaya server berkelanjutan. Mengonversi 3–5x tingkat langganan untuk pemirsa di bawah 10.000 pengikut.
2. **Langganan Bulanan (Terbaik untuk Alat dengan Biaya API):** Jika alat Anda memanggil GPT-4 atau muapi setiap kali dijalankan, teruskan biaya API Anda kepada pembeli melalui langganan $9–$29/bulan. Gunakan LemonSqueezy untuk penagihan berlangganan.
3. **Bayar Sesuai Keinginan Anda dengan Minimum:** Tetapkan batas bawah $9 dengan harga yang disarankan $25. Gumroad mendukung hal ini dan sering kali menghasilkan pendapatan rata-rata lebih tinggi daripada harga tetap.

---

## Lakukan itu

### Langkah 1: Tulis Halaman Produk Gumroad Anda
Buka [`templates/micro-tool-product-page.md`](templates/micro-tool-product-page.md). Isi salinan halaman produk mengikuti struktur ini:
* **Judul:** Pimpin dengan hasil, bukan nama alat. Contoh: *"Hasilkan 30 Kata Kunci IPTC untuk Setiap Stok Foto dalam 4 Menit"* — bukan *"Skrip CSV Metadata Stok v1.2"*.
* **The Pain:** Satu kalimat yang menggambarkan rasa frustrasi yang dipecahkannya. *"Menandai 100 gambar stok secara manual membutuhkan waktu lebih dari 25 jam. Alat ini melakukannya dalam 4 menit."*
* **Apa yang Termasuk:** Cantumkan setiap file dalam zip (skrip, README, input sampel, persyaratan.txt).
* **Untuk Siapa:** Sebutkan jenis pembeli yang tepat (misalnya, *"Kontributor Adobe Stock dan Freepik yang mengunggah 50+ gambar per batch"*).
* **Harga Jangkar:** Tunjukkan biaya waktu dari alternatif manual: *"25 jam pemberian tag manual @ $15/jam = $375 dalam waktu Anda. Alat ini: $39 satu kali."*

### Langkah 2: Siapkan Gumroad atau LemonSqueezy
* **Gumroad** (gumroad.com): Terbaik untuk pembelian satu kali. Biaya 10% untuk paket gratis, 0% untuk paket berbayar $10/bulan. Menangani PPN global secara otomatis.
* **LemonSqueezy** (lemonsqueezy.com): Terbaik untuk berlangganan atau jika Anda ingin penyematan pembayaran di situs Anda sendiri. 5% + $0,50 per transaksi.

Unggah zip Anda, tetapkan harga, publikasikan. Halaman produk aktif dalam waktu kurang dari 10 menit.

### Langkah 3: Luncurkan ke Audiens Anda yang Ada
Posting di komunitas pembuat konten tempat pembeli target Anda tinggal:
* **Untuk alat POD / Etsy:** Posting di grup Facebook ("Penjual Printify", "Etsy Print on Demand Success"), Reddit r/Etsy, dan server Discord yang relevan.
* **Untuk alat gambar AI:** Posting di komunitas Midjourney Discord, r/StableDiffusion, dan buletin pembuat AI.
* **Format pengumuman:** Bagikan video Loom berdurasi 60 detik yang menunjukkan alat tersebut berjalan pada data nyata — sebelum → sesudah. Postingan teks saja menghasilkan konversi 5–10%; demo video mengkonversi pada 20–35%.

### Langkah 4: Siapkan Program Afiliasi
Sistem afiliasi bawaan Gumroad dan LemonSqueezy keduanya mendukung rujukan berbasis komisi. Tawarkan **komisi 30–40%** kepada pembuat konten lain yang mempromosikan alat Anda kepada pemirsa mereka.
* **Targetkan afiliasi:** Pembuat konten di niche yang sama dengan 1.000–10.000 pengikut yang belum menjual alat mereka sendiri.
* **Penawaran afiliasi:** *"Anda menyebutkan alat saya satu kali dalam buletin atau video; Anda mendapat $12 setiap kali pelanggan membeli. Tidak ada pekerjaan berkelanjutan."*

---

## Contoh yang berhasil

**Hasil Peluncuran 30 Hari untuk "Etsy SEO Title Generator"**

* **Harga Produk:** $29 satu kali (lisensi seumur hidup).
* **Luncurkan Saluran 1:** Posting di 3 grup Facebook Etsy POD (gabungan 8.500 anggota). Hasil: 23 penjualan dalam 48 jam = **$667**.
* **Luncurkan Saluran 2:** Sebutkan dalam buletin Etsy ukuran menengah (4.200 pelanggan, afiliasi @ 30%). Hasil: 41 penjualan rujukan × $29 × 70% = **$833 bersih**.
* **Organik yang sedang berlangsung (minggu 3–4):** Penelusuran Google untuk "Alat SEO Etsy" dan penemuan Gumroad. Hasil: 18 penjualan lebih banyak = **$522**.
* **Total Pendapatan 30 Hari:** **$2.022**.
* **Total Waktu Pembuatan + Pemasaran:** 6,5 jam.
* **Tarif Per Jam Efektif:** **$311/jam**.

---

## Bandingkan Alat

| Peron | Terbaik Untuk | Struktur Biaya | Dukungan Afiliasi |
|---|---|---|---|
| **Jalan Karet** | Penjualan skrip satu kali, pemirsa pembuat | 10% (gratis) / 0% ($10/bln) | ✅ Bawaan (%) khusus |
| **Perasan Lemon** | Langganan, alat bergaya SaaS | 5% + $0,50 per transaksi | ✅ Bawaan |
| **Aduh** | Akses alat dengan gerbang perselisihan, alat komunitas | 3% per transaksi | ✅ Bawaan |
| **GitHub (gratis)** | Magnet timbal alat sumber terbuka | $0 | ❌ Tidak ada |

---

## Luncurkan

**Menskalakan portofolio alat menjadi $3.000+/bulan:**
* **Membangun 1 Alat Mikro Baru Per Bulan:** Dengan alur kerja pengkodean getaran dari Pelajaran 3, alat baru memerlukan 1–2 sesi terfokus. Setelah 6 bulan, portofolio 6 alat menghasilkan rata-rata $300–$500/bulan yang masing-masing digabungkan menjadi **$1.800–$3.000/bulan pendapatan pasif murni**.
* **Perbarui Alat yang Ada:** Merilis pembaruan v2.0 setiap 90 hari (1 fitur baru ditambahkan oleh agen dalam waktu kurang dari satu jam) untuk menjaga daftar Gumroad tetap segar dan mendorong pembeli yang ada untuk membagikannya lagi.

---

## Latihan

1. **Mudah:** Isi templat halaman produk Gumroad untuk alat yang Anda buat atau rencanakan untuk dibuat. Fokus pada judul — tulis 5 variasi dan pilih variasi yang paling berfokus pada hasil.
2. **Sedang:** Hitung harga yang tepat untuk alat yang menghemat 6 jam bagi fotografer stok per sesi unggahan batch, dengan asumsi waktu mereka bernilai $20/jam.
3. **Sulit:** Luncurkan alat (bahkan alat sederhana yang sudah ada dalam latihan dari Pelajaran 2–3) di Gumroad dengan harga sebenarnya, poskan alat tersebut di satu komunitas pembuat konten, dan laporkan hasil minggu pertama Anda.

---

## Templat

* [`templates/micro-tool-product-page.md`](templates/micro-tool-product-page.md) — Templat salinan halaman produk Gumroad/LemonSqueezy, kerangka harga, dan panduan pengaturan afiliasi.

---

[← The Vibe-Coding Workflow](03-vibe-coding-workflow.md) · [Track Overview](README.md)
