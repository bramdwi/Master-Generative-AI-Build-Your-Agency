# Dasar-Dasar Platform Print-on-Demand

> Otomatiskan proses produksi, fulfillment, serta penyelarasan toko di seluruh platform Etsy, Shopify, dan pemasok POD.

**Track:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~35 menit
**Prasyarat:** Merancang AI Art yang Menjual untuk Merch

## Masalahnya

Menciptakan karya AI art yang memikat hanyalah separuh dari perjuangan. Mengatur manufaktur fisik, mengelola inventaris, hingga menangani logistik pengiriman secara manual dapat melumpuhkan bisnis merch sebelum sempat berkembang.

Model inventaris tradisional menuntut pembelian lebih dari 100 helai kaos di awal dalam berbagai ukuran (S, M, L, XL), menumpuk kardus di kediaman Anda, serta menanggung risiko penumpukan stok jika suatu desain kurang diminati.

Print-on-Demand (POD) mengeliminasi risiko inventaris dengan mencetak serta mengirimkan pesanan secara otomatis saat pembeli melakukan transaksi—namun, mengonfigurasi jembatan integrasi antara platform toko (Etsy/Shopify) dan pemasok (Printify/Printful) membutuhkan penataan yang tepat.

## Konsep

Alur kerja e-commerce POD yang terotomatisasi menghubungkan etalase toko secara langsung ke penyedia fulfillment:

```
Customer Places Order (Etsy/Shopify) ──► Auto-Sync to Print Supplier (Printify) ──► DTG Printing & Shipping ──► Tracking Auto-Sent to Customer
```

### Komponen Utama:

1. **Front-End Storefronts:** Etsy (lalu lintas pencarian bawaan), Shopify (kendali brand secara kustom), atau Redbubble (katalog marketplace).
2. **Back-End Print Suppliers:** Printify, Printful, atau Gelato. Mereka menangani percetakan **DTG (Direct-to-Garment — proses percetakan tinta secara langsung di atas permukaan kain per helai pakaian tanpa ambang pesanan minimum)**, quality control, pengemasan, hingga pengiriman.
3. **Mockup Generation:** Menghasilkan foto produk lifestyle yang photorealistic sehingga pembeli dapat mengamati wujud kaos atau mug dalam latar kehidupan nyata.

## Lakukan itu

### Langkah 1: Hubungkan POD Supplier Anda ke Toko Anda

Buat akun Printify/Printful lalu tautkan ke toko Etsy atau Shopify Anda menggunakan API OAuth.

### Langkah 2: Unggah 300 DPI Transparent Graphic Anda

Pilih produk pakaian (misalnya, Bella+Canvas 3001 Unisex Tee). Unggah berkas `merch-graphic-transparent.png` Anda. Posisikan grafis tepat di tengah area cetak.

### Langkah 3: Publikasikan Lifestyle Mockups

Hasilkan foto produk lifestyle memanfaatkan saluran AI photography Anda dari [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md) atau fitur mockup tools milik Printify.

### Langkah 4: Konfigurasikan Automated Order Routing

Aktifkan **Automatic Fulfillment** pada pengaturan supplier Anda agar setiap pesanan toko yang masuk diproses tanpa intervensi manual.

## Contoh yang berhasil

**Product Listing Setup untuk "Botanical Wildflower Ceramic Mug"**

- **Print Supplier:** Monster Digital via Printify.
- **Produk:** 11oz White Ceramic Mug.
- **Harga Eceran:** **$16.99**.
- **Biaya Produksi Dasar:** **$4.50** + **$5.00** pengiriman.
- **Keuntungan per Penjualan:** **$7.49** (Margin 44%).
- **Fulfillment:** 100% terotomatisasi saat pesanan diterima.

## Bandingkan Alat

| Platform / Supplier | Keunggulan Terbaik | Kecepatan Fulfillment | Best For |
| --- | --- | --- | --- |
| **Printify** | Jaringan vendor, harga dasar terendah | 2 - 5 hari kerja | Toko Etsy & Shopify ber-margin tinggi |
| **Printful** | Quality control cetak in-house, custom branding inserts | 2 - 4 hari kerja | Brand apparel premium |
| **Redbubble** | Lalu lintas pencarian organik bawaan | 3 - 7 hari kerja | Publikasi katalog pasif tanpa konfigurasi rumit |

## Luncurkan

- **Aktifkan Automatic Order Backup:** Konfigurasikan pengalihan backup supplier pada Printify sehingga apabila salah satu print shop kehabisan stok kaos hitam ukuran L, pesanan Anda secara otomatis dialihkan ke supplier sekunder.

## Latihan

1. **Mudah:** Buat akun Printify gratis lalu unggah AI graphic terisolasi ke dalam t-shirt mockup.
2. **Sedang:** Hubungkan POD supplier Anda ke toko pengembang Etsy atau Shopify.
3. **Sulit:** Konfigurasikan automated order fulfillment lalu uji coba pengiriman pesanan sampel.

## Template

- [`templates/pod-pricing-calculator.md`](templates/pod-pricing-calculator.md) — Model penentuan harga COGS, kalkulator profit margin, serta rincian biaya platform.

---

[← Sebelum: Merancang AI Art yang Menjual](01-designing-sellable-ai-art-for-merch.md) · [Track overview](README.md) · Berikutnya: [Membangun Katalog Produk Berkelanjutan →](03-building-a-catalog-without-repeating.md)
