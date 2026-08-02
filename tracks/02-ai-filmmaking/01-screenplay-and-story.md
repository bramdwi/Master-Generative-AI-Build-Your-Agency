# Skenario & Pembuatan Cerita

> Naskah nan elok berharga terjangkau; namun narasi memikat yang benar-benar siap ditransformasikan oleh AI terbilang langka.

**Track:** Pembuatan Film AI
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Skenario konvensional dirancang khusus untuk dilakonkan oleh pemeran manusia serta dieksekusi oleh kru kamera. Sebuah naskah standar umumnya melukiskan "sebuah kafe nan riuh oleh lalu lalang pelanggan yang saling bersenda gurau, tatkala sang protagonis menghentakkan cangkir kopinya lantaran dibendung amarah, hingga cairan pekat itu tumpah meruah membasahi busana seorang pelayan yang melintas."

Apabila Anda menyuntikkan babak sedemikian rupa ke dalam model generatif video AI, hasil visualnya dipastikan akan mengalami kegagalan fatal. Paras para pengunjung akan terdistorsi, interaksi fisik tatkala kopi membasahi busana pelayan bakal terkesan seperti kejanggalan visual, dan mempertahankan konsistensi wajah sang protagonis agar tetap identik di setiap adegan menjadi sebuah keniscayaan yang sulit diwujudkan.

Mayoritas kreator film AI pemula mengawali langkah dengan merangkai narasi konvensional, yang pada akhirnya hanya membuang ratusan kredit generasi demi memaksakan sistem AI merekayasa dinamika fisik yang rumit, kerumunan yang padat, atau peralihan latar yang terus-menerus. Merancang skenario dengan **batasan berbasis AI** sejak awal merupakan pembeda utama antara mahakarya yang berhasil diselesaikan dan sekumpulan klip cacat yang berakhir di tong sampah.

## Konsep

Penulisan skenario berbasis AI merupakan seni merangkai narasi yang dirancang secara presisi dengan mempertimbangkan segala keterbatasan serta keunggulan model generatif.

### Kendala Inti Model Video Generatif:

- **Kesenjangan Fisika:** Model AI kerap kesulitan memproses interaksi objek yang rumit (seperti mengikat tali sepatu, menuangkan cairan, menyematkan kancing kemeja, atau menyantap hidangan).
- **Dilema Kerumunan:** Adegan apa pun yang menghadirkan lebih dari dua karakter dalam satu bingkai akan meningkatkan risiko distorsi visual secara drastis serta mengikis konsistensi identitas.
- **Batas Tindakan Berkelanjutan:** Sebagian besar model hanya sanggup memproduksi klip dalam rentang 4–5 detik. Adegan aksi berkelanjutan dalam satu adegan tanpa jeda (*single-take continuous action*) belum memungkinkan untuk dieksekusi.

Untuk menyiasati berbagai keterbatasan tersebut, kita merangkai naskah yang berfokus pada **postur karakter yang tenang, nuansa lingkungan, tata cahaya yang dramatis, serta dialog atau Voiceover yang menggugah**, alih-alih memaksakan adegan fisik yang rumit.

```
Story Outline → Constraint Check → Visual Script Formatting → Prompts Generation
```

Daripada melukiskan pergulatan fisik, alangkah lebih elok apabila Anda menyoroti *reaksi emosional* yang terpancar dari raut wajah karakter atau *suasana hati* dari latar tempat, yang dapat divisualisasikan dengan begitu memukau oleh generator video AI.

## Lakukan itu

### Langkah 1: Tentukan Kendala Produksi
Sebelum merangkai sepatah kata pun dalam naskah Anda, tetapkan batasan proyek secara tersurat di dalam ringkasan. Batasi variabel berikut:
- **Maksimal 1–2 karakter** demi menjaga konsistensi paras wajah.
- **Maksimal 2 lokasi** (misalnya, ruang kerja nan hening atau sudut jalan yang temaram).
- **Fokus atmosfer:** Tetapkan tema visual (seperti pendar neon *cyberpunk*, nuansa *retro-futurism* berdebu, atau estetika *noir* di siang hari) untuk mempertegas keanggunan gaya visual.

### Langkah 2: Tulis Skenario dengan Visual Anchor Prompts
Susun skenario Anda memanfaatkan tata letak yang memadukan konvensi penulisan naskah standar dengan penanda instruksi gambar atau video.
- Urai naskah menjadi beberapa adegan terpisah (masing-masing berdurasi 3–4 detik).
- Pada setiap adegan, gubah **deskripsi aksi visual** yang presisi dengan menyoroti detail mimik wajah atau pergerakan perlahan (*slow-motion*) dari karakter.
- Pertahankan dialog agar tetap ringkas (di bawah 15 kata per adegan) sehingga model TTS dapat melantunkannya secara natural tanpa terkesan terburu-buru.

### Langkah 3: Pembuatan Skrip LLM
Gunakan keandalan LLM berbasis teks (seperti Claude atau Gemini) untuk menggali ide dan memperhalus naskah. Terapkan perintah sistem yang mewajibkan AI untuk mematuhi batasan fisika:
> *Permintaan Sistem:* "Anda adalah seorang penulis skenario spesialis AI. Rangkai sebuah naskah fiksi ilmiah berdurasi 60 detik. Hanya melibatkan 1 karakter. Seluruh adegan berlangsung di dalam satu ruangan. Hindari interaksi objek fisik apa pun. Berfokuslah pada ekspresi wajah, pergerakan kamera perlahan (*slow-tracking shot*), serta dialog Voiceover. Untuk setiap babak, sajikan perintah visual terperinci yang menguraikan pergerakan kamera, komposisi bingkai, penampilan karakter, dan tata cahaya."

### Langkah 4: Pangkas Tindakan
Cermati naskah Anda kalimat demi kalimat. Apabila terdapat narasi seperti "Ia bangkit beranjak, melangkah menuju rak, mengambil sebuah buku, membukanya, lalu tersenyum," segera pangkas bagian tersebut. Ubah menjadi: "Ia duduk terpaku di hadapan meja, menatap lekat ke arah rak. [Kamera bergerak mendekati parasnya, menyibak rasa ingin tahu yang mendalam]." Formulasi ini jauh lebih mudah untuk dieksekusi secara visual.

### Langkah 5: Simpan Jangkar Karakter & Gaya
Susun panduan gaya (*style sheet*) yang memuat awalan instruksi (*prompt prefix*) Anda (cakupan tata cahaya, jenis stok film, hingga rasio aspek) agar dapat disalin dan disematkan ke dalam generator gambar secara konsisten.

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/astronaut-anchor.jpg" alt="Potret Pahlawan untuk Sinyal Terakhir: Astronot dalam setelan penerbangan" width="320">
<img src="templates/examples/astronaut-intro-clip.gif" alt="Klip Gerakan Karakter Pahlawan (I2V)" width="320">
</p>
<p align="center"><sub>Gambar Karakter Utama (Kiri) ──► Animasi Gambar-ke-Video (Kanan) · Berkas Video: <a href="templates/examples/astronaut-intro-clip.mp4">MP4</a></sub></p>

**Ringkasan Film: "Sinyal Terakhir"**
- **Karakter:** John (40-an), seorang astronot yang dirundung keletihan.
- **Lokasi:** Geladak komunikasi wahana antariksa.
- **Suasana:** Fiksi ilmiah sinematik dengan pendar cahaya biru nan syahdu.

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
1. **Minim pergerakan:** Karakter berada dalam posisi duduk. Dinamika geraknya terbatas hanya pada "mengarahkan pandangan ke atas", yang dapat diinterpolasikan secara halus oleh model video.
2. **Pencahayaan atmosferik:** Temaram cahaya biru nan dingin serta pendar hijau dari panel instrumen menyajikan pemicu visual yang jelas bagi generator video, sehingga menciptakan ketepatan estetika yang konsisten.
3. **Berfokus pada Voiceover:** Dialog disampaikan melalui penceritaan *voiceover* (V.O.), yang bermakna Anda tidak memerlukan penyelarasan bibir (*lip sync*) yang sempurna untuk adegan ini, sekaligus mengeliminasi kejanggalan gerak mulut yang tidak natural.

**Klip di bawah ini nyata, bukan sekadar visualisasi tiruan** — gambar jangkar dihasilkan menggunakan **`nano-banana-2`** dan dianimasikan menjadi adegan sinematik singkat memanfaatkan **`seedance-2-image-to-video-fast`** berdasarkan kutipan naskah di atas, sehingga Anda dapat mengamati secara langsung wujud asli dari proses generasi tahap awal:

<p align="center"><i>Generasi tahap awal tanpa penyuntingan — ciri fisik karakter, pakaian, dan latar belakang terjaga secara konsisten dari bingkai papan cerita awal karena pengondisian bingkai pertama.</i></p>

*Tata cara produksinya secara menyeluruh dari awal hingga akhir via muapi API:*
1. Memproduksi potret jangkar menggunakan **`nano-banana-2`** (text-to-image, $0,06/gambar) memanfaatkan instruksi visual di atas dalam format rasio layar lebar.
2. Mengunggah gambar tersebut melalui titik akhir `upload_file` pada muapi untuk mendapatkan tautan URL.
3. Menyematkan tautan URL gambar tersebut ke dalam **`seedance-2-image-to-video-fast`** (image-to-video, $0,50/klip) pada parameter `images_list` disertai instruksi yang menguraikan dinamika pergerakan kamera.
4. Mengunduh berkas `.mp4` hasil generasi lalu mengonversinya menjadi format animasi GIF tanpa suara di atas menggunakan utilitas `ffmpeg`.

## Bandingkan Alat

| LLM / Alat | Kemampuan Penulisan Skenario | Terbaik Untuk |
| --- | --- | --- |
| **Claude 3.5 Sonnet / Gemini 1.5 Pro** | Sangat mumpuni dalam mematuhi batasan struktural yang rumit serta menghasilkan instruksi Markdown yang terformat rapi. | Penulisan naskah secara komprehensif dan perancangan *prompt*. |
| **Alat AI Skenario Khusus** | Menyajikan format naskah standar (gaya Celtx atau Final Draft) namun kerap kaku serta belum dilengkapi logika perancangan *prompt* secara terintegrasi. | Alur kerja pembuatan film konvensional, kurang teroptimasi untuk skema produksi berbasis AI. |
| **ChatGPT Plus (GPT-4o)** | Memiliki kapabilitas penulisan kreatif yang baik, tetapi membutuhkan pengarahan yang tegas agar tidak terjebak dalam klise naskah konvensional. | Eksplorasi ide (*brainstorming*) serta variasi dialog secara cepat. |

Metode paling ideal adalah memanfaatkan LLM unggulan serbaguna (seperti Gemini atau Claude) yang dipadukan dengan *system prompt* yang terstruktur, sebab memungkinkan Anda menyesuaikan format instruksi secara fleksibel sekaligus menyelaraskan arahan kamera secara langsung ke dalam tata letak naskah.

## Luncurkan

**Strategi mengomersialkan keahlian ini:**
- **Paket Skenario & Singkat:** Pasarkan naskah visual praproduksi serta ringkasan film kepada para kreator atau agensi yang hendak memproduksi video berbasis AI. Skenario yang tersusun rapi beserta instruksi *storyboard* dijual pada kisaran harga **$50–$150** untuk durasi video 1 menit.
- **Adaptasi Pra-Produksi:** Tawarkan jasa penyelarasan untuk naskah standar yang sudah ada. Alih bahasakan naskah film pendek konvensional milik klien ke dalam "format teroptimasi AI" guna menghemat alokasi ratusan kredit yang berisiko terbuang selama proses produksi. Tetapkan tarif pada rentang **$200–$500** untuk setiap proyek.

**Saluran untuk menggaet klien:**
Komunitas pembuat konten AI, server Discord (seperti Runway, Midjourney, muapi), serta platform pekerja lepas (seperti Fiverr atau Upwork) dengan pemosisian sebagai "Konsultan Pra-Produksi" atau "Penulis Skenario AI".

## Latihan

1. **Mudah:** Ambil naskah film konvensional sepanjang 1 halaman, lalu gubah ulang di bawah koridor batasan berbasis AI (dibatasi hanya 1 lokasi, 1 karakter, serta bebas dari interaksi fisik antar-objek).
2. **Sedang:** Susun naskah film bergenre *thriller* berdurasi 60 detik menggunakan tata letak terintegrasi: bagi menjadi 5 adegan, rangkai deskripsi visual, baris *voiceover*, serta instruksi visual yang presisi untuk setiap adegan.
3. **Sulit:** Manfaatkan LLM berbasis teks untuk memproduksi tiga variasi instruksi visual pada satu adegan, dengan hanya memvariasikan jenis lensa kamera (misalnya, potret 85 mm, sudut lebar 24 mm, atau *anamorphic*), lalu uraikan bagaimana penyesuaian tersebut mentransformasi lanskap emosional cerita.

## Template

Template siap guna yang dihasilkan oleh modul ini — Anda dapat melengkapi serta memanfaatkannya kembali untuk kebutuhan proyek riil:

- [`templates/screenplay-prompt-template.md`](templates/screenplay-prompt-template.md) — tata letak skenario yang dirancang khusus untuk memproduksi instruksi gambar maupun video.
- [`templates/ai-film-brief.md`](templates/ai-film-brief.md) — ringkasan inisiasi proyek guna mengunci esensi estetika serta batasan visual.

---

[← Track overview](README.md) · Berikutnya: [Storyboarding & Perencanaan Shot →](02-storyboarding-and-shots.md)
