# Pembuatan Storyboard & Perencanaan Pengambilan Gambar

> Storyboard merupakan cetak biru yang menghindarkan Anda dari pemborosan credit saat mengeksekusi pembuatan video secara acak.

**Track:** Pembuatan Film AI
**Waktu:** ~40 menit
**Prasyarat:** Skenario & Pembuatan Cerita

## Masalahnya

Menghasilkan klip video secara langsung dari prompt teks merupakan sebuah spekulasi. Model video AI membutuhkan biaya yang tinggi, proses rendering yang relatif lambat, serta sangat sulit untuk diprediksi. Jika Anda memasukkan prompt seperti `"A spaceship interior, John walking towards the door"` ke dalam generator video, Anda mungkin memperoleh visualisasi yang apik, namun busana John bisa saja mendadak berwarna biru, nuansa ruangan tampak benderang, dan sudut kamera justru terambil dari arah langit-langit. Saat diuji kembali dalam iterasi berikutnya, porsi rupa serta busana John akan bergeser secara menyeluruh.

Apabila Anda memproduksi 20 klip video melalui prosedur ini, hasil akhirnya hanyalah sekumpulan rekaman yang terfragmentasi dan tampak seperti berasal dari 20 karya sinematik yang berbeda. Pada akhirnya, Anda akan menghamburkan investasi bernilai puluhan dolar untuk credit serta menyia-nyiakan waktu berjam-jam dalam masa penantian.

Guna mewujudkan sinematografi yang koheren, Anda diwajibkan membangun kontinuitas visual — mencakup tata cahaya, palet warna, framing kamera, hingga penokohan karakter — **sebelum** Anda mengeksekusi rendering pada satu frame video pun. Storyboard bertindak sebagai kontrol kualitas utama yang mengunci seluruh elemen ini secara jauh lebih efisien.

## Konsep

Storyboarding dalam lanskap pembuatan film AI merupakan seni merangkai komposisi gambar statis yang merepresentasikan rangkaian shot utama dari karya Anda.

Dengan mengoptimalkan penggunaan model gambar berpresisi tinggi (seperti Flux atau Midjourney) ketimbang langsung mengeksekusi model video, Anda dapat mengevaluasi estetika, komposisi, serta konsistensi secara terukur. Frame storyboard statis ini kelak bertindak sebagai **input frame awal** bagi generator image-to-video Anda.

```
Visual Style Guide → Character Anchor → Storyboard Images → Image-to-Video
```

Guna memelihara konsistensi visual di seluruh jajaran storyboard, Anda perlu bersandar pada **Style Guide** yang mencakup:
- **Prefix Gaya:** Rangkaian deskriptor visual terstandarisasi (seperti jenis stok film, tata cahaya, atau karakter lensa) yang disematkan pada setiap prompt.
- **Aspect Ratio:** Penetapan tata letak presisi yang diselaraskan dengan format layar sasaran Anda.
- **Referensi Karakter:** Aset gambar awal dari karakter yang telah terkunci untuk dimasukkan kembali ke dalam model demi menjaga keutuhan detail rupa.

## Lakukan itu

### Langkah 1: Rancang Panduan Gaya Visual
Tentukan parameter estetika Anda mengacu pada [`templates/style-guide-template.md`](templates/style-guide-template.md). Kunci pilihan stok film Anda (misalnya `35mm film grain`), palet warna (misalnya `teal shadows, warm amber highlights`), serta aspect ratio kamera (misalnya `--ar 16:9`).

### Langkah 2: Tetapkan Gambar Jangkar Karakter
Sebelum menyusun adegan, ciptakan "potret pahlawan" bagi karakter utama Anda.
- Gubah prompt terperinci yang melukiskan paras karakter, tatanan rambut, estimasi usia, hingga atribut busana yang spesifik (misalnya, `"A worn silver flight suit with a red shoulder patch"`).
- Hasilkan gambar ini memanfaatkan model beresolusi tinggi.
- Simpan kurasi gambar terbaik tersebut sebagai **Gambar Referensi Karakter (Cref)** Anda.

### Langkah 3: Hasilkan Frame Storyboard
Untuk setiap shot dalam skenario, rancanglah sebuah frame statis.
- Awali setiap prompt menggunakan **Prefix Gaya** yang telah ditetapkan.
- Uraikan komposisi framing-nya (Wide Shot, Medium Shot, Close-up).
- Tautkan Gambar Jangkar Karakter Anda memanfaatkan fitur referensi image-to-image atau kapabilitas karakter pada model.
- Pertahankan nilai seed adegan agar senantiasa konstan jika didukung oleh model, dengan hanya menyesuaikan bervariasinya framing dan gestur karakter.

### Langkah 4: Susun Daftar Pemotretan
Dokumentasikan setiap frame yang berhasil dieksekusi ke dalam [`templates/shot-list-template.md`](templates/shot-list-template.md). Catat komposisi framing kamera, dinamika aksi sasaran, untaian dialog, hingga direktori file gambar storyboard statis yang telah disetujui.

### Langkah 5: Evaluasi Kontinuitas Visual
Sandingkan frame storyboard secara berdampingan lalu lakukan evaluasi pergeseran (drift check):
- Apakah rupa rambut atau busana karakter mengalami diskontinuitas yang signifikan saat transisi pemotongan shot dilakukan?
- Apakah tata cahaya lingkungan mengubah temperatur warna secara drastis?
- Jika terdeteksi pergeseran, lakukan render ulang pada frame tersebut sembari memperketat deskripsi teks pada prompt untuk mengeliminasi anomali.

## Contoh yang berhasil

**Skenario Storyboard & Rincian Adegan untuk "The Last Signal" (Adegan 1)**

Berikut merupakan cuplikan skenario untuk Adegan 1 beserta perincian storyboard AI 3-shot yang saling terintegrasi:

```markdown
SCENE 1: INT. SPACESHIP COCKPIT - NIGHT

A cramped, metallic flight deck illuminated only by flickering instrument lights. Volumetric green glow washes over the curved control panels. 

JOHN (40s, tired eyes, wearing a weathered silver flight suit) sits alone in the pilot seat. He stares up at a dusty overhead monitor as static hums over the speakers.

JOHN (V.O.)
Day 412. Still no response from deep space relay Theta. If anyone is listening... this is my final transmission.

The overhead monitor flickers aggressively before flashing stark green text: NO SIGNAL.
```

### Daftar Gambar Storyboard & Perumpamaan Visual

#### Shot 1: Establishing Wide Shot (WS)
<p align="center">
<img src="templates/examples/storyboard-shot1-wide.jpg" alt="Shot 1: Establishing Wide Shot" width="480">
</p>

> **Prompt:** `"Cinematic 35mm film photograph, establishing wide shot of a cramped spaceship cockpit. glowing green control panels line the curved metallic walls. Muted teal lighting with deep shadows. No characters. Widescreen, highly detailed."`

#### Shot 2: Medium Shot (MS - Introduksi Karakter)
<p align="center">
<img src="templates/examples/storyboard-shot2-medium.jpg" alt="Shot 2: Medium Shot" width="480">
</p>

> **Prompt:** `"Cinematic 35mm film photograph, medium shot of a tired astronaut (40s, short gray hair, stubble, wearing a worn silver flight suit) sitting in a pilot seat inside a spaceship cockpit. Cool blue light illuminates his face, glowing green control panels out of focus in the background. Widescreen."` *(Gambar Referensi: Jangkar Karakter)*

#### Shot 3: Close-up (CU - Detail Properti)
<p align="center">
<img src="templates/examples/storyboard-shot3-closeup.jpg" alt="Shot 3: Close-up" width="480">
</p>

> **Prompt:** `"Cinematic 35mm film photograph, extreme close-up of a dusty CRT monitor screen showing static and a flashing green text reading 'NO SIGNAL'. Widescreen."`

#### Shot 4: Animasi Dinamika Image-to-Video (I2V)
<p align="center">
<img src="templates/examples/storyboard-shot1-wide.jpg" alt="Bingkai Statis Wide" width="240">
<img src="templates/examples/storyboard-anim-clip.gif" alt="Urutan Storyboard Animasi (I2V)" width="240">
</p>
<p align="center"><sub>Bingkai Storyboard Statis (Kiri) ──► Animasi Gerakan Gambar-ke-Video (Kanan) · Berkas Video: <a href="templates/examples/storyboard-anim-clip.mp4">MP4</a></sub></p>

**Mengapa struktur ini berhasil:**
- Wide Shot mengukuhkan dimensi ruang secara komprehensif.
- Medium Shot memperkenalkan sosok astronot dengan memanfaatkan gambar referensi jangkar karakter guna mengunci keutuhan rupa wajahnya.
- Close-up berfokus secara presisi pada objek properti, di mana elemen non-organik bebas dari risiko diskontinuitas wajah sehingga ideal dijadikan sebagai transisi shot yang mulus.
- Ketiga prompt menyandarkan deskripsi pada Prefix yang seragam, yakni `"Cinematic 35mm film photograph"`, serta merujuk pada pendar instrumen hijau di kokpit demi menjamin kontinuitas warna.

## Bandingkan Alat

| Jalur / Alat | Basis Biaya | Konsistensi | Terbaik Untuk |
| --- | --- | --- | --- |
| **Flux 1.1 / Midjourney v6** (via muapi) | Efisien (~$0,01 hingga $0,06 per pembuatan gambar) | Sangat Tinggi — mendukung image-to-image, referensi gaya, serta kontrol seed | Akselerasi iterasi storyboard secara presisi dan penataan karakter |
| **Perangkat Lunak Storyboard Khusus (GUI)** | Berbasis langganan | Terbatas — gaya sketsa umum, belum dilengkapi rendering AI fotorealistis | Sketsa ilustrasi tangan konvensional, kurang teroptimasi untuk pembuatan film berbasis AI |
| **ComfyUI Lokal (Flux/SDXL)** | Bebas biaya pasca-investasi GPU | Sangat Tinggi — ControlNet khusus, IP-Adapter, serta pemuatan LoRA lokal | Kreator tingkat lanjut yang mendambakan kontrol tata letak presisi hingga tingkat piksel tanpa biaya marjinal |

API pembuatan gambar serbaguna (seperti Flux atau Midjourney) merupakan instrumen paling ideal untuk merancang storyboard. Efisiensi biayanya memungkinkan Anda mengeksekusi puluhan variasi hingga menemukan komposisi yang sempurna sebelum dialirkan menuju generator video.

## Luncurkan

**Strategi Mengomersialkan Keahlian Ini:**
- **Layanan Storyboard Visual:** Tawarkan solusi kepada agensi kreatif maupun sutradara independen yang membutuhkan visualisasi storyboard berkualitas tinggi untuk kebutuhan presentasi proyek mereka. Standar tarif storyboard profesional berkisar antara **$150–$400** untuk setiap dokumen storyboard (berisi 10–15 frame). Posisikan keunggulan Anda pada efisiensi waktu penyelesaian (proses perputaran 24 jam dibandingkan 5 hari pada seniman konvensional).
- **Pitch Deck Creator:** Kemas storyboard, mood board, serta konsep naskah ke dalam sebuah "Pitch Deck" sinematik yang bernilai tinggi guna membantu sineas independen mengamankan investasi maupun sponsor. Paket komprehensif ini dapat ditawarkan pada kisaran **$300–$800**.

**Saluran untuk Menggaet Klien:**
Komunitas sineas independen, forum sutradara, platform Upwork, hingga direktori agensi produksi. Lakukan pendekatan komunikasi secara personal kepada agensi produksi video lokal dengan menyajikan "sampel storyboard 3 frame cuma-cuma" yang disesuaikan dengan salah satu rencana proyek mereka yang akan datang.

## Latihan

1. **Mudah:** Rancang Panduan Gaya Visual untuk karya sinematik bergenre neo-noir yang berlatar kota berhujan, dengan merinci skema warna, karakter tata cahaya, serta negative prompt secara spesifik.
2. **Sedang:** Hasilkan 3 frame storyboard (WS, MS, CU) untuk karakter yang tengah duduk di bangku taman pada momen golden hour, sembari memelihara kontinuitas karakter dan warna di ketiga pengambilan gambar tersebut.
3. **Sulit:** Susun alur storyboard di mana karakter bertransisi dari lokasi interior (berpendar hangat) menuju area eksterior (berpendar dingin di siang hari). Gubah prompt transisi yang melukiskan bagaimana pergeseran cahaya menerpa wajah karakter tanpa merusak atribut busana maupun identitas utamanya.

## Template

Template siap guna yang dihasilkan oleh modul ini:

- [`templates/storyboard-script-template.md`](templates/storyboard-script-template.md) — template perincian untuk menyusun pengambilan gambar storyboard AI dan perintah Image-to-Video.
- [`templates/shot-list-template.md`](templates/shot-list-template.md) — pelacak untuk mencatat bingkai, bingkai kamera, dan petunjuknya.
- [`templates/style-guide-template.md`](templates/style-guide-template.md) — template untuk mengunci awalan cepat, rasio aspek, dan palet warna film Anda.

---

[← Sebelum: Skenario & Pembuatan Cerita](01-screenplay-and-story.md) · [Track overview](README.md) · Berikutnya: [Pergerakan Kamera & Sinematografi →](03-camera-movement.md)
