# Penetapan Harga & Matematika Pendapatan Pasif untuk POD

> Ekonomi unit utama, biaya pencatatan pasar, dan perhitungan konversi untuk membuat katalog POD yang menguntungkan.

**Lacak:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~35 menit
**Prasyarat:** [01: Designing Sellable AI Art](01-designing-sellable-ai-art-for-merch.md), [02: POD Platform Basics](02-print-on-demand-platform-basics.md), [03: Building a Catalog](03-building-a-catalog-without-repeating.md)

## Masalahnya

Banyak penjual POD menghasilkan penjualan tetapi akhirnya **kehilangan uang** di akhir bulan. Mereka memberi harga kaos seharga $19,99 tanpa memperhitungkan biaya platform tersembunyi:
* Biaya daftar Etsy ($0,20 per daftar).
* Biaya pemrosesan pembayaran Etsy (biaya transaksi 6,5% + 3% + biaya pembayaran $0,25).
* Biaya garmen dasar pemasok cetak ($9,50) + ongkos kirim ($4,75).
* Pembelanjaan iklan atau biaya pemasaran ($2 - $5 per penjualan).

Setelah dikurangi semua biaya, kemeja seharga $19,99 menghasilkan margin keuntungan negatif. Anda memerlukan model penetapan harga matematis yang tepat untuk memastikan setiap penjualan menghasilkan **laba bersih $7 hingga $12** yang sehat.

> **Catatan tentang biaya Etsy:** Etsy membebankan biaya pendaftaran $0,20, biaya transaksi 6,5% dari harga jual, dan biaya pemrosesan pembayaran ~3% + $0,25. Jika digabungkan, totalnya kira-kira **9,5–10% dari harga eceran Anda** — yang merupakan model yang digunakan di bawah ini.

---

## Konsep

Rumus Laba POD menentukan laba bersih per unit yang terjual:

$$\text{Laba Bersih} = \text{Harga Eceran} - (\text{Biaya Pemasok Cetak} + \text{Pengiriman}) - \text{Biaya Pasar} - \text{Pembelanjaan Iklan}$$

### Rincian Unit Ekonomi (Contoh T-Shirt):

```
Retail Sale Price:           $24.99
-----------------------------------
Printify Base Garment Cost:  -$9.25
Shipping Cost:               -$4.75
Etsy Fees (~10% total):      -$2.50
-----------------------------------
NET PROFIT PER SALE:          $8.49 (34% Net Margin)
```

---

## Lakukan itu

### Langkah 1: Biaya Pemasok Dasar Tolok Ukur
Buka [`templates/pod-pricing-calculator.md`](templates/pod-pricing-calculator.md). Masukkan biaya produksi dan pengiriman dasar untuk produk inti Anda:
* **T-Shirt (Bella+Canvas 3001):** Cetakan $9,25 + ongkos kirim $4,75 = **Dasar $14,00**.
* **Mug Keramik (11oz Putih):** $4,50 cetakan + $5,00 ongkos kirim = **$9,50 Dasar**.
* **Hoodie Kelas Berat (Gildan 18000):** Cetakan $18,50 + ongkos kirim $7,50 = **Dasar $26,00**.

### Langkah 2: Tetapkan Target Harga Eceran untuk 35%+ Margin Bersih
* Tetapkan Harga Eceran T-Shirt menjadi **$24,99** (Laba Bersih: **$8,49**).
* Tetapkan Harga Eceran Mug Keramik menjadi **$17,99** (Laba Bersih: **$6,69**).
* Tetapkan Harga Eceran Hoodie Kelas Berat menjadi **$44,99** (Laba Bersih: **$14,49**).

### Langkah 3: Jalankan Proyeksi Pendapatan Katalog
Hitung pendapatan bulanan pasif berdasarkan ukuran katalog dan rata-rata tingkat konversi toko (1,5% - 2,5%):
* **Ukuran Katalog:** 100 Daftar Aktif.
* **Tampilan Toko Bulanan:** 10.000 pengunjung.
* **Pesanan (Tingkat Konversi 2,0%):** 200 penjualan/bulan.
* **Laba Bersih Bulanan (200 penjualan × laba rata-rata $8,50):** **Pendapatan pasif $1.700 / bulan**.

---

## Contoh yang berhasil

**Kinerja Finansial 30 Hari "Urban Vector Merch Studio"**

* **Katalog Aktif:** 120 listingan POD di Etsy & Shopify.
* **Total Unit Terjual:** 340 kaos, mug, dan hoodies.
* **Pendapatan Kotor:** **$8.650,00**.
* **Produksi & Pengiriman Pemasok (Printify):** -$4,620.00.
* **Biaya Pasar & Pembayaran:** -$865,00.
* **Pembelanjaan Iklan Etsy:** -$650,00.
* **Laba Bersih Bulanan:** **$2.515,00** (Margin Laba Bersih 29,1%).

---

## Bandingkan Alat

| Alat Keuangan | Tujuan | Metrik Kunci Dilacak |
|---|---|---|
| **Analisis Etsy / Shopify** | Pelacakan konversi & sumber lalu lintas | Tingkat Konversi & AOV |
| **Cetak Kalkulator Keuntungan** | COGS instan dan estimasi pengiriman | Margin Kotor% |
| **Google Spreadsheet/Matriks Excel** | Pemodelan laba bersih setelah biaya & iklan | Pendapatan Bersih Bulanan |

---

## Luncurkan

* **Tawarkan Pengiriman Gratis dengan Bundling:** Sertakan pengiriman dalam harga eceran (misalnya, harga baju seharga $28,99 dengan "PENGIRIMAN GRATIS") untuk meningkatkan peringkat pencarian Etsy dan tingkat konversi pembeli.

---

## Latihan

1. **Mudah:** Hitung laba bersih untuk mug keramik dengan harga $18,99 dengan biaya dasar $4,50 dan biaya pengiriman $5,00.
2. **Sedang:** Gunakan lembar harga Anda untuk membuat model katalog 50 produk yang menghasilkan 50 penjualan per bulan.
3. **Sulit:** Siapkan matriks harga dinamis yang memperhitungkan 10% pembelanjaan iklan Etsy sambil mempertahankan laba minimum $8,00 per penjualan.

---

## Templat

* [`templates/pod-pricing-calculator.md`](templates/pod-pricing-calculator.md) — Spreadsheet laba dinamis, rumus biaya platform, dan tolok ukur COGS.

---

[← Building a Catalog](03-building-a-catalog-without-repeating.md) · [Track Overview](README.md)
