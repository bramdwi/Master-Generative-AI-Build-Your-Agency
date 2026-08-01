# Modul 2: Dasar-Dasar Kontrak & Ruang Lingkup

> Menyusun Perjanjian Layanan Utama (MSA), Pernyataan Kerja (SOW), batasan revisi, jadwal pembayaran tonggak sejarah, dan klausul penetapan hak cipta/IP AI.

---

## 🎯 Mengapa Kontrak Standar Gagal untuk Agensi AI

Kontrak kreatif tradisional mengasumsikan tenaga manusia, pengambilan gambar kamera manual, dan garis waktu linier yang jelas. Saat mengelola jalur pembuatan AI, templat kontrak tradisional meninggalkan celah hukum yang besar:

1. **Jebakan Revisi:** Klien berasumsi bahwa karena *"AI menghasilkan gambar dalam hitungan detik,"* mereka dapat meminta 50 variasi tanpa batas secara gratis.
2. **Kebingungan IP Prompt:** Klien yang menuntut kepemilikan penuh atas pustaka prompt internal, alur kerja ComfyUI, dan bobot LoRA Anda.
3. **Ambiguitas Hak Cipta AI:** Kesalahpahaman seputar peraturan Kantor Hak Cipta AS mengenai aset yang dihasilkan AI dan jaminan penggunaan komersial.

Untuk melindungi margin dan kewarasan agensi Anda, setiap hubungan klien harus diatur oleh dua perjanjian yang mengikat secara hukum:
* **Perjanjian Layanan Utama (MSA):** Kontrak hukum menyeluruh yang mengatur seluruh hubungan klien — mencakup batas tanggung jawab, kerahasiaan, syarat pembayaran, dan hukum yang mengatur. Ditandatangani satu kali per klien dan berlaku untuk semua proyek masa depan.
* **Pernyataan Kerja (SOW):** Tambahan khusus proyek pada MSA yang menentukan hasil yang tepat, tanggal pencapaian, batas revisi, dan biaya untuk satu penugasan. SOW baru ditandatangani untuk masing-masing proyek.

---

## 🔒 5 Klausul Kontrak Wajib bagi Kreator AI

### 1. Tutup Revisi & Scope Creep Shield
Scope creep adalah satu-satunya ancaman terbesar terhadap keuntungan agensi. Tentukan *secara tepat* apa yang dimaksud dengan revisi valid vs. perintah perubahan di luar cakupan:

> **Klausul 4.2 — Ruang Lingkup Revisi:**
> *"Nilai Kontrak yang disepakati mencakup tepat dua (2) putaran revisi per kiriman. 'Revisi' sangat terbatas pada penyesuaian kecil dalam gradasi warna, penyesuaian pencahayaan latar belakang, koreksi kontras, atau perbaikan penyembunyian kecil. Setiap permintaan oleh Klien untuk rekayasa ulang struktur secara cepat, penggantian model, perubahan pose, atau perubahan gaya mendasar setelah penandatanganan Ringkasan awal akan diklasifikasikan sebagai Perintah Perubahan Di Luar Cakupan, yang ditagih dengan tarif standar Agensi sebesar $150,00 per jam."*

---

### 2. Struktur Pembayaran Milestone & Kunci Pembayaran
Jangan pernah memulai rendering GPU atau eksekusi cepat tanpa uang tunai di muka yang tidak dapat dikembalikan. Struktur pencapaian standar memastikan arus kas positif:

```
+-----------------------------------------------------------------------------+
|                        MILESTONE PAYMENT SCHEDULE                           |
+-----------------------------------------------------------------------------+
| MILESTONE 1: 50% Non-Refundable Deposit Upon Contract Signing               |
| • Unlocks compute resources, model selection, and initial draft generation. |
|                                                                             |
| MILESTONE 2: 25% Upon First Watermarked Draft Review                        |
| • Delivered as low-res watermarked proofs for Client feedback sign-off.     |
|                                                                             |
| MILESTONE 3: 25% Upon Final Asset Handover                                  |
| • Unlocks un-watermarked 8k master files & commercial usage license.        |
+-----------------------------------------------------------------------------+
```

> [!PERINGATAN]
> **Jangan Pernah Mengirimkan File Induk Akhir yang Tidak Diberi Watermark Sebelum Izin Pembayaran 100%.** Menyerahkan aset yang tidak diberi watermark lebih awal akan menghilangkan semua leverage pembayaran dan menyebabkan tertundanya piutang.

---

### 3. Penetapan Hak Cipta & Kekayaan Intelektual AI
Tangani undang-undang hak cipta mengenai media yang dihasilkan AI dengan jelas untuk menetapkan harapan yang realistis dan melindungi hak komersial klien:

> **Klausul 8.1 — Kekayaan Intelektual & Lisensi Komersial AI:**
> *"Setelah menerima pembayaran penuh, Agensi memberikan kepada Klien lisensi penggunaan komersial eksklusif, abadi, di seluruh dunia untuk menggunakan, menampilkan, mendistribusikan, dan memonetisasi aset media akhir yang dikirimkan. Klien mengakui bahwa kiriman menggunakan model AI Generatif yang canggih (misalnya, FLUX, Runway, ElevenLabs) yang beroperasi berdasarkan perjanjian tingkat perusahaan komersial. Agensi menjamin bahwa alur kerja cepat dan metode pasca-pemrosesan tidak menyertakan rahasia dagang pihak ketiga yang bersifat rahasia atau aset visual bermerek dagang tanpa izin."*

---

### 4. Latar Belakang Reservasi IP Kepemilikan
Lindungi aset alur kerja internal Anda sehingga klien tidak dapat mencuri tumpukan teknis Anda:

> **Klausul 8.4 — Teknologi Latar Belakang Agensi:**
> *"Agensi memegang semua hak, kepemilikan, dan kepentingan dalam dan terhadap alat yang sudah ada sebelumnya, perpustakaan cepat kepemilikan, grafik node ComfyUI, bobot model LoRA, skrip alur kerja, dan teknologi otomatisasi latar belakang ("IP Latar Belakang Agensi"). Tidak ada hal dalam Perjanjian ini yang dapat ditafsirkan sebagai pengalihan kepemilikan IP Latar Belakang Agensi kepada Klien."*

---

### 5. Garansi & Ganti Rugi Masukan Klien
Pastikan klien bertanggung jawab secara hukum jika mereka memberikan foto referensi bermerek dagang atau hak cipta:

> **Klausul 9.3 — Data Klien & Jaminan Masukan:**
> *"Klien menyatakan dan menjamin bahwa semua logo, pedoman merek, gambar referensi, merek dagang, dan foto kepala karyawan yang diberikan kepada Agensi untuk masukan model AI tidak melanggar hak kekayaan intelektual atau hak privasi pihak ketiga mana pun. Klien setuju untuk membela, mengganti kerugian, dan membebaskan Agensi dari klaim apa pun yang timbul dari masukan yang diberikan Klien."*

---

## 🛑 Skenario Common Scope Creep & Respons Klien yang Tepat

| Skenario Ruang Lingkup Creep | Permintaan Klien | Pertahanan Kontrak & Respon Tepat |
|---|---|---|
| **Variasi Tanpa Akhir** | *"Bisakah kita mencoba 30 variasi pengaturan pencahayaan ini lagi?"* | *"Kami ingin menjelajahi variasi baru tersebut! Sesuai Klausul 4.2 SOW kami, 2 putaran revisi yang kami sertakan telah selesai. Saya dapat mengirimkan Pesanan Perubahan Di Luar Cakupan sebesar $450 untuk mencakup 15 variasi tambahan."* |
| **File Sumber Alur Kerja** | *"Kirimkan semua perintah JSON mentah dan grafik simpul sehingga tim kami dapat menjalankannya secara internal."* | *"Penyerahan 8k akhir kami dilisensikan sepenuhnya kepada Anda setelah pembayaran akhir! Namun, sebagaimana diuraikan dalam Klausul 8.4, grafik node ComfyUI internal dan perpustakaan cepat kami adalah hak milik IP Latar Belakang Agensi dan tidak termasuk dalam penyampaian ini."* |
| **Keterlambatan Pembayaran** | *"Departemen akuntansi kami membayar Net-60. Kirim file HD sekarang dan kami akan membayar bulan depan."* | *"Kami benar-benar memahami siklus AP perusahaan! Berdasarkan perjanjian kami, file master beresolusi tinggi yang tidak diberi watermark akan dirilis segera setelah izin faktur akhir. Beri tahu kami segera setelah transfer berhasil!"* |

---

## 🛠️ Rencana Aksi Langkah demi Langkah

1. **Adopsi Perjanjian Utama:** Unduh [`templates/freelance-client-contract.md`](templates/freelance-client-contract.md) untuk menyesuaikan perjanjian agensi Anda.
2. **Tetapkan Batasan Revisi yang Kaku:** Selalu nyatakan batas revisi secara tertulis dalam proposal proyek awal Anda.
3. **Gunakan Pemeriksaan Bertanda Air:** Memberikan pratinjau bertanda air beresolusi rendah sebelum rilis pencapaian akhir.
4. **Tinjau Dasbor Kinerja Klien:** Lihat grafik laporan dasbor metrik klien:
![Client Metrics Dashboard](templates/examples/client-dashboard-metrics.jpg)
*Tonton loop video gerak analitik ([client-dashboard-motion.mp4](templates/examples/client-dashboard-motion.mp4) / [.gif](templates/examples/client-dashboard-motion.gif)).*

---

## 💡 Poin Penting
- Selalu terapkan deposit sebesar 50% yang tidak dapat dikembalikan sebelum memulai rendering GPU atau pipeline cepat apa pun.
- Pisahkan lisensi keluaran akhir (ditransfer ke klien) dari grafik perintah internal dan IP alur kerja (disimpan oleh agensi).
- Tentukan secara eksplisit parameter revisi untuk mencegah scope creep menghancurkan margin bersih Anda.
