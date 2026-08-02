# Generasi Headshot yang Konsisten

> Ubah selfie smartphone biasa menjadi potret perusahaan sekelas studio tanpa distorsi wajah atau kulit plastik buatan.

**Track:** Foto & Potret AI
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Foto wajah profesional sangat penting untuk profil LinkedIn, halaman tim situs web perusahaan, ceramah pembicara, dan siaran pers. Namun, sesi headshot studio tradisional itu menyakitkan dan mahal:
* **Biaya Tinggi:** Pemesanan fotografer profesional, ruang studio, dan penata rambut/penata rias dikenakan biaya **$250 hingga $600 per orang**.
* **Konsumsi Waktu:** Waktu perjalanan, penggantian pakaian, dan menunggu 5 hingga 7 hari untuk bukti yang diedit menyia-nyiakan jam kerja yang berharga.
* **Inkonsistensi untuk Tim:** Saat perusahaan mempekerjakan karyawan jarak jauh secara global, hampir mustahil untuk mendapatkan latar belakang, gaya pencahayaan, dan aturan berpakaian yang konsisten di antara 30 anggota tim.

Jika Anda mencoba pertukaran wajah AI dasar atau pengaturan awal aplikasi yang difilter secara berlebihan, hasilnya akan terlihat palsu: tekstur kulit menjadi plastik lilin, warna mata berubah, gigi sejajar menjadi barisan buatan yang tidak alami, dan pencahayaan latar belakang tidak cocok dengan wajah subjek.

---

## Konsep

Saluran pembuatan foto kepala AI profesional mengandalkan **Penguncian Identitas Wajah**, **Penyelarasan Rig Pencahayaan**, dan **Pelestarian Tekstur Kulit**:

```
Casual Smartphone Selfie ──► Face Embed & Identity Lock ──► Studio Lighting & Outfit Prompt ──► Detail Upscale & Skin Frequency Match
```

### Pilar Teknis:

1. **Penguncian Vektor Identitas Wajah (InstantID / FLUX PuLID):** Daripada menghasilkan orang secara acak, model penguncian identitas mengekstrak penanda wajah (jarak mata, bentuk garis rahang, struktur batang hidung, warna kulit) dari 1 hingga 3 selfie referensi biasa. Meneruskan penyematan ini ke dalam model difusi akan memastikan keluaran terlihat persis seperti subjeknya.
2. **Rig Pencahayaan Studio (Pencahayaan 3 Titik dalam Perintah):** Fotografi potret profesional bergantung pada pengaturan pencahayaan yang terkontrol:
* **Lampu Utama:** Softbox penerangan utama diatur pada sudut 45 derajat untuk menciptakan dimensi alami (pola pencahayaan Rembrandt atau Butterfly).
* **Fill Light:** Cahaya lembut yang tersebar di sisi bayangan untuk mempertahankan detail tanpa bercak gelap yang mencolok.
* **Rim / Hair Light:** Lampu latar di belakang subjek untuk memisahkan rambut dan bahunya dari latar belakang.
3. **Pelestarian Tekstur Kulit Frekuensi Tinggi:** Filter AI kelas bawah menghancurkan pori-pori alami, kerutan halus, dan bintik-bintik. Menyetel kekuatan denoising img2img ke **0,40–0,55** dan menerapkan pemisahan frekuensi pada pasca-pemrosesan akan mempertahankan tekstur mikro kulit asli sekaligus membersihkan latar belakang yang berantakan dan pakaian informal.

---

## Lakukan itu

### Langkah 1: Kumpulkan Selfie Sumber Berkualitas
Instruksikan klien atau subjek Anda untuk mengunggah 3 hingga 5 foto kasual:
* Resolusi tinggi (pencahayaan baik di bawah sinar matahari jendela, tanpa filter berat, tanpa kacamata hitam, ekspresi netral atau tersenyum).
* Kontak mata langsung dengan kamera.
* Sudut yang bervariasi (menghadap ke depan, 3/4 putaran).

### Langkah 2: Pasang Prompt Studio Korporat
Buka panduan pencahayaan Anda di [`templates/headshot-style-guide.md`](templates/headshot-style-guide.md). Tambahkan jangkar fotografi yang cocok dengan tingkat profesional target:

* **Permintaan Eksekutif Perusahaan:**
> __KODE INLINE_0__
* **Permintaan Pendiri Teknologi Kreatif:**
> __KODE INLINE_0__
* **Perintah Negatif:**
> __KODE INLINE_0__

### Langkah 3: Jalankan Inferensi Terkunci Identitas
Teruskan selfie sumber dan perintahkan ke generator Anda (misalnya, muapi `/nano-banana-2` dengan parameter referensi wajah atau pipeline InstantID). Tetapkan rasio aspek ke **1:1** untuk avatar LinkedIn/Slack atau **4:5** untuk halaman tim eksekutif.

### Langkah 4: Sempurnakan Pertukaran Pakaian & Latar Belakang
Jika klien menginginkan beberapa variasi pakaian (misalnya, setelan formal vs. sweter kasual bisnis), lakukan pengecatan yang ditargetkan pada area batang tubuh sambil menjaga benih identitas wajah tetap terkunci.

### Langkah 5: Pemisahan Frekuensi & Pemulihan Kulit
Periksa render pada zoom 100%:
* Pastikan kulit memiliki pori-pori alami yang terlihat dan sorotan mata yang autentik.
* Terapkan penajaman halus pada pantulan iris.
* Simpan file resolusi tinggi terakhir sebagai `corporate-executive-headshot.jpg`.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/corporate-executive-headshot.jpg" alt="Headshot AI Eksekutif Perusahaan" width="320">
<img src="templates/examples/headshot-lighting-motion.gif" alt="Pencahayaan Headshot & Loop Gerakan (I2V)" width="320">
</p>
<p align="center"><sub>AI Corporate Executive Portrait (Left) ──► Image-to-Video Motion Loop (Right) · Video File: <a href="templates/examples/headshot-lighting-motion.mp4">templates/examples/headshot-lighting-motion.mp4</a></sub></p>

**Rincian Perubahan Merek Perusahaan untuk "Apex Financial Group"**

* **File Sumber:** Selfie ponsel kasual yang diambil di ruang tamu dengan cahaya langit-langit yang terang.
* **Gaya Target:** Blazer Angkatan Laut Perusahaan Eksekutif & Bokeh Kantor.
* **Model Pipeline:** Ekstraksi vektor identitas melalui render InstantID + FLUX 1.1.
* **Setelan Generasi:** Kekuatan denoising `0.45`, Berat identitas `0.85`, jangkar prompt lensa 85mm.
* **Penyelesaian:** Total waktu pemrosesan 3 menit.
* **Biaya:** **$0,06** Biaya pembuatan AI vs. **$350** penawaran studio lokal.

---

## Bandingkan Alat

| Platform / Saluran Pipa | Konsistensi Wajah | Realisme Kulit | Terbaik Untuk |
|---|---|---|---|
| **FLUX PuLID / ID Instan (API muapi)** | **Sangat Tinggi** | **Fotorealistik** — Menjaga pori-pori & ekspresi alami | Pengiriman klien profesional, paket tim perusahaan |
| **Aplikasi Headshot Konsumen (Remini, HeadshotPro)** | Sedang | Rendah — Efek kulit "plastik" yang terlalu halus | Avatar sosial pribadi beranggaran rendah |
| **Penyempurnaan LoRA Khusus (ComfyUI / Kohya)** | Maksimum | Tinggi — Membutuhkan 15+ gambar pelatihan | Model selebriti, eksekutif, atau influencer berulang |

---

## Luncurkan

**Pilihan kemasan:**
* **Paket Profesional Individu:** **$49 – $79** (Termasuk 5 variasi gaya: Formal, Bisnis Kasual, Kreatif, Studio Gelap, Bokeh Kantor).
* **Corporate Team Pass (10 Karyawan):** **$399 – $599** (Termasuk latar belakang perusahaan yang konsisten dan aturan berpakaian yang sesuai dengan pedoman merek perusahaan).

---

## Latihan

1. **Mudah:** Ambil selfie santai di bawah sinar matahari jendela. Tulis perintah untuk menghasilkan potret studio dengan latar belakang kantor yang buram.
2. **Sedang:** Lakukan pertukaran pakaian pada potret yang dihasilkan, ubah kaos kasual menjadi blazer setelan biru tua.
3. **Sulit:** Menghasilkan 3 foto tim yang konsisten untuk 3 individu berbeda menggunakan perintah pencahayaan studio dan bokeh latar belakang yang sama, sehingga memastikan konsistensi merek perusahaan di ketiganya.

---

## Template

* [`templates/headshot-style-guide.md`](templates/headshot-style-guide.md) — Perintah pengaturan pencahayaan, deskriptor lemari pakaian, dan perpustakaan perintah negatif.

---

[Track Overview](README.md) · Berikutnya: [Standing Out Against Fiverr Competition →](02-standing-out-against-fiverr-competition.md)
