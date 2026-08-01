# Image Models — Which One for Which Use Case

> Panduan komprehensif dan matriks keputusan teknis untuk memilih AI image generation model yang tepat bagi setiap hasil kreatif komersial.

**Track:** Penguasaan Alat AI
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Lansekap AI image generation bergerak dengan kecepatan yang sangat pesat. Para creator sering kali merasa kewalahan oleh banyaknya pilihan: Midjourney v6, FLUX 1.1 Pro, SDXL, Ideogram v2, DALL-E 3, hingga custom LoRA models.

Banyak creator terjebak dalam kekeliruan dengan mengandalkan satu tool tunggal untuk seluruh kebutuhan. Sebagai contoh, memanfaatkan Midjourney untuk merender typography yang rumit (yang berakhir dengan teks berantakan) atau mengandalkan DALL-E 3 untuk membuat photorealistic corporate headshots (yang menghasilkan tekstur kulit tampak terlalu jenuh dan buatan).

Apabila Anda tidak menyelaraskan model secara presisi dengan kebutuhan kreatif spesifik, alokasi waktu Anda akan terbuang sia-sia hanya untuk mengompromikan keterbatasan model, ketimbang menyerahkan aset siap pakai kepada client.

## Konsep

Setiap AI image model memiliki keunggulan arsitektural serta kompromi yang khas:

```
Creative Requirement ──► Architectural Match ──► Selected Model ──► Client Output
```

### 4 Dimensi Utama Evaluasi Gambar:

1. **Photorealism & Texture Accuracy:** Seberapa autentik model dalam merender mikrotekstur kulit, gradasi pencahayaan, serta serat kain. (Model unggulan: **FLUX 1.1 Pro** / **FLUX Schnell**).
2. **Typography & Text Rendering:** Akurasi dalam menghasilkan susunan kata yang terbaca secara presisi pada logo, papan penunjuk jalan, dan poster. (Model unggulan: **Ideogram v2** / **FLUX**).
3. **Prompt Adherence & Complex Spatial Composition:** Seberapa presisi model mengeksekusi instruksi spasial multi-subjek (contoh: *"a blue ceramic cup on the left of a leather notebook"*). (Model unggulan: **DALL-E 3** / **FLUX**).
4. **Artistic Style & Painterly Aesthetics:** Keselarasan color grading, pencahayaan sinematik secara bawaan, serta ilustrasi bergaya artistik. (Model unggulan: **Midjourney v6**).

## Lakukan itu

### Langkah 1: Analisis Kebutuhan Client Brief

Buka panduan [`templates/image-model-selection-guide.md`](templates/image-model-selection-guide.md). Tentukan batasan utama dari proyek Anda:

- **Photorealistic Headshots / Products:** Menuntut kelengkapan sub-surface scattering serta pori-pori kulit -> **FLUX 1.1 Pro / muapi `/nano-banana-2`**.
- **Graphic Typography & Merch Quotes:** Menuntut ejaan karakter yang sempurna -> **Ideogram v2 / FLUX**.
- **Cinematic Concept Art & Storyboards:** Menuntut pencahayaan sinematik yang indah secara bawaan -> **Midjourney v6**.

### Langkah 2: Konfigurasi Parameter Model

Sesuaikan pengaturan inference berdasarkan target output:

- Untuk FLUX models: Atur guidance scale `3.5`, steps `28` hingga `40`.
- Untuk Midjourney v6: Atur `--stylize 100-250` untuk mengejar photorealism atau `--stylize 500+` untuk sentuhan artistik yang kuat.

### Langkah 3: Audit Hasil Render pada Pembesaran 100% Zoom

Periksa setiap sudut detail, keterbacaan teks, serta geometri jemari untuk memastikan bahwa pilihan model telah memenuhi kebutuhan client brief secara sempurna.

## Contoh yang berhasil

**Studi Kasus Keputusan Model: "High-Fashion Apparel Campaign"**

- **Requirement:** Hasil foto produk studio beresolusi 8k dengan brand typography yang terbaca jelas pada hoodie berwarna hitam.
- **Tested Tool A (DALL-E 3):** Ejaan teks sangat presisi, namun tekstur kulit tampak terlalu buatan dan menyerupai lilin.
- **Tested Tool B (FLUX 1.1 Pro / muapi):** Pori-pori kulit tampak sempurna, serat kain terlihat tajam, serta ejaan typography sangat presisi.
- **Final Selection:** **FLUX 1.1 Pro** berhasil meraih persetujuan 100% dari client.

## Bandingkan Alat

| Model | Keunggulan | Kelemahan | Best Use Case |
| --- | --- | --- | --- |
| **FLUX 1.1 Pro / Schnell** | Photorealistic skin yang autentik, text rendering kelas atas, prompt adherence yang tinggi | Membutuhkan lighting prompts yang spesifik | Corporate headshots, POD merch, stock content |
| **Midjourney v6** | Estetika visual bawaan yang superior, color defaults bernuansa sinematik | Ejaan teks dapat bergeser, interaksi berbasis Discord yang proprietary | Concept art, film storyboards, social creative |
| **Ideogram v2** | Keunggulan tiada tanding pada vector typography & logo layout | Tingkat photorealism pada kulit manusia relatif lebih rendah | Posters, apparel text designs, badges |
| **DALL-E 3** | Prompt adherence yang tinggi untuk konsep-konsep sederhana | Tekstur kulit terlalu jenuh dan berkesan kartun | Conceptual brainstorming yang cepat |

## Luncurkan

- **Bangun Multi-Model Pipeline:** Manfaatkan FLUX untuk pembuatan aset dasar, Ideogram untuk penyematan teks, serta Midjourney untuk eksplorasi nuansa artistik.

## Latihan

1. **Mudah:** Hasilkan grafis logo 1 kata menggunakan Ideogram v2 berbanding Midjourney v6, lalu bandingkan akurasi ejaan teksnya.
2. **Sedang:** Render sebuah potret profesional menggunakan FLUX 1.1 Pro, lalu cermati mikrotekstur kulit pada pemotongan gambar 100%.
3. **Sulit:** Susun matriks keputusan pemilihan tool untuk kampanye client 3 bagian yang membutuhkan headshots, logo, serta banner sinematik.

## Templat

- [`templates/image-model-selection-guide.md`](templates/image-model-selection-guide.md) — Matriks komparasi arsitektural, aturan prompt adherence, serta tolak ukur resolusi.

---

[Track Overview](README.md) · Berikutnya: [Model Video — Yang Mana untuk Kasus Penggunaan Yang Mana →](02-video-models-which-one-for-which-use-case.md)
