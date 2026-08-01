# Templat Definisi Lingkup Alat

Gunakan ini sebelum membuat alat mikro apa pun. Menjawab 4 pertanyaan ini mencegah scope creep dan memastikan agen menerima instruksi yang jelas dan tidak ambigu.

---

## 🔍 4 Pertanyaan Lingkup

### 1. Apa masukan tepatnya?
> __KODE INLINE_0__

*Contoh: "File teks biasa bernama `products.txt` berisi satu nama produk per baris, misalnya:*
```
Cyberpunk Cat Tee
Botanical Wildflower Mug
Retro Mountain Hoodie
```
*"*

---

### 2. Apa keluaran sebenarnya?
> __KODE INLINE_0__

*Contoh: "File CSV bernama `seo_titles.csv` dengan 4 kolom:*
```
ProductName, Title1, Title2, Keywords
```
*Contoh baris: `"Cyberpunk Cat Tee","Cyberpunk Cat Shirt for Gamers","Futuristic Neon Cat Graphic Tee","cyberpunk,cat,neon,gamer,anime"`"*

---

### 3. Apa yang dimaksud dengan transformasi?
> __KODE INLINE_0__

*Contoh: "Untuk setiap nama produk, kirim permintaan API GPT-4o-mini dengan permintaan SEO tetap. Parsing respons JSON dan tulis judul dan kata kunci ke CSV keluaran."*

---

### 4. Siapa pembeli sebenarnya?
> __KODE INLINE_0__

*Contoh: "Penjual print-on-demand Etsy yang menerbitkan 15–50 desain baru per bulan dan saat ini menghabiskan 10–20 menit secara manual menulis judul SEO dan tag kata kunci untuk setiap listingan."*

---

## 📊 Daftar Periksa Validasi Alat

Sebelum Anda membuka agen, konfirmasikan:

- [ ] Alat ini melakukan **satu hal** (tidak ada fitur sekunder di v1.0).
- [ ] Format masukannya konkret (saya tahu nama file dan struktur persisnya).
- [] Format keluarannya konkret (saya tahu nama file, kolom, dan baris contoh yang tepat).
- [ ] Pembeli dan titik kesulitannya bersifat spesifik (bukan "pencipta pada umumnya").
- [] Saya memiliki contoh file masukan nyata yang siap untuk diuji.

---

## 💰 Perkiraan Monetisasi

Isi sebelum membuat untuk mengonfirmasi bahwa alat tersebut layak dijual:

| Bidang | Perkiraan Anda |
|---|---|
| **Jam yang dihemat per pembeli per bulan** | __KODE INLINE_0__ |
| **Perkiraan tarif per jam pembeli** | __KODE INLINE_0__ |
| **Nilai bulanan dihemat** | __KODE INLINE_0__ |
| **Harga yang disarankan (10% dari nilai bulanan)** | __KODE INLINE_0__ |
| **Penjualan titik impas untuk memulihkan waktu pembuatan** | __KODE INLINE_0__ |

---

## 🗂️ Ide Alat Mikro Bernilai Tinggi (Daftar Pemula)

Gunakan ini sebagai inspirasi jika Anda tidak yakin apa yang harus dibuat terlebih dahulu:

| Ide Alat | Masukan | Keluaran | Target Pembeli |
|---|---|---|---|
| Pelari Prompt Batch FLUX | `prompts.txt` (satu perintah/baris) | `results.csv` (prompt + URL gambar) | Pembuat gambar AI |
| Pembuat Judul SEO Etsy | `products.txt` (nama desain) | `titles.csv` (3 judul + kata kunci) | Penjual POD/Etsy |
| Penulis CSV Metadata Saham | Folder nama file gambar | `metadata.csv` (judul + 30 kata kunci) | Kontributor saham |
| Pembuat Kait YouTube | `topics.txt` (topik video per baris) | `hooks.csv` (5 variasi kait) | Pembuat saluran tanpa wajah |
| Widget Kalkulator Harga | Bentuk HTML (tidak ada file masukan) | Halaman web interaktif | Pekerja lepas layanan AI |
| Penulis Catatan Acara Podcast | `.txt` transkrip | `shownotes.md` (ringkasan + cap waktu) | Editor podcast |
| Peningkat Perintah AI | __KODE INLINE_0__ | `enhanced_prompts.txt` (diperluas dengan token gaya) | Pengguna tengah perjalanan/FLUX |
