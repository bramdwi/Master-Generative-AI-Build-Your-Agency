# Musik AI & Efek Suara

> Suara yang tepat mengubah b-roll menjadi film.

**Lagu:** AI Audio & Musik
**Waktu:** ~35 menit
**Prasyarat:** Tidak ada

## Masalahnya

Menemukan musik latar dan efek suara (SFX) berkualitas tinggi adalah hambatan besar. Situs musik stok membebankan biaya berlangganan bulanan yang mahal. Jika Anda mencoba menggunakan musik populer gratis dari internet, platform media sosial akan mendenetisasi saluran Anda, membisukan audio video, atau mengeluarkan teguran hak cipta.

Meskipun Anda menemukan musik bebas hak cipta, mencocokkan tempo, suasana hati, dan lirik lagu dengan skrip video Anda adalah hal yang membuat frustrasi. Anda akhirnya menghabiskan waktu berjam-jam untuk memotong dan memudarkan trek agar sesuai.

Untuk menjalankan pabrik konten yang cepat, Anda perlu membuat loop latar belakang khusus yang bebas hak cipta dan efek suara spesifik sesuai permintaan, dan mengotomatiskan penempatannya dalam campuran video Anda.

## Konsep

Pipeline untuk perakitan audio video menggunakan **Generative Audio Prompts** dan **Auto-Ducking**:

### 1. Matriks Perintah BGM:
Daripada meminta mesin musik AI dengan suasana abstrak (misalnya *"musik coding keren"*), tulis perintah musik terstruktur yang menentukan **Tempo (BPM)**, **Genre**, **Instrumen Utama**, dan **Pengecualian Vokal** (selalu tentukan *"tanpa vokal"* atau *"hanya instrumental"* untuk mencegah suara AI bersaing dengan narator Anda).

### 2. Sumber SFX Terisolasi:
Efek suara (suara mendesing, klik UI, slide kertas) harus dihasilkan secara terpisah. Gunakan rumus di [`templates/audio-prompt-library.md`](templates/audio-prompt-library.md) untuk menghasilkan trek bersih tanpa gema atau gema latar belakang sehingga menyatu secara alami dengan adegan video apa pun.

### 3. Merunduk Otomatis:
Trek musik latar belakang harus secara otomatis diperkecil volumenya setiap kali narator berbicara:

```
[Voice Track A1 (Speaking)] ──► Auto-Ducks ──► [Music Track A2 (-18dB)]
[Voice Track A1 (Silence)]  ──► Auto-Boosts ──► [Music Track A2 (-12dB)]
```

---

## Lakukan itu

### Langkah 1: Hasilkan Trek Latar Belakang
Pilih rumus dari [`templates/audio-prompt-library.md`](templates/audio-prompt-library.md). Buka mesin musik AI (mis., Suno atau Udio).
* *Contoh perintah:* `"120 BPM, clean corporate tech house loop. Minimalist synthesizer, warm deep bass, soft digital percussion, optimistic mood. Instrumental only, seamless audio loop, high fidelity."`
Buat dan unduh loop instrumental `.mp3`.

### Langkah 2: Hasilkan SFX Transisi Tertentu
Buka ElevenLabs dan pilih alat **Efek Suara** (atau hubungi `/sound-effects` API). Hasilkan suara transisi:
* *Permintaan:* `"Cinematic sub-bass whoosh transition sound effect, deep low rumble, clean isolated track."`
Unduh file keluaran.

### Langkah 3: Siapkan Saluran Timeline
Buka editor video Anda. Siapkan tata letak trek standar:
* **Trek A1:** Narasi sulih suara (volume: 0dB).
* **Trek A2:** Efek Suara (SFX) (volume: -6dB).
* **Trek A3:** Musik Latar Belakang (BGM) (volume: -18dB).

### Langkah 4: Konfigurasikan Pengecilan Otomatis
Jika editor Anda mendukung pengelak otomatis (misalnya Premiere Pro atau CapCut):
* Pilih trek musik (A3) dan aktifkan tombol "Merunduk".
* Tautkan ke trek sulih suara (A1).
* Atur jumlah pengecilan ke **-18dB** saat suara terdeteksi, dan konfigurasikan kecepatan fade-in/fade-out ke **0,3 detik**.
* Jika mengedit secara manual, letakkan bingkai utama pada garis volume A3, turunkan volume ke -18dB selama bagian berbicara dan naikkan ke -12dB selama pemisahan visual.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/ai-music-workstation.jpg" alt="Stasiun Kerja Musik" width="280">
<img src="templates/examples/ai-music-workstation-clip.gif" alt="Synthesizer Visualizer Motion (I2V)" width="280">
</p>
<p align="center"><sub>Synthesizer Workstation Image (Left) ──► Image-to-Video Visualizer Motion (Right) · Video File: <a href="templates/examples/ai-music-workstation-clip.mp4">templates/examples/ai-music-workstation-clip.mp4</a></sub></p>

**Desain Suara untuk Iklan SaaS Vertikal 15 Detik**



* **Voice Track:** Narator berbicara dari 0:00 hingga 0:03, mengheningkan cipta dari 0:03 hingga 0:06 (demo visual), berbicara dari 0:06 hingga 0:15.
* **Trek Musik:** menghasilkan loop rumah teknologi 120 BPM.
* **Frame utama merunduk:**
* **0:00 - 0:03:** Volume musik disetel ke **-18dB** (vokal berbicara).
* **0:03 - 0:06:** Volume musik meningkat menjadi **-12dB** (hanya demo visual).
* **0:06 - 0:15:** Volume musik turun kembali ke **-18dB** (vokal berbicara CTA).
* **Penempatan SFX:** Menambahkan efek suara klik UI digital pada 0:03.50 saat kursor layar mengklik tombol di layar.

**Hasilnya:** Suara jernih dan mudah dimengerti. Selama pemisahan visual, volume musik ditingkatkan secara alami untuk mengisi kekosongan. Klik transisi membuat demo antarmuka terasa responsif.

---

## Bandingkan Alat

| Platform / Alat | Tujuan Generasi | Kontrol Keluaran Audio | Terbaik untuk |
|---|---|---|---|
| **Suno / Udio** | Lagu kreatif berdurasi penuh dan loop musik latar | Bagus (Mendukung loop ekstensi) | Membuat trek latar belakang yang unik dan spesifik genre. |
| **Mubert / Soundraw** | Audio latar belakang yang berpusat pada loop | Tinggi (Memungkinkan mematikan batang tertentu seperti drum atau synth) | Trek latar belakang yang cepat dan modular untuk saluran B2B. |
| **SebelasLabs SFX** | Efek suara yang spesifik dan terisolasi | Instan (Menghasilkan klip suara terisolasi 2-4 detik) | Sumber suara transisi khusus dan ketukan tombol. |

Untuk saluran pemasaran B2B, Soundraw sangat efektif karena Anda dapat membisukan trek melodi secara manual, hanya menyimpan trek drum dan bass sehingga tidak mengganggu sulih suara. Untuk detail desain suara (suara mendesing, klik UI), ElevenLabs SFX menyediakan suara yang bersih dan terisolasi.

---

## Luncurkan

**Cara mengatur perpustakaan suara Anda:**
* **Bangun brankas SFX:** Simpan perpustakaan lokal berisi efek suara yang paling sering Anda gunakan (misalnya `whoosh_fast.wav`, `click_modern.wav`). Daripada membuatnya untuk setiap video, imporlah dari brankas Anda untuk mempercepat pengeditan.
* **Gunakan volume musik yang konstan:** Jangan biarkan volume musik Anda melebihi -10dB. Jika musik terlalu keras, speaker ponsel akan memampatkan seluruh track audio, sehingga suara sulih suara terdistorsi dan sulit didengar.

---

## Latihan

1. **Mudah:** Buat loop latar belakang 1 menit menggunakan Mubert atau Suno. Pastikan prompt berisi "instrumental" dan "loop".
2. **Medium:** Impor trek suara dan trek musik. Terapkan bingkai utama volume manual untuk menurunkan volume musik sebesar 6dB selama bagian berbicara.
3. **Sulit:** Menghasilkan 3 efek suara transisi yang berbeda menggunakan mesin SFX. Impor ke editor Anda dan sejajarkan agar sesuai dengan bingkai visual yang tepat dari tampilan logo atau potongan video.

---

## Templat

* [`templates/audio-prompt-library.md`](templates/audio-prompt-library.md) — loop musik, penanda suasana hati, dan tombol prompt efek suara transisi.

---

[← Podcast Production & Audio Cleaning](03-podcast-production.md) · Berikutnya: [Singing Voice Conversion & Vocal Synthesis →](05-singing-vocal-synthesis.md)
