# Konsistensi Ukuran & Tata Letak

> Proporsi membangun kanvas; penyelarasan membangun merek.

**Lagu:** Mode AI & Uji Coba Virtual
**Waktu:** ~35 menit
**Prasyarat:** Dasar-Dasar Percobaan Pakaian

## Masalahnya

Saat menelusuri toko pakaian online, konsistensi adalah kunci pengalaman profesional. Jika ukuran kepala model melonjak-lonjak, atau jika garis dasar bahu bergeser ke atas dan ke bawah saat Anda mengklik di antara kemeja yang berbeda, situs web akan terlihat murahan dan berantakan.

Jika Anda mencoba menyelaraskan setiap gambar percobaan virtual dengan mata, Anda pasti akan membuat kesalahan. Beberapa model akan terlihat terlalu tinggi, yang lainnya terlalu pendek, dan penataan pakaiannya tidak konsisten.

Untuk membuat katalog merek profesional, Anda harus menerapkan kisi tata letak standar dan menjaga semua proporsi model, tinggi, dan pose selaras di seluruh koleksi Anda.

## Konsep

Standarisasi tata letak katalog fesyen bergantung pada **Bounding Margins**, **Baseline Joint Coordinates**, dan **Pose Templates**:

```
Model Try-On Render ──► Import into Grid Canvas ──► Joint Guide Alignment ──► Baseline Stabilization ──► Export WebP
```

* **Aturan Dasar Bahu:** Bahu adalah titik jangkar pakaian apa pun. Untuk menyelaraskan kemeja, jaket, atau gaun, selalu sejajarkan sendi bahu model dengan koordinat vertikal yang sama (sumbu Y) pada templat Anda. Ini menjaga garis dada dan leher tetap konsisten di seluruh grid daftar Anda.
* **Margin Rasio Aspek:** Saluran e-niaga memerlukan margin tertentu. Untuk format vertikal standar 4:5 (1080x1350 piksel), pertahankan **10%** margin bawah untuk kaki dan **12%** margin atas untuk jarak kepala guna mencegah hamparan teks menutupi model.
* **Pemusatan Jahitan Tengah:** Jahitan tengah vertikal pakaian (garis ritsleting atau kancing) harus sejajar sempurna dengan bagian tengah horizontal kanvas (pusat sumbu X). Hal ini mencegah produk terlihat tidak berada di tengah atau miring.

---

## Lakukan itu

### Langkah 1: Siapkan Kotak Kanvas
Buka [`templates/mannequin-alignment-template.md`](templates/mannequin-alignment-template.md). Konfigurasikan panduan kanvas Anda di editor Anda:
* Atur ukuran kanvas ke **1080 x 1350 piksel**.
* Tambahkan panduan tengah vertikal di **X: 540px**.
* Tambahkan panduan garis dasar horizontal: Garis Bahu pada **Y: 400px**, Garis Pinggang pada **Y: 750px**, Garis Pinggul pada **Y: 950px**.

### Langkah 2: Impor Lapisan Model
Impor lapisan uji coba model yang Anda buat ke dalam templat. Posisikan kira-kira di tengah.

### Langkah 3: Sejajarkan Bahu
Skalakan lapisan model secara proporsional (tahan `Shift` di editor Anda):
* Seret layer model hingga jahitan bahu kiri dan kanan sejajar persis dengan panduan horizontal **Garis Bahu (Y: 400 piksel)**.
* Biarkan kepala dan kaki bersisik secara alami. Hal ini memastikan penempatan dada dan batang tubuh seragam di semua daftar produk.

### Langkah 4: Sejajarkan Jahitan Tengah
Pindahkan layer model ke kiri atau ke kanan hingga kancing kerah kemeja atau garis ritsleting sejajar persis dengan **Panduan Vertikal Tengah (X: 540px)**.

### Langkah 5: Verifikasi Margin & Ekspor
Lakukan pemeriksaan QA visual:
* Pastikan bagian atas kepala model tidak melewati garis pengaman atas.
* Pastikan tangan dan bagian samping tidak melewati pemandu bantalan samping.
Sembunyikan lapisan templat kisi, dan ekspor file sebagai WebP. Ulangi proses ini untuk semua item dalam koleksi katalog.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/mannequin-grid-alignment.jpg" alt="Kisi Penyelarasan Manekin" width="280">
<img src="templates/examples/mannequin-grid-clip.gif" alt="Gerakan Alignment Grid (I2V)" width="280">
</p>
<p align="center"><sub>Baseline Grid Alignment Image (Left) ──► Image-to-Video Grid Lighting Motion (Right) · Video File: <a href="templates/examples/mannequin-grid-clip.mp4">templates/examples/mannequin-grid-clip.mp4</a></sub></p>

**Menyelaraskan Koleksi Windbreaker 5 Item**



* **Resolusi Katalog:** 1080x1350 piksel vertikal.
* **Setelan Dasar:**
* Panduan Tengah: X: 540px.
* Panduan Bahu Y: 400px.
* Panduan Pinggang Y: 750px.
* **Eksekusi:**
* Mengimpor 5 render model VTO terpisah (jaket Hitam, Biru, Oranye, Merah, Abu-abu).
* Skalakan setiap lapisan sehingga jahitan bahu jaket menempel pada garis Y: 400px.
* Pusatkan setiap garis ritsleting ke tengah vertikal.
* **Hasil:** Saat menelusuri halaman katalog, model-model tersebut berdiri pada ketinggian dan posisi tengah yang sama persis, sehingga pembeli dapat fokus dalam membandingkan warna produk tanpa gangguan visual.

---

## Bandingkan Alat

| Platform / Alat | Kemampuan Otomasi | Kontrol Tata Letak | Terbaik untuk |
|---|---|---|---|
| **Photoshop / Fotopea** | Rendah (Memerlukan penskalaan manual ke panduan) | Ultra-Tinggi (Panduan visual piksel sempurna) | QC fotografi daftar kelas atas. |
| **Bantal Python (PIL)** | Ultra-Tinggi (Dapat menulis skrip untuk memotong dan menyelaraskan mata/bahu secara otomatis menggunakan titik kunci) | Sedang | Pemrosesan batch terprogram dari kumpulan data katalog besar. |
| **Figma** | Rendah | Tinggi | Membuat maket antarmuka pengguna dan memeriksa konsistensi tata letak halaman. |

Untuk desain QA, menggunakan pedoman horizontal Photoshop adalah alur kerja terbaik. Untuk pengembang yang mengelola database besar (misalnya 1000+ pembaruan katalog mode), menulis skrip Python menggunakan model deteksi titik kunci (seperti pose YOLO) untuk mendeteksi sendi bahu dan memotong kanvas secara otomatis adalah cara standar untuk menskalakan pipeline.

---

## Luncurkan

**Cara mengatur templat pose:**
* **Kunci sudut kamera:** Jaga ketinggian kamera setinggi dada (kira-kira 4 kaki dari permukaan tanah) untuk semua fotografi katalog. Mengubah ketinggian kamera (misalnya, bidikan sudut rendah vs. bidikan sudut tinggi) akan mengubah perspektif, sehingga tidak mungkin menyelaraskan koordinat garis dasar.
* **Gunakan garis dasar standar:** Dokumentasikan pengaturan grid Anda di file [`templates/mannequin-alignment-template.md`](templates/mannequin-alignment-template.md) dan bagikan dengan tim desain Anda.

---

## Latihan

1. **Mudah:** Buka editor foto dan gambar panduan untuk tata letak e-commerce persegi 1:1 (Bahu pada Y: 300 piksel, Pinggang pada Y: 600 piksel).
2. **Sedang:** Impor 2 foto model dan skalakan agar bahunya sejajar sempurna dengan panduan Anda. Alihkan lapisan untuk memverifikasi keselarasan.
3. **Sulit:** Tulis daftar periksa tiruan ke QA sejumlah 10 halaman daftar pakaian. Sebutkan 4 potensi kesalahan penyelarasan (misalnya, ritsleting di luar bagian tengah, kepala terpotong) dan cara memperbaikinya.

---

## Templat

* [`templates/mannequin-alignment-template.md`](templates/mannequin-alignment-template.md) — ukuran kanvas, batasan margin, peta koordinat dasar, dan daftar periksa QC.

---

[← High-converting Studio Lookbooks](02-studio-lookbooks.md) · Berikutnya: [Before/After Conversion Cases →](04-conversion-cases.md)
