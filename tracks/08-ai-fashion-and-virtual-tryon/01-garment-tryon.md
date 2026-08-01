# Garment Try-on untuk E-commerce Fashion

> Pakaian baru hidup ketika bergerak mengikuti tubuh manusia.

**Track:** AI Fashion & Virtual Try-On
**Waktu:** ~45 menit
**Prasyarat:** Tidak ada

## Masalahnya

Bagi brand e-commerce fashion, menyewa model, hair/makeup artist, fotografer, serta menyewa studio merupakan alokasi biaya berulang yang sangat besar. Satu kali sesi pemotretan lini produk dapat menelan biaya lebih dari $5,000 dan membutuhkan waktu berminggu-minggu untuk proses penyuntingan.

Guna menghemat anggaran, brand kerap kali mengandalkan foto flat-lays (pakaian dibeberkan rata di atas meja) atau foto "ghost mannequin" (pakaian dipasangkan pada manekin plastik yang kemudian dihapus). Kendati efisien secara biaya, foto-foto ini tampak pipih dan kurang memikat. Pelanggan ingin mengamati bagaimana kain jatuh, meliuk, pas di badan, serta selaras dengan tubuh manusia nyata. Tanpa keberadaan foto model manusia, brand fashion akan mengalami penurunan click-through rate serta tingginya return rate akibat ketidakpastian ukuran.

Guna meluncurkan desain-desain baru secara instan tanpa pemotretan fisik, Anda wajib menerapkan pipeline **Virtual Try-On (VTO)** — sebuah teknologi yang mengambil foto pakaian polos lalu membalutkannya secara digital ke tubuh model, menghasilkan foto produk yang tampak pas dan realistis tanpa pemotretan fisik.

## Konsep

Workflow sintesis fashion ini mengandalkan **Garment Segmentation**, **Virtual Try-On (VTO) Diffusion**, serta **Draping Fitting**:

```
Flat Garment Photo ──► Garment Mask Extraction ──► VTO Model Alignment ──► Timbre-Draping Synthesis
```

- **Preserving Garment Integrity:** Berbeda dari generator gambar standar yang kerap mengubah detail pakaian, model VTO memanfaatkan reference garment image. Sistem akan mengisolasi pakaian, menganalisis tekstur, jahitan, kancing, serta motifnya, lalu membalutkannya ke tubuh model target dengan tetap mempertahankan **95%** detail fisik aslinya.
- **Mannequin-to-Model Transfer:** Jika Anda telah memiliki foto ghost mannequin, engine VTO dapat memanfaatkan pose manekin sebagai panduan struktural, mengganti anggota tubuh dan kepala plastik dengan model nyata, sembari mempertahankan kecocokan ukuran secara presisi.
- **Custom Model Demographics:** Anda dapat mengubah etnis, usia, tinggi badan, hingga bentuk tubuh model sembari mempertahankan pakaian yang sama. Hal ini memungkinkan brand untuk mentransformasi landing page mereka secara instan sesuai target pasar regional yang berbeda.

## Lakukan itu

### Langkah 1: Siapkan Garment Reference Photo Anda

Abadikan foto fisik pakaian Anda secara flat-lay atau pada manekin. Pastikan posisinya rata, fokusnya tajam, serta tersinari oleh pencahayaan alami yang bersih. Hapus latar belakang mengandalkan pemotong subjek AI untuk mengisolasi pakaian. Simpan sebagai berkas `garment_ref.png`.

### Langkah 2: Tentukan Model Demographics

Buka lembar spesifikasi try-on Anda pada [`templates/tryon-spec-sheet.md`](templates/tryon-spec-sheet.md). Dokumentasikan parameter model target:

- *Contoh:* Pria Asia Timur, berusiakan 28 tahun, berpostur atletis, berdiri di lingkungan studio.

### Langkah 3: Pilih Target Model Pose

Jika pipeline try-on Anda mendukung reference models, unggah foto model dalam pose yang Anda inginkan (misalnya Pose A: berdiri tegak, tangan di samping). Jika mengandalkan text-to-image edit model (seperti `nano-banana-2-edit`), unggah foto manekin asli, buat mask pada area pakaian, lalu tuliskan deskripsi model target Anda.

### Langkah 4: Jalankan VTO Draping Engine

Kirimkan aset Anda ke engine try-on (seperti IDM-TryOn atau Kolors VTO API):

- Masukkan `garment_ref.png` sebagai input pakaian.
- Masukkan gambar pose model atau text prompt sebagai input tubuh target.
- Atur draping fitting rate pada angka **0.75** (menyeimbangkan preservasi detail kain dengan kerutan pergerakan tubuh yang realistis).
Hasilkan dan unduh berkas luaran `.jpg`.

### Langkah 5: Lakukan Quality Control Detail

Lakukan perbesaran pada gambar akhir lalu periksa area-area kunci berikut:

- **Batas Kerah & Kancing:** Pastikan bentuk kerah tampak tajam, tidak kabur, maupun menyatu dengan kulit.
- **Ujung Lengan & Hemlines:** Pastikan jemari melintas secara alami melalui cuff kemeja, serta lipatan bawah pakaian jatuh secara lurus.
- **Cetakan & Tekstur:** Pastikan garis-garis, cetakan, atau logo mengikuti lekukan dan lipatan alami dari tubuh model.

## Contoh yang berhasil

**Linen Shirt Mannequin-to-Model Swap**

- **Garment Input:** Foto ghost mannequin dari kemeja linen kancing warna off-white.
- **Target Model:** Model pria Kaukasia berusia 30 tahun dengan postur atletis.
- **VTO Pipeline:** Pemanggilan IDM-TryOn API.
  - `garment_image` = `linen_shirt.png`
  - `model_image` = `reference_male_model.jpg`
- **Synthesis Output:** Kemeja linen off-white terbalut sempurna pada tubuh model. Kancing tampak jelas, garis jahitan terlihat tajam, dan tekstur silang dari kain linen terpreservasi secara utuh. Bayangan lembut jatuh secara alami di bawah kerah kemeja.

**Hasilnya:** Brand berhasil meningkatkan kualitas halaman katalog online mereka dari manekin plastik menjadi foto model profesional, yang meningkatkan nilai premium kemeja tersebut.

## Bandingkan Alat

| Platform / Tool | Detail Preservation | Pose Customization | Best for |
| --- | --- | --- | --- |
| **IDM-TryOn** | Ultra-High (Mempertahankan motif rumit, tekstur, dan jahitan kain) | Medium | Membuat foto katalog listing e-commerce berpresisi tinggi. |
| **Kolors Virtual Try-On** | High | High (Sangat baik dalam menyesuaikan kain pada pose kompleks) | Lookbook editorial fashion kreatif dan grafis media sosial. |
| **Kling AI Image-to-Video** | Medium | High (Mampu menganimasi model berjalan sembari mengenakan pakaian) | Membuat video loop pendek model yang sedang berjalan. |

Untuk product detail pages (PDP) standar pada Shopify atau Amazon, IDM-TryOn merupakan tool pilihan utama karena mampu menjaga logo, teks, dan tekstur kain tetap tajam secara sempurna. Untuk iklan banner media sosial yang membutuhkan model dalam pose aktif (berlari, melompat), Kolors VTO menyajikan penyesuaian pose yang lebih optimal.

## Luncurkan

**Cara mengorganisasi gambar katalog:**

- **Jaga konsistensi model:** Gunakan wajah dan tubuh model target yang persis sama di seluruh halaman kategori produk. Jika calon pembeli memilih berbagai kemeja dan wajah model berubah pada setiap item, tata letak toko akan tampak amatir dan tidak konsisten.
- **Simpan template beresolusi tinggi:** Simpan template pose model terbaik Anda di folder utama. Saat merilis lini pakaian baru, gunakan kembali pose-pose presisi ini untuk mempercepat proses batch rendering.

## Latihan

1. **Mudah:** Abadikan foto t-shirt secara flat-lay. Gunakan background cutter untuk membuat PNG mask pakaian yang bersih.
2. **Sedang:** Kirimkan PNG t-shirt Anda ke tool virtual try-on. Hasilkan model pria dan model wanita yang mengenakan t-shirt tersebut.
3. **Sulit:** Menggunakan foto ghost mannequin dari jaket berkancing, jalankan VTO draping pipeline. Evaluasi tepi kerah dan jahitan cuff pada pembesaran 200%. Perbaiki setiap batas yang kabur menggunakan photo editor.

## Templat

- [`templates/tryon-spec-sheet.md`](templates/tryon-spec-sheet.md) — spesifikasi garment, bagan demografi model, target mask, dan pemeriksaan QA.

---

[Track overview](README.md) · Berikutnya: [Lookbook Studio Berkonversi Tinggi →](02-studio-lookbooks.md)
