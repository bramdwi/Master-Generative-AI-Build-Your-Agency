# Modul 2: Dasar-Dasar Kontrak & Ruang Lingkup

> Menyusun Master Services Agreement (MSA), Statement of Work (SOW), batasan revisi, jadwal pembayaran milestone, dan klausul penetapan Hak Cipta/IP AI.

---

## 🎯 Mengapa Kontrak Standar Gagal untuk Agensi AI

Kontrak kreatif tradisional mengasumsikan penggunaan tenaga kerja manual, proses pengambilan gambar kamera konvensional, serta alur waktu linier yang terstruktur. Saat mengelola pipeline pembuatan AI, templat kontrak tradisional justru meninggalkan celah hukum yang signifikan:

1. **Jebakan Revisi:** Klien mengasumsikan bahwa karena *"AI mampu menghasilkan gambar dalam hitungan detik,"* mereka berhak mengajukan 50 variasi tanpa batas secara cuma-cuma.
2. **Ambiguasi IP Prompt:** Klien yang menuntut kepemilikan mutlak atas pustaka Prompt internal, alur kerja ComfyUI, serta bobot LoRA milik Anda.
3. **Ketidakpastian Hak Cipta AI:** Kesalahpahaman seputar regulasi Kantor Hak Cipta AS mengenai aset yang dihasilkan AI dan jaminan commercial usage.

Demi melindungi margin keuntungan dan stabilitas operasional agensi Anda, setiap ikatan kerja sama dengan klien wajib diatur oleh dua perjanjian yang mengikat secara hukum:

- **Master Services Agreement (MSA):** Kontrak hukum induk yang mengawasi seluruh ikatan kemitraan dengan klien — mencakup batasan tanggung jawab, kerahasiaan, syarat pembayaran, serta hukum yang berlaku. Ditandatangani satu kali untuk setiap klien dan berlaku efektif bagi seluruh proyek di masa depan.
- **Statement of Work (SOW):** Adendum khusus proyek yang terikat pada MSA untuk mendefinisikan deliverable secara presisi, tanggal milestone, batasan revisi, serta alokasi biaya untuk satu penugasan. SOW baru ditandatangani untuk setiap penugasan individual.

---

## 🔒 5 Klausul Kontrak Wajib bagi Kreator AI

### 1. Batasan Revisi & Scope Creep Shield

Scope creep merupakan ancaman terbesar terhadap margin keuntungan agensi. Tentukan *secara presisi* batas antara revisi yang valid dan change order di luar cakupan:

> **Klausul 4.2 — Ruang Lingkup Revisi:**  
> *"Nilai Kontrak yang disepakati mencakup tepat dua (2) putaran revisi per deliverable. 'Revisi' dibatasi secara ketat pada penyesuaian minor dalam gradasi warna, penyelarasan pencahayaan latar belakang, koreksi kontras, atau perbaikan inpainting skala kecil. Setiap permintaan dari Klien untuk melakukan rekayasa ulang struktur secara cepat, penggantian model, perubahan pose, atau modifikasi gaya yang mendasar setelah penandatanganan Brief awal akan dikategorikan sebagai Change Order Di Luar Cakupan, yang akan ditagihkan sesuai tarif standar Agensi sebesar $150,00 per jam."*

---

### 2. Struktur Pembayaran Milestone & Kunci Pembayaran

Hindari memulai proses rendering GPU atau eksekusi Prompt tanpa dana muka yang bersifat non-refundable. Struktur milestone standar menjamin kelancaran arus kas:

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

> [!WARNING]
> **Hindari Menyerahkan Master File Akhir Tanpa Watermark Sebelum Pelunasan Pembayaran 100%.** Menyerahkan aset tanpa watermark lebih awal akan menghilangkan seluruh leverage pembayaran Anda dan memicu keterlambatan pelunasan piutang.

---

### 3. Penetapan Hak Cipta & Kekayaan Intelektual AI

Atur regulasi hak cipta terkait media buatan AI secara transparan untuk membangun ekspektasi yang realistis sekaligus melindungi hak komersial klien:

> **Klausul 8.1 — Kekayaan Intelektual & Lisensi Komersial AI:**  
> *"Setelah pelunasan pembayaran diterima secara penuh, Agensi memberikan lisensi commercial usage yang eksklusif, abadi, dan berlaku secara global kepada Klien untuk memanfaatkan, menampilkan, mendistribusikan, serta memonetisasi aset media akhir yang diserahkan. Klien memahami bahwa deliverable ini memanfaatkan model AI Generatif mutakhir (seperti FLUX, Runway, ElevenLabs) yang beroperasi di bawah perjanjian commercial enterprise tier. Agensi menjamin bahwa alur kerja Prompt dan metode pascapemrosesan tidak mengandung rahasia dagang pihak ketiga yang bersifat rahasia atau aset visual bermerek dagang tanpa izin."*

---

### 4. Proteksi IP Proprietary Latar Belakang

Lindungi aset alur kerja internal Anda agar klien tidak dapat mengambil alih tech stack milik Anda:

> **Klausul 8.4 — Teknologi Latar Belakang Agensi:**  
> *"Agensi memegang hak kepemilikan penuh dan kepentingan atas instrumen yang telah ada sebelumnya, pustaka Prompt proprietary, grafik node ComfyUI, bobot model LoRA, skrip alur kerja, serta teknologi otomatisasi latar belakang ("IP Latar Belakang Agensi"). Tidak ada poin dalam Perjanjian ini yang dapat ditafsirkan sebagai pengalihan hak milik IP Latar Belakang Agensi kepada Klien."*

---

### 5. Garansi & Ganti Rugi Masukan Klien

Pastikan klien bertanggung jawab secara hukum apabila mereka menyediakan gambar referensi yang terikat merek dagang atau hak cipta:

> **Klausul 9.3 — Data Klien & Jaminan Masukan:**  
> *"Klien menyatakan serta menjamin bahwa seluruh logo, pedoman merek, gambar referensi, merek dagang, dan foto headshot karyawan yang diserahkan kepada Agensi sebagai masukan model AI tidak melanggar hak kekayaan intelektual atau hak privasi pihak ketiga mana pun. Klien menyetujui untuk membela, mengganti kerugian, dan membebaskan Agensi dari segala tuntutan hukum yang timbul akibat masukan yang disediakan oleh Klien."*

---

## 🛑 Skenario Common Scope Creep & Respon Klien yang Tepat

| Skenario Scope Creep | Permintaan Klien | Pertahanan Kontrak & Respon Tepat |
| --- | --- | --- |
| **Variasi Tanpa Akhir** | *"Bisakah kita mencoba 30 variasi pengaturan pencahayaan ini lagi?"* | *"Kami sangat terbuka untuk mengeksplorasi variasi baru tersebut! Sesuai Klausul 4.2 pada SOW kita, jatah 2 putaran revisi telah terpenuhi. Saya dapat menerbitkan Change Order Di Luar Cakupan senilai $450 untuk mengakomodasi 15 variasi tambahan."* |
| **File Sumber Alur Kerja** | *"Kirimkan seluruh Prompt JSON mentah dan grafik node agar tim kami dapat menjalankannya secara internal."* | *"Penyerahan master file 8k akhir telah dilisensikan secara penuh kepada Anda setelah pelunasan pembayaran! Namun, sebagaimana tercantum pada Klausul 8.4, grafik node ComfyUI internal serta pustaka Prompt kami merupakan IP Latar Belakang Agensi yang bersifat proprietary dan tidak termasuk dalam deliverable ini."* |
| **Keterlambatan Pembayaran** | *"Departemen akuntansi kami menerapkan sistem pembayaran Net-60. Mohon kirimkan file HD sekarang dan kami akan melunasinya bulan depan."* | *"Kami sangat memahami siklus AP di perusahaan Anda! Namun berdasarkan kesepakatan Perjanjian kita, master file beresolusi tinggi tanpa watermark akan segera dirilis begitu konfirmasi faktur akhir diterima. Mohon beri tahu kami segera setelah proses transfer berhasil!"* |

---

## 🛠️ Rencana Aksi Langkah demi Langkah

1. **Adopsi Perjanjian Utama:** Unduh [`templates/freelance-client-contract.md`](templates/freelance-client-contract.md) untuk menyesuaikan perjanjian agensi Anda.
2. **Tetapkan Batasan Revisi yang Kaku:** Senantiasa cantumkan batasan revisi secara tertulis dalam proposal proyek awal Anda.
3. **Gunakan Pemeriksaan Bertanda Air:** Sediakan pratinjau beresolusi rendah dengan watermark sebelum merilis milestone akhir.
4. **Tinjau Dasbor Kinerja Klien:** Amati visualisasi laporan dasbor metrik klien berikut:

<p align="center">
<img src="templates/examples/client-dashboard-motion.gif" alt="Pratinjau Animasi Dasbor Kinerja Klien" width="480">
</p>
<p align="center"><sub>Pratinjau Animasi Dasbor Metrik Klien · Berkas Video: <a href="templates/examples/client-dashboard-motion.mp4">MP4</a></sub></p>

---

## 💡 Poin Penting

- Senantiasa terapkan deposit sebesar 50% yang bersifat non-refundable sebelum mengeksekusi rendering GPU atau pipeline Prompt apa pun.
- Separasi lisensi keluaran akhir (yang dialihkan kepada klien) dari grafik Prompt internal serta IP alur kerja (yang ditahan oleh agensi).
- Tentukan parameter revisi secara eksplisit guna mencegah scope creep mencederai margin bersih Anda.
