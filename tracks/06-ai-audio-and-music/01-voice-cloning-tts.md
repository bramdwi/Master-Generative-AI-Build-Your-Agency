# Voice Cloning & TTS Basics

> Komputer melafalkan teks; klon melami jiwanya.

**Track:** AI Audio & Music

**Waktu:** ~40 menit

**Prasyarat:** Tidak ada

## Masalahnya

Sistem Text-to-Speech (TTS) tradisional terdengar kaku. Sistem ini melafalkan kalimat dengan kurva nada yang statis, mengabaikan konteks emosional, serta hampa akan suara helaan napas. Jika Anda memanfaatkan vokal bawaan yang terkesan murah ini untuk kebutuhan faceless videos, materi kursus, atau iklan, audiens akan seketika menyadari track audio mekanis tersebut lalu mengusap layar untuk beralih.

Sekadar merekam vokal Anda mengandalkan mikrofon laptop bukanlah alternatif yang dapat diakselerasi untuk kebutuhan content factories ber-volume tinggi. Proses tersebut menyita terlalu banyak alokasi waktu, dan jika kondisi kesehatan Anda menurun hingga kehilangan vokal, alur produksi Anda akan terhenti secara total.

Guna mengelola agensi konten yang profesional, Anda wajib merancang **cloned voice profiles** kustom berpresisi tinggi yang mampu merekam keunikan timbre, aksen, hingga elemen helaan napas dari penutur asli, yang memungkinkan Anda menghasilkan narasi realistis berdurasi panjang hanya dari skrip teks sederhana.

## Konsep

Sintesis vokal terbagi ke dalam dua kategori teknis utama:

### 1. Instant Voice Cloning (IVC):

Hanya membutuhkan **1 hingga 5 menit** sampel audio. Engine kloning akan mengestraksi frekuensi dasar (timbre) penutur. Proses ini berlangsung cepat dan efisien, namun kerap mengalami kendala saat mengekspresikan dinamika emosi yang rumit atau artikulasi unik pada istilah-istilah teknis.

### 2. Professional Voice Cloning (PVC):

Membutuhkan **30+ menit** sampel tuturan berkualitas studio berpresisi tinggi. Model akan melatih bobot deep neural network secara spesifik untuk vokal tersebut, merekam resonansi tenggorokan, artikulasi rongga mulut, infleksi tawa, hingga parameter aksen. Hasil akhirnya hampir tak terbedakan dari penutur aslinya.

```
Studio Capture (Dry/Mono)  ──►  ElevenLabs PVC Training  ──►  Deep Voice Lock (Accents/Breaths)

```

Guna menjamin alur pelatihan yang bersih, sampel mentah Anda wajib memenuhi spesifikasi target yang dirincikan dalam panduan kerja [`templates/voice-cloning-spec.md`](templates/voice-cloning-spec.md).

---

## Lakukan itu

### Langkah 1: Konfigurasikan Perangkat Peranti Keras Merekam Anda

Cermati panduan kerja [`templates/voice-cloning-spec.md`](templates/voice-cloning-spec.md). Manfaatkan mikrofon condenser jenis cardioid. Tempatkan berjarak 6 inci dari rongga mulut. Lakukan perekaman di dalam ruangan berpelapis lembut (karpet, tirai) guna mengeliminasi gema ruangan.

### Langkah 2: Rekam Latihan Pembacaan Sampel Skrip

Lafalkan beragam teks yang memuat variasi intonasi emosional (paragraf berita, eksplanasi teknis, hingga narasi kasual). Tuturkan dengan intensitas volume yang stabil. Hindari artikulasi yang tergesa-gesa. Kumpulkan sekurang-kurangnya 6 menit audio yang jernih.

### Langkah 3: Jalankan Pembersihan Audio

Impor berkas audio ke dalam aplikasi Audacity. Jalankan tahapan berikut:

* **Noise Reduction:** Cuplik sampel keheningan ruangan lalu terapkan pengurangan desis (tingkat: 12dB).
* **Noise Gate:** Atur ambang gate pada posisi **-48dB** guna menyenyapkan jeda di antara helaan napas secara sempurna.
* **Normalize:** Atur amplitudo puncak pada **-3.0dB** untuk memaksimalkan volume tanpa memicu kliping.
Ekspor berkas dalam format mono `.wav`.

### Langkah 4: Kirimkan ke Engine Kloning

Buka ElevenLabs. Akses VoiceLab -> Add Instant Voice. Unggah berkas `.wav` yang telah dibersihkan. Cantumkan rincian label (seperti *"energetic male, American accent, clear presentation tone"*). Kirimkan berkas untuk memproses sintesis.

### Langkah 5: Jalankan Audit Stabilitas

Hasilkan paragraf uji coba berdurasi 20 detik. Eksplorasi tuas konfigurasi:

* **Stability (Target: 40% - 45%):** Nilai yang lebih rendah membuat vokal terdengar lebih ekspresif dan dinamis; nilai yang lebih tinggi mengunci gaya pembacaan agar tetap konsisten.
* **Clarity / Similarity (Target: 75% - 80%):** Nilai yang lebih tinggi mempertegas kemiripan timbre penutur, namun pengaturan yang terlalu tinggi berisiko memunculkan distorsi digital.
Simpan konfigurasi ideal Anda ke dalam log kloning.

---

## Contoh yang berhasil

**Merancang Profil Vokal "Arthur" (Juru Bicara B2B SaaS)**

* **Input Pelatihan:** 7 menit rekaman wav jernih dan minim gema dari panduan instruksional SaaS. Dinormalisasi ke -3dB peak, gate diatur pada -50dB.
* **Antarmuka Kloning:** Portal ElevenLabs IVC. Dikloning dengan identitas `Arthur_B2B_V1`.
* **Proses Pengujian & Penyesuaian:**
* Pengujian 1: Stability 60%, Clarity 90%. Luaran vokal: timbre jernih, namun karakter vokal terdengar datar serta minim jeda napas alami.
* Pengujian 2: Stability 40%, Clarity 75%. Luaran vokal: karakter vokal tampil ekspresif, menyertakan ornamen helaan napas lembut di awal kalimat, serta mengadaptasi intonasi saat melafalkan tanda tanya.



**Hasilnya:** Profil "Arthur" siap digunakan untuk sintesis vokal ber-volume besar. Luaran vokal mampu melafalkan dokumentasi perangkat lunak yang rumit dengan wibawa intonasi seorang pendiri perusahaan teknologi profesional.

---

## Bandingkan Alat

| Platform / Tool | Realisme Sintesis | Pengaturan Penyesuaian | Sangat Cocok Untuk |
| --- | --- | --- | --- |
| **ElevenLabs IVC / PVC** | Presisi Tinggi (Menyertakan elemen helaan napas dan artikulasi emosional) | Tuas Stability, Clarity, Exaggeration | Narasi profesional, iklan, dan klon juru bicara. |
| **Play.ht (v2.0)** | Tinggi | Kendali kecepatan dan nada | Avatar layanan pelanggan kasual dan video eksplanasi. |
| **Coqui TTS (Local)** | Moderat | Integrasi kode Python | Pemrosesan terprogram ber-volume besar tanpa beban biaya kredit API. |

ElevenLabs merupakan acuan utama untuk kebutuhan kloning vokal komersial berpresisi tinggi. Untuk jaringan konten ber-volume tinggi, manfaatkan Instant Voice Cloning API milik mereka. Jika Anda perlu mengakselerasi sistem lokal tanpa alokasi biaya kredit operasional, terapkan generator vokal open-source lokal seperti XTTS v2 atau Coqui.

---

## Luncurkan

**Cara mengelola aset vokal:**

* **Isolasi berkas pelatihan:** Simpan seluruh cuplikan audio pelatihan mentah dalam folder utama lokal yang aman. Apabila model vokal mengalami pergeseran atau pembaruan di kemudian hari, Anda dapat mengunggah dan melatih ulang model secara instan.
* **Amankan identitas vokal:** Jangan pernah membagikan string Voice ID kloningan Anda ke ranah publik. Pihak yang tidak bertanggung jawab dapat memanfaatkan ID tersebut untuk menghasilkan skrip vokal tanpa izin menggunakan batas API Anda.

---

## Latihan

1. **Mudah:** Rekam sampel tuturan berdurasi 1 menit. Impor ke dalam aplikasi penyunting gratis lalu periksa tingkat desibel puncak pada bagian jeda hening.
2. **Sedang:** Unggah sampel berdurasi 3 menit ke dalam engine kloning. Hasilkan skrip uji coba lalu temukan pengaturan tuas slider di mana artikulasi vokal tidak lagi terkesan kaku.
3. **Sulit:** Jalankan tahapan persiapan vokal secara utuh: rekam 6 menit audio, terapkan noise reduction, terapkan noise gate di bawah -48dB, ekspor sebagai wav mono, lalu latih profil kloning yang lolos uji kemiripan.

---

## Template

* [`templates/voice-cloning-spec.md`](templates/voice-cloning-spec.md) — panduan peranti keras, parameter noise gate, dan log stabilitas.

---

[Track overview](README.md) · Berikutnya: [AI Dubbing & Translation →](02-dubbing-translation.md)
