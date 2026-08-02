# Video Models — Which One for Which Use Case

> Kuasai ekosistem pembuatan video AI: Runway Gen-3 Alpha, Kling 1.5, Luma Dream Machine, Sora, serta Seedance 2 I2V.

**Track:** Penguasaan Alat AI
**Waktu:** ~40 menit
**Prasyarat:** Image Models — Which One for Which Use Case

## Masalahnya

Generative video merupakan sektor dengan pertumbuhan paling pesat dalam ranah kreasi AI, namun alokasi kredit video tergolong cukup tinggi ($0,25 hingga $1,50 per eksekusi berdurasi 5 detik).

Menentukan pilihan video model yang tidak tepat dapat menyebabkan pemborosan anggaran:

- Mengoperasikan model berkecepatan tinggi untuk gerakan kamera yang halus dapat memicu distorsi *morphing* yang ekstrem.
- Mengoperasikan model berkecepatan rendah untuk adegan aksi hanya akan memproduksi *frame* yang statis dan kaku.
- Mengandalkan Text-to-Video (T2V) sebagai pengganti Image-to-Video (I2V) akan merusak konsistensi visual di seluruh alur adegan.

Anda membutuhkan kerangka keputusan yang presisi guna memilih video model yang selaras dengan pergerakan kamera serta dinamika gerak yang diharapkan.

## Konsep

Setiap AI video model memiliki keunggulan arsitektural yang khas dalam memproses profil gerak serta simulasi fisika visual:

```
Source Image ──► Motion Profile Requirements ──► Video Model Match ──► Render Output
```

### 4 Dimensi Utama Evaluasi Video:

1. **Image-to-Video (I2V) Fidelity:** Tingkat presisi model dalam mempertahankan tata cahaya asli, identitas karakter, serta komposisi dari gambar sumber. (Model unggulan: **Kling 1.5** / **Seedance 2 I2V**).
2. **Camera Controls (Pan, Zoom, Orbit):** Akurasi dalam mengeksekusi pergerakan sinematografi yang spesifik (misalnya, *slow push-in* atau *orbital pan*). (Model unggulan: **Runway Gen-3 Alpha** / **Luma Dream Machine**).
3. **Physics Simulation & Fluid Motion:** Realisme pergerakan elemen air, asap, api, kain, hingga dinamika tubuh manusia tanpa distorsi fisik. (Model unggulan: **Kling 1.5** / **Sora**).
4. **Rendering Speed & API Efficiency:** Akselerasi waktu pemrosesan yang efisien berkisar 10–30 detik untuk kebutuhan produksi komersial berskala besar. (Model unggulan: **Seedance 2 I2V Fast** via muapi).

## Lakukan itu

### Langkah 1: Tentukan Kendali Gerak yang Diinginkan

Buka panduan kerja [`templates/video-audio-stack-matrix.md`](templates/video-audio-stack-matrix.md). Pemetaan kebutuhan gerak adegan Anda:

- **Subtle Slow Architectural Pan / Product Rotation:** Menuntut stabilitas I2V yang tinggi -> **Kling 1.5 / Seedance 2 I2V**.
- **Dramatic Cinematic Camera Zoom & Fly-Through:** Menuntut kendali kamera berbasis *keyframe* -> **Runway Gen-3 Alpha**.
- **Complex Fluid Dynamics (Cipratan air, ledakan):** Menuntut simulasi fisika tingkat tinggi -> **Kling 1.5 / Sora**.

### Langkah 2: Formula Prompt Gerak

Sematkan petunjuk pergerakan kamera yang eksplisit pada *prompt* Anda:

- `"Camera slowly pans right across the modern living room, soft sunlight streaming through windows, 24fps film grain, photorealistic."`

### Langkah 3: Atur Skala Gerak & Kunci Kamera

Konfigurasikan intensitas *motion strength*:

- Intensitas rendah (`2 - 4`): Sangat ideal untuk potret wajah, *headshot*, serta tampilan arsitektur.
- Intensitas tinggi (`6 - 8`): Sangat ideal untuk adegan aksi, olahraga, hingga pergerakan kendaraan.

## Contoh yang berhasil

**Studi Kasus Keputusan Video Model: "Commercial Car Reel"**

- **Requirement:** *Tracking shot* berdurasi 5 detik yang menampilkan mobil olahraga melintasi jalan pesisir pantai saat matahari terbenam.
- **Tested Model A (Text-to-Video):** Struktur kendaraan mengalami perubahan bentuk (*morphing*) menjadi model mobil yang berbeda di pertengahan klip.
- **Tested Model B (I2V dengan Kling 1.5 / Seedance 2):** Mempertahankan geometri kendaraan secara konsisten dari gambar *keyframe*, serta menghasilkan refleksi pencahayaan yang halus di sepanjang bodi mobil.
- **Result:** Menghasilkan tayangan gerak yang stabil secara sempurna.

## Bandingkan Alat

| Video Model | Camera Control | Motion Fidelity | Best For |
| --- | --- | --- | --- |
| **Runway Gen-3 Alpha** | **Sangat Tinggi** (Kendali kamera berbasis *keyframe*) | Tinggi | Trailer film, pergerakan kamera sinematik, materi iklan |
| **Kling 1.5** | Tinggi | **Simulasi Fisika Superior** & Dinamika gerak manusia | Penelusuran ruang properti, pergerakan karakter, stabilitas I2V |
| **Luma Dream Machine** | Sedang | Pergerakan kamera dinamis yang halus | *Sweep* kamera 3D berkecepatan tinggi serta *loop* konseptual |
| **Seedance 2 I2V Fast (muapi API)** | Tinggi | **Akselerasi API Pemrosesan Tercepat** (~15 detik) | *Pipeline* produksi klien berskala besar, klip media sosial |

## Luncurkan

- **Senantiasa Mengawali Alur Kerja dengan Image-to-Video (I2V):** Hindari mengandalkan Text-to-Video untuk proyek komersial. Rancang gambar berkualitas tinggi beresolusi 8k terlebih dahulu, lalu animasikan menggunakan metode I2V untuk menjaga konsistensi citra merek secara mutlak.

## Latihan

1. **Mudah:** Animasikan foto produk yang statis menggunakan Seedance 2 I2V dengan menyematkan petunjuk *camera zoom* yang halus.
2. **Sedang:** Bandingkan presisi kendali kamera antara Runway Gen-3 berbanding Kling 1.5 mengandalkan gambar *keyframe* yang sama.
3. **Sulit:** Sajikan alur adegan video 3 *shot* dengan konsistensi tata cahaya yang terjaga menggunakan *keyframe* I2V di seluruh transisi.

## Template

- [`templates/video-audio-stack-matrix.md`](templates/video-audio-stack-matrix.md) — Parameter kendali gerak, panduan pergerakan kamera, serta tolak ukur kecepatan pemrosesan model.

---

[← Sebelum: Image Models](01-image-models-which-one-for-which-use-case.md) · [Track overview](README.md) · Berikutnya: [Voice & Audio Models →](03-voice-audio-models-which-one-for-which-use-case.md)
