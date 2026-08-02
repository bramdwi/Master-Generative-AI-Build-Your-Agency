# Model Suara/Audio — Yang Mana untuk Kasus Penggunaannya

> Pilih tumpukan audio yang tepat: ElevenLabs, Suno v3.5, Udio, Bark, dan Whisper ucapan-ke-teks.

**Lacak:** Penguasaan Alat AI
**Waktu:** ~35 menit
**Prasyarat:** [01: Image Models](01-image-models-which-one-for-which-use-case.md), [02: Video Models](02-video-models-which-one-for-which-use-case.md)

## Masalahnya

Kualitas audio menentukan atau menghancurkan produksi video. Penelitian menunjukkan bahwa pemirsa menoleransi resolusi video yang biasa-biasa saja, namun segera menghindari audio yang buruk atau voiceover robot.

Pembuat konten kesulitan dalam memilih model AI audio:
* Penggunaan mesin TTS kelas bawah menghasilkan voiceover robotik yang monoton dengan kecepatan yang tidak wajar.
* Menghasilkan track musik lengkap dengan vokal saat adegan hanya membutuhkan instrumental latar belakang akan merusak kejelasan dialog.
* Mencoba mengkloning suara tanpa audio referensi yang menghilangkan noise akan menghasilkan artefak audio yang terdistorsi.

Anda memerlukan strategi pemetaan alat yang tepat untuk sintesis suara, pembuatan musik, dan isolasi batang audio.

---

## Konsep

**Saluran Tumpukan Audio Lengkap** memisahkan ucapan, musik, dan efek suara (SFX):

```
Text Script ──► ElevenLabs Voice Synthesis ──► Suno/Udio Instrumental Track ──► Audio Stem Mix & Mastering
```

### 3 Pilar AI Audio:

1. **Sintesis & Kloning Suara (ElevenLabs / Bark):** Sulih suara dengan rentang emosi tinggi, kloning suara, dan terjemahan multibahasa dengan tempo napas alami.
2. **Komposisi Musik & Skor Generatif (Suno v3.5 / Udio):** Soundtrack sinematik berdurasi penuh, irama latar belakang komersial, dan skor musik genre tertentu.
3. **Otomasi Pidato-ke-Teks & Subjudul (Bisikan):** Transkripsi yang sangat akurat, penyelarasan stempel waktu, dan pembuatan teks terbuka otomatis.

---

## Lakukan itu

### Langkah 1: Sesuaikan Persyaratan Audio dengan Singkat
Buka [`templates/video-audio-stack-matrix.md`](templates/video-audio-stack-matrix.md). Petakan kebutuhan audio Anda:
* **Narasi & Voiceover Komersial:** **ElevenLabs Multibahasa v2** (Dinamika emosi tinggi, stabilitas `0.45`, kejelasan `0.85`).
* **Skor Film Sinematik / Ketukan Latar Belakang:** **Suno v3.5** (Mode perintah instrumental) atau **Udio**.
* **Pembuatan Subtitle & Transkrip:** **OpenAI Whisper** (model Large-v3).

### Langkah 2: Konfigurasikan Parameter Sintesis Suara
Di ElevenLabs:
* Setel **Stabilitas** ke `0.40 - 0.50` untuk modulasi suara yang ekspresif dan alami.
* Setel **Kejelasan + Peningkatan Kesamaan** ke `0.80` untuk tampilan studio yang bersih.

### Langkah 3: Campurkan Dialog & Batang Musik
Pastikan musik latar dikecilkan **-14dB** di bawah track narasi voiceover selama pengeditan video.

---

## Contoh yang berhasil

**Saluran Produksi Audio untuk "Iklan Real Estate Komersial"**

* **Suara:** ElevenLabs "Adam - Narator Perusahaan yang Mendalam" (Stabilitas `0.45`).
* **Skor Latar Belakang:** Suno v3.5 Instrumental (`"Ambient corporate piano, warm uplifting strings, 110 bpm"`).
* **Transkripsi:** Subtitel SRT OpenAI Whisper dibuat secara otomatis.
* **Waktu Produksi:** Total 8 menit.
* **Total Biaya Audio:** **$0,12** biaya kredit vs. **$400** pengisi suara + lisensi musik stok.

---

## Bandingkan Alat

| Model/Platform | Kategori Utama | Kekuatan | Terbaik Untuk |
|---|---|---|---|
| **SebelasLabs** | Sintesis & Kloning Suara | Dinamika emosional, dialog multi-speaker, kloning suara | Sulih suara komersial, buku audio, podcast |
| **Suno v3.5** | Musik Generatif | Struktur lagu lengkap (Verses, Chorus), generasi cepat | Track musik latar, jingle, partitur |
| **Udio** | Musik Generatif | Fidelitas unggul dan kontrol campuran vokal | Produksi & batang musik dengan ketelitian tinggi |
| **Bisikan (OpenAI)** | Pidato-ke-Teks | Akurasi transkripsi 99%+ dalam 50+ bahasa | Subtitel video, transkrip, teks tertutup |

---

## Luncurkan

* **Selalu Gunakan Audio Referensi yang Bersih untuk Kloning Suara:** Sediakan setidaknya 3 menit audio WAV studio bebas noise dan 44,1kHz saat membuat klon suara klien khusus.

---

## Latihan

1. **Mudah:** Buat skrip voiceover komersial berdurasi 30 detik menggunakan ElevenLabs.
2. **Medium:** Buat track latar belakang instrumental menggunakan Suno v3.5 yang sesuai dengan tempo voiceover Anda.
3. **Sulit:** Menghasilkan campuran audio lengkap (Suara + Musik + Subtitle) untuk iklan video berdurasi 60 detik.

---

## Template

* [`templates/video-audio-stack-matrix.md`](templates/video-audio-stack-matrix.md) — Pengaturan parameter suara, struktur perintah musik, dan daftar periksa pencampuran batang.

---

[← Video Models](02-video-models-which-one-for-which-use-case.md) · Berikutnya: [API vs. Local: A Decision Framework →](04-api-vs-local-decision-framework.md)
