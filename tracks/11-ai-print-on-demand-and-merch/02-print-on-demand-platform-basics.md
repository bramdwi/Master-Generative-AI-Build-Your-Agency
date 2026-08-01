# Dasar-dasar Platform Cetak Sesuai Permintaan

> Otomatiskan produksi, pemenuhan, dan sinkronisasi penyimpanan di seluruh pemasok Etsy, Shopify, dan POD.

**Lacak:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~35 menit
**Prasyarat:** [01: Designing Sellable AI Art](01-designing-sellable-ai-art-for-merch.md)

## Masalahnya

Menciptakan karya seni AI yang hebat hanyalah setengah dari perjuangan. Menyiapkan manufaktur fisik, mengelola inventaris, dan menangani logistik pengiriman secara manual dapat menenggelamkan bisnis merchandise sebelum dimulai.

Model inventaris tradisional memerlukan pembelian 100+ kemeja di muka dalam berbagai ukuran (S, M, L, XL), menyimpan kotak di rumah Anda, dan mempertaruhkan stok yang tidak terjual jika desain tidak terjual.

Print-on-Demand (POD) menghilangkan risiko inventaris dengan mencetak dan mengirimkan pesanan secara otomatis saat pelanggan membeli—tetapi menyiapkan jembatan integrasi antara platform (Etsy/Shopify) dan pemasok (Printify/Printful) memerlukan konfigurasi yang tepat.

---

## Konsep

Alur kerja e-niaga POD otomatis menghubungkan etalase langsung ke penyedia pemenuhan:

```
Customer Places Order (Etsy/Shopify) ──► Auto-Sync to Print Supplier (Printify) ──► DTG Printing & Shipping ──► Tracking Auto-Sent to Customer
```

### Komponen Inti:

1. **Etalase Front-End:** Etsy (lalu lintas pencarian bawaan), Shopify (kontrol merek khusus), atau Redbubble (katalog pasar).
2. **Pemasok Cetak Back-End:** Printify, Printful, atau Gelato. Mereka menangani **DTG (Direct-to-Garment — sebuah proses pencetakan inkjet desain Anda langsung ke kain, satu item dalam satu waktu, tanpa pesanan minimum)** pencetakan, kontrol kualitas, pengemasan, dan pengiriman.
3. **Pembuatan Mockup:** Membuat foto produk gaya hidup fotorealistik sehingga pelanggan melihat kemeja/mug dalam suasana dunia nyata.

---

## Lakukan itu

### Langkah 1: Hubungkan Pemasok POD Anda ke Toko Anda
Buat akun Printify/Printful dan tautkan ke toko Etsy atau Shopify Anda menggunakan API OAuth.

### Langkah 2: Unggah Grafik Transparan 300 DPI Anda
Pilih pakaian (misalnya, Kaos Unisex Bella+Canvas 3001). Unggah `merch-graphic-transparent.png` Anda. Pusatkan grafik pada area yang dapat dicetak.

### Langkah 3: Publikasikan Maket Gaya Hidup
Hasilkan foto produk gaya hidup menggunakan saluran fotografi AI Anda dari [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md) atau alat maket Printify.

### Langkah 4: Konfigurasikan Perutean Pesanan Otomatis
Aktifkan **Pemenuhan Otomatis** di pengaturan pemasok Anda sehingga pesanan toko yang masuk diproses tanpa intervensi manual.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/vintage-botanical-mug-mockup.jpg" alt="Mockup Mug Keramik Botani Vintage" width="480">
</p>
<p align="center"><sub>AI Vintage Botanical Coffee Mug Mockup (Product Showcase)</sub></p>

**Pengaturan Daftar Produk untuk "Mug Keramik Bunga Liar Botani"**

* **Pemasok Percetakan:** Monster Digital melalui Printify.
* **Produk:** Mug Keramik Putih 11oz.
* **Harga Eceran:** **$16,99**.
* **Biaya Produksi Dasar:** **$4,50** + **$5,00** pengiriman.
* **Laba per Penjualan:** **$7,49** (Margin 44%).
* **Pemenuhan:** 100% otomatis setelah pesanan diterima.

---

## Bandingkan Alat

| Platform / Pemasok | Kekuatan Terbaik | Kecepatan Pemenuhan | Terbaik Untuk |
|---|---|---|---|
| **Cetak** | Jaringan vendor, harga dasar terendah | 2 - 5 hari kerja | Toko Etsy & Shopify dengan margin tinggi |
| **Cetak** | Kualitas cetak internal, sisipan merek khusus | 2 - 4 hari kerja | Merek pakaian premium |
| **Gelembung Merah** | Lalu lintas penelusuran organik bawaan | 3 - 7 hari kerja | Penerbitan katalog pasif tanpa pengaturan |

---

## Luncurkan

* **Aktifkan Pencadangan Pesanan Otomatis:** Atur perutean pemasok cadangan di Printify sehingga jika salah satu toko percetakan kehabisan stok kaos L hitam, pesanan Anda secara otomatis diarahkan ke pemasok sekunder.

---

## Latihan

1. **Mudah:** Buat akun Printify gratis dan unggah grafik AI terisolasi ke mockup kaos.
2. **Medium:** Hubungkan pemasok POD Anda ke toko pengembang Etsy atau Shopify.
3. **Sulit:** Menyiapkan pemenuhan pesanan otomatis dan menguji pengiriman pesanan sampel.

---

## Templat

* [`templates/pod-pricing-calculator.md`](templates/pod-pricing-calculator.md) — Model penetapan harga COGS, kalkulator margin keuntungan, dan rincian biaya platform.

---

[← Designing Sellable AI Art](01-designing-sellable-ai-art-for-merch.md) · Berikutnya: [Building a Catalog Without Repeating Yourself →](03-building-a-catalog-without-repeating.md)
