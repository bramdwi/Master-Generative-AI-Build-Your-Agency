# Templat Singkat Sesi Vibe-Coding

Gunakan penjelasan singkat ini untuk merencanakan setiap sesi pengkodean sebelum membuka agen Anda. Menyelesaikan lembar ini membutuhkan waktu 8–10 menit dan mencegah kebingungan sesi.

---

## 🗂️ Detail Sesi

* **Tanggal:** `[YYYY-MM-DD]`
* **Nama Alat:** `[e.g., FLUX Batch Prompt Runner]`
* **Tujuan Sesi:** `[e.g., Build a working v1.0 and verify it runs on 10 prompts]`
* **Platform Agen:** `[ ] Claude Code  [ ] Cursor  [ ] Windsurf  [ ] Other: ___`
* **Target Durasi Sesi:** `[e.g., 60 minutes]`

---

## 📋 Spesifikasi Alat

### Deskripsi Satu Kalimat
> __KODE INLINE_0__

*Contoh: "Alat ini membaca daftar nama produk dari `products.txt` dan menghasilkan `seo_titles.csv` yang berisi 3 judul listingan Etsy yang dioptimalkan untuk SEO dan 5 kata kunci per produk, yang dihasilkan menggunakan GPT-4o-mini."*

### Definisi Masukan
* **Masukkan Nama File:** `[e.g., products.txt]`
* **Format Masukan:** `[e.g., Plain text, one product name per line]`
* **Contoh Baris Masukan:** `[e.g., "Cyberpunk Cat Tee"]`

### Definisi Keluaran
* **Nama File Keluaran:** `[e.g., seo_titles.csv]`
* **Format Keluaran:** `[e.g., CSV with columns: ProductName, Title1, Title2, Title3, Keywords]`
* **Contoh Baris Keluaran:** `[e.g., "Cyberpunk Cat Tee","Cyberpunk Cat Shirt for Gamers","Neon Cat Anime T-Shirt","Futuristic Cat Graphic Tee","cyberpunk,anime,cat,gamer,neon"]`

### Transformasi
* **API/Layanan yang Digunakan:** `[e.g., OpenAI GPT-4o-mini / muapi /nano-banana-2 / None (local logic)]`
* **Penyimpanan Kunci API:** `[e.g., Environment variable OPENAI_API_KEY]`
* **Prompt/Logika Inti:** `[Paste the system prompt or describe the transformation logic]`

---

## ⚠️ Aturan Penanganan Kesalahan

Buat daftar bagaimana alat harus berperilaku ketika terjadi kesalahan:
* Baris masukan kosong atau kosong: `[e.g., Skip silently and continue]`
* Batas atau batas waktu laju API: `[e.g., Retry once after 5 seconds, then log to errors.log]`
* Format file tidak valid: `[e.g., Print a clear error message and exit]`

---

## 🔧 Kendala Teknis

* **Paket yang diizinkan:** `[e.g., openai, requests, csv (standard library) — no additional installs]`
* **Versi Python:** `[e.g., 3.10+]`
* **Pengkodean keluaran:** `[e.g., UTF-8]`
* **Ukuran masukan maksimal yang harus ditangani:** `[e.g., Up to 500 rows without timeout]`

---

## ✅ Definisi Selesai (Daftar Periksa Tes Tahap 3)

Periksa ini sebelum melanjutkan ke Tahap 4 — KAPAL:

- [ ] Berjalan tanpa kesalahan pada file input 10 baris yang sebenarnya.
- [ ] File keluaran berisi jumlah baris yang benar (1 per baris masukan).
- [ ] Format keluaran sama persis dengan spesifikasi.
- [ ] Menangani setidaknya 1 kasus tepi (garis kosong, karakter khusus, atau string panjang).
- [ ] Selesai dalam waktu kurang dari 60 detik untuk input 50 baris.
- [ ] Pesan kesalahan jelas dan dapat dibaca manusia.

---

## 📦 Fase 4 — Daftar Periksa KAPAL

Minta agen untuk membuat file pengemasan berikut sebelum membuat zip:

- [ ] `README.md` — Langkah-langkah instalasi, instruksi penggunaan (tidak ada asumsi pengetahuan).
- [ ] `requirements.txt` — Semua paket yang dapat diinstal pip.
- [ ] `sample_input.[ext]` — Contoh nyata file masukan yang dapat langsung diuji oleh pembeli.
- [ ] `sample_output.[ext]` — Keluaran yang diharapkan dari masukan sampel.
- [ ] Tag versi di README: `v1.0 — [Release Date]`

---

## 📝 Log Sesi (Isi Selama Sesi)

| Fase | Status | Catatan |
|---|---|---|
| Cepat (Singkat) | ⬜ / ✅ | |
| Bangun (Draf Pertama Agen) | ⬜ / ✅ | |
| Uji (Pengelolaan Data Nyata) | ⬜ / ✅ | Kesalahan yang ditemui: |
| Kirim (README + Zip) | ⬜ / ✅ | |
