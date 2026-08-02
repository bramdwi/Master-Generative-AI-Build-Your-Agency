# Building a Catalog Without Repeating Yourself

> Mengakselerasi skala katalog dari 1 menjadi 100+ listing merch yang unik mengandalkan variasi matrix prompt serta segmentasi niche yang terarah.

**Track:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~40 menit
**Prasyarat:** Merancang AI Art yang Menjual untuk Merch, Dasar-Dasar Platform Print-on-Demand

## Masalahnya

Guna menghasilkan revenue yang substansial pada Etsy maupun marketplace POD, Anda membutuhkan katalog yang beragam berisikan **50 hingga 200+ listing**. Kendati demikian, creator kerap kali terjerumus ke dalam dua kekeliruan fatal:

1. **Spamming Identical Designs:** Mengunggah gambar yang identik secara berulang sekadar dengan sedikit penyesuaian warna, yang berisiko terkena penalti listing spam oleh algoritma marketplace.
2. **Burnout dari One-Off Prompting:** Menghabiskan waktu berjam-jam demi merangkai custom prompt hanya untuk satu kaos, sehingga ekspansi katalog menjadi mustahil untuk dipertahankan secara konsisten.

Anda membutuhkan **Prompt Matrix Expansion System** yang terstruktur untuk menghasilkan desain yang memikat serta terspesialisasi sesuai niche tanpa terjebak dalam pengulangan kreatif.

## Konsep

**Niche Prompt Matrix** mengekspansi 1 tema desain utama ke berbagai sub-niche yang spesifik:

```
Core Theme (Retro Vintage Animals) ──► Niche Matrix (Cat / Dog / Owl / Bear) ──► Style Variations (80s Synthwave / Japanese Ink / Minimal Line) ──► 12 Distinct Listings
```

### Kerangka Kerja Ekspansi 3x3:

| Subject (Axis A) | Aesthetic Style (Axis B) | Target Customer Niche (Axis C) |
| --- | --- | --- |
| Cyberpunk Cat | Japanese Sumi-e Ink | Tech Developers & Programmers |
| Vintage Botanical Sunflower | Cottagecore Watercolor | Gardening & Plant Enthusiasts |
| Retro Synthwave Mountain | 80s Neon Vector | Hikers & Outdoor Campers |

## Lakukan itu

### Langkah 1: Pilih Passion Niche Matrix

Tentukan target niche pembeli yang memiliki antusiasme tinggi (misalnya, *Outdoor Camping & Coffee*).

### Langkah 2: Susun Variable Prompt Template

Buka panduan kerja [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md). Buatlah prompt template dengan variabel yang dapat disesuaikan:

- `"Clean vector graphic of [SUBJECT] drinking coffee by a campfire, [STYLE] style, bold outlines, isolated on solid background, 300 DPI"`
- Gantikan `[SUBJECT]` dengan: `Bear`, `Fox`, `Raccoon`, `Owl`.
- Gantikan `[STYLE]` dengan: `Retro 70s Badge`, `Minimalist Linework`, `Synthwave Neon`.

### Langkah 3: Generate Batch 12 Grafis Unik

Jalankan kombinasi prompt tersebut melalui muapi `/nano-banana-2`. Isolasi background serta tingkatkan skala seluruh 12 grafis secara batch.

### Langkah 4: Publikasikan Silang di Berbagai Tipe Produk

Terapkan setiap grafis pada 3 tipe produk bernilai margin tinggi (T-Shirt, Coffee Mug, Canvas Tote Bag) untuk mentransformasi 12 grafis menjadi **36 listing toko yang unik**.

## Contoh yang berhasil

**Studi Kasus Penyesuaian Skala Katalog: "The Retro Outdoor Collection"**

- **Core Concept:** Ilustrasi Retro National Park Badge.
- **Subjects Generated:** 5 Hewan (Bear, Wolf, Bison, Eagle, Moose).
- **Styles Applied:** 70s Vintage Sunburst & Linework.
- **Total Products Published:** 5 Hewan × 3 Produk (Shirt, Mug, Hoodie) = **45 Listing Aktif**.
- **Waktu Eksekusi:** Total 2,5 jam konfigurasi.

## Luncurkan

- **Hindari Pelanggaran Copyright & Trademark:** Jangan pernah menggunakan nama yang memiliki trademark (seperti Disney, Marvel, Nike) maupun tokoh publik dalam prompt atau tag toko Anda. Lakukan penelusuran pada basis data USPTO TESS sebelum memublikasikan produk.

## Latihan

1. **Mudah:** Buatlah 3x3 prompt matrix untuk niche pilihan Anda (misalnya, Coffee, Gaming, Cats).
2. **Sedang:** Hasilkan batch 6 grafis unik dari matrix Anda lalu isolasi background-nya.
3. **Sulit:** Publikasikan koleksi 15 item produk pada 3 tipe produk (Tee, Mug, Tote) di dev store Anda.

## Template

- [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md) — Matrix prompt templates, tabel variabel niche, serta daftar periksa kepatuhan trademark.

---

[← Sebelum: Dasar-Dasar Platform POD](02-print-on-demand-platform-basics.md) · [Track overview](README.md) · Berikutnya: [Kalkulasi Harga & Pendapatan Pasif POD →](04-pricing-and-passive-income-math.md)
