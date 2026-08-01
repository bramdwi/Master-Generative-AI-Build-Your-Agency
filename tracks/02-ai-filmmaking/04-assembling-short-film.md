# Merakit Film Pendek

> Film ini tidak dibuat di generator; itu dibuat di editor.

**Lagu:** Pembuatan Film AI
**Waktu:** ~50 menit
**Prasyarat:** Skenario & Pembuatan Cerita, Pembuatan Storyboard & Perencanaan Pengambilan Gambar, Pergerakan Kamera & Perintah Sinematografi

## Masalahnya

Jika Anda mengambil klip mentah dan senyap langsung dari generator video dan memutarnya secara berurutan, hasilnya akan sangat mengejutkan. Satu klip mungkin memiliki sedikit warna hijau, klip berikutnya berwarna kuning hangat. Kecepatan gerak kamera tidak cocok. Dan yang terpenting, keheningan total membuat video terasa mati, sehingga langsung mengungkap sifat buatan dari rekaman tersebut.

Sebagian besar tutorial hanya berfokus pada fase pembuatan, sehingga Anda memiliki folder berisi file-file yang diam dan tidak terhubung.

Film AI hanya menjadi film nyata ketika masuk ke editor. Anda harus menyatukan klip-klip tersebut, menetapkan tempo narasi, mencocokkan palet warna di seluruh generasi yang berbeda, dan membuat trek audio yang kaya dan berlapis-lapis.

## Konsep

Perakitan pascaproduksi menjembatani kesenjangan antara klip AI senyap dan karya sinematik yang sudah jadi. Alur kerja ini terdiri dari dua pilar utama: **Pelapisan Audio** dan **Penilaian Warna**.

### Hirarki Desain Suara:
Karena klip video AI dihasilkan secara senyap, Anda harus membuat trek audio dari awal. Kami melapisi audio dalam hierarki yang tepat:
1. **Dialog / Narasi:** Pertunjukan vokal (sulih suara atau ucapan yang disinkronkan).
2. **Suasana / Nada Ruangan:** Kebisingan latar belakang terus-menerus yang menentukan ruangan (misalnya, dengungan mesin pesawat ruang angkasa, hujan).
3. **Foley / Efek Suara (SFX):** Suara terpisah yang disinkronkan dengan peristiwa visual (misalnya, bunyi klik tombol, langkah kaki yang berat).
4. **Musik / Soundtrack:** Inti emosional dari adegan tersebut.

```
Silent Visual Cuts  →  Narration  →  Ambience Track  →  Foley Sync  →  Music Score
```

### Penyatuan Visual:
Untuk memperbaiki sedikit perubahan dalam penilaian warna antar generasi, terapkan **LUT (Tabel Pencarian)** ke seluruh garis waktu pengeditan. Ini melapisi tingkat warna yang seragam di semua klip, memadukannya menjadi satu gaya visual.

---

## Lakukan itu

### Langkah 1: Atur Timeline Proyek Anda
Impor klip yang Anda buat ke NLE (Non-Linear Editor — program pengeditan video yang memungkinkan Anda mengatur dan memotong klip pada timeline) seperti DaVinci Resolve, Premiere Pro, atau CapCut. Susun secara berurutan di trek video utama Anda (V1). Pangkas semua gangguan visual yang terjadi di awal atau akhir klip (model video sering kali hilang atau melengkung dalam setengah detik terakhir).

### Langkah 2: Hasilkan Narasi Sulih Suara
Gunakan TTS atau API kloning suara berkualitas tinggi (seperti ElevenLabs).
* Tempel skrip Anda dari Modul 1.
* Tambahkan jeda baris atau tanda baca buatan (koma, elips) untuk memaksa model suara berhenti secara alami.
* Impor file audio ke editor di trek audio A1. Sinkronkan awal baris dialog dengan pintu masuk visual karakter Anda.

### Langkah 3: Lapisi Soundscape Sekitar
Temukan atau buat trek kebisingan latar belakang berkelanjutan yang cocok dengan ringkasan film Anda (misalnya, nada ruangan statis atau hujan kota). Tempatkan ini di jalur A2. Pudarkan pada bingkai pembuka dan biarkan berjalan terus menerus di bawah semua pengeditan untuk menyatukan potongan.

### Langkah 4: Sinkronisasi Foley SFX
Gulir ke seluruh video bingkai demi bingkai. Di mana pun tindakan fisik terjadi (layar berkedip, kepala menoleh, sepatu bot membentur trotoar), tempatkan efek suara yang cocok di trek A3. Sejajarkan puncak audio dengan tepat dengan momen visual dampaknya.

### Langkah 5: Skor Adegannya
Tempatkan musik latar Anda di trek A4. Atur volume musik secara umum ke rendah (sekitar -18dB hingga -24dB). Aktifkan **Audio Ducking** sehingga musik otomatis turun sebesar 6dB tambahan setiap kali trek suara (A1) aktif.

### Langkah 6: Terapkan Tingkat Warna Terpadu
Pilih semua klip video di V1. Tambahkan lapisan penyesuaian di seluruh garis waktu dan terapkan emulasi film LUT (misalnya gaya Kodak 2383). Ini menyatukan warna highlight dan bayangan di semua generasi yang berbeda, menyembunyikan perbedaan warna kecil. Ekspor proyek yang sudah selesai pada 24fps.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/the-last-signal-poster.jpg" alt="Poster Seni Utama" width="280">
<img src="templates/examples/last-signal-assembly-clip.gif" alt="Gerakan Video Perakitan Adegan (I2V)" width="280">
</p>
<p align="center"><sub>Film Key Art (Left) ──► Image-to-Video Film Assembly Motion (Right) · Video File: <a href="templates/examples/last-signal-assembly-clip.mp4">templates/examples/last-signal-assembly-clip.mp4</a></sub></p>

**Perakitan Timeline untuk "The Last Signal" Adegan 1**



Berikut adalah tata letak trek di dalam timeline pengeditan selama 12 detik pertama:

* **V1 (Trek Video):**
* 0:00 - 0:04: Bidikan 1.1 (Membuat Bidikan Lebar kokpit)
* 0:04 - 0:08: Bidikan 1.2 (Potret astronot, dolly-in lambat)
* 0:08 - 0:12: Bidikan 1.3 (Close-up layar statis)
* *Efek:* Lapisan penyesuaian di atas V1 dengan LUT "Teal & Oranye" pada opasitas 70%.

* **A1 (Jalur Dialog):**
* 0:05 - 0:08: JOHN (V.O.): *"Belum ada yang menjawab dalam enam bulan."*
* *Pengaturan:* Saluran mono terpusat, volume diatur ke -3dB.

* **A2 (Jalur Suasana):**
* 0:00 - 0:12: Perulangan berkelanjutan dari `"Low spaceship drone hum with computer static"`
* *Pengaturan:* Volume diatur ke -18dB.

* **A3 (Jalur SFX/Foley):**
* 0:08 - 0:09: `"Electric spark & CRT monitor flicker hum"` disinkronkan saat Shot 1.3 masuk.
* *Pengaturan:* Volume diatur ke -6dB.

* **A4 (Trek Musik):**
* 0:00 - 0:12: Pad synthesizer ambien yang lambat dan tegang.
* *Pengaturan:* Volume diatur ke -20dB, turun ke -26dB selama saluran suara John.

**Hasilnya:** Urutannya terasa seperti satu kesatuan. Suara kedipan layar menyembunyikan potongan visual yang keras pada layar statis, dan dengungan pesawat ruang angkasa yang terus menerus menyatukan atmosfer di seluruh potongan.

*Referensi Otomatisasi yang Ada:* Jika Anda ingin mengotomatiskan perakitan garis waktu dan sinkronisasi audio ini, Anda dapat mereferensikan aplikasi [`Open-AI-Micro-Drama-Generator`](https://github.com/Anil-matcha/awesome-generative-ai-apps/tree/main/video_generation/Open-AI-Micro-Drama-Generator), yang memetakan transkrip dialog langsung ke durasi video dan membuat aset gabungan secara terprogram.

---

## Bandingkan Alat

| Alat Pengeditan / Suara | Kemampuan | Upaya Pengaturan | Terbaik untuk |
|---|---|---|---|
| **Resolve DaVinci / Premiere Pro** | NLE profesional. Pengeditan multi-track, pengecilan audio tingkat lanjut, penilaian warna LUT profesional. | Tinggi (Membutuhkan instalasi lokal dan kurva pembelajaran) | Film layar lebar, iklan komersial, dan entri festival kelas atas. |
| **Desktop CapCut** | Editor ringan. Teks otomatis, perpustakaan efek suara bawaan, dan pemotongan garis waktu yang mudah. | Rendah | Drama mikro vertikal, TikToks, dan format media sosial cepat. |
| **ElevenLabs (Audio-Natif)** | Kloning suara terbaik, perubahan emosi alami, dan generasi Foley SFX bawaan dari perintah teks. | Rendah (API/antarmuka Web) | Narasi dengan ketelitian tinggi, sulih suara karakter, dan efek suara khusus. |

Untuk produksi cepat dan bervolume tinggi (seperti serial drama vertikal), CapCut adalah pilihan paling efisien karena aset dan mesin teks bawaannya. Untuk film pendek naratif, DaVinci Resolve lebih disukai karena mesin penilaian warnanya yang unggul.

---

## Luncurkan

**Cara memonetisasi keterampilan ini:**
* **AI Film Editor & Sound Designer:** Banyak pembuat AI yang dapat menghasilkan gambar cantik tetapi tidak tahu cara mengedit atau mendesain suara. Tawarkan "Paket Perakitan dan Desain Suara" untuk pembuat film AI, dengan mengenakan biaya **$100–$300** per menit akhir pembuatan film.
* **Produksi Drama Vertikal:** Memproduksi dan mengedit episode drama berdurasi 1 menit untuk kreator yang membuat serial mini seluler. Agensi dan platform membayar **$150–$350** per episode vertikal yang diedit.

**Di mana menemukan klien:**
Influencer AI cold pitch di YouTube/Instagram yang memposting silent loop atau tayangan slide. Tunjukkan kepada mereka sampel 10 detik hasil edit rekaman mereka sendiri dengan sulih suara dan efek suara untuk membuktikan manfaatnya.

---

## Latihan

1. **Mudah:** Impor 3 klip video senyap acak ke editor Anda. Sinkronkan suara latar sekitar secara terus-menerus dan trek musik latar sederhana.
2. **Medium:** Ambil klip diam berdurasi 4 detik dari karakter yang sedang berbicara. Buat baris dialog di ElevenLabs, impor, dan edit durasi visual klip agar sama persis dengan panjang baris audio.
3. **Sulit:** Lakukan tantangan pencocokan warna: impor 3 klip video yang dihasilkan dari model video berbeda (dengan pencahayaan berbeda). Nilai warnanya menggunakan roda pencocokan warna atau LUT bersama untuk membuatnya tampak seperti difilmkan di ruangan yang sama dengan kamera yang sama.

---

## Templat

Templat yang dapat digunakan kembali yang dihasilkan modul ini:

* [`templates/sound-design-checklist.md`](templates/sound-design-checklist.md) — daftar master untuk dialog, suasana, SFX, dan leveling musik.

---

[← Camera Movement & Cinematography Prompts](03-camera-movement.md) · Berikutnya: [Selling Short-Form Films →](05-selling-short-films.md)
