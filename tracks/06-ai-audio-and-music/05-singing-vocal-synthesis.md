# Singing Voice Conversion & Vocal Synthesis

> Sintesiskan melodinya, kloning penyanyinya.

**Track:** AI Audio & Music

**Waktu:** ~30 menit

**Prasyarat:** Voice Cloning & TTS Basics

## Masalahnya

Anda ingin memproduksi lagu tema kustom, iklan musikal, atau trek pembuka parodi untuk klien, namun Anda tidak memiliki keahlian bernyanyi. Menyewa penyanyi studio profesional untuk proyek insidental sangat mahal, dan mencoba bernyanyi sendiri berisiko menghasilkan ketidaktepatan nada atau jangkauan vokal yang tidak mampu Anda capai.

Model Text-to-Speech (TTS) standar tidak memiliki kemampuan untuk bernyanyi. Jika Anda memasukkan lirik, model akan melafalkannya menyerupai perkuliahan yang membosankan, tanpa irama, melodi, maupun tempo.

Guna menghasilkan konten musikal tanpa bernyanyi secara langsung, Anda wajib menerapkan pipeline **Singing Voice Conversion (SVC)** — sebuah instrumen yang menerima vokal Anda sebagai input lalu menghasilkan melodi yang sama yang dinyanyikan dalam timbre vokal (kualitas vokal) yang sepenuhnya berbeda. Teknologi ini memungkinkan Anda merekam "vokal panduan" dasar (meskipun nyanyian Anda kurang presisi atau bertutur sesuai irama) lalu mentransformasi timbre vokal tersebut menjadi suara nyanyian dari model profesional, sembari mempertahankan nada, tempo, dan melodi asli.

## Konsep

Pipeline sintesis vokal bertumpu pada **Retrieval-based Voice Conversion (RVC)** — sebuah teknik yang merujuk pada karakter vokal penyanyi target dari model yang telah dilatih lalu memproyeksikannya ke atas vokal panduan Anda — dipadukan dengan **Timbre Transfer** (mengubah "warna" unik vokal sembari mempertahankan nada dan temponya agar tetap utuh):

```
Source Guide Vocal  ──►  Pitch Correction (Auto-Tune)  ──►  RVC Timbre Transfer  ──►  Target Singing Master

```

* **Voice-to-Voice Conversion:** Berbeda dari text-to-speech, voice-to-voice membutuhkan input berkas audio. Sistem mengabaikan *teks* kalimat dan menganalisis *nada* (frekuensi dasar) serta *volume* envelope. Sistem kemudian mengganti pita suara (karakter timbre) dari penutur sumber dengan model target.
* **Ekstraksi Akapela:** Vokal panduan sumber harus jernih dan terisolasi — yang berarti hanya vokal Anda tanpa ada iringan musik latar belakang. Sebagai contoh, jika Anda merekam diri sendiri bernyanyi sementara instrumen piano terdengar di dalam ruangan, sistem konversi akan mencoba mentransformasi nada piano tersebut menjadi suara nyanyian, yang memicu distorsi suara yang mengganggu. Rekam vokal panduan Anda dalam hening, lalu satukan kembali instrumen musik setelahnya.
* **Transposisi (Pergeseran Nada):** Jika Anda seorang editor pria yang merekam vokal panduan untuk avatar wanita, Anda harus menaikkan transposisi nada sebesar **+12 semitones** (satu oktaf penuh) agar model dapat memproses vokal di dalam jangkauan nada alami penyanyi target. Konfigurasikan parameter ini di dalam panduan kerja [`templates/vocal-conversion-brief.md`](templates/vocal-conversion-brief.md).

---

## Lakukan itu

### Langkah 1: Siapkan Vokal Panduan Anda

Rekam trek vokal jernih yang menyanyikan lirik. Jangan khawatir jika vokal Anda terdengar datar. Impor trek ke dalam penyunting Anda. Terapkan instrumen koreksi nada (seperti GSnap atau Auto-Tune) untuk menyelaraskan nada vokal ke tangga nada musik yang tepat. Simpan trek bersih sebagai `guide_vocal.wav`.

### Langkah 2: Konfigurasikan Model Konversi

Buka antarmuka RVC Anda (atau panggil API `/voice-to-voice`). Unggah `guide_vocal.wav`.

* **Select Target Model:** Pilih model vokal yang selaras dengan karakter Anda (misalnya `emma_singing_v2`).
* **Transpose:** Atur pergeseran nada. Jika panduan pria -> target wanita: atur pada **+12 semitones**. Jika panduan wanita -> target pria: atur pada **-12 semitones**.

### Langkah 3: Konfigurasikan Pengaturan Retrieval

Eksplorasi parameter berikut:

* **Feature Retrieval Index Rate (Target: 0.65 - 0.70):** Mengendalikan seberapa dominan karakter model target diproyeksikan. Jika diatur terlalu tinggi (misalnya 0.90), hasilnya akan terdengar kaku; jika diatur terlalu rendah (misalnya 0.40), vokal akan mempertahankan terlalu banyak karakter dari penyanyi panduan asli.
* **Consonant Protection (Target: 0.33):** Melindungi konsonan tak bersuara ("s", "t", "sh") untuk mencegah timbulnya desis digital.

### Langkah 4: Jalankan Timbre Transfer

Klik konversi untuk memproses trek. Unduh berkas luaran `.wav`.

### Langkah 5: Bersihkan dan Racik Vokal Akhir

Impor kembali trek nyanyian yang telah dikonversi ke dalam editor audio Anda. Tambahkan efek plate reverb yang halus dan stereo delay agar vokal menyatu ke dalam trek musik latar instrumen. Batasi tingkat puncak vokal pada -3dB.

---

## Contoh yang berhasil

**Merancang Vokal Lagu Tema (Panduan Pria ke Avatar Emma)**

* **Rekaman Panduan:** Seorang editor pria merekam vokal panduan dasar yang menyanyikan: *"Automate your SaaS..."* sesuai nada. Koreksi nada menyelaraskan nada-nada tersebut ke C-Major.
* **Pengaturan RVC:**
* Model Target: `emma_singing_v2` (wanita).
* Pergeseran Nada: **+12 semitones** (untuk menggeser jangkauan pria ke oktaf wanita).
* Index Rate: **0.68**.


* **Sintesis Audio:** Berkas terkonversi menghasilkan vokal wanita yang jernih dan presisi menyanyikan melodi dengan timbre vokal Emma.
* **Stasiun Pemrosesan:** Trek vokal diracik dengan trek latar lofi, reverb diatur pada 15% wet, diselaraskan hingga -16 LUFS.

**Hasilnya:** Avatar memiliki lagu tema kustom. Vokal nyanyian terdengar presisi, natural, dan selaras sempurna dengan profil karakter visual.

---

## Bandingkan Alat

| Platform / Tool | Kualitas Konversi | Beban Biaya / Kredit | Tingkat Persiapan |
| --- | --- | --- | --- |
| **Retrieval-based Voice Conversion (RVC)** | Tinggi (Sangat baik untuk nyanyian bergaya dan konversi cepat) | **Gratis** (berjalan secara lokal di GPU) | Moderat (Membutuhkan pengoperasian skrip WebUI) |
| **ElevenLabs Voice-to-Voice** | Presisi Tinggi (Mempertahankan infleksi vokal yang rumit dan helaan napas) | Tinggi (Ditagih per karakter yang dihasilkan) | Sederhana (Dashboard web intuitif) |
| **So-Vits-SVC 4.0** | Presisi Tinggi | Gratis | Tinggi (Pipeline pelatihan Python yang rumit) |

Untuk pembuatan konten yang terakselerasi dan efisien dari segi biaya, mengoperasikan RVC v2 pada GPU lokal merupakan metode standar. Hal ini memungkinkan Anda mengkonversi banyak trek tanpa beban biaya kredit API. Untuk realisme vokal dan integrasi helaan napas yang maksimal, ElevenLabs Voice-to-Voice menyajikan kepresisian tertinggi.

---

## Luncurkan

**Cara mengelola hak cipta:**

* **Gunakan model vokal terbuka:** Hindari memanfaatkan model RVC yang dilatih dari bintang pop terkenal (seperti Drake atau Ariana Grande) untuk proyek klien komersial atau saluran yang dimonetisasi. Platform secara aktif menghapus trek-trek ini, dan Anda berisiko menghadapi tuntutan hukum hak cipta.
* **Latih model nyanyian kustom:** Minta penyanyi lokal merekam 20 menit tangga nada dan lagu, latih model kustom, lalu kunci kepemilikan IP atas vokal tersebut untuk agensi Anda.

---

## Latihan

1. **Mudah:** Rekam trek panduan berdurasi 10 detik dari diri Anda yang bertutur dengan gaya irama bernyanyi.
2. **Sedang:** Kirimkan trek panduan Anda ke converter voice-to-voice dengan pergeseran nada +12 semitones. Analisis pergeseran oktaf yang terjadi.
3. **Sulit:** Hasilkan trek vokal berulang berdurasi 15 detik secara utuh. Ekstraksi panduan akapela, jalankan auto-tune, konversi timbre mengandalkan RVC, terapkan delay dan reverb, lalu racik kembali di atas trek instrumen.

---

## Template

* [`templates/vocal-conversion-brief.md`](templates/vocal-conversion-brief.md) — daftar periksa persiapan akapela, bagan transposisi, dan log retrieval.

---

[← Sebelumnya: AI Music & Sound Effects](04-music-sfx-generation.md) · [Track overview](README.md)
