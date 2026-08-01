# Apa yang Sebenarnya Dilakukan Agen Pengkodean

> Pahami dengan tepat cara kerja agen pengkodean AI — dan mengapa Anda tidak memerlukan gelar CS untuk menggunakannya secara menguntungkan.

**Lacak:** Agen AI & Vibe-Coding untuk Kreator
**Waktu:** ~35 menit
**Prasyarat:** Tidak ada

## Masalahnya

Sebagian besar pembuat konten mendengar "buat alat Anda sendiri" dan langsung melepaskan diri — yakin bahwa membuat perangkat lunak memerlukan pendidikan ilmu komputer selama bertahun-tahun, pengetahuan tentang struktur data, dan kemampuan membaca ribuan baris kode yang terlihat asing.

Keyakinan ini akurat sebelum tahun 2023. Kini sudah tidak akurat lagi.

Penghalangnya dulu adalah: *Anda tidak dapat membangun apa yang tidak dapat Anda tulis*. Agen pengkodean seperti Claude Code, Cursor, dan GitHub Copilot telah membalikkan hal ini: **Anda sekarang dapat membuat apa pun yang dapat Anda jelaskan dengan jelas**. Agen menulis, mengedit, men-debug, dan menjelaskan kode — Anda mengarahkannya.

Jika Anda tidak memahami perbedaan antara alat gambar AI (di mana Anda mengetikkan perintah ke UI) dan agen pengkodean AI (di mana Anda mendeskripsikan suatu program dan agen membangunnya), Anda akan kehilangan peralihan keterampilan yang paling menguntungkan dalam dekade ini.

---

## Konsep

**Agen Pengkode** adalah AI yang dapat membaca, menulis, menjalankan, dan men-debug file kode secara mandiri di dalam direktori proyek Anda:

```
Your Plain-English Instruction ──► Agent Reads Existing Files ──► Agent Writes/Edits Code ──► Agent Runs & Tests ──► Working Program
```

### 3 Perbedaan Utama (Agen vs. Chatbots vs. Skrip):

1. **AI Chatbots (ChatGPT, web Claude.ai):** Anda menempelkan kode, kode tersebut akan membalas dengan saran di jendela obrolan. Anda menyalin-menempelkan kembali perubahan secara manual. Tidak ada akses file, tidak ada eksekusi. Bagus untuk pertanyaan, lambat untuk membangun.
2. **Agen Pengkodean (Kode Claude, Kursor, Kopilot GitHub):** Agen beroperasi *di dalam sistem file Anda*. Itu dapat membuka file, menulis yang baru, menjalankan perintah terminal, membaca pesan kesalahan, dan mengoreksi diri sendiri — menyelesaikan tugas pemrograman multi-langkah dari satu instruksi.
3. **Skrip Tradisional (Python, Bash):** Kode pra-tertulis yang Anda jalankan secara manual. Cepat dan murah, tetapi mengharuskan Anda menulis dan men-debug kode sendiri, atau menyewa pengembang.

### Apa yang Dapat Dibangun Agen untuk Kreator:
* **Batch API runner** — Skrip yang memanggil muapi 50 kali secara otomatis, menghemat waktu berjam-jam mengklik manual.
* **Generator metadata** — Alat yang membaca folder gambar dan menulis otomatis judul CSV serta kata kunci untuk platform stok.
* **Perluas matriks cepat** — Menghasilkan 100 variasi cepat dari templat 3 variabel dalam hitungan detik.
* **Otomasi penerimaan klien** — Formulir yang menerima selfie dan secara otomatis memicu saluran pembuatan foto kepala.
* **Kalkulator harga** — Alat web interaktif yang digunakan klien Anda untuk memperkirakan biaya proyek mereka.

---

## Lakukan itu

### Langkah 1: Instal Agen Pengkodean
Pilih salah satu dari dua agen yang paling mudah diakses oleh pembuat konten:
* **Kode Claude** (Antropis): Agen berbasis terminal. Instal melalui `npm install -g @anthropic-ai/claude-code`. Berjalan di dalam folder proyek mana pun.
* **Cursor** (cursor.sh): Agen berbasis VS Code dengan editor kode visual yang familiar. Unduh aplikasinya, buka folder, dan mulai mengobrol di bar samping.

Buka [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md) untuk menyiapkan sesi pertama Anda.

### Langkah 2: Berikan Agen Satu Instruksi yang Jelas
Buka folder proyek Anda di agen. Ketik satu instruksi:
> *"Buat skrip Python bernama `batch_prompt_runner.py` yang membaca daftar perintah dari file bernama `prompts.txt` (satu perintah per baris) dan mencetak masing-masing perintah bernomor."*

Agen akan membuat file, menulis kode, dan mengonfirmasi bahwa file berfungsi.

### Langkah 3: Jalankan Outputnya
Jalankan file yang dibuat agen:
```bash
python batch_prompt_runner.py
```
Anda akan melihat perintah Anda dicetak dan diberi nomor. Ini adalah alat pertama yang dibuat oleh agen Anda.

### Langkah 4: Ulangi dengan Koreksi
Beri tahu agen apa yang harus diubah dalam bahasa Inggris sederhana:
> *"Sekarang, daripada mencetak, simpan hasilnya ke file bernama `results.txt`."*

Agen mengedit skrip secara otomatis. Anda tidak membaca kodenya — Anda hanya menjelaskan perubahannya.

---

## Contoh yang berhasil

**Sesi Agen Pertama untuk "Niche Creator Alex"**

* **Latar Belakang:** Alex menjalankan toko print-on-demand Etsy. Setiap minggu dia mengetik secara manual 30 judul produk ke dalam spreadsheet.
* **Instruksi Agen Diberikan:** *"Tulis skrip Python yang membaca daftar nama desain dari `designs.txt` dan menghasilkan 3 variasi judul produk Etsy yang ramah SEO untuk setiap desain, menyimpan semua hasil ke `etsy_titles.csv`."*
* **Waktu Pengerjaan Alat:** 8 menit (termasuk menginstal Kode Claude).
* **Waktu Mingguan yang Dihemat:** 2,5 jam copywriting manual per minggu.
* **Nilai Alat:** Jika dijual di Gumroad dengan harga $19, alat ini akan membayar kembali waktu pembuatannya setelah 3 penjualan pertama.

---

## Bandingkan Alat

| Platform Agen | Gaya Antarmuka | Terbaik Untuk | Biaya Bulanan |
|---|---|---|---|
| **Kode Claude** | Terminal (baris perintah) | Pembuat konten merasa nyaman dengan terminal dasar | ~$20/bln (Kredit API Antropis) |
| **Kursor** | Editor visual (seperti VS Code) | Pembuat konten yang lebih menyukai antarmuka grafis | Tingkat gratis + $20/bln Pro |
| **Kopilot GitHub** | Pelengkapan otomatis dalam editor | Kreator sudah menggunakan VS Code untuk karya lainnya | $10/bln |
| **Agen Replit** | Berbasis browser, tanpa instalasi | Pembuat konten yang tidak menginginkan penyiapan lokal | Tersedia tingkat gratis |

---

## Luncurkan

**Apa yang bisa Anda jual setelah pelajaran ini:**
* **Layanan Penyiapan Agen:** Biaya **$99–$199** untuk menyiapkan dan mengonfigurasi Kode Claude atau Kursor bagi pembuat lain yang menganggap pemasangannya membingungkan. Banyak pencipta non-teknis akan membayar untuk melewatkan pengaturan terminal sepenuhnya.

---

## Latihan

1. **Mudah:** Instal Cursor atau Claude Code dan buka folder proyek kosong. Tanyakan kepada agen: *"Buat file bernama `hello.txt` yang berisi tulisan 'Output agen pertama saya'."* Konfirmasikan file telah dibuat.
2. **Medium:** Minta agen untuk menulis skrip Python yang membaca file teks nama produk dan mengeluarkan versi huruf besar semua dari setiap nama ke dalam file baru.
3. **Sulit:** Minta agen untuk membuat skrip yang menghasilkan 5 variasi prompt Midjourney dari satu subjek, gaya estetika, dan sudut kamera — membaca masukan dari CSV dan menulis keluaran ke CSV baru.

---

## Templat

* [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md) — Kerangka instruksi agen, lembar perencanaan sesi, dan pustaka perintah alat pertama.

---

[Track Overview](README.md) · Berikutnya: [Building Your First Sellable Micro-Tool →](02-building-your-first-sellable-micro-tool.md)
