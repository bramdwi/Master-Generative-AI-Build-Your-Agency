# Skenario & Pembuatan Cerita

> Naskah yang bagus itu murah; jarang ada cerita bagus yang benar-benar bisa difilmkan oleh AI.

**Lagu:** Pembuatan Film AI
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Skenario tradisional ditulis untuk aktor manusia dan kru kamera. Naskah standar mungkin menggambarkan "sebuah kafe yang ramai dengan lusinan pelanggan mengobrol, saat tokoh protagonis membanting cangkir kopi mereka karena marah, menyebabkan kopi tumpah ke seragam pelayan yang lewat."

Jika Anda memasukkan adegan seperti ini ke dalam model video AI generatif, rendering akan gagal total. Wajah pengunjung akan berubah, interaksi fisik menumpahkan kopi ke pelayan akan terlihat seperti kesalahan nyata, dan membuat protagonis terlihat seperti orang yang sama dalam pengambilan gambar adalah hal yang mustahil.

Kebanyakan pembuat film AI yang bercita-cita tinggi memulai dengan menulis cerita standar, hanya untuk menyia-nyiakan ratusan kredit generasi untuk mencoba memaksakan model AI untuk merender fisika kompleks, kerumunan, atau perpindahan lokasi yang konstan. Mendesain skenario Anda dengan **batasan yang mengutamakan AI** sejak hari pertama adalah perbedaan antara film yang sudah selesai dan sekumpulan klip yang dibuang dan bermasalah.

## Konsep

Penulisan skenario yang mengutamakan AI adalah proses penyusunan cerita yang dirancang khusus berdasarkan keterbatasan dan kekuatan model generatif.

### Kendala Inti Model Video Generatif:
* **Kesenjangan Fisika:** Model AI kesulitan menghadapi interaksi objek yang kompleks (misalnya, mengikat sepatu, menuangkan cairan, mengancingkan baju, memakan makanan).
* **Dilema Kerumunan:** Adegan apa pun dengan lebih dari dua karakter dalam bingkai secara dramatis meningkatkan perubahan visual dan mengurangi konsistensi identitas.
* **Batas Tindakan Berkelanjutan:** Sebagian besar model menghasilkan klip dalam kelipatan 4–5 detik. Adegan aksi pengambilan tunggal yang panjang dan terus-menerus belum dapat dilakukan.

Untuk mengatasi kendala ini, kami menulis skrip yang berfokus pada **postur karakter statis, suasana lingkungan, pencahayaan atmosfer, dan dialog/sulih suara berdampak tinggi** daripada tindakan fisik yang kompleks.

```
Story Outline → Constraint Check → Visual Script Formatting → Prompts Generation
```

Daripada menggambarkan perjuangan fisik, jelaskan *reaksi emosional* yang ditunjukkan pada wajah karakter atau *suasana hati* latar, yang ditampilkan dengan indah oleh generator video AI.

## Lakukan itu

### Langkah 1: Tentukan Kendala Produksi
Sebelum menulis satu kata pun dari naskah Anda, isi batasan proyek dalam ringkasan Anda. Memilih:
* **Maks 1–2 karakter** untuk menjaga konsistensi wajah.
* **Maksimal 2 lokasi** (misalnya, kantor yang sepi, jalan yang remang-remang).
* **Fokus atmosfer:** Tentukan tema visual (misalnya neon cyberpunk, masa depan retro yang berdebu, siang hari noir) untuk menonjolkan gaya yang tepat.

### Langkah 2: Tulis Skenario dengan Visual Anchor Prompts
Format skenario Anda menggunakan tata letak yang mengintegrasikan format penulisan skenario standar dengan jangkar perintah gambar/video.
* Pecahkan naskah menjadi beberapa gambar terpisah (masing-masing berdurasi 3-4 detik).
* Untuk setiap pengambilan gambar, tulis **deskripsi aksi visual** yang jelas yang merinci ekspresi wajah atau gerakan lambat karakter.
* Jaga agar dialog tetap singkat (di bawah 15 kata per pengambilan gambar) sehingga model TTS dapat membacanya secara alami tanpa terburu-buru.

### Langkah 3: Pembuatan Skrip LLM
Gunakan teks LLM (seperti Claude atau Gemini) untuk bertukar pikiran dan menyempurnakan skrip. Gunakan perintah sistem yang memaksa AI untuk menghormati batasan fisik:
> *Permintaan Sistem:* "Anda adalah penulis skenario yang mengutamakan AI. Tulis skrip fiksi ilmiah berdurasi 60 detik. Hanya 1 karakter. Seluruhnya berada dalam satu ruangan. Hindari interaksi objek fisik apa pun. Fokus pada ekspresi wajah, pengambilan gambar pelacakan kamera lambat, dan dialog sulih suara. Untuk setiap adegan, keluarkan perintah visual mendetail yang menjelaskan pergerakan kamera, pembingkaian, tampilan karakter, dan pencahayaan."

### Langkah 4: Pangkas Tindakan
Tinjau skrip baris demi baris. Jika ada baris yang bertuliskan "Dia berdiri, berjalan ke rak, mengambil buku, membukanya, dan tersenyum", pangkaslah baris tersebut. Gantikan dengan: "Dia duduk di depan meja, melihat ke rak. [Kamera mendekatkan wajahnya, menunjukkan rasa ingin tahu]." Ini sangat mudah dirender.

### Langkah 5: Simpan Jangkar Karakter & Gaya
Buat style sheet dengan awalan cepat Anda (pencahayaan, stok film, rasio aspek) sehingga dapat disalin dan ditempel ke setiap generator gambar.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/astronaut-anchor.jpg" alt="Potret Pahlawan untuk Sinyal Terakhir: Astronot dalam setelan penerbangan" width="320">
<img src="templates/examples/astronaut-intro-clip.gif" alt="Klip Gerakan Karakter Pahlawan (I2V)" width="320">
</p>
<p align="center"><sub>AI Hero Character Anchor Image (Left) ──► Image-to-Video Animation (Right) · Video File: <a href="templates/examples/astronaut-intro-clip.mp4">templates/examples/astronaut-intro-clip.mp4</a></sub></p>

**Ringkasan Film: "Sinyal Terakhir"**
* **Karakter:** John (40an), astronot yang lelah.
* **Lokasi:** Dek komunikasi pesawat luar angkasa.
* **Suasana:** Fiksi ilmiah sinematik, pencahayaan biru suram.



**Kutipan & Perintah Skrip:**

```markdown
SCENE 1: INTERIOR SPACE CABIN - NIGHT

John sits in a high-tech pilot seat, surrounded by glowing green instrument panels. Cool blue light washes over his face. He looks up at a flickering display monitor off-camera.

JOHN (V.O.)
"No one has answered in six months."

VIDEO PROMPT (Shot 1.1):
"Medium close-up of a tired astronaut (40s, short gray hair, stubble, wearing a worn silver flight suit) sitting in a spaceship cockpit. Glowing green instrument panels are out of focus in the background. Cool blue light illuminates his face. Static shot, high quality cinematic, Arri Alexa, film grain."
```

**Mengapa skrip ini berfungsi:**
1. **Aksi rendah:** Karakter sedang duduk. Pergerakannya terbatas pada "melihat ke atas", yang mana model video dapat diinterpolasi dengan lancar.
2. **Pencahayaan atmosfer:** Cahaya biru yang sejuk dan panel hijau yang bersinar memberi generator video tombol pencahayaan yang jelas untuk diikuti, sehingga menciptakan konsistensi.
3. **Didorong oleh sulih suara:** Dialognya adalah sulih suara (V.O.), yang berarti Anda tidak memerlukan sinkronisasi bibir yang sempurna untuk pengambilan gambar ini, sehingga menghilangkan gerakan mulut lembah yang luar biasa.

**Klip di bawah ini nyata, bukan mockup** — gambar jangkar dihasilkan melalui `nano-banana-2` dan dianimasikan menjadi klip sinematik pendek menggunakan `seedance-2-image-to-video-fast` dari kutipan skrip di atas, sehingga Anda dapat melihat seperti apa keluaran first-pass sebenarnya:



<p align="center"><i>An unedited first pass — character features, clothing, and background are held perfectly consistent from the starting storyboard frame because of first-frame conditioning.</i></p>

*Bagaimana ini sebenarnya diproduksi, secara end to end, melalui muapi API:*
1. Menghasilkan potret jangkar dengan **`nano-banana-2`** (teks-ke-gambar, $0,06/gambar) menggunakan perintah visual di atas dengan rasio aspek layar lebar.
2. Mengunggah gambar itu melalui titik akhir `upload_file` muapi untuk mendapatkan URL.
3. Masukkan URL gambar tersebut ke **`seedance-2-image-to-video-fast`** (gambar-ke-video, $0,50/klip) pada parameter `images_list` dengan perintah yang menjelaskan pergerakan kamera.
4. Mengunduh `.mp4` yang dihasilkan dan mengonversinya menjadi pratinjau GIF senyap di atas menggunakan `ffmpeg`.

---

## Bandingkan Alat

| LLM / Alat | Kemampuan Penulisan Skenario | Terbaik Untuk |
|---|---|---|
| **Claude 3.5 Soneta / Gemini 1.5 Pro** | Sangat baik dalam mengikuti batasan struktural yang kompleks dan menghasilkan perintah penurunan harga yang diformat. | Penulisan skrip secara keseluruhan dan pembuatan cepat. |
| **Alat AI Skenario Khusus** | Menyediakan format skrip standar (gaya Celtx/Draf Akhir) tetapi sering kali terlalu kaku dan tidak memiliki logika pembuatan cepat bawaan. | Alur kerja film standar, kurang dioptimalkan untuk alur kerja generasi AI. |
| **ObrolanGPT Plus (GPT-4o)** | Kemampuan menulis kreatif yang baik tetapi membutuhkan dorongan yang kuat untuk menghindari kiasan penulisan skenario yang klise. | Varian brainstorming dan dialog cepat. |

Jalur terbaik adalah memanfaatkan LLM perbatasan tujuan umum (Gemini/Claude) dengan perintah sistem terstruktur, karena memungkinkan Anda mengubah format cepat dengan cepat dan mengintegrasikan perintah kamera langsung ke dalam penurunan harga skrip.

---

## Luncurkan

**Cara memonetisasi keterampilan ini:**
* **Paket Skenario & Singkat:** Jual skrip visual praproduksi dan ringkasan film kepada pembuat atau agensi lain yang ingin memproduksi video AI. Skrip yang diformat sepenuhnya lengkap dengan tombol prompt storyboard dijual seharga **$50–$150** untuk video berdurasi 1 menit.
* **Adaptasi Pra-Produksi:** Menawarkan layanan adaptasi untuk skrip standar yang ada. Ambil naskah film pendek tradisional klien dan tulis ulang ke dalam "format yang dioptimalkan AI" untuk menghemat ribuan kredit yang terbuang selama produksi. Hargai ini dengan harga **$200–$500** per proyek.

**Di mana menemukan klien:**
Forum pembuat AI, server Discord (Runway, Midjourney, muapi), dan situs freelance (Fiverr/Upwork) di bawah "Konsultan Pra-Produksi" atau "Penulis Naskah AI".

---

## Latihan

1. **Mudah:** Ambil skrip film standar 1 halaman dan tulis ulang di bawah batasan yang mengutamakan AI (dibatasi hingga 1 lokasi, 1 karakter, dan tidak ada interaksi fisik objek tangan).
2. **Medium:** Tulis naskah thriller berdurasi 60 detik menggunakan format terintegrasi: bagi menjadi 5 pengambilan gambar, tulis deskripsi adegan, baris sulih suara, dan perintah visual yang tepat untuk setiap pengambilan gambar.
3. **Sulit:** Gunakan LLM teks untuk menghasilkan tiga opsi perintah visual untuk satu adegan, yang hanya memvariasikan lensa kamera (misalnya, potret 85 mm, sudut lebar 24 mm, anamorfik) dan jelaskan bagaimana hal ini mengubah suasana cerita.

---

## Templat

Templat yang dapat digunakan kembali yang dihasilkan modul ini — isi templat ini dan gunakan kembali pada pekerjaan nyata:

* [`templates/screenplay-prompt-template.md`](templates/screenplay-prompt-template.md) — format skenario yang dirancang khusus untuk menghasilkan perintah gambar/video.
* [`templates/ai-film-brief.md`](templates/ai-film-brief.md) — ringkasan permulaan proyek untuk mengunci estetika dan batasan visual.

---

[← Track overview](README.md) · Berikutnya: [Storyboarding & Shot Planning →](02-storyboarding-and-shots.md)
