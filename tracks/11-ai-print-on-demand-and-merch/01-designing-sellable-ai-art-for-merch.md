# Merancang AI Art yang Menjual untuk Merch

> Mentransformasi hasil AI art generation menjadi grafis vektor beresolusi tinggi yang tajam dan siap untuk pencetakan Direct-to-Garment (DTG).

**Lagu:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Sebagian besar AI creator mencoba mengunggah mentahan AI image generation secara langsung ke platform Print-on-Demand (POD) seperti Printify, Printful, atau Redbubble. Hasilnya sangat mengecewakan:

- **Resolution Blur:** Mentahan AI generation (1024x1024px) mengalami pikselasi parah saat diregangkan pada area cetak dada kaos yang membutuhkan **4500x5400px pada 300 DPI**.
- **Solid Background Box:** Menghasilkan gambar dengan latar belakang kotak padat meninggalkan bentuk persegi yang mengganggu saat dicetak pada kaos hitam atau putih.
- **Color Bleed:** Warna-warna gelap atau pudar tampak luntur selama proses pencetakan tinta Direct-to-Garment (DTG).

Jika Anda tidak mengisolasi grafis, melakukan Vector-Upscale, dan memformatnya secara spesifik sesuai spesifikasi cetak pakaian, produk Anda akan terlihat murahan dan menerima ulasan negatif dari pelanggan.

## Konsep

Pipeline AI merch design bertumpu pada **Isolated Vector Prompting**, **Background Removal**, dan **DPI Upscaling**:

```
Isolated Prompting ──► Transparent PNG Isolation ──► Vector Upscale (4500x5400px 300DPI) ──► Apparel Mockup Placement
```

### Pilar Teknis Utama:

1. **Isolated Vector Style Prompting:** Menggunakan Prompt untuk grafis vektor yang bersih dengan garis luar yang kuat di atas latar belakang putih atau gelap polos (`"vector illustration, isolated on white background, clean lines, bold graphic, high contrast, 300 DPI"`).
2. **Background Masking & Transparency:** Mengekstrak subjek secara menyeluruh menggunakan AI background removers agar hanya karya seni yang tercetak pada kain.
3. **300 DPI Resolution Scaling:** Meningkatkan skala render beresolusi rendah menggunakan AI upscalers (seperti Real-ESRGAN atau muapi high-res upscaling) untuk memenuhi spesifikasi standar POD (**4500 × 5400 px**).

## Lakukan itu

### Langkah 1: Tulis Merch Vector Prompt

Buka panduan kerja [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md). Susun Prompt yang dioptimalkan untuk pakaian:

- **Prompt:**
> `"Clean vector t-shirt graphic of a cyberpunk samurai cat wearing futuristic glowing neon goggles, Japanese typography, bold outlines, vibrant synthwave colors, isolated on solid black background, high contrast, 8k graphic."`

- **Negative Prompt:**
> `"photograph, realistic skin, complex background, gradient box, blurry lines, low resolution, noise, drop shadow."`

### Langkah 2: Generate dan Isolasi Grafis

Jalankan Prompt menggunakan muapi `/nano-banana-2`. Teruskan hasil luaran ke AI background remover untuk menyimpan file transparan `merch-graphic-transparent.png`.

### Langkah 3: Upscale ke 4500x5400px @ 300 DPI

Jalankan AI upscaler dengan **4x Scale Factor**. Pastikan dimensi gambar akhir berukuran minimal 4500px lebar, serta mempertahankan tepi garis yang tajam dan presisi di seluruh garis rancangan.

### Langkah 4: Terapkan pada Apparel Mockups

Letakkan `merch-graphic-transparent.png` pada Mockup kaos Heavy Cotton di editor Anda. Sesuaikan posisi grafis agar berada 2 inci di bawah kerah leher.

## Contoh yang berhasil

**Eksekusi Merch Design untuk "Cyberpunk Cat Tee"**

- **Target Niche:** Cyberpunk & Cat Lovers.
- **Graphic Specs:** 4500x5400px transparan PNG, 300 DPI.
- **Apparel Mockup:** Heavyweight Unisex Crewneck T-Shirt (Hitam).
- **Biaya Generation:** **$0.06** kredit AI berbanding penawaran Freelance Illustrator sebesar **$250**.

## Bandingkan Alat

| Platform / Tool | Purpose | Upscale Quality | Best For |
| --- | --- | --- | --- |
| **FLUX / muapi Vector Mode** | Graphic generation | Tinggi | Membuat garis yang tajam & ilustrasi grafis |
| **Photoroom / Clipdrop** | Background removal | Transparan PNG | Mengisolasi karya seni dari latar belakang padat |
| **Real-ESRGAN / Vectorizer.ai** | Resolution upscaling | 4x / Vector SVG | Meningkatkan skala grafis ke 4500x5400px 300DPI |

## Luncurkan

**Praktik terbaik untuk merch design:**

- **Uji Pakaian Gelap vs. Terang:** Buat variasi garis putih untuk kaos hitam dan variasi garis gelap untuk kaos putih/heather grey.
- **Selalu Periksa Kontras:** Tinta Print-on-Demand akan sedikit terserap ke dalam kain; tingkatkan konsentrasi warna sebesar +15% sebelum mengekspor.

## Latihan

1. **Mudah:** Hasilkan grafis vektor retro sunset minimalis terisolasi dengan latar belakang putih.
2. **Sedang:** Hapus latar belakang dan tingkatkan skala grafis menjadi 4500x5400px pada 300 DPI.
3. **Sulit:** Buat koleksi 3 item Merch (T-shirt, Mug, Tote Bag) yang menampilkan variasi dari gaya desain yang menyatu.

## Templat

- [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md) — Prompt gaya vektor, spesifikasi DPI Scaling, dan pustaka Negative Prompt.

---

[Track Overview](README.md) · Berikutnya: [Dasar-Dasar Platform POD →](02-print-on-demand-platform-basics.md)
