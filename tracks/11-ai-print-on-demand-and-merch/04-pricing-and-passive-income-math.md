# Pricing & Passive-Income Math for POD

> Kuasai unit economics, biaya listing marketplace, serta perhitungannya untuk membangun katalog POD yang menguntungkan.

**Lagu:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~35 menit
**Prasyarat:** Merancang AI Art yang Menjual untuk Merch, Dasar-Dasar Platform Print-on-Demand, Building a Catalog Without Repeating Yourself

## Masalahnya

Banyak seller POD yang berhasil menghasilkan transaksi penjualan, namun justru mengalami **kerugian** pada akhir bulan. Mereka menetapkan harga t-shirt sebesar $19.99 tanpa memperhitungkan biaya tersembunyi dari platform:

- Biaya listing Etsy ($0.20 per listing).
- Biaya pemrosesan pembayaran Etsy (6.5% biaya transaksi + 3% + $0.25 biaya pembayaran).
- Biaya dasar pakaian dari print supplier ($9.50) + pengiriman ($4.75).
- Biaya iklan atau ad spend ($2 - $5 per transaksi).

Setelah memotong seluruh biaya tersebut, penjualan t-shirt seharga $19.99 justru menghasilkan net profit margin yang negatif. Anda memerlukan model kalkulasi harga yang presisi guna memastikan setiap transaksi mampu memberikan **net profit bersih sebesar $7 hingga $12**.

> **Catatan mengenai biaya Etsy:** Etsy mengenakan biaya listing sebesar $0.20, biaya transaksi sebesar 6.5% dari harga jual, serta biaya pemrosesan pembayaran sekitar 3% + $0.25. Secara akumulatif, total biaya tersebut mencapai kisaran **9.5–10% dari harga retail Anda** — yang menjadi acuan pada model kalkulasi di bawah ini.

## Konsep

Rumus POD Profit menentukan net profit bersih dari setiap unit yang terjual:

$$\text{Net Profit} = \text{Retail Price} - (\text{Print Supplier Cost} + \text{Shipping}) - \text{Marketplace Fees} - \text{Ad Spend}$$

### Rincian Unit Economics (Contoh T-Shirt):

```
Retail Sale Price:           $24.99
-----------------------------------
Printify Base Garment Cost:  -$9.25
Shipping Cost:               -$4.75
Etsy Fees (~10% total):      -$2.50
-----------------------------------
NET PROFIT PER SALE:          $8.49 (34% Net Margin)
```

## Lakukan itu

### Langkah 1: Tetapkan Tolak Ukur Base Supplier Costs

Buka panduan kerja [`templates/pod-pricing-calculator.md`](templates/pod-pricing-calculator.md). Masukkan biaya produksi dasar serta biaya pengiriman untuk produk utama Anda:

- **T-Shirt (Bella+Canvas 3001):** $9.25 cetak + $4.75 pengiriman = **$14.00 Base**.
- **Ceramic Mug (11oz White):** $4.50 cetak + $5.00 pengiriman = **$9.50 Base**.
- **Heavyweight Hoodie (Gildan 18000):** $18.50 cetak + $7.50 pengiriman = **$26.00 Base**.

### Langkah 2: Tetapkan Target Retail Prices untuk Target Net Margins 35%+

- Tetapkan Retail Price T-Shirt pada angka **$24.99** (Net Profit: **$8.49**).
- Tetapkan Retail Price Ceramic Mug pada angka **$17.99** (Net Profit: **$6.69**).
- Tetapkan Retail Price Heavyweight Hoodie pada angka **$44.99** (Net Profit: **$14.49**).

### Langkah 3: Jalankan Proyeksi Revenue Katalog

Kalkulasikan potensi passive monthly income berdasarkan skala katalog serta rata-rata conversion rate toko (1.5% - 2.5%):

- **Skala Katalog:** 100 Active Listings.
- **Monthly Store Views:** 10,000 pengunjung.
- **Transaksi (2.0% Conversion Rate):** 200 penjualan/bulan.
- **Monthly Net Profit (200 penjualan × rata-rata profit $8.50):** **$1,700 / bulan passive income**.

## Contoh yang berhasil

**Performa Keuangan 30 Hari dari "Urban Vector Merch Studio"**

- **Katalog Aktif:** 120 POD listings di seluruh platform Etsy & Shopify.
- **Total Unit Terjual:** 340 t-shirts, mugs, dan hoodies.
- **Gross Revenue:** **$8,650.00**.
- **Biaya Produksi & Pengiriman Supplier (Printify):** -$4,620.00.
- **Biaya Marketplace & Pemrosesan Pembayaran:** -$865.00.
- **Etsy Ads Spend:** -$650.00.
- **Net Monthly Profit:** **$2,515.00** (29.1% Net Profit Margin).

## Bandingkan Alat

| Alat Keuangan | Peruntukan | Metrik Utama yang Dipantau |
| --- | --- | --- |
| **Etsy / Shopify Analytics** | Pelacakan konversi & sumber trafik | Conversion Rate & AOV |
| **Printify Profit Calculator** | Estimasi instan COGS dan pengiriman | Gross Margin % |
| **Google Sheets / Excel Matrix** | Pemodelan net profit setelah potongan biaya & iklan | Monthly Net Income |

## Luncurkan

- **Sajikan Penawaran Free Shipping melalui Metode Bundling:** Integrasikan biaya pengiriman ke dalam harga retail (seumpama menetapkan harga t-shirt sebesar $28.99 disertai keterangan "FREE SHIPPING") guna meningkatkan visibilitas pada peringkat pencarian Etsy serta mengoptimalkan conversion rate pembeli.

## Latihan

1. **Mudah:** Kalkulasikan net profit untuk sebuah ceramic mug yang dibanderol seharga $18.99 dengan biaya dasar $4.50 serta biaya pengiriman sebesar $5.00.
2. **Sedang:** Manfaatkan lembar kalkulasi harga Anda untuk memodelkan katalog berisikan 50 produk yang menghasilkan 50 transaksi penjualan per bulan.
3. **Hard:** Susun matriks harga dinamis yang mengalokasikan 10% Etsy ad spend dengan tetap mempertahankan batas minimal profit sebesar $8.00 per transaksi.

## Templat

- [`templates/pod-pricing-calculator.md`](templates/pod-pricing-calculator.md) — Lembar kerja profit dinamis, formulasi biaya platform, serta tolak ukur COGS.

---

[← Sebelum: Membangun Katalog Produk](03-building-a-catalog-without-repeating.md) · [Track overview](README.md)
