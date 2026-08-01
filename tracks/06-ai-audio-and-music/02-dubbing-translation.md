# AI Dubbing & Translation

> Video yang hanya bertutur dalam satu bahasa hanya akan menjangkau sebagian kecil ceruk dunia.

**Track:** AI Audio & Music

**Waktu:** ~45 menit

**Prasyarat:** Voice Cloning & TTS Basics

## Masalahnya

Jika Anda hanya mendistribusikan konten, iklan, atau kursus online dalam bahasa Inggris, Anda mengabaikan lebih dari 80% pengguna internet global. Potensi pasar yang sangat besar di Amerika Latin, Eropa, dan Asia menjadi terisolasi dari alur pemasaran Anda.

Namun demikian, metode penerjemahan dan lokalisasi tradisional berlangsung lambat dan membutuhkan alokasi anggaran yang besar. Anda harus menyewa spesialis penerjemah asing, mengontrak pengisi suara lokal di berbagai negara, merekam trek vokal di studio profesional, serta menyelaraskan trek audio baru secara manual agar presisi dengan tempo alur waktu video asli.

Guna mengakselerasi jaringan konten global, Anda membutuhkan alur kerja yang teruji untuk menerjemahkan trek audio ke dalam berbagai bahasa asing secara otomatis, sembari mempertahankan artikulasi asli, profil vokal, dan infleksi emosional penutur.

## Konsep

Penerjemahan audio otomatis bertumpu pada **Tone-Preserving Voice Dubbing** serta **Time-Boundary Sync**:

```
English Voice Track  ──►  Translation Engine  ──►  Pitch/Timbre Mapping  ──►  Foreign Dub (Sync'd)

```

1. **Preservasi Vokal:** Model dubbing akan mengestraksi resonansi vokal (timbre) dan kurva nada penutur asli, lalu memproyeksikannya ke dalam synthesizer tuturan bahasa target. Penutur akan terdengar persis seperti diri mereka sendiri saat bertutur dalam bahasa asing.
2. **Penyesuaian Tempo Narasi:** Bahasa yang berbeda membutuhkan durasi yang bervariasi untuk menyampaikan gagasan yang sama. Sebagai contoh, menerjemahkan frasa *"Automate your billing"* ke dalam bahasa Spanyol menghasilkan *"Automatice su facturación."* Frasa dalam bahasa Spanyol memiliki suku kata yang lebih banyak dan membutuhkan durasi penuturan yang lebih panjang. Guna mengeliminasi tumpang-tindih, engine penerjemah harus memampatkan kecepatan tuturan secara halus (misalnya sebesar 1.1x) agar muat dalam alokasi waktu asli.
3. **Penyelarasan Alur Waktu:** Anda mengacu pada panduan kerja [`templates/dubbing-translation-checklist.md`](templates/dubbing-translation-checklist.md) untuk mengaudit batasan timecode, memastikan efek suara dan elemen visual selaras secara presisi dengan audio terjemahan.

---

## Lakukan itu

### Langkah 1: Siapkan Dialog Sumber Anda

Buka panduan kerja [`templates/dubbing-translation-checklist.md`](templates/dubbing-translation-checklist.md). Ekspor transkrip teks dari video sumber Anda. Eliminasi setiap kata jeda. Ekstraksi log timecode (misalnya *Baris 1: 0:00.00 hingga 0:04.50*).

### Langkah 2: Konfigurasikan Engine Penerjemah

Buka ElevenLabs lalu akses tab **Dubbing** (atau panggil rute API `/dubbing`). Konfigurasikan proyek:

* **Source Language:** English (atau deteksi secara otomatis).
* **Target Language:** Spanish (atau Jerman, Prancis, Hindi, dll.).
* **Resolution Settings:** Pilih "Highest Resolution" untuk mempertahankan isolasi musik latar.

### Langkah 3: Jalankan Sintesis Dubbing

Kirimkan berkas video. Engine AI akan:

* Memisahkan trek dialog dari trek musik latar mengandalkan teknik stem splitting.
* Menerjemahkan teks bahasa Inggris.
* Menyintesis ulang dialog ke dalam bahasa target mengandalkan vokal kloning dari penutur asli.
* Menggabungkan kembali dialog baru dengan trek musik latar asli.

### Langkah 4: Audit Tempo dan Kecepatan Suku Kata

Cermati luaran dubbing bahasa asing yang dihasilkan. Lakukan pembesaran pada alur waktu di aplikasi penyunting Anda:

* Evaluasi potensi efek suara "chipmunk" di mana penerjemahan dipampatkan secara berlebihan agar muat dalam durasi yang singkat.
* Jika kalimat terjemahan terpotong di bagian akhir, sesuaikan alur waktu pada editor visual dengan membelah cuplikan latar belakang dan menambahkan freeze frame berdurasi 0,5 detik, yang memberi ruang bagi trek vokal untuk selesai secara natural.

---

## Contoh yang berhasil

**Menerjemahkan Video Panduan SaaS (Bahasa Inggris ke Bahasa Spanyol)**

* **Cuplikan Asli:** Durasi: 4,5 detik. Dialog: *"Here is how to parse your invoice files instantly."*
* **Luaran Dubbing:** Terjemahan bahasa Spanyol: *"Aquí le mostramos cómo analizar sus archivos de facturas al instante."*
* **Audit Sintesis:**
* Karakter vokal bahasa Spanyol terdengar sangat identik dengan timbre vokal penutur bahasa Inggris.
* Dikarenakan teks bahasa Spanyol memuat suku kata yang lebih banyak, engine memampatkan kecepatan tuturan secara otomatis sebesar **1.12x**.
* Trek audio diselaraskan untuk dimulai secara presisi pada 0:00.00 dan berakhir pada 0:04.45.


* **Hasilnya:** Hasil dubbing bahasa Spanyol menyatu secara presisi pada alur waktu video asli. Pengguna dapat mengespor dan mempublikasikan video secara langsung.

---

## Bandingkan Alat

| Platform / Tool | Kualitas Preservasi Vokal | Tempo & Penyelarasan | Sangat Cocok Untuk |
| --- | --- | --- | --- |
| **ElevenLabs Dubbing API** | Presisi Tinggi (Mempertahankan timbre vokal dan pemisahan trek musik latar) | Baik (Memampatkan kecepatan tuturan secara otomatis agar sesuai dengan batasan waktu) | Dubbing otomatis untuk video YouTube dan iklan secara cepat. |
| **HeyGen Video Translate** | Tinggi (Menyertakan penerjemahan lip-sync otomatis agar sesuai dengan artikulasi bibir asing) | Moderat | Video face-to-camera di mana gerakan bibir selaras dengan audio target. |
| **Local Pipeline (Whisper + XTTS)** | Moderat | Manual (Membutuhkan penyesuaian alur waktu trek audio secara manual) | Pengembangan kustom tanpa beban biaya API. |

Untuk saluran B2B faceless, memanfaatkan ElevenLabs Dubbing API merupakan pilihan yang paling efisien karena memproses penerjemahan dan rekonstruksi audio latar belakang dalam satu alur kerja tunggal. Untuk video juru bicara face-to-camera, HeyGen Video Translate merupakan opsi ideal karena menyelaraskan bentuk bibir dengan bahasa baru.

---

## Luncurkan

**Cara mengelola saluran terlokalisasi:**

* **Manfaatkan Fitur YouTube Multi-Language Audio:** YouTube memungkinkan Anda mengunggah berbagai trek audio (Inggris, Spanyol, Portugis) ke dalam satu berkas video tunggal. Hal ini mengkonsolidasikan seluruh jumlah tayangan pada satu URL tunggal, yang mendongkrak peringkat Anda pada algoritma.
* **Terjemahkan metadata:** Hindari mengunggah trek audio bahasa Spanyol yang disertai judul dan deskripsi bahasa Inggris. Terjemahkan judul, deskripsi, dan berkas tag Anda mengandalkan templat daftar periksa media Anda.

---

## Latihan

1. **Mudah:** Terjemahkan skrip 3 kalimat ke dalam bahasa Spanyol. Lafalkan kedua versi tersebut lalu ukur perbandingan durasi tuturannya.
2. **Sedang:** Kirimkan video berdurasi 10 detik ke engine dubbing otomatis. Unduh luaran lalu evaluasi kemiripan vokalnya.
3. **Sulit:** Hasilkan video terjemahan yang dilengkapi efek suara latar belakang. Verifikasi bahwa efek suara muncul secara presisi pada bingkai visual yang sama dengan versi asli, sementara audio terjemahan tetap jernih dan ter-sync.

---

## Templat

* [`templates/dubbing-translation-checklist.md`](templates/dubbing-translation-checklist.md) — panduan penerjemahan skrip, alokasi timestamp, dan penyesuaian tempo kecepatan.

---

[← Sebelumnya: Voice Cloning & TTS Basics](01-voice-cloning-tts.md) · [Track overview](README.md) · Berikutnya: [Produksi Podcast & Pembersihan Audio →](03-podcast-production.md)
