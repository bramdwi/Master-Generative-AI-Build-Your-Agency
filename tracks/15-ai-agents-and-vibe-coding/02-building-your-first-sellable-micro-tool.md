# Membangun Alat Mikro Pertama Anda yang Dapat Dijual

> Cakupan, bangun, dan gabungkan alat pembuat fungsi tunggal dalam satu sesi pengkodean getaran — lalu ubah menjadi sebuah produk.

**Lacak:** Agen AI & Vibe-Coding untuk Kreator
**Waktu:** ~50 menit
**Prasyarat:** [01: What Coding Agents Actually Do](01-what-coding-agents-actually-do.md)

## Masalahnya

Sebagian besar pembuat konten yang menemukan agen pengkodean segera mencoba membangun sesuatu yang ambisius — platform SaaS lengkap, aplikasi multi-fitur, dan dasbor pelatihan model AI khusus. Proyek-proyek ini terhenti dalam waktu 48 jam karena:

* Cakupannya terlalu besar untuk dijelaskan dengan jelas dalam satu instruksi.
* Ketika agen menghasilkan kesalahan, pencipta tidak mengetahui apakah kesalahan tersebut ada pada langkah 1 atau langkah 27.
* Minggu-minggu berlalu dengan proyek setengah jadi yang tidak bisa dijual.

Pendekatan yang benar adalah **Metode Alat Mikro**: buat satu alat yang dapat melakukan **satu hal** dengan sangat baik. Alat mikro cukup kecil untuk dibuat dalam satu sesi berdurasi 60 menit, cukup spesifik untuk memecahkan masalah yang sulit bagi pembuat konten, dan cukup sederhana sehingga non-pengembang dapat memeliharanya.

---

## Konsep

**Corong Alat Mikro** mengubah satu titik kesulitan pembuat konten menjadi produk digital yang dapat dijual:

```
Identify 1 Painful Repetitive Creator Task ──► Define Exact Input & Output ──► Agent Builds the Tool ──► Wrap & Price It ──► Sell on Gumroad
```

### Kerangka Definisi Lingkup Alat Mikro:

Alat mikro yang valid harus menjawab keempat pertanyaan dengan jelas sebelum Anda membuka agen:

1. **Apa masukan sebenarnya?** (misalnya, file `.txt` dengan 10 nama produk)
2. **Apa keluaran sebenarnya?** (misalnya, file `.csv` dengan 3 judul SEO dan 5 kata kunci per produk)
3. **Apa yang dimaksud dengan transformasi?** (misalnya, GPT-4o menghasilkan judul dan kata kunci menggunakan perintah SEO komersial tetap)
4. **Siapa pembelinya?** (misalnya, penjual print-on-demand Etsy yang tidak suka menulis salinan SEO)

### 5 Kategori Alat Mikro Bernilai Tinggi untuk Kreator:

| Kategori Alat | Apa Fungsinya | Target Pembeli | Harga Jual |
|---|---|---|---|
| **Pelari Cepat Batch** | Mengirim 50+ permintaan ke FLUX/muapi dalam satu klik | Pembuat gambar AI | $29 – $49 |
| **Pembuat Judul SEO Etsy** | Menghasilkan 3 kumpulan judul + kata kunci per produk dari daftar nama | Penjual POD | $19 – $39 |
| **Penulis CSV Metadata Stok** | Membaca nama file gambar dan menulis 30 kata kunci IPTC per gambar | Kontributor saham | $29 – $59 |
| **Widget Kalkulator Harga** | Formulir web interaktif yang menghitung harga paket untuk klien | Pekerja lepas agensi | $19 – $29 |
| **Pemformat Skrip YouTube** | Memformat ulang skrip mentah menjadi bagian hook/body/CTA dengan stempel waktu | Pembuat saluran tanpa wajah | $15 – $25 |

---

## Lakukan itu

### Langkah 1: Tentukan Cakupan Alat Mikro Anda
Buka [`templates/tool-scope-definition.md`](templates/tool-scope-definition.md). Isilah 4 pertanyaan di atas untuk alat pilihan Anda. Contoh untuk **Generator Judul SEO Etsy**:

* **Input:** File `.txt` bernama `products.txt` — satu nama produk per baris (misalnya, `"Cyberpunk Cat Tee"`, `"Botanical Wildflower Mug"`).
* **Keluaran:** File `seo_titles.csv` dengan kolom: `Product Name`, `Title 1`, `Title 2`, `Title 3`, `Keywords`.
* **Transformasi:** Panggil OpenAI API dengan perintah SEO tetap untuk setiap nama produk.
* **Pembeli:** Penjual POD Etsy yang menerbitkan 20+ desain baru per bulan.

### Langkah 2: Tulis Instruksi Agen
Buka Claude Code atau Cursor di folder kosong baru. Rekatkan instruksi yang tepat ini (sesuaikan dengan alat Anda):

> *"Buat skrip Python bernama `etsy_seo_generator.py` yang:*
> *1. Membaca nama produk dari `products.txt` (satu per baris).*
> *2. Untuk setiap nama, panggil API penyelesaian obrolan OpenAI menggunakan model `gpt-4o-mini` dengan perintah sistem ini: 'Anda adalah seorang copywriter ahli SEO Etsy. Hasilkan 3 variasi judul daftar Etsy yang dioptimalkan dan 5 kata kunci yang relevan untuk nama produk tertentu. Format tanggapan Anda sebagai JSON: {title1, title2, title3, kata kunci}.'*
> *3. Tulis semua hasil ke `seo_titles.csv` dengan kolom: Nama Produk, Judul1, Judul2, Judul3, Kata Kunci.*
> *4. Membaca kunci API OpenAI dari variabel lingkungan yang disebut OPENAI_API_KEY."*

### Langkah 3: Uji dengan Data Nyata
Buat file `products.txt` dengan 5 nama produk Anda yang sebenarnya. Jalankan skrip:
```bash
python etsy_seo_generator.py
```
Buka `seo_titles.csv` dan verifikasi kualitas keluaran. Jika sebuah judul terlihat lemah, beri tahu agen: *"Tingkatkan sistem yang cepat untuk menghasilkan lebih banyak judul yang berfokus pada niat pembeli dengan kaitan emosional."*

### Langkah 4: Paket untuk Pembeli Non-Teknis
Tanyakan kepada agen:
> *"Tambahkan README.md sederhana yang menjelaskan cara menginstal dan menjalankan alat ini dalam bahasa Inggris sederhana untuk seseorang yang belum pernah menggunakan Python. Sertakan perintah terminal yang tepat."*

Sekarang alat Anda siap untuk pembeli. Penjual Etsy non-teknis dapat mengikuti README dan menjalankannya.

---

## Contoh yang berhasil

**Pembuatan Alat Mikro: "Penulis CSV Metadata Stok"**

* **Masalah:** Fotografer stok menghabiskan waktu 8–15 menit untuk menandai setiap gambar secara manual dengan kata kunci IPTC sebelum mengunggah ke Adobe Stock.
* **Alat yang Dibangun:** Skrip Python yang membaca folder nama file gambar, mengirimkan setiap nama file ke GPT-4o-mini meminta 30 kata kunci stok komersial, dan menulis `metadata.csv` yang siap untuk diunggah melalui FTP.
* **Waktu Pembuatan:** 45 menit (termasuk pengujian dengan 10 contoh nama file).
* **Kesalahan Agen yang Ditemukan:** 2 (impor `csv` yang hilang dan kasus tepi penguraian JSON) — keduanya diperbaiki dengan menempelkan pesan kesalahan kembali ke agen.
* **Hasil:** Alat memproses 100 gambar dalam 4 menit. Setara manual: 25 jam.
* **Terdaftar di Gumroad pada:** $39 pembelian satu kali.
* **Pendapatan Bulan Pertama:** 14 penjualan × $39 = **$546 pendapatan pasif**.

---

## Bandingkan Alat

| Agen / Lingkungan | Direkomendasikan untuk Pelajaran Ini | Mengapa |
|---|---|---|
| **Kode Claude (terminal)** | ✅ Terbaik untuk pelajaran ini | Menangani pembuatan proyek multi-file dengan rapi. `claude "build me a script that..."` bekerja secara langsung. |
| **Kursor (editor visual)** | ✅ Alternatif bagus | Lebih mudah bagi pembuat konten yang menganggap terminal ini menakutkan. Panel obrolan di sebelah kanan, pohon file di sebelah kiri. |
| **ChatGPT + salin-tempel manual** | ❌ Hindari | Terlalu lambat — Anda akan menghabiskan lebih banyak waktu untuk menyalin kode daripada membuat. |

---

## Luncurkan

**Cara membungkus dan menentukan harga alat mikro Anda:**
* **README Gratis + Paket Skrip Berbayar:** Zip skrip + README + file input sampel. Harga **$19 – $59** tergantung pada waktu yang dihemat per penggunaan.
* **Lisensi Seumur Hidup (Disarankan):** Pembayaran satu kali adalah penjualan termudah untuk alat pembuat konten kecil — pembeli tidak ingin berlangganan skrip yang akan mereka jalankan setiap minggu.
* **Unggah ke Gumroad:** Buat halaman produk dalam 10 menit. Tetapkan file sebagai produk yang dapat diunduh. Gumroad menangani pembayaran, pengiriman, dan PPN secara otomatis.

---

## Latihan

1. **Mudah:** Lengkapi definisi cakupan alat untuk alat "YouTube Script Formatter" di `templates/tool-scope-definition.md`.
2. **Medium:** Gunakan agen untuk membuat skrip Python yang bertuliskan `designs.txt` dan menghasilkan `titles.csv` dengan 3 variasi judul Etsy per desain menggunakan GPT-4o-mini.
3. **Sulit:** Kemas alat Anda dengan README, contoh file masukan, dan daftar dependensi `requirements.txt`. Bagikan zip tersebut dengan sesama pembuat konten dan minta mereka menjalankannya dari awal.

---

## Templat

* [`templates/tool-scope-definition.md`](templates/tool-scope-definition.md) — Definisi cakupan alat dengan fungsi tunggal, spesifikasi input/output, dan daftar periksa monetisasi.

---

[← What Coding Agents Actually Do](01-what-coding-agents-actually-do.md) · Berikutnya: [The Vibe-Coding Workflow →](03-vibe-coding-workflow.md)
