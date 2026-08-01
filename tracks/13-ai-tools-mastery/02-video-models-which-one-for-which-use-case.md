# Model Video — Yang Mana untuk Kasus Penggunaannya

> Kuasai ekosistem pembuatan video: Runway Gen-3 Alpha, Kling 1.5, Luma Dream Machine, Sora, dan Seedance 2 I2V.

**Lacak:** Penguasaan Alat AI
**Waktu:** ~40 menit
**Prasyarat:** [01: Image Models](01-image-models-which-one-for-which-use-case.md)

## Masalahnya

Video generatif adalah sektor pembuatan AI dengan pertumbuhan tercepat, tetapi kredit video mahal ($0,25 hingga $1,50 per generasi 5 detik).

Memilih model video yang salah hanya membuang-buang uang:
* Menggunakan model gerak tinggi untuk gerakan kamera yang halus menyebabkan distorsi morphing yang ekstrim.
* Menggunakan model gerak rendah untuk rangkaian tindakan menghasilkan bingkai statis dan beku.
* Penggunaan Text-to-Video (T2V) dan bukan Image-to-Video (I2V) merusak konsistensi visual di seluruh adegan.

Anda memerlukan kerangka keputusan yang jelas untuk memilih model video yang tepat untuk pergerakan kamera dan kecepatan gerakan yang Anda inginkan.

---

## Konsep

Model video AI unggul dalam berbagai profil gerakan dan fisika temporal:

```
Source Image ──► Motion Profile Requirements ──► Video Model Match ──► Render Output
```

### 4 Faktor Evaluasi Video Inti:

1. **Image-to-Video (I2V) Fidelity:** Seberapa akurat model mempertahankan pencahayaan asli, identitas wajah, dan komposisi dari gambar sumber. (Model utama: **Kling 1.5** / **Seedance 2 I2V**).
2. **Kontrol Kamera (Pan, Zoom, Orbit):** Presisi saat menjalankan gerakan sinematografer tertentu (misalnya, push-in lambat, gerakan orbital). (Model utama: **Runway Gen-3 Alpha** / **Luma Dream Machine**).
3. **Simulasi Fisika & Gerakan Fluida:** Gerakan realistis air, asap, api, kain, dan gerakan manusia tanpa anggota badan melengkung. (Model utama: **Kling 1.5** / **Sora**).
4. **Kecepatan Rendering & Efisiensi API:** Waktu pembuatan yang cepat 10-30 detik untuk produksi komersial bervolume tinggi. (Model utama: **Seedance 2 I2V Fast** melalui muapi).

---

## Lakukan itu

### Langkah 1: Tentukan Kontrol Gerakan yang Diinginkan
Buka [`templates/video-audio-stack-matrix.md`](templates/video-audio-stack-matrix.md). Petakan kebutuhan gerakan adegan Anda:
* **Pan Arsitektur Lambat Halus / Rotasi Produk:** Memerlukan stabilitas I2V yang tinggi -> **Kling 1.5 / Seedance 2 I2V**.
* **Zoom & Fly-Through Kamera Sinematik Dramatis:** Membutuhkan kontrol kamera keyframe -> **Runway Gen-3 Alpha**.
* **Dinamika Fluida Kompleks (Percikan air, ledakan):** Membutuhkan fisika tingkat lanjut -> **Kling 1.5 / Sora**.

### Langkah 2: Rumuskan Perintah Gerakan
Tambahkan token pergerakan kamera eksplisit ke perintah Anda:
* __KODE INLINE_0__

### Langkah 3: Atur Skala Gerakan & Kunci Kamera
Tetapkan skala kekuatan gerak:
* Gerakan rendah (`2 - 4`): Ideal untuk potret, foto kepala, real estat.
* Gerakan tinggi (`6 - 8`): Ideal untuk aksi, olahraga, kendaraan.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/camera-motion-matrix.jpg" alt="Grafik Matriks Gerak Kamera Sinematik" width="480">
</p>
<p align="center"><sub>Cinematic Camera Motion Reference Graphic (Studio Camera Setup)</sub></p>

**Studi Kasus Keputusan Model Video: "Reel Mobil Komersial"**

* **Persyaratan:** Foto pelacakan 5 detik dari mobil sport yang melaju di jalan pesisir saat matahari terbenam.
* **Model A yang Diuji (Teks-ke-Video):** Bentuk mobil berubah menjadi kendaraan berbeda di tengah-tengah klip.
* **Model B yang Diuji (I2V dengan Kling 1.5 / Seedance 2):** Mengunci geometri kendaraan yang tepat dari gambar keyframe, menghasilkan pantulan halus di sepanjang sasis.
* **Hasil:** Reel gerak stabil 100%.

---

## Bandingkan Alat

| Model Video | Kontrol Kamera | Kesetiaan Gerakan | Terbaik Untuk |
|---|---|---|---|
| **Landasan Pacu Gen-3 Alpha** | **Sangat Tinggi** (Kontrol kamera keyframe) | Tinggi | Trailer film, pergerakan kamera dramatis, iklan |
| **Kling 1.5** | Tinggi | **Fisika Unggul** & Gerak Manusia | Panduan real estat, pergerakan karakter, stabilitas I2V |
| **Mesin Impian Luma** | Sedang | Pergerakan kamera dinamis tinggi | Sapuan kamera 3D cepat dan loop konseptual |
| **Seedance 2 I2V Cepat (muapi API)** | Tinggi | **Inferensi API Tercepat** (~15 detik) | Saluran klien bervolume tinggi, klip media sosial |

---

## Luncurkan

* **Selalu Mulai dengan Gambar-ke-Video (I2V):** Jangan pernah mengandalkan Teks-ke-Video untuk pekerjaan komersial. Hasilkan gambar 8k asli terlebih dahulu, lalu animasikan dengan I2V untuk menjaga konsistensi merek 100%.

---

## Latihan

1. **Mudah:** Menganimasikan foto produk statis menggunakan Seedance 2 I2V dengan perintah zoom kamera lambat.
2. **Medium:** Bandingkan kontrol kamera Runway Gen-3 vs. Kling 1.5 pada gambar keyframe yang sama.
3. **Sulit:** Menghasilkan adegan video 3-shot dengan pencahayaan yang konsisten menggunakan bingkai utama I2V di seluruh adegan.

---

## Templat

* [`templates/video-audio-stack-matrix.md`](templates/video-audio-stack-matrix.md) — Parameter kontrol gerakan, panduan pergerakan kamera, dan tolok ukur kecepatan model.

---

[← Image Models](01-image-models-which-one-for-which-use-case.md) · Berikutnya: [Voice & Audio Models →](03-voice-audio-models-which-one-for-which-use-case.md)
