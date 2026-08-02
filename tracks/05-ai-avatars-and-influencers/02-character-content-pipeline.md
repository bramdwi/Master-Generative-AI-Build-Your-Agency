# Karakter ke Saluran Konten

> Karakternya adalah wajahnya, namun geraknya menjadikannya nyata.

**Lacak:** Avatar & Influencer AI
**Waktu:** ~45 menit
**Prasyarat:** Membangun Karakter AI yang Konsisten

## Masalahnya

Gambar statis avatar AI hanya berguna untuk feed berbasis foto (seperti postingan grid Instagram). Namun jangkauan, perhatian, dan pembayaran pengiklan tertinggi ada di **umpan video** (TikTok, YouTube Shorts, Reels). Jika karakter Anda tidak dapat berbicara, bergerak, dan menyajikan informasi dalam format video, Anda tidak dapat membangun merek influencer virtual yang skalabel.

Namun, animasi video menghadirkan tantangan yang berat. Jika Anda menjalankan karakter Anda secara konsisten melalui model gambar-ke-video standar, wajah akan melengkung segera setelah kepala bergerak. Struktur rambut akan berubah, atau tekstur pakaian akan bergeser, menciptakan efek "lembah luar biasa" yang tidak wajar yang membuat orang yang melihatnya menjauh.

Agar berhasil menganimasikan karakter Anda, Anda perlu membuat saluran sinkronisasi bibir dan pengomposisian khusus yang hanya menganimasikan mulut dan ekspresi wajah sambil mengunci bagian kepala dan tubuh lainnya.

## Konsep

Saluran video influencer virtual profesional didasarkan pada **Rendering Video Sinkronisasi Bibir**:

```
Static Avatar Portrait + Clean Voice Audio  ──►  Lip-Sync Engine  ──►  Talking Head Video
```

1. **Jangkar Statis:** Daripada membuat video lengkap dari awal, Anda menggunakan Potret Master yang konsisten sebagai jangkar visual.
2. **Sinkronisasi Bibir Berbasis Audio:** Anda memasukkan Potret Master dan track suara yang Anda buat ke dalam API sinkronisasi bibir (seperti `sync-lipsync` atau `volcengine-video-to-video-lip-sync` melalui muapi). Mesin mengubah *hanya* mulut, rahang, dan mata agar sesuai dengan bentuk gelombang audio, menjaga struktur kepala, rambut, dan pakaian 100% konsisten.
3. **Pengomposisian & Hamparan:** Untuk membuat video terlihat dinamis, Anda memotong bagian kepala yang berbicara setiap 4–5 detik, melapisi tangkapan layar, bagan, atau slide b-roll sementara track suara terus diputar.

---

## Lakukan itu

### Langkah 1: Siapkan Aset Anda
Pastikan file Anda memenuhi pedoman di [`templates/lipsync-spec-sheet.md`](templates/lipsync-spec-sheet.md). Kunci Potret Master statis Anda (`emma-master.jpg`) dan narasi voiceover yang bersih (`01_intro.mp3`).

### Langkah 2: Panggil API Lip-Sync
Kirimkan aset Anda ke titik akhir `/sync-lipsync` (atau sinkronisasi bibir volcengine):
* **URL Audio:** URL publik file narasi Anda.
* **URL Gambar:** URL publik dari potret avatar Anda yang konsisten.
* Tetapkan rasio aspek ke `9:16` atau `1:1` agar sesuai dengan target feed Anda.

### Langkah 3: Unduh & Audit Render
Unduh file `.mp4` yang dihasilkan. Jalankan audit kualitas:
* **Mulut melengkung:** Periksa apakah koordinat mulut meregang secara tidak wajar saat mengucapkan kata-kata cepat.
* **Drift:** Pastikan bibir cocok dengan suku kata track suara. Jika ada sedikit jeda, sesuaikan track audio sebesar -50 md hingga -100 md di timeline Anda untuk menyelaraskan sinkronisasi.

### Langkah 4: Tambahkan B-Roll Overlay dalam Pengeditan
Impor video kepala bicara ke CapCut. Jangan biarkan kepala yang berbicara di layar selama 60 detik.
* **0.0 - 3.0s:** Pertahankan avatar di layar untuk membuat human hook.
* **3.0 - 15.0s:** Dipotong ke b-roll kontras tinggi (rekaman layar, jepretan produk) sementara voiceover berlanjut di A1.
* **15.0 - 18.0s:** Potong kembali ke wajah avatar untuk membangun kembali koneksi.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/emma-master.jpg" alt="Avatar Profile Anchor" width="240">
<img src="templates/examples/emma-clip.gif" alt="Loop Klip Video Avatar (I2V)" width="240">
</p>
<p align="center"><sub>Avatar Master Profile Image (Left) ──► Image-to-Video Motion Loop (Right) · Video File: <a href="templates/examples/emma-clip.mp4">templates/examples/emma-clip.mp4</a></sub></p>

**Menganimasikan "Emma" untuk Film Pendek 60 Detik**



* **Aset yang Disiapkan:** `emma-master.jpg` (wajah di tengah) dan `01_hook.mp3` (*"Hai, ini Emma. Hari ini kita..."*, durasi: 4,5 detik).
* **Pemrosesan Sinkronisasi Bibir:** Aset dimasukkan ke `/sync-lipsync`. File video keluaran berdurasi 4,5 detik, memperlihatkan Emma mengucapkan teks intro secara alami dengan animasi berkedip.
* **Perakitan Timeline:**
* **0.0 - 4.5s:** Emma di layar berbicara langsung kepada penonton. Hamparan teks pada sumbu Y.
* **4.5 - 20.0s:** Track video dipotong ke rekaman layar ruang kerja otomatisasi Zapier. Sulih suara Emma berlanjut.
* **20.0 - 24.0s:** Track video dipotong kembali saat Emma berbicara.

**Hasilnya:** Videonya sangat dinamis. Penonton terpikat oleh wajah yang realistis dan berbicara, namun isi video dipenuhi dengan tangkapan layar yang informatif, menjaga interaksi tetap tinggi sekaligus meminimalkan biaya rendering.

**Klip di bawah ini asli, bukan tiruan** — gambar kafe yang konsisten dianimasikan menjadi loop video vertikal pendek menggunakan `seedance-2-image-to-video-fast` dari skenario di atas, sehingga Anda dapat melihat seperti apa keluaran first-pass sebenarnya:



<p align="center"><i>An unedited first pass — Emma blinks naturally, shifts her head slightly, holding the coffee cup, dynamically animated by the video engine for high-retention content.</i></p>

*Bagaimana ini sebenarnya diproduksi, secara end to end, melalui muapi API:*
1. Mengambil gambar pertukaran wajah yang konsisten `emma-cafe-consistent.jpg`.
2. Mengunggahnya melalui titik akhir `upload_file` muapi untuk mendapatkan URL publik.
3. Masukkan URL tersebut ke **`seedance-2-image-to-video-fast`** (gambar-ke-video, $0,50/klip) pada parameter `images_list` dengan rasio aspek vertikal dan perintah yang menjelaskan gerakan wajah Emma.
4. Mengunduh `.mp4` yang dihasilkan dan mengonversinya menjadi pratinjau GIF senyap di atas menggunakan `ffmpeg`.

---

## Bandingkan Alat

| Platform / Alat | Kualitas Rendering | Pembayaran / Biaya Kredit | Upaya Pengaturan |
|---|---|---|---|
| **muapi `/sync-lipsync`** | Tinggi (Mempertahankan detail latar belakang, memberikan kedipan alami) | ~$0,50 per klip | Rendah (Panggilan API langsung) |
| **HeiGen / Synthesia** | Sangat Tinggi (Tubuh dan gerakan tangan yang sudah dibuat sebelumnya, tetapi biaya berlangganan mahal) | Tinggi ($30–$200/bln) | Rendah |
| **UI Nyaman Lokal (LivePortrait)** | Ultra-High (Melacak pergerakan persis dari aktor webcam) | Gratis | Sangat Tinggi (Memerlukan pengaturan GPU yang berat dan pemetaan node) |

Untuk content factory yang mengirimkan proyek klien, menggunakan `/sync-lipsync` muapi adalah opsi yang paling skalabel. Ini hanya mengenakan biaya per panggilan API tanpa penguncian langganan bulanan, dan menghasilkan pergerakan kepala dengan ketelitian tinggi yang cocok dengan file voiceover khusus.

---

## Luncurkan

**Cara mengoptimalkan file video Anda:**
* **Gunakan Latar Belakang Layar Hijau:** Jika Anda ingin avatar Anda berada di depan latar belakang yang berubah-ubah, buat Potret Master Anda dengan latar belakang hijau solid. Gunakan alat Chroma Key editor untuk menghilangkan warna hijau dan menggabungkan kepala bicara pada klip video apa pun.
* **Tambahkan Cahaya Sekitar yang Halus:** Terapkan lapisan penyesuaian dalam pengeditan dengan hamparan warna kuning kehijauan atau teal yang lembut pada opacity 5% untuk memadukan wajah avatar ke dalam pencahayaan latar belakang, sehingga terlihat terintegrasi.

---

## Latihan

1. **Mudah:** Kumpulkan satu gambar wajah bersih menghadap ke depan dan klip audio berdurasi 5 detik. Verifikasi bahwa mereka memenuhi spesifikasi daftar periksa.
2. **Medium:** Kirimkan aset Anda yang telah disiapkan ke mesin sinkronisasi bibir. Unduh video dan sejajarkan track audio dengan timeline, perbaiki sedikit penundaan sinkronisasi bibir.
3. **Sulit:** Menghasilkan video vertikal berdurasi 30 detik yang menampilkan avatar AI berbicara selama 3 detik pertama, memotong ke b-roll latar belakang layar hijau selama 20 detik, dan memotong kembali ke avatar untuk ajakan bertindak selama 7 detik.

---

## Template

* [`templates/lipsync-spec-sheet.md`](templates/lipsync-spec-sheet.md) — daftar periksa persiapan visual dan audio serta log sinkronisasi.

---

[← Building a Consistent AI Character](01-consistent-character.md) · Berikutnya: [Voice Cloning & Dialogue →](03-voice-cloning-dialogue.md)
