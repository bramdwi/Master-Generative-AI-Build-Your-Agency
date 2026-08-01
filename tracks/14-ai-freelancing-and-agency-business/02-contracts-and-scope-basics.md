# Modul 2: Dasar-Dasar Kontrak & Scope Proyek

> Menyusun Master Services Agreement (MSA), Statement of Work (SOW), batasan revisi, jadwal pembayaran bertahap, serta klausul hak cipta/IP AI yang mengikat secara legal.

---

## 🎯 Mengapa Kontrak Standar Tidak Memadai bagi Agensi AI

Template kontrak kreatif konvensional dirancang dengan asumsi pengerjaan manual, pemotretan kamera fisik, serta alur waktu linier. Saat Anda mengelola alur produksi AI, kontrak tradisional meninggalkan celah hukum yang cukup riskan:

1. **Jebakan Permintaan Revisi:** Client yang berasumsi bahwa karena *"AI mampu memproses gambar dalam hitungan detik,"* mereka berhak menuntut 50 variasi tambahan secara cuma-cuma.
2. **Kekeliruan Kepemilikan Prompt IP:** Client yang menghendaki penguasaan penuh atas pustaka internal prompt, alur kerja ComfyUI, serta bobot LoRA milik Anda.
3. **Ambiguasi Hak Cipta AI:** Ketidakpahaman atas regulasi U.S. Copyright Office terkait aset berbasis AI serta jaminan lisensi komersialnya.

Guna melindungi margin dan ketenangan operasional agensi Anda, setiap ikatan kerja sama wajib dilandasi oleh dua dokumen hukum yang mengikat:

- **Master Services Agreement (MSA):** Payung hukum utama yang mengatur keseluruhan ikatan kerja sama dengan client — mencakup batasan tanggung jawab, kerahasiaan, ketentuan pembayaran, serta yurisdiksi hukum. Ditandatangani satu kali dan berlaku untuk seluruh proyek di masa depan.
- **Statement of Work (SOW):** Adendum spesifik proyek dari MSA yang merincikan deliverables, tanggal pencapaian, batasan revisi, serta imbalan finansial untuk satu penugasan tunggal. Dokumen SOW baru ditandatangani untuk setiap proyek individual.

---

## 🔒 5 Klausul Wajib dalam Kontrak AI Creator

### 1. Batasan Revisi & Perlindungan Perubahan Scope

Perubahan scope tanpa kendali merupakan ancaman terbesar bagi margin agensi Anda. Tentukan secara *spesifik* kriteria revisi yang valid berbanding perubahan yang dihitung sebagai Out-of-Scope Change Order:

> **Klausul 4.2 — Scope of Revisions:**  
> *"Nilai Kontrak yang disepakati mencakup secara presisi dua (2) putaran revisi per deliverable. Kategori 'Revisi' dibatasi secara ketat pada penyesuaian minor color grading, pencahayaan latar belakang, koreksi kontras, atau perbaikan masking sederhana. Setiap permohonan dari Client yang memerlukan perancangan ulang struktur prompt, penggantian model, perubahan pose, maupun penyesuaian gaya mendasar pasca-persetujuan Brief awal akan dikategorikan sebagai Out-of-Scope Change Order, yang dikenakan biaya tambahan sesuai tarif standar Agensi sebesar $150.00 per jam."*

---

### 2. Struktur Pembayaran Bertahap & Penahanan Aset Akhir

Hindari memulai proses GPU render atau eksekusi prompt sebelum menerima deposit awal yang bersifat non-refundable. Struktur pembayaran bertahap menjamin arus kas tetap sehat:

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
> **Jangan Pernah Menyerahkan Berkas Master Tanpa Watermark Sebelum Pelunasan 100% Diterima.** Menyerahkan aset utuh sebelum pelunasan akan menghilangkan posisi tawar pembayaran Anda serta memicu keterlambatan pelunasan piutang.

---

### 3. Hak Cipta AI & Lisensi Penggunaan Komersial

Tegaskan posisi hukum terkait media berbasis AI secara transparan guna menyelaraskan ekspektasi serta melindungi hak komersial client:

> **Klausul 8.1 — Intellectual Property & AI Commercial License:**  
> *"Setelah pelunasan diterima secara penuh, Agensi menganugerahkan kepada Client lisensi penggunaan komersial eksklusif, abadi, dan berlaku secara global untuk menampilkan, mendistribusikan, serta memonetisasi aset media yang diserahkan. Client memahami bahwa deliverables memanfaatkan Generative AI models mutakhir (misalnya, FLUX, Runway, ElevenLabs) yang beroperasi di bawah perjanjian komersial tingkat enterprise. Agensi menjamin bahwa alur kerja prompt dan metode pascaproduksi tidak menyertakan rahasia dagang pihak ketiga maupun aset visual berhak cipta tanpa izin yang sah."*

---

### 4. Perlindungan Aset Properti Intelektual Internal

Amankan alur kerja teknis internal Anda agar client tidak mengintegrasikan aset teknis Anda secara sepihak:

> **Klausul 8.4 — Agency Background Technology:**  
> *"Agensi memegang hak penuh, kepemilikan, dan kepentingan atas instrumen yang telah ada sebelumnya, pustaka prompt internal, alur kerja ComfyUI node graphs, bobot LoRA model, skrip otomatisasi, serta teknologi latar belakang ('Agency Background IP'). Tidak ada ketentuan dalam Perjanjian ini yang dapat ditafsirkan sebagai pengalihan kepemilikan atas Agency Background IP kepada Client."*

---

### 5. Jaminan & Ganti Rugi Data dari Client

Pastikan client bertanggung jawab secara hukum apabila mereka menyediakan materi referensi yang melanggar hak cipta atau merek dagang:

> **Klausul 9.3 — Client Data & Input Warranty:**  
> *"Client menyatakan serta menjamin bahwa seluruh logo, panduan brand, gambar referensi, merek dagang, dan foto headshots karyawan yang diserahkan kepada Agensi sebagai masukan AI model tidak melanggar hak properti intelektual maupun privasi pihak ketiga. Client menyetujui untuk membela, mengganti rugi, dan membebaskan Agensi dari segala bentuk tuntutan yang timbul akibat data masukan yang disediakan oleh Client."*

---

## 🛑 Skenario Perubahan Scope & Cara Meresponsnya

| Skenario Perubahan Scope | Permintaan Client | Argumentasi Kontrak & Naskah Respons Presisi |
| --- | --- | --- |
| **Variasi Tanpa Batas** | *"Bisakah kita mencoba 30 variasi tambahan untuk pencahayaan ini?"* | *"Kami dengan senang hati akan mengeksplorasi variasi baru tersebut! Sesuai dengan Klausul 4.2 pada SOW kita, 2 putaran revisi yang tercakup telah selesai digunakan. Saya dapat menerbitkan Out-of-Scope Change Order senilai $450 untuk mengakomodasi 15 variasi tambahan."* |
| **Pustaka Berkas Internal** | *"Kirimkan seluruh JSON prompts dan node graphs mentah agar tim internal kami dapat menjalankannya secara mandiri."* | *"Deliverables utama beresolusi 8k telah terlisensi sepenuhnya untuk Anda pasca-pelunasan! Namun, sebagaimana tercantum pada Klausul 8.4, alur kerja ComfyUI node graphs serta pustaka prompt internal kami merupakan Agency Background IP milik agensi yang tidak terintegrasi dalam penyerahan proyek ini."* |
| **Keterlambatan Pelunasan** | *"Departemen akuntansi kami menerapkan prosedur Net-60. Serahkan berkas HD sekarang dan pembayaran akan diproses bulan depan."* | *"Kami sangat memahami prosedur operasional AP di korporasi Anda! Namun selaras dengan kesepakatan tertulis kita, berkas master beresolusi tinggi tanpa watermark dipublikasikan seketika pasca-pelunasan invoice terkonfirmasi. Mohon beri tahu kami segera setelah proses transfer telah berhasil dilaksanakan!"* |

---

## 🛠️ Rencana Aksi Langkah demi Langkah

1. **Gunakan Perjanjian Standar:** Unduh panduan [`templates/freelance-client-contract.md`](templates/freelance-client-contract.md) untuk menyesuaikan draf perjanjian hukum agensi Anda.
2. **Tegaskan Batasan Revisi:** Senantiasa cantumkan batasan revisi secara tertulis pada lembar proposal awal Anda.
3. **Manfaatkan Watermarked Proofing:** Sajikan pratinjau beresolusi rendah yang dibubuhi watermark sebelum penyerahan aset akhir dilaksanakan.
4. **Cermati Laporan Performa Client:** Tinjau sampel tampilan laporan metrik berikut:

<p align="center">
<img src="templates/examples/client-dashboard-motion.gif" alt="Pratinjau Animasi Dasbor Kinerja Klien" width="480">
</p>
<p align="center"><sub>Pratinjau Animasi Dasbor Metrik Klien · Berkas Video: <a href="templates/examples/client-dashboard-motion.mp4">MP4</a></sub></p>

---

## 💡 Poin Penting

- Senantiasa terapkan syarat deposit awal 50% yang bersifat non-refundable sebelum mengoperasikan GPU render atau alur prompt.
- Pisahkan lisensi luaran akhir (yang dialihkan kepada client) dari pustaka prompt internal dan alur kerja IP (yang tetap menjadi milik agensi).
- Definisikan parameter revisi secara eksplisit guna mencegah penambahan scope yang berpotensi menggerus margin bersih Anda.

---

[← Sebelum: Penentuan Harga Layanan Anda](01-pricing-your-services.md) · [Track overview](README.md) · Berikutnya: [Menggaet & Mengunci Klien →](03-finding-and-closing-clients.md)
