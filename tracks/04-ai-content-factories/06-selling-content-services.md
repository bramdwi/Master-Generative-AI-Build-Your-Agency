# Menjual Hasil Pabrik Konten sebagai Layanan

> Dunia usaha tidak menginginkan penayangan; mereka menginginkan konsistensi yang membangun pandangan.

**Lacak:** Pabrik Konten AI
**Waktu:** ~30 menit
**Prasyarat:** Jalur Produksi Multi-Langkah, Batching & Penjadwalan pada Volume

## Masalahnya

Kebanyakan editor video lepas menjual layanan mereka "per video" atau "per jam". Mereka mengenakan biaya $100 untuk mengedit satu klip. Model penetapan harga ini memaksa Anda melakukan siklus penawaran yang konstan: saat Anda menyelesaikan sebuah proyek, pendapatan Anda turun menjadi nol hingga Anda mendapatkan klien berikutnya. Anda menghabiskan lebih banyak waktu menulis email dingin daripada mengedit.

Selain itu, klien tidak dapat diandalkan. Mereka akan memesan 3 video, menjeda selama sebulan, lalu meminta revisi tiga minggu kemudian. Ini merusak jalur pabrik Anda dan menyumbat jadwal pengeditan Anda.

Untuk meningkatkan penghasilan Anda, Anda harus berhenti menjual hasil edit satu kali. Sebaliknya, paketkan hasil pabrik Anda ke dalam **penyimpan rutin bulanan** (model agen berlangganan), yang menjual volume yang konsisten dan dapat diprediksi sehingga klien tetap membayar dari bulan ke bulan.

## Konsep

Model bisnis agen pabrik konten adalah **Penyimpan Konten Berlangganan**:

```
Client Retainer ($1,500/mo)  ──►  Upfront Payment  ──►  Weekly Batch Delivery (7 Videos)
```

Dengan beralih ke langganan bulanan, Anda mengunci:
* **Pendapatan yang Dapat Diprediksi:** Anda tahu persis berapa penghasilan biro iklan Anda bulan depan, sehingga memungkinkan Anda menyewa asisten atau berinvestasi dalam perangkat lunak.
* **Perencanaan Saluran:** Anda menayangkan video dalam kelompok mingguan yang dapat diprediksi (misalnya, 7 video setiap hari Jumat), sehingga menghilangkan permintaan pengeditan darurat.
* **Margin Tinggi:** Karena pabrik Anda menggunakan alat pembuat AI yang cepat, biaya per video Anda di bawah $1. Retainer sebesar $1.500 hanya dikenakan biaya kredit API sebesar $30, sehingga menghasilkan **margin laba bersih sebesar 98%**.

---

## Lakukan itu

### Langkah 1: Tentukan Tingkat Harga Anda
Buka [`templates/bulk-pricing-sheet.md`](templates/bulk-pricing-sheet.md). Pilih paket yang akan Anda tawarkan:
* **Growth Factory ($1.500/bln):** 30 video vertikal, gambar mini khusus, penandaan SEO.
* **Jaringan Sindikasi ($2.800/bln):** 60 video vertikal, dijadwalkan di YouTube, TikTok, dan Instagram.

### Langkah 2: Siapkan Faktur Berulang
Buka akun pedagang (Stripe, PayPal, atau Whop). Siapkan produk berlangganan yang sesuai dengan harga paket Anda. **Selalu menagih klien di muka** pada awal siklus 30 hari. Jangan pernah memproduksi video sebelum tagihan dilunasi.

### Langkah 3: Targetkan Klien Ideal Anda
Fokus pada bisnis yang memiliki anggaran pemasaran tinggi tetapi tidak punya waktu untuk membuat konten:
* Layanan profesional (broker real estat, firma hukum, akuntan, klinik swasta).
* Konsultan ternama, pelatih bisnis, dan pendiri perangkat lunak.
* Pemilik merek e-commerce.

### Langkah 4: Kirim Proposal Pitch
Buat draf proposal yang jelas menggunakan [`templates/agency-retainer-proposal.md`](templates/agency-retainer-proposal.md). Sederhanakan: sebutkan kiriman, jadwal pengiriman (batch mingguan), dan harga di muka.

### Langkah 5: Aktifkan & Siapkan Folder Bersama
Setelah pembayaran, buka folder bersama (Google Drive atau Dropbox) dengan klien. Siapkan subfolder:
* `[Raw_Assets_From_Client]`: Untuk logo, buku berwarna, atau gambar referensi apa pun yang mereka ingin Anda gunakan.
* `[Weekly_Deliveries]`: Tempat Anda mengupload kumpulan 7 video mingguan.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/agency-client-pitch.jpg" alt="Penawaran Agensi" width="280">
<img src="templates/examples/agency-pitch-clip.gif" alt="Pitch Boardroom Motion (I2V)" width="280">
</p>
<p align="center"><sub>Agency Pitch Image (Left) ──► Image-to-Video Boardroom Presentation (Right) · Video File: <a href="templates/examples/agency-pitch-clip.mp4">templates/examples/agency-pitch-clip.mp4</a></sub></p>

**Kesepakatan Retainer: Perjanjian Agensi "Pembukuan Apex"**



* **Klien:** Kantor akuntan lokal yang ingin mengembangkan kehadiran TikTok/Reels mereka untuk mencari klien pajak.
* **Kesepakatan Ditutup:** **Pungutan $1.500/bulan** untuk 30 video pendek.
* **Kecepatan Pengiriman:** 7 video diunggah ke folder Google Drive mereka setiap hari Jumat.
* **Matematika Produksi Agensi:**
* **Waktu yang Dihabiskan:** 4 jam/bulan pembuatan skrip, 4 jam/bulan pengeditan dan pembuatan teks. (Total: **8 jam/bulan**).
* **Biaya API:** 30 video @ $0,70/video = **$21,00/bulan**.
* **Pendapatan Kotor:** **$1.500,00/bulan**.
* **Laba Bersih Bulanan:** **$1,479.00**.
* **Setara tarif per jam:** **$184,87 / jam**.

**Mengapa ini berhasil:** Klien menerima video berkualitas tinggi yang diunggah sekali sehari, sehingga merek mereka tetap terlihat secara online. Agensi tersebut memperoleh margin keuntungan sebesar 98% dengan menggunakan saluran AI batch untuk mengirimkan aset.

---

## Bandingkan Alat

| Platform / Alat | Kemampuan Faktur | Pengaturan Penagihan Ulang | Terbaik untuk |
|---|---|---|---|
| **Penagihan / Faktur Stripe** | Tata letak profesional, pengumpulan pembayaran otomatis, penyimpanan kartu, dukungan untuk berbagai mata uang. | Langganan yang diperpanjang secara otomatis | Klien bisnis profesional dan akun perusahaan. |
| **Portal Pembuat Whop** | Pelacakan afiliasi bawaan, tautan akses khusus, dasbor sederhana. | Tautan berlangganan | Klien influencer, kursus, dan komunitas pembuat konten. |
| **DocuSign / PandaDoc** | Tanda tangan digital yang mengikat secara hukum, pelacakan kontrak. | T/A | Mendapatkan kontrak keagenan perusahaan bernilai tinggi. |

Untuk agensi kecil, Stripe Billing adalah alat pembuatan faktur standar. Kirimkan proposal PDF Anda bersama dengan tautan pembayaran berlangganan Stripe. Setelah pembayaran selesai, otomatiskan urutan orientasi email selamat datang.

---

## Luncurkan

**Cara meningkatkan skala agensi Anda:**
* **Batasi Revisi:** Dalam kontrak perjanjian Anda, tentukan bahwa revisi harus diminta dalam satu batch dalam waktu 48 jam setelah pengiriman. Hal ini menghentikan klien untuk menunda masukan proyek selama berminggu-minggu.
* **Pengaya Unggahan:** Jual layanan tambahan: Anda mengelola pengeposan dan penjadwalan di akun mereka dengan tambahan **$300/bulan**. Hal ini membuat kesepakatan lebih berharga dan menciptakan layanan bebas hambatan bagi klien.

---

## Latihan

1. **Mudah:** Susun lembar harga paket agensi Anda sendiri yang disesuaikan.
2. **Medium:** Isi template Proposal Retainer Pabrik Konten dengan nama klien tiruan, yang menentukan kiriman batch mingguan.
3. **Sulit:** Temukan tiga situs web layanan profesional lokal (misalnya akuntansi, dokter gigi lokal, broker real estate) yang memiliki feed media sosial kosong. Buat draf penawaran email dingin menggunakan tingkat harga Anda untuk menawarkan kepada mereka kumpulan pengujian 10 video.

---

## Templat

* [`templates/agency-retainer-proposal.md`](templates/agency-retainer-proposal.md) — templat proposal kontrak yang mencakup cakupan, jadwal, dan pembayaran.
* [`templates/bulk-pricing-sheet.md`](templates/bulk-pricing-sheet.md) — rentang harga dan margin untuk reel/short massal.

---

[← Batching & Scheduling at Volume](05-batching-and-scheduling.md) · [Track overview](README.md)
