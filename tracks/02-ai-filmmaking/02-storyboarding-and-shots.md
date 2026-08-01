# Pembuatan Storyboard & Perencanaan Pengambilan Gambar

> Papan cerita adalah cetak biru yang menghentikan Anda membakar kredit pada pembuatan video secara acak.

**Lagu:** Pembuatan Film AI
**Waktu:** ~40 menit
**Prasyarat:** Skenario & Pembuatan Cerita

## Masalahnya

Menghasilkan klip video langsung dari perintah teks adalah sebuah pertaruhan. Model video AI mahal, proses renderingnya lambat, dan sangat tidak dapat diprediksi. Jika Anda mengetikkan perintah seperti `"A spaceship interior, John walking towards the door"` ke dalam generator video, Anda mungkin mendapatkan gambar yang bagus, namun pakaian John mungkin berwarna biru, ruangan mungkin terang benderang, dan sudut kamera mungkin dari langit-langit. Jika dijalankan lagi, wajah dan pakaian John akan berubah total.

Jika Anda menghasilkan 20 klip video dengan cara ini, Anda akan mendapatkan kumpulan rekaman terputus-putus yang terlihat seperti milik 20 film berbeda. Anda akan membuang puluhan dolar untuk memberikan kredit dan menunggu berjam-jam.

Untuk membuat film yang koheren, Anda perlu membangun kesinambungan visual — pencahayaan, palet warna, framing kamera, dan pemilihan karakter — **sebelum** Anda merender satu frame video. Storyboard adalah penjaga gerbang yang mengunci elemen-elemen ini dengan biaya yang lebih murah.

## Konsep

Storyboarding untuk pembuatan film AI adalah proses menghasilkan rangkaian gambar statis yang mewakili pengambilan gambar utama film Anda.

Dengan menggunakan model gambar berkualitas tinggi (seperti Flux atau Midjourney) alih-alih model video, Anda dapat dengan cepat menguji gaya, komposisi, dan konsistensi. Bingkai storyboard statis ini kemudian bertindak sebagai **input bingkai awal** untuk generator gambar-ke-video Anda.

```
Visual Style Guide → Character Anchor → Storyboard Images → Image-to-Video
```

Untuk menjaga konsistensi visual di seluruh storyboard, Anda mengandalkan **Panduan Gaya** yang berisi:
* **Awalan Gaya:** Serangkaian deskriptor visual standar (stok film, pencahayaan, lensa) ditambahkan ke setiap perintah.
* **Rasio Aspek:** Memperbaiki tata letak yang sesuai dengan format layar target Anda.
* **Referensi Karakter:** Gambar awal karakter Anda yang terkunci dimasukkan kembali ke dalam model untuk mempertahankan detail wajah.

---

## Lakukan itu

### Langkah 1: Buat Panduan Gaya Visual
Tentukan parameter estetika Anda menggunakan [`templates/style-guide-template.md`](templates/style-guide-template.md). Kunci stok film Anda (misalnya `35mm film grain`), palet warna Anda (misalnya `teal shadows, warm amber highlights`), dan rasio aspek kamera Anda (misalnya `--ar 16:9`).

### Langkah 2: Tetapkan Gambar Jangkar Karakter
Sebelum menyusun adegan, buatlah "potret pahlawan" karakter Anda.
* Tulis prompt mendetail yang menjelaskan wajah karakter, rambut, usia, dan elemen pakaian tertentu (misalnya, `"A worn silver flight suit with a red shoulder patch"`).
* Hasilkan gambar ini menggunakan model berkualitas tinggi.
* Simpan gambar terbaik. Ini adalah **Gambar Referensi Karakter (Cref)** Anda.

### Langkah 3: Hasilkan Bingkai Storyboard
Untuk setiap pengambilan gambar dalam skenario Anda, buat bingkai statis.
* Mulai setiap perintah dengan **Awalan Gaya** Anda.
* Jelaskan pembingkaiannya (Pemotretan Lebar, Pemotretan Sedang, Close-up).
* Referensikan Gambar Jangkar Karakter Anda menggunakan kemampuan referensi gambar-ke-gambar atau karakter model.
* Jaga agar benih adegan tetap konstan jika model mendukungnya, dengan hanya memvariasikan framing dan postur karakter.

### Langkah 4: Buat Daftar Pemotretan
Catat setiap frame yang dihasilkan ke [`templates/shot-list-template.md`](templates/shot-list-template.md) Anda. Catat pembingkaian kamera, tindakan target, baris dialog, dan jalur file gambar storyboard statis yang disetujui.

### Langkah 5: Periksa Kontinuitas Visual
Tempatkan bingkai storyboard bersebelahan. Lakukan pemeriksaan penyimpangan:
* Apakah rambut atau pakaian karakter berubah secara signifikan saat dipotong?
* Apakah pencahayaan lingkungan mengubah suhu warna?
* Jika ya, render ulang frame yang melayang, perketat teks yang diminta untuk mengesampingkan perubahan.

---

## Contoh yang berhasil

**Skrip Papan Cerita & Perincian Adegan untuk "The Last Signal" (Adegan 1)**

Di bawah ini adalah cuplikan skrip skenario untuk Adegan 1 dan rincian storyboard AI 3-shot yang terkait:

```markdown
SCENE 1: INT. SPACESHIP COCKPIT - NIGHT

A cramped, metallic flight deck illuminated only by flickering instrument lights. Volumetric green glow washes over the curved control panels. 

JOHN (40s, tired eyes, wearing a weathered silver flight suit) sits alone in the pilot seat. He stares up at a dusty overhead monitor as static hums over the speakers.

JOHN (V.O.)
Day 412. Still no response from deep space relay Theta. If anyone is listening... this is my final transmission.

The overhead monitor flickers aggressively before flashing stark green text: NO SIGNAL.
```

### Daftar Gambar Storyboard & Contoh Visual

#### Bidikan 1: Bidikan Penetapan Lebar (WS)
<p align="center">
<img src="templates/examples/storyboard-shot1-wide.jpg" alt="Bidikan 1 Bidikan Pembentuk Lebar" width="480">
</p>
> **Permintaan:** `"Cinematic 35mm film photograph, establishing wide shot of a cramped spaceship cockpit. glowing green control panels line the curved metallic walls. Muted teal lighting with deep shadows. No characters. Widescreen, highly detailed."`

#### Bidikan 2: Bidikan Sedang (MS - Intro Karakter)
<p align="center">
<img src="templates/examples/storyboard-shot2-medium.jpg" alt="Intro Karakter Sedang Shot 2" width="480">
</p>
> **Permintaan:** `"Cinematic 35mm film photograph, medium shot of a tired astronaut (40s, short gray hair, stubble, wearing a worn silver flight suit) sitting in a pilot seat inside a spaceship cockpit. Cool blue light illuminates his face, glowing green control panels out of focus in the background. Widescreen."` *(Gambar Referensi: Jangkar Karakter)*

#### Bidikan 3: Jarak Dekat (CU - Bidikan Detail Alat Peraga)
<p align="center">
<img src="templates/examples/storyboard-shot3-closeup.jpg" alt="Pemotretan 3 Monitor CRT Jarak Dekat" width="480">
</p>
> **Permintaan:** `"Cinematic 35mm film photograph, extreme close-up of a dusty CRT monitor screen showing static and a flashing green text reading 'NO SIGNAL'. Widescreen."`

#### Bidikan 4: Animasi Gerakan Gambar-ke-Video (I2V)
<p align="center">
<img src="templates/examples/storyboard-shot1-wide.jpg" alt="Memotret 1 Bingkai Statis Lebar" width="240">
<img src="templates/examples/storyboard-anim-clip.gif" alt="Urutan Storyboard Animasi (I2V)" width="240">
</p>
<p align="center"><sub>Static Storyboard Frame (Left) ──► Image-to-Video Motion Animation (Right) · Video File: <a href="templates/examples/storyboard-anim-clip.mp4">templates/examples/storyboard-anim-clip.mp4</a></sub></p>

**Mengapa urutan ini berhasil:**
* Bidikan Lebar menentukan ruang.
* Bidikan Medium memperkenalkan astronot yang menggunakan gambar referensi jangkar karakter untuk mengunci wajahnya.
* Bidikan Close-up berfokus pada sebuah alat peraga. Alat peraga tidak memiliki masalah penyimpangan wajah, menjadikannya bidikan transisi yang sangat baik.
* Ketiga petunjuk tersebut memiliki awalan `"Cinematic 35mm film photograph"` yang sama dan merujuk pada panel hijau menyala di kokpit, sehingga memastikan kesinambungan warna.

---

## Bandingkan Alat

| Jalur / Alat | Dasar biaya | Konsistensi | Terbaik untuk |
|---|---|---|---|
| **Flux 1.1 / Midjourney v6** (melalui muapi) | Rendah (~$0,01 hingga $0,06 per pembuatan gambar) | Sangat Tinggi — mendukung gambar-ke-gambar, referensi gaya, dan kontrol benih | Iterasi papan cerita yang cepat dan penataan karakter |
| **Perangkat Lunak Storyboard Khusus (GUI)** | Berbasis langganan | Rendah — gaya sketsa umum, tidak memiliki rendering AI foto-realistis | Papan gambar tangan tradisional, tidak dioptimalkan untuk pembuatan film AI |
| **UI Nyaman Lokal (Flux/SDXL)** | Gratis setelah investasi GPU | Sangat Tinggi — ControlNet khusus, Adaptor IP, dan pemuatan LoRA lokal | Pembuat konten tingkat lanjut yang menginginkan kontrol tata letak tingkat piksel dan biaya pembuatan nol |

API pembuatan gambar tujuan umum (seperti Flux/Midjourney) adalah pilihan terbaik untuk storyboard. Mereka cukup murah untuk menjalankan lusinan variasi hingga Anda mendapatkan tata letak yang sempurna, yang kemudian dapat Anda teruskan ke generator video.

---

## Luncurkan

**Cara memonetisasi keterampilan ini:**
* **Layanan Storyboard Visual:** Promosikan biro iklan atau sutradara independen yang membutuhkan storyboard visual untuk promosi mereka. Tarif storyboard standar adalah **$150–$400** per dek storyboard (10-15 frame). Fokuskan promosi Anda pada kecepatan pengiriman (perputaran 24 jam vs. 5 hari untuk artis manual).
* **Pitch Deck Creator:** Kemas storyboard, mood board, dan konsep naskah ke dalam "Pitch Deck" sinematik yang digunakan pembuat film indie untuk mendapatkan pendanaan atau sponsor. Harga paket ini **$300–$800**.

**Di mana menemukan klien:**
Jalan bebas hambatan film, forum sutradara, Upwork, dan direktori agensi produksi. Kirim email dingin ke agensi produksi video lokal yang menawarkan "sampel papan cerita 3 bingkai gratis" untuk salah satu promosi mereka yang akan datang.

---

## Latihan

1. **Mudah:** Buat Panduan Gaya Visual untuk film neo-noir yang berlatar kota hujan, dengan merinci warna, gaya pencahayaan, dan petunjuk negatif.
2. **Sedang:** Menghasilkan 3 gambar papan cerita (WS, MS, CU) untuk karakter yang duduk di bangku taman pada jam emas, menjaga konsistensi karakter dan warna di ketiga pengambilan gambar.
3. **Sulit:** Siapkan urutan storyboard di mana karakter berpindah dari lokasi dalam ruangan (pencahayaan hangat) ke lokasi luar ruangan (siang hari sejuk). Tulis petunjuk transisi untuk menunjukkan bagaimana cahaya berubah di wajah mereka sambil menjaga pakaian dan identitas karakter tetap terkunci.

---

## Templat

Templat yang dapat digunakan kembali yang dihasilkan modul ini:

* [`templates/storyboard-script-template.md`](templates/storyboard-script-template.md) — templat perincian untuk menyusun pengambilan gambar storyboard AI dan perintah Gambar-ke-Video.
* [`templates/shot-list-template.md`](templates/shot-list-template.md) — pelacak untuk mencatat bingkai, bingkai kamera, dan petunjuknya.
* [`templates/style-guide-template.md`](templates/style-guide-template.md) — templat untuk mengunci awalan cepat, rasio aspek, dan palet warna film Anda.

---

[← Screenplay & Story Generation](01-screenplay-and-story.md) · Berikutnya: [Camera Movement & Cinematography Prompts →](03-camera-movement.md)
