# Merancang Seni AI yang Dapat Dijual untuk Merchandise

> Ubah generasi seni AI menjadi grafis vektor-resolusi tinggi yang siap untuk pencetakan langsung ke garmen (DTG).

**Lacak:** AI Print-on-Demand & Desain Merchandise
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Sebagian besar pembuat AI mencoba mengunggah generasi gambar AI mentah langsung ke platform Print-on-Demand (POD) seperti Printify, Printful, atau Redbubble. Hasilnya mengecewakan:
* **Resolusi Blur:** Generasi AI mentah (1024x1024 piksel) menghasilkan piksel yang kuat saat dibentangkan pada area cetak dada kaos yang memerlukan **4500x5400 piksel pada 300 DPI**.
* **Kotak Latar Belakang Solid:** Menghasilkan gambar dengan latar belakang persegi solid akan menyisakan kotak persegi panjang jelek yang tercetak pada kaos hitam atau putih.
* **Warna Berdarah:** Warna gelap atau berlumpur hilang selama pencetakan tinta direct-to-garment (DTG).

Jika Anda tidak mengisolasi grafik, vektor kelas atas, dan memformat secara khusus untuk spesifikasi cetakan pakaian, produk Anda akan terlihat murahan dan mendapatkan ulasan negatif dari pelanggan.

---

## Konsep

Alur desain merchandise AI bergantung pada **Isolated Vector Prompting**, **Background Removal**, dan **DPI Upscaling**:

```
Isolated Prompting ──► Transparent PNG Isolation ──► Vector Upscale (4500x5400px 300DPI) ──► Apparel Mockup Placement
```

### Pilar Teknis Inti:

1. **Permintaan Gaya Vektor Terisolasi:** Perintah untuk grafik vektor bersih dengan garis luar yang kuat pada latar belakang putih solid atau gelap (`"vector illustration, isolated on white background, clean lines, bold graphic, high contrast, 300 DPI"`).
2. **Penyembunyian & Transparansi Latar Belakang:** Mengekstraksi subjek sepenuhnya menggunakan penghilang latar belakang AI sehingga hanya karya seni yang tercetak pada kain.
3. **Penskalaan Resolusi 300 DPI:** Menskalakan render resolusi rendah menggunakan peningkatan AI (seperti Real-ESRGAN atau peningkatan resolusi tinggi muapi) untuk mencapai spesifikasi POD standar (**4500 × 5400 px**).

---

## Lakukan itu

### Langkah 1: Tulis Prompt Merch Vector
Buka [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md). Buat draf perintah yang dioptimalkan untuk pakaian:
* **Mengingatkan:**
> __KODE INLINE_0__
* **Perintah Negatif:**
> __KODE INLINE_0__

### Langkah 2: Hasilkan dan Isolasi Grafik
Jalankan perintah menggunakan muapi `/nano-banana-2`. Teruskan keluaran yang dihasilkan ke penghapus latar belakang AI untuk menyimpan `merch-graphic-transparent.png` transparan.

### Langkah 3: Tingkatkan ke 4500x5400px @ 300 DPI
Jalankan peningkatan AI dengan **faktor skala 4x**. Pastikan dimensi gambar akhir memiliki lebar minimal 4500 piksel, pertahankan tepi tajam dan tajam di sepanjang garis.

### Langkah 4: Terapkan ke Maket Pakaian
Tempatkan `merch-graphic-transparent.png` pada mockup kaos katun tebal di editor Anda. Sesuaikan penempatan grafis agar berada 2 inci di bawah kerah leher.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/cyberpunk-cat-merch-tshirt.jpg" alt="Mockup Kaos Merch Cyberpunk Cat" width="320">
<img src="templates/examples/merch-design-motion.gif" alt="Gerakan Pameran Produk Merchandise (I2V)" width="320">
</p>
<p align="center"><sub>AI Merch Design Mockup (Left) ──► Image-to-Video Showcase Motion (Right) · Video File: <a href="templates/examples/merch-design-motion.mp4">templates/examples/merch-design-motion.mp4</a></sub></p>

**Eksekusi Desain Merchandise untuk "Cyberpunk Cat Tee"**

* **Target Niche:** Cyberpunk & Pecinta Kucing.
* **Spesifikasi Grafis:** PNG transparan 4500x5400px, 300 DPI.
* **Mockup Pakaian:** T-Shirt Crewneck Unisex Kelas Berat (Hitam).
* **Biaya Pembuatan:** **$0,06** Kredit AI vs **$250** kutipan ilustrator lepas.

---

## Bandingkan Alat

| Platform / Alat | Tujuan | Kualitas Kelas Atas | Terbaik Untuk |
|---|---|---|---|
| **Mode Vektor FLUX / muapi** | Generasi grafis | Tinggi | Membuat garis tajam & ilustrasi grafis |
| **Ruang Foto / Clipdrop** | Penghapusan latar belakang | PNG Transparan | Mengisolasi karya seni dari latar belakang yang solid |
| **ESRGAN Nyata / Vectorizer.ai** | Peningkatan resolusi | 4x / Vektor SVG | Menskalakan grafik ke 4500x5400px 300DPI |

---

## Luncurkan

**Praktik terbaik untuk desain merchandise:**
* **Uji Pakaian Gelap vs. Terang:** Buat varian garis putih untuk kaus hitam dan varian garis gelap untuk kaus putih/abu-abu heather.
* **Selalu Periksa Kontras:** Tinta cetak sesuai permintaan sedikit menyerap ke dalam kain; meningkatkan kecerahan warna sebesar +15% sebelum diekspor.

---

## Latihan

1. **Mudah:** Menghasilkan grafik vektor matahari terbenam retro minimalis yang diisolasi pada latar belakang putih.
2. **Sedang:** Hapus latar belakang dan tingkatkan grafis menjadi 4500x5400 piksel pada 300 DPI.
3. **Sulit:** Buat koleksi merchandise 3 item (T-shirt, Mug, Tote Bag) yang menampilkan variasi gaya desain terpadu.

---

## Templat

* [`templates/merch-prompt-brief.md`](templates/merch-prompt-brief.md) — Perintah gaya vektor, spesifikasi penskalaan DPI, dan pustaka perintah negatif.

---

[Track Overview](README.md) · Berikutnya: [POD Platform Basics →](02-print-on-demand-platform-basics.md)
