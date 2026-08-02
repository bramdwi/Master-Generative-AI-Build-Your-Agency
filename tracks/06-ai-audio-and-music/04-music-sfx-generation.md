# AI Music & Sound Effects

> Kehadiran tata suara yang presisi mengubah cuplikan b-roll menjadi mahakarya sinematik.

**Track:** AI Audio & Music

**Waktu:** ~35 menit

**Prasyarat:** Tidak ada

## Masalahnya

Pencarian musik latar dan efek suara (SFX) berkualitas tinggi kerap kali menjadi kendala utama. Situs musik berbayar mematok biaya langganan bulanan yang relatif tinggi. Apabila Anda memaksakan untuk memanfaatkan musik populer bebas biaya dari internet, platform media sosial akan menghentikan monetisasi saluran Anda, membisukan audio video, atau melayangkan teguran hak cipta.

Sekalipun Anda berhasil menemukan musik bebas hak cipta, menyeimbangkan tempo, nuansa emosional, serta klimaks lagu agar selaras dengan skrip video merupakan proses yang menyita waktu. Anda dapat menghabiskan waktu berjam-jam sekadar memotong dan menyelaraskan track.

Guna mengelola content factory yang terakselerasi, Anda wajib mampu menghasilkan musik latar bebas hak cipta yang kustom serta efek suara spesifik sesuai kebutuhan, sekaligus mengotomatisasi penataannya di dalam racikan video Anda.

## Konsep

Alur penyusunan audio video bertumpu pada **Generative Audio Prompts** serta **Auto-Ducking**:

### 1. The BGM Prompt Matrix:

Daripada memberikan instruksi abstrak ke engine musik AI (misalnya *"cool coding music"*), susunlah prompt musik yang terstruktur dengan merincikan **Tempo (BPM)**, **Genre**, **Lead Instruments**, serta **Vocal Exclusions** (senantiasa tegaskan *"no vocals"* atau *"instrumental only"* agar vokal buatan AI tidak bertabrakan dengan narator).

### 2. Penataan SFX Terisolasi:

Efek suara (swus, klik antarmuka, gesekan kertas) wajib dihasilkan secara terisolasi. Manfaatkan formulasi dalam [`templates/audio-prompt-library.md`](templates/audio-prompt-library.md) untuk menghasilkan track jernih tanpa gema atau pemantulan suara latar belakang, sehingga mampu menyatu secara natural ke dalam adegan video mana pun.

### 3. Auto-Ducking:

Intensitas volume track musik latar wajib menurun secara otomatis setiap kali narator bertutur:

```
[Voice Track A1 (Speaking)] ──► Auto-Ducks ──► [Music Track A2 (-18dB)]
[Voice Track A1 (Silence)]  ──► Auto-Boosts ──► [Music Track A2 (-12dB)]

```

---

## Lakukan itu

### Langkah 1: Hasilkan Track Musik Latar

Pilih formulasi dari [`templates/audio-prompt-library.md`](templates/audio-prompt-library.md). Buka engine musik AI (misalnya Suno atau Udio).

* *Contoh prompt:* `"120 BPM, clean corporate tech house loop. Minimalist synthesizer, warm deep bass, soft digital percussion, optimistic mood. Instrumental only, seamless audio loop, high fidelity."`
Hasilkan dan unduh berkas instrumen `.mp3`.

### Langkah 2: Hasilkan Efek Suara Transisi Spesifik

Buka ElevenLabs lalu pilih instrumen **Sound Effects** (atau panggil API `/sound-effects`). Hasilkan tata suara transisi:

* *Prompt:* `"Cinematic sub-bass whoosh transition sound effect, deep low rumble, clean isolated track."`
Unduh berkas luaran.

### Langkah 3: Konfigurasikan Saluran Alur Waktu

Buka aplikasi penyunting video Anda. Konfigurasikan tata letak track standar:

* **Track A1:** Narasi pengisi suara (volume: 0dB).
* **Track A2:** Efek Suara (SFX) (volume: -6dB).
* **Track A3:** Musik Latar (BGM) (volume: -18dB).

### Langkah 4: Konfigurasikan Auto-Ducking

Jika aplikasi penyunting Anda mendukung fitur auto-ducking (seperti Premiere Pro atau CapCut):

* Pilih track musik (A3) lalu aktifkan tuas "Ducking".
* Tautkan ke track pengisi suara (A1).
* Atur besaran penurunan volume pada **-18dB** saat tuturan terdeteksi, serta atur kecepatan transisi fade-in/fade-out pada **0,3 detik**.
* Jika menyunting secara manual, tempatkan keyframes pada garis volume A3, turunkan volume ke -18dB selama sesi tuturan dan naikkan ke -12dB saat jeda visual berlangsung.

---

## Contoh yang berhasil

**Perancangan Tata Suara untuk Iklan SaaS Vertikal Berdurasi 15 Detik**

* **Track Pengisi Suara:** Narator bertutur dari rentang 0:00 hingga 0:03, jeda hening dari 0:03 hingga 0:06 (peragaan visual), lalu bertutur kembali dari 0:06 hingga 0:15.
* **Track Musik:** Menghasilkan irama tech house 120 BPM.
* **Keyframes Ducking:**
* **0:00 - 0:03:** Volume musik diatur pada **-18dB** (vokal sedang bertutur).
* **0:03 - 0:06:** Volume musik naik ke **-12dB** (khusus peragaan visual).
* **0:06 - 0:15:** Volume musik turun kembali ke **-18dB** (vokal menyuarakan CTA).


* **Penataan SFX:** Menambahkan efek suara klik digital pada rentang 0:03.50 saat kursor layar menekan tombol pada antarmuka.

**Hasilnya:** Vokal narasi terdengar jernih dan mudah dipahami. Saat jeda visual berlangsung, volume musik terakselerasi secara alami untuk mengisi ruang hening. Efek suara klik transisi membuat demonstrasi antarmuka terasa sangat responsif.

---

## Bandingkan Alat

| Platform / Tool | Tujuan Generasi | Kendali Luaran Audio | Sangat Cocok Untuk |
| --- | --- | --- | --- |
| **Suno / Udio** | Lagu utuh dan track musik latar berulang yang kreatif | Baik (Mendukung ekstensi pengulangan) | Merancang track latar belakang yang unik dan spesifik sesuai genre. |
| **Mubert / Soundraw** | Audio latar belakang berfokus pada perulangan ritme | Tinggi (Memungkinkan penyenyapan instrumen spesifik seperti drum atau synth) | Track latar modul terakselerasi untuk saluran B2B. |
| **ElevenLabs SFX** | Efek suara spesifik yang terisolasi | Instan (Menghasilkan cuplikan suara terisolasi berdurasi 2-4 detik) | Pengadaan efek suara transisi dan sentuhan tombol kustom. |

Untuk saluran pemasaran B2B, Soundraw sangat efektif karena Anda dapat menyenyapkan track melodi secara manual, dengan hanya mempertahankan track drum dan bass agar tidak mengganggu narasi pengisi suara. Untuk detail perancangan suara (swus, klik antarmuka), ElevenLabs SFX menyajikan track suara yang jernih dan terisolasi.

---

## Luncurkan

**Cara mengorganisasi pustaka suara Anda:**

* **Bangun brankas SFX:** Simpan pustaka lokal untuk efek suara yang paling sering digunakan (misalnya `whoosh_fast.wav`, `click_modern.wav`). Alih-alih menghasilkan ulang untuk setiap video, impor dari brankas Anda untuk mempercepat proses penyuntingan.
* **Gunakan intensitas volume musik yang stabil:** Hindari menyetel volume musik melampaui batas -10dB. Jika musik terlalu nyaring, pengeras suara perangkat seluler akan memampatkan keseluruhan track audio, yang membuat pengisi suara terdengar terdistorsi dan sulit ditangkap.

---

## Latihan

1. **Mudah:** Hasilkan track latar berulang berdurasi 1 menit mengandalkan Mubert atau Suno. Pastikan prompt memuat instruksi "instrumental" dan "loop".
2. **Sedang:** Impor track vokal dan track musik. Terapkan keyframes volume manual untuk menurunkan volume musik sebesar 6dB selama sesi tuturan berlangsung.
3. **Sulit:** Hasilkan 3 efek suara transisi yang berbeda mengandalkan engine SFX. Impor ke dalam editor Anda lalu selaraskan agar presisi dengan bingkai visual logo atau pemotongan video.

---

## Template

* [`templates/audio-prompt-library.md`](templates/audio-prompt-library.md) — track musik berulang, penanda nuansa emosional, dan kunci prompt efek suara transisi.

---

[← Sebelumnya: Produksi Podcast & Pembersihan Audio](03-podcast-production.md) · [Track overview](README.md) · Berikutnya: [Singing Voice Conversion & Vocal Synthesis →](05-singing-vocal-synthesis.md)
