# Bagaimana Sebenarnya AI UGC Bekerja

> Iklan UGC hanya terdiri dari lima bagian yang dijahit menjadi satu — setelah Anda dapat melihat jahitannya, Anda dapat membuat salah satu darinya.

**Lagu:** Iklan Video AI & UGC
**Waktu:** ~45 menit
**Prasyarat:** Tidak ada

## Masalahnya

Brand membayar pembuat konten nyata sebesar $200-$1.500 per iklan UGC (gaya konten buatan pengguna) karena iklan tersebut berkonversi lebih baik daripada iklan studio yang dipoles — terlihat seperti orang sungguhan berbicara di depan kamera tentang suatu produk, bukan iklan. Masalahnya: pencarian sumber, pengarahan, pembuatan film, dan revisi pencipta manusia berjalan lambat, dan tidak berskala. Sebuah merek yang ingin menguji 20 varian iklan tidak bisa mendapatkan 20 pembuat konten dalam waktu singkat.

UGC yang dihasilkan oleh AI memecahkan masalah penskalaan, namun kebanyakan orang yang mencobanya terjebak pada satu hal: "pencipta" AI mereka tidak terlihat konsisten dari satu gambar ke gambar lainnya, atau suara/sinkronisasi bibir terlihat palsu, dan iklan ditolak. Memahami alur sebenarnya — bukan sekadar "ketikkan perintah" — adalah hal yang membedakan iklan yang dapat digunakan dari iklan yang luar biasa.

## Konsep

Iklan AI gaya UGC terdiri dari lima tahap, masing-masing dapat diproduksi secara independen dan dapat ditukar:

```
Script  →  Avatar / Voice  →  Video  →  Captions  →  Export
```

- **Script** — kalimat percakapan singkat + nada + ajakan bertindak, ditulis dengan cara orang sungguhan berbicara, bukan teks iklan.
- **Avatar/Suara** — baik avatar kepala bicara yang dihasilkan dengan suara kloning/sintetis, atau gambar referensi diam yang dianimasikan dengan sinkronisasi bibir yang digerakkan oleh trek audio.
- **Video** — performa avatar, ditambah b-roll (jepretan produk, rekaman layar) apa pun yang dipotong di sekitarnya.
- **Teks** — teks yang dibuat secara otomatis dan tertanam, standar untuk format ini karena sebagian besar pemirsa menonton dalam mode senyap.
- **Ekspor** — format/rasio aspek yang disesuaikan dengan platform (9:16 untuk Reels/TikTok/Shorts, terkadang 1:1 atau 16:9).

Alasan mengapa pipeline ini lebih penting daripada "model terbaik" mana pun adalah karena setiap tahap dapat dihasilkan oleh alat yang berbeda, dan titik lemahnya adalah tahap mana pun yang terlihat paling tidak nyata — biasanya sinkronisasi wajah/suara avatar, bukan skrip atau teks.

## Lakukan itu

1. **Tulis naskahnya.** Ucapkan naskahnya kurang dari 30 detik (~75-90 kata). Struktur: hook (2 detik pertama — pertanyaan, klaim yang berani, atau kejutan visual), masalah/promosi (10-15 detik), bukti atau demo (10-15 detik), ajakan bertindak (2-3 detik terakhir).
2. **Hasilkan suara.** Gunakan model text-to-speech atau kloning suara untuk mengubah naskah menjadi narasi yang terdengar alami. Sesuaikan warna dengan produk (energik untuk gadget, tenang untuk perawatan kulit) — dan jangan berhenti pada pengambilan pertama. Buatlah 2-3 versi dengan tempo dan penekanan yang berbeda-beda (kata mana yang diberi tekanan pada garis pengait akan mengubah cara "terkejut" atau "santai" bacaannya), dan pilih salah satu yang kedengarannya paling tidak seperti dibacakan dari satu halaman. Kecocokan aksen/demografis dengan kemungkinan audiens produk juga penting di sini — suara yang tidak cocok dapat melemahkan naskah yang bagus.
3. **Buat atau animasikan avatar.** Buat video kepala bicara langsung dari skrip/suara, atau animasikan gambar referensi dengan sinkronisasi bibir yang digerakkan oleh trek audio.
4. **Tambahkan b-roll.** Potong gambar produk atau rekaman layar selama bagian pitch/proof — ini juga menyembunyikan bagian pendek yang tidak sempurna dalam rekaman avatar.
5. **Teks ​​dan ekspor.** Buat teks secara otomatis, masukkan, dan ekspor pada 09:16 untuk platform berdurasi pendek.
6. **Pemeriksaan pengiriman.** Sebelum mengirim apa pun ke klien, tonton iklan yang sudah selesai sekali dengan suara mati (apakah pengait berfungsi hanya dari teksnya?) dan sekali dengan suara menyala pada volume reguler. Jika Anda mendapati diri Anda berhenti sejenak di mana saja untuk mencari tahu apa yang terjadi, klien juga akan melakukannya — itu pertanda untuk memperbaiki atau memotong tempo, bukan hanya mengirimkannya dan melihatnya.

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/character-anchor.jpg" alt="Jangkar Karakter UGC" width="240">
<img src="templates/examples/gripmount-hook-clip.gif" alt="Gerakan Video Kait UGC (I2V)" width="240">
</p>
<p align="center"><sub>AI UGC Character Image (Left) ──► Image-to-Video Motion Loop (Right) · <a href="templates/examples/gripmount-hook-clip.mp4">MP4</a></sub></p>

Produk: dudukan telepon magnetik di mobil seharga $28 ("GripMount").

**Skrip** (hook/pitch/proof/CTA, ~28 detik diucapkan):

> "Oke, saya tidak mengira ini akan benar-benar menahan ponsel saya melalui lubang. [mengangkat ponsel, mengetuk dudukan] Dulu saya punya salah satu pengisap yang jatuh di setiap drive - yang ini bersifat magnetis, langsung menyala dalam waktu sekitar dua detik. [demo: menempelkan ponsel ke dudukan] Ini ditahan di setiap drive selama dua minggu terakhir, termasuk lubang. Harganya $28, tautan ada di bawah — sejujurnya, dapatkan saja sebelum perjalanan Anda berikutnya."

Dipetakan ke struktur:
- **Hook (0-2s):** "Oke, aku tidak mengira ini akan membuat ponselku masuk ke dalam lubang." — klaim yang mengejutkan dan spesifik, bukan generik (“produk ini hebat”).
- **Masalah/Pitch (2-15 detik):** menyebutkan kegagalan produk pesaing yang sebenarnya (dudukan pengisap terjatuh) — inilah yang membuatnya terdengar seperti orang sungguhan, bukan salinan iklan.
- **Bukti/Demo (15-25 detik):** demo visual (menampar ponsel) ditambah durasi nyata ("dua minggu, termasuk jalan berlubang") — angka tertentu dianggap lebih kredibel daripada "berhasil dengan baik".
- **CTA (25-28 detik):** harga dinyatakan dengan jelas, satu tindakan ("tautan ada di bawah"), urgensi terkait dengan kasus penggunaan nyata (perjalanan darat) dan bukan "beli sekarang" yang umum.

**Mengapa skrip ini dapat bertahan dalam produksi:** skrip ini cukup singkat untuk menghemat energi dalam sekali pengambilan, momen demo (menampar ponsel) memberi avatar sesuatu untuk *dilakukan* dengan tangannya alih-alih hanya berbicara — yang juga menyembunyikan ketidaksempurnaan kecil pada avatar — dan tidak pernah tertulis "AI" atau terdengar seperti skrip.

**Kesalahan umum pada percobaan pertama:** menulis bagian nada seperti salinan ("Memperkenalkan GripMount, cara baru yang revolusioner untuk...") alih-alih seperti ucapan. Bacalah naskah Anda dengan lantang sebelum membuat apa pun — jika Anda tidak ingin mengatakannya kepada teman, tulis ulang.

**Klip di bawah ini asli, bukan mockup** — gambar jangkar dari Modul 2 dianimasikan menjadi klip percakapan singkat dari garis kait di atas, sehingga Anda dapat melihat seperti apa keluaran first-pass sebenarnya sebelum pengeditan/b-roll/teks ditambahkan:



<p align="center"><i>An unedited first pass — lip movement is decent but not perfect, which is normal at this stage. Cutting in b-roll during the pitch/proof section (Do It, step 4) is what usually hides this kind of imperfection in a finished ad.</i></p>

*Bagaimana ini sebenarnya diproduksi, secara end to end, melalui muapi API:*
1. Menghasilkan potret jangkar dengan **`nano-banana-2`** (teks-ke-gambar, $0,06/gambar) — gambar yang sama yang digunakan dalam contoh Modul 2.
2. Mengunggah gambar tersebut melalui titik akhir `upload_file` muapi untuk mendapatkan URL yang dapat direferensikan oleh model berikutnya.
3. Masukkan URL gambar tersebut ke **`seedance-2-image-to-video-fast`** (gambar-ke-video, $0,75/klip) dengan perintah yang menjelaskan tindakan dan alur dialog yang tepat — tidak diperlukan sandi TTS/sinkronisasi bibir yang terpisah, karena model ini menghasilkan ucapan dan gerakan mulut secara bersamaan dari perintah tersebut.
4. Mengunduh `.mp4` yang dihasilkan dari CDN muapi (keluaran yang dihasilkan akan kedaluwarsa setelah 30 hari, jadi apa pun yang ingin Anda simpan perlu segera diunduh) dan mengonversikannya ke pratinjau GIF senyap di atas dengan `ffmpeg` untuk tampilan sebaris.

Total biaya untuk satu klip ini: **$0,81** untuk dua panggilan model. Ini persis seperti alur "model gambar → video, yang digerakkan oleh perintah" yang dijelaskan dalam Lakukan, langkah 3 — model yang disebutkan di sini adalah contoh terkini, bukan rekomendasi tetap; lihat Bandingkan Alat di bawah untuk mengetahui cara memilih model ketika sudah ketinggalan zaman.

## Bandingkan Alat

Nama model terus berubah, tetapi pilihan *kategori* lebih penting daripada model tertentu — inilah yang sebenarnya masuk akal untuk setiap tahap saat ini:

| Tahap | Model muapi yang bagus untuk diraih | Mengapa |
|---|---|---|
| Suara/TTS | Gemini TTS, teks-ke-dialog ElevenLabs | Penyampaian multi-speaker alami dengan kontrol emosi/kecepatan — bukan TTS robotik |
| Avatar/video (gambar → klip berbicara) | Seedance 2.x, Kling 3.0 | Model video generasi saat ini yang menangani gerakan kepala/tangan dan ucapan secara meyakinkan dalam satu gerakan, seperti dalam klip di atas |
| Sinkronisasi bibir (berbasis audio, ke video/gambar yang ada) | Model sinkronisasi bibir khusus (misalnya sinkronisasi bibir gaya sinkronisasi) atau model avatar Kling | Lebih cocok jika Anda sudah memiliki rekaman narasi terpisah yang perlu Anda cocokkan dengan wajah, daripada menghasilkan ucapan+gerakan secara bersamaan |

| Jalur | Biaya per iklan | Upaya pengaturan | Konsistensi | Terbaik untuk |
|---|---|---|---|---|
| **muapi API** (dikelola) | Biaya kredit per generasi, tanpa infra | Rendah — panggil titik akhir, dapatkan hasil | Tinggi — model/suara yang sama digunakan kembali melalui parameter API | Iterasi cepat, pekerjaan klien, pengujian banyak varian |
| **Alat UGC lengkap berbayar lainnya** | Seringkali harga per kursi berdasarkan langganan | Rendah, tetapi terkunci pada UI/alur kerja | Bervariasi menurut alat | Tim yang menginginkan GUI, bukan API |
| **Lokal/dihosting sendiri** (ComfyUI + model TTS/video lokal, misalnya LTX 2.3) | Gratis setelah perangkat keras, tetapi membutuhkan GPU yang mumpuni | Tinggi — pengaturan alur kerja, pengunduhan model, penyetelan | Bisa sangat tinggi sekali disetel, tapi lebih lambat untuk sampai ke sana | Tanpa biaya marjinal pada volume, kontrol penuh, klien yang sensitif terhadap privasi yang tidak menginginkan pemrosesan cloud |

LTX 2.3 layak diberi nama khusus untuk jalur lokalnya: ini adalah model video berbobot terbuka yang dapat dijalankan di ComfyUI, jadi ini adalah model lokal terdekat dengan model kelas Seedance/Kling di atas — lebih lemah, namun satu-satunya dari grup ini yang benar-benar dapat Anda jalankan di GPU Anda sendiri, bukan di panggilan API.

Pengorbanannya yang jujur: lokal benar-benar gratis per generasi setelah disiapkan, tetapi biaya pengaturan dan waktu iterasi adalah nyata — perkirakan untuk menghabiskan akhir pekan menyetel alur kerja ComfyUI sebelum dapat diandalkan. API adalah default yang tepat saat Anda masih mempelajari seperti apa tampilan "bagus"; lokal menjadi berharga setelah Anda memproduksi dengan volume nyata (puluhan iklan/bulan) atau klien secara khusus membutuhkan pembuatan di lokasi.

## Luncurkan

**Cara menentukan harganya:** Pertunjukan iklan bergaya UGC individual di pasar freelance menghasilkan sekitar $10-$55 per iklan yang selesai; agensi mempertahankan pekerjaan ini dengan harga $1.500-$3.000/bulan untuk batch yang sedang berlangsung. Harga berdasarkan hasil penayangan (misalnya, "$150 untuk 5 varian iklan") bukan berdasarkan jam — klien memahami paket iklan, bukan waktu produksi Anda.

**Cara memposisikannya:** Memimpin dengan hasil bisnis ("lebih banyak varian iklan untuk diuji, lebih cepat, tanpa kru film"), bukan proses AI. Merek yang membeli iklan UGC peduli dengan konversi dan kecepatan pengujian, bukan cara video dibuat.

**Di mana menemukan klien pertama:** Merek e-commerce DTC yang menjalankan iklan sosial berbayar adalah yang paling cocok — mereka sudah membeli UGC dan memahami formatnya. Penjangkauan dingin terhadap merek yang Anda lihat menjalankan iklan Meta/TikTok (terlihat di perpustakaan iklan publik platform) dengan contoh iklan untuk produk mereka yang sebenarnya adalah pembuka yang lebih kuat daripada promosi umum.

**Angka sebenarnya:** Studi kasus yang terdokumentasi menunjukkan bahwa masing-masing merek menjalankan materi iklan bergaya AI-UGC dengan pembelanjaan iklan sebesar $600K+/bulan untuk satu produk — intinya bukanlah Anda akan menyamainya, namun formatnya terbukti dalam skala besar, bukan hal baru.

## Latihan

1. **Mudah:** Tulis tiga skrip UGC berdurasi 30 detik untuk produk yang Anda gunakan, dengan mengikuti struktur hook/pitch/proof/CTA.
2. **Media:** Menghasilkan satu iklan lengkap secara end-to-end (skrip → suara → avatar → teks → ekspor) untuk produk nyata atau hipotetis.
3. **Sulit:** Buat 5 varian iklan yang sama (produk yang sama, pengait atau sudut berbeda) dan bandingkan pengait mana yang Anda harapkan berkinerja terbaik, dan alasannya.

## Templat

Templat yang dapat digunakan kembali yang dihasilkan modul ini — isi templat ini dan gunakan kembali pada pekerjaan nyata:

- [`templates/ugc-script-template.md`](templates/ugc-script-template.md) — struktur skrip hook/pitch/proof/CTA sebagai templat isian.
- [`templates/ad-brief-checklist.md`](templates/ad-brief-checklist.md) — daftar periksa untuk memberi pengarahan kepada diri Anda sendiri (atau klien) sebelum memproduksi batch.

---

[← Track overview](README.md) · Berikutnya: [Character & Face Consistency →](02-character-consistency.md)
