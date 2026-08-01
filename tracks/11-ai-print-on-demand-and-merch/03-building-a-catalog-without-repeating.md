# Membangun Katalog Tanpa Mengulanginya Sendiri

> Skalakan mulai dari 1 hingga 100+ listingan merchandise unik menggunakan variasi matriks cepat dan sub-segmentasi khusus.

**Lacak:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~40 menit
**Prasyarat:** [01: Designing Sellable AI Art](01-designing-sellable-ai-art-for-merch.md), [02: POD Platform Basics](02-print-on-demand-platform-basics.md)

## Masalahnya

Untuk menghasilkan pendapatan yang berarti di pasar Etsy atau POD, Anda memerlukan beragam katalog yang terdiri dari **50 hingga 200+ listingan**. Namun, pencipta sering melakukan dua kesalahan fatal:
1. **Desain Identik yang Mengirimkan Spam:** Mengunggah gambar yang sama persis dengan sedikit perubahan warna, ditandai karena mencantumkan spam oleh algoritme pasar.
2. **Kelelahan karena Permintaan Sekali Pakai:** Menghabiskan waktu berjam-jam untuk membuat permintaan khusus untuk satu kaos, sehingga perluasan katalog tidak mungkin dipertahankan.

Anda memerlukan **Sistem Ekspansi Matriks Cepat** yang terstruktur untuk menghasilkan desain yang berbeda dan bertarget khusus secara efisien tanpa pengulangan kreatif.

---

## Konsep

**Niche Prompt Matrix** memperluas 1 tema desain inti di beberapa sub-niche:

```
Core Theme (Retro Vintage Animals) ──► Niche Matrix (Cat / Dog / Owl / Bear) ──► Style Variations (80s Synthwave / Japanese Ink / Minimal Line) ──► 12 Distinct Listings
```

### Kerangka Ekspansi 3x3:

| Subjek (Sumbu A) | Gaya Estetika (Sumbu B) | Niche Pelanggan Sasaran (Sumbu C) |
|---|---|---|
| Kucing Cyberpunk | Tinta Sumi-e Jepang | Pengembang & Pemrogram Teknologi |
| Bunga Matahari Botani Vintage | Cat Air Cottagecore | Penggemar Berkebun & Tanaman |
| Gunung Synthwave Retro | Vektor Neon 80an | Pendaki & Berkemah di Luar Ruangan |

---

## Lakukan itu

### Langkah 1: Pilih Matriks Niche Gairah
Identifikasi ceruk pembeli yang menarik (misalnya, *Berkemah & Kopi di Luar Ruangan*).

### Langkah 2: Buat Templat Prompt Variabel
Buka [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md). Buat template prompt dengan variabel yang dapat diganti:
* __KODE INLINE_0__
* Gantikan `[SUBJECT]` dengan: `Bear`, `Fox`, `Raccoon`, `Owl`.
* Gantikan `[STYLE]` dengan: `Retro 70s Badge`, `Minimalist Linework`, `Synthwave Neon`.

### Langkah 3: Batch Hasilkan 12 Grafik Berbeda
Jalankan kombinasi prompt melalui muapi `/nano-banana-2`. Pisahkan latar belakang dan tingkatkan 12 grafik secara bersamaan.

### Langkah 4: Publikasikan Silang di Seluruh Jenis Produk
Terapkan setiap gambar ke 3 jenis produk dengan margin tinggi (T-Shirt, Mug Kopi, Tas Tote Kanvas) untuk mengubah 12 gambar menjadi **36 listingan toko unik**.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/merch-design-vector-art.jpg" alt="Desain Seni Merchandise Vektor Terisolasi" width="480">
</p>
<p align="center"><sub>Isolated Vector Art Graphic (Ready for Multi-Product Catalog Placement)</sub></p>

**Studi Kasus Penskalaan Katalog: "Koleksi Retro Outdoor"**

* **Konsep Inti:** Ilustrasi Lencana Taman Nasional Retro.
* **Subjek yang Dihasilkan:** 5 Hewan (Beruang, Serigala, Bison, Elang, Rusa Besar).
* **Gaya yang Diterapkan:** Sunburst & Linework Vintage 70-an.
* **Total Produk yang Diterbitkan:** 5 Hewan × 3 Produk (Kemeja, Mug, Hoodie) = **45 Listingan Aktif**.
* **Waktu yang Dibutuhkan:** Total penyiapan 2,5 jam.

---

## Luncurkan

* **Hindari Pelanggaran Hak Cipta & Merek Dagang:** Jangan pernah menggunakan nama merek dagang (misalnya, Disney, Marvel, Nike) atau kemiripan selebriti dalam petunjuk atau tag toko Anda. Cari database USPTO TESS sebelum dipublikasikan.

---

## Latihan

1. **Mudah:** Buat matriks prompt 3x3 untuk niche pilihan Anda (misalnya, Kopi, Game, Kucing).
2. **Medium:** Batch menghasilkan 6 grafik berbeda dari matriks Anda dan mengisolasi latar belakangnya.
3. **Sulit:** Publikasikan 15 item koleksi produk di 3 jenis produk (Tee, Mug, Tote) di toko pengembang Anda.

---

## Templat

* [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md) — Templat perintah matriks, tabel variabel khusus, dan daftar periksa kepatuhan merek dagang.

---

[← POD Platform Basics](02-print-on-demand-platform-basics.md) · Berikutnya: [Pricing & Passive-Income Math for POD →](04-pricing-and-passive-income-math.md)
