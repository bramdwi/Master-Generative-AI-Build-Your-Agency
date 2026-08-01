# Headshot Batch & Otomatisasi Massal untuk Tim Jarak Jauh

> Skalakan mulai dari potret individu hingga pemrosesan 50+ foto wajah karyawan jarak jauh dalam satu proses batch otomatis.

**Track:** Foto & Potret AI
**Waktu:** ~40 menit
**Prasyarat:** [01: Consistent Headshot Generation](01-consistent-headshot-generation.md), [02: Standing Out Against Fiverr Competition](02-standing-out-against-fiverr-competition.md)

## Masalahnya

Saat menskalakan agensi foto Anda untuk menangani klien perusahaan, pemrosesan manual menjadi hambatan. Sebuah perusahaan dengan **50 karyawan jarak jauh** di 6 negara mengirimi Anda 150+ foto selfie mentah.

Jika Anda membuka setiap selfie di editor, mengetik perintah secara manual, menjalankan inferensi satu per satu, dan mengatur folder satu per satu, memproses 50 karyawan memerlukan **lebih dari 12 jam pekerjaan manual yang berulang**.

Untuk melayani kontrak korporat bernilai tinggi secara efisien, Anda memerlukan **Penyerapan CSV Massal & Saluran Rendering Batch**.

---

## Konsep

**Pipa Otomasi Headshot Batch** memproses daftar nama multi-karyawan secara sistematis:

```
CSV Roster + Selfie Directory ──► Automated Identity Vector Extraction ──► Batch Inpainting & Background Sync ──► Auto-Folder Zip Generation
```

### Pilar Otomasi Inti:

1. **Penyerapan Daftar Nama CSV Batch:** Membaca file CSV master (`employee_id, full_name, role, dress_code, selfie_path`).
2. **Penyelarasan Wajah & Pra-Pemotongan Otomatis:** Menjalankan skrip deteksi wajah (OpenCV / MediaPipe) untuk memotong selfie secara otomatis ke rasio aspek persegi standar sebelum memasukkannya ke model identitas.
3. **Injeksi Latar Belakang Merek Terpadu:** Memuat terlebih dahulu aset latar belakang perusahaan yang tetap (misalnya, kantor kaca modern atau gradien abu-abu studio) di seluruh 50 render sehingga setiap anggota tim berbagi komposisi latar belakang yang identik.

---

## Lakukan itu

### Langkah 1: Siapkan CSV Daftar Karyawan Utama
Buka [`templates/b2b-headshot-proposal.md`](templates/b2b-headshot-proposal.md). Buat file CSV masukan batch `team_roster.csv`:

```csv
EmployeeID,FullName,Title,DressCode,SelfieFile
EMP001,John Doe,VP of Engineering,Executive Suit,selfies/john_doe.jpg
EMP002,Sarah Jenkins,Lead Designer,Creative Blazer,selfies/sarah_j.jpg
EMP003,Alex Rivera,Senior Developer,Tech Sweater,selfies/alex_r.jpg
```

### Langkah 2: Jalankan Deteksi Wajah Batch & Pemotongan Otomatis
Jalankan skrip pra-pemrosesan Python untuk mendeteksi kotak pembatas wajah di `selfies/`, potong otomatis setiap gambar dengan margin 35% di atas kepala dan rasio aspek 1:1.

### Langkah 3: Jalankan Inferensi Batch melalui API Loop
Jalankan skrip batch Anda yang memanggil muapi `/nano-banana-2` (atau titik akhir InstantID) dalam satu lingkaran, meneruskan vektor identitas setiap karyawan dan perintah kode berpakaian target sambil mengunci benih latar belakang perusahaan.

### Langkah 4: Paket Otomatis ke dalam Paket Zip Klien
Buat subfolder karyawan yang berisi `[FullName]_linkedin.jpg` (1080x1080px) dan `[FullName]_website.jpg` (2400x3000px). Kompres semua folder ke dalam pengiriman klien master `Apex_Financial_Team_Headshots.zip`.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/corporate-executive-headshot.jpg" alt="Batch Processed Corporate Headshot" width="320">
</p>
<p align="center"><sub>Batch Processed Corporate Team Asset (Unified Brand Background & Studio Lighting)</sub></p>

**Kinerja Pemrosesan Batch untuk "Summit Cloud Systems" (42 Karyawan)**

* **Masukan:** 42 foto selfie karyawan yang diunggah melalui portal penerimaan layanan mandiri.
* **Waktu Pemrosesan Batch:** 18 menit eksekusi skrip otomatis.
* **Yang Dapat Dikirim:** 42 folder karyawan terorganisir dengan masing-masing 3 render resolusi tinggi (total 126 file gambar).
* **Waktu Kerja:** 12 menit penyiapan & peninjauan kualitas (vs. 10+ jam kerja manual).
* **Pendapatan Kontrak:** **$840,00** ($20/orang).
* **Biaya Komputasi API:** **$2,52** total biaya kredit.

---

## Bandingkan Alat

| Platform / Alat | Kemampuan Otomasi | Konsistensi Identitas | Terbaik Untuk |
|---|---|---|---|
| **API Batch muapi + Python** | Ultra-Tinggi (Eksekusi skrip seluruh folder, keluaran zip otomatis) | Tinggi (penyematan vektor ID Instan per karyawan) | Kontrak tim perusahaan bervolume tinggi (25–100+ karyawan) |
| **InstanID / FLUX PuLID (lokal)** | Sedang (Antrian batch manual melalui ComfyUI) | Maksimum (Kesetiaan identitas tertinggi) | Paket eksekutif premium yang mengutamakan akurasi tingkat atas |
| **Typeform + Otomatisasi Zapier** | Tinggi (Pengiriman formulir penerimaan rute otomatis ke antrian pemrosesan) | T/A | Portal penerimaan yang menghadap klien untuk unggahan foto karyawan swalayan |

---

## Luncurkan

**Harga untuk paket perusahaan batch:**
* **Tarif Tambahan Per Kursi:** Biaya **$20 – $25 per karyawan tambahan** di luar tingkat paket dasar (misalnya, tim beranggotakan 35 orang pada paket Standar Perusahaan $799: termasuk 25 orang + 10 tambahan × $20 = **total $999**).
* **Otomatiskan Audit Kualitas:** Tulis skrip cepat untuk memeriksa resolusi output dan ukuran file secara otomatis sebelum membuat zip, untuk memastikan tidak ada render yang rusak atau berukuran terlalu kecil yang dikirim ke klien.

---

## Latihan

1. **Mudah:** Buat file daftar nama CSV untuk 5 karyawan hipotetis dengan nama, jabatan, dan tag kode berpakaian.
2. **Sedang:** Tulis skrip Python untuk memotong otomatis 5 selfie ke rasio aspek 1:1 yang berpusat pada landmark wajah.
3. **Sulit:** Jalankan skrip batch yang menghasilkan 5 foto karyawan dengan latar belakang studio terpadu.

---

## Templat

* [`templates/b2b-headshot-proposal.md`](templates/b2b-headshot-proposal.md) — Skema CSV batch, standar penamaan folder otomatis, dan panduan pengemasan tim.

---

[← Standing Out Against Fiverr Competition](02-standing-out-against-fiverr-competition.md) · Berikutnya: [Creative Headshots & Stylized Portraits →](04-creative-headshots-and-stylized-portraits.md)
