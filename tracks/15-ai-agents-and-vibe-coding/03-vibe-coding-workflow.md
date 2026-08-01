# Alur Kerja Vibe-Coding: Prompt → Build → Test → Ship

> Lingkaran pengembangan 4 fase berulang yang memungkinkan Anda membuat dan mengirimkan alat pembuat konten yang berfungsi tanpa membaca satu baris kode pun.

**Lagu:** Agen AI & Vibe-Coding untuk Kreator
**Waktu:** ~50 menit
**Prasyarat:** Apa yang Sebenarnya Dilakukan Agen Pengkodean, Membangun Micro-Tool Pertama Anda yang Dapat Dijual

## Masalahnya

Sebagian besar pembuat konten yang memulai Vibe-Coding mengalami hambatan yang sama setelah alat kedua atau ketiga mereka:

- Agen menghasilkan file yang crash saat pertama kali dijalankan.
- Pembuatnya menempelkan kembali pesan kesalahan tersebut, agen memperbaikinya, tetapi sekarang ada hal lain yang rusak.
- Setelah 3 putaran bolak-balik, sesi berubah menjadi kebingungan dan proyek ditinggalkan.

Hal ini terjadi karena Vibe-Coding tanpa **alur kerja terstruktur** hanyalah Prompt acak. Perulangan 4 fase yang disiplin — **Prompt → Build → Test → Ship** — menghilangkan pola kegagalan ini dengan memberi Anda dan agen kontrak yang jelas tentang apa yang dihasilkan setiap fase.

## Konsep

**Vibe-Coding Loop** adalah struktur sesi yang dapat diulang:

```
Phase 1: PROMPT (Define Scope) ──► Phase 2: BUILD (Agent Generates) ──► Phase 3: TEST (You Verify) ──► Phase 4: SHIP (Package & Publish)
```

### Perincian Fase:

#### Fase 1 — PROMPT (10 menit)

Tulis **Ringkasan Spesifikasi Alat** (lihat [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md)) sebelum membuka agen. Ringkasan Anda harus mencakup:

- **Deskripsi alat dalam satu kalimat** (apa fungsinya, untuk siapa, menggunakan Input/Output apa).
- **Aturan penanganan kesalahan** (misalnya, *"jika baris dalam file masukan kosong, lewati dan lanjutkan"*).
- **Kendala teknologi** (misalnya, *"hanya gunakan pustaka standar Python — tidak ada paket eksternal kecuali `openai`"*).

> **Aturan Emas dalam Meminta Kode:** Jangan pernah membuka agen tanpa penjelasan tertulis. Prompt yang diimprovisasi menghasilkan kode improvisasi yang rusak secara tidak terduga.

#### Fase 2 — BUILD (15–30 menit)

Tempelkan ringkasan lengkap Anda ke agen dalam satu pesan. Biarkan agen membuat versi awal yang lengkap tanpa mengganggu. Kemudian:

- Baca penjelasan agen tentang apa yang dibuatnya (bukan kodenya — penjelasannya dalam bahasa Inggris).
- Jika penjelasannya cocok dengan ringkasan Anda, lanjutkan ke Fase 3.
- Jika tidak cocok, perbaiki agen dengan **perbaikan satu kalimat yang ditargetkan**, bukan deskripsi ulang lengkap.

#### Fase 3 — TEST (10–15 menit)

Jalankan alat pada data nyata — bukan data placeholder tiruan. Gunakan nama file sebenarnya, nama produk sebenarnya, atau Prompt aktual yang akan digunakan pembeli Anda. Memeriksa:

- ✅ Apakah menghasilkan format Output yang benar?
- ✅ Apakah ia menangani kasus tepi dengan baik (garis kosong, karakter khusus, string panjang)?
- ✅ Apakah ini selesai dalam waktu kurang dari 60 detik untuk ukuran Input biasa?

Saat Anda menemukan bug, tempelkan **pesan kesalahan persisnya** (bukan parafrase) kembali ke agen:

> *"Menjalankan skrip menghasilkan kesalahan ini: `KeyError: 'title1'`. Perbaiki."*

#### Fase 4 — SHIP (10 menit)

Minta agen untuk membuat aset pengemasan:

> *"Tulis README.md bahasa Inggris sederhana yang menjelaskan instalasi dan penggunaan. Buat juga `requirements.txt` yang mencantumkan semua paket pip yang diperlukan."*

Zip foldernya: `[tool-name]-v1.0.zip`. Unggah ke Gumroad atau LemonSqueezy. Selesai.

## Lakukan itu

### Langkah 1: Tulis Ringkasan Sesi Anda

Buka [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md). Lengkapi setiap bidang:

```
Tool Name: FLUX Batch Prompt Runner
One-Line Description: Reads prompts from prompts.txt, sends each to muapi /nano-banana-2, 
                      saves all output image URLs to results.csv.
Input: prompts.txt — one prompt string per line
Output: results.csv — columns: PromptText, ImageURL, Timestamp
API: muapi (key from MUAPI_KEY environment variable)
Error Handling: If an API call fails, log the error to errors.log and continue.
Packages Allowed: requests, csv (standard library)
```

### Langkah 2: Jalankan Fase BUILD

Tempelkan ringkasan yang sudah selesai ke Claude Code atau Cursor. Tunggu draf pertama selengkapnya. Jangan menyela generasi menengah.

### Langkah 3: Jalankan Fase TEST

Buat `prompts.txt` dengan 3 Prompt nyata yang sebenarnya Anda gunakan. Jalankan skripnya. Verifikasi `results.csv` berisi 3 baris dengan URL gambar yang berfungsi.

### Langkah 4: Jalankan Fase SHIP

Tanyakan kepada agen: *"Buat README.md dan requirements.txt untuk proyek ini."* Kemudian zip dan unggah.

## Contoh yang berhasil

**Sesi Vibe-Coding Penuh: "FLUX Batch Prompt Runner"**

- **Fase 1 (PROMPT):** Sesi penulisan singkat 8 menit di `vibe-coding-session-brief.md`.
- **Fase 2 (BUILD):** Agen menghasilkan `batch_runner.py` dalam 2 menit. Satu masalah segera diketahui: agen menggunakan `requests.get()` alih-alih `requests.post()` untuk panggilan API — diperbaiki dengan 1 kalimat koreksi.
- **Fase 3 (TEST):** Diuji dengan 10 Prompt nyata. 9 berhasil, 1 gagal karena Prompt berisi karakter apostrof khusus. Agen memperbaiki masalah pengkodean dalam 30 detik.
- **Fase 4 (SHIP):** Agen menghasilkan README.md dan requirements.txt dalam 1 menit. Zip dibuat dan diunggah ke Gumroad.
- **Total Waktu Sesi:** 52 menit dari folder kosong ke halaman produk aktif.
- **Harga Gumroad:** **$29 satu kali**.
- **Pendapatan Minggu 1:** 11 penjualan × $29 = **$319**.

## Bandingkan Alat

| Pengaturan Vibe-Coding | Kecepatan Fase 2 | Pemulihan Kesalahan Fase 3 | Kurva Pembelajaran |
| --- | --- | --- | --- |
| **Claude Code (terminal)** | Cepat (perintah tunggal mengirimkan ringkasan lengkap) | Luar biasa (kesalahan tempel → perbaikan instan) | Rendah — cukup ketik terminal |
| **Cursor (editor visual)** | Cepat (panel obrolan) | Luar biasa (kesalahan klik di editor → agen melihat konteks) | Sangat Rendah — UI yang familier |
| **Windsurf (Codeium)** | Cepat | Bagus | Rendah |
| **ChatGPT.com (tidak ada akses file)** | Lambat (salin-tempel antar fase secara manual) | Buruk (kehilangan konteks di seluruh pesan) | Sedang |

## Luncurkan

**Menskalakan lebih dari satu alat:**

- **Peningkatan Versi 2:** Merilis pembaruan `v2.0` (misalnya, menambahkan jendela GUI sehingga pembeli tidak memerlukan terminal) dan membebankan biaya peningkatan kepada pembeli yang sudah ada sebesar **$9 – $15**. Gumroad mendukung hal ini secara asli.
- **Paket Bundel Alat:** Bundel 3 alat mikro terkait (misalnya, "Perangkat Pembuat POD": Pembuat Judul Etsy + Perluas Kata Kunci + Nama Mockup) dengan diskon 25% dari pembelian terpisah. Paket secara konsisten mengungguli alat individual dengan **2,5–4x pendapatan**.

## Latihan

1. **Mudah:** Tulis ringkasan sesi lengkap untuk alat "Pemformat Bagian Skrip YouTube" menggunakan template — tanpa membuka agen.
2. **Medium:** Jalankan sesi Vibe-Coding 4 fase penuh untuk membuat skrip yang membaca daftar nama toko Etsy dan menghasilkan 5 kata kunci ide produk khusus niche per toko.
3. **Sulit:** Selesaikan perulangan Prompt → Build → Test → Ship lengkap untuk alat pilihan Anda, unggah ke halaman draf Gumroad, dan tulis salinan deskripsi produk.

## Templat

- [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md) — Templat perencanaan sesi, kerangka kerja Prompt agen, dan lembar spesifikasi alat.

---

[← Sebelum: Membangun Micro-Tool Pertama Anda yang Dapat Dijual](02-building-your-first-sellable-micro-tool.md) · [Track overview](README.md) · Berikutnya: [Penentuan Harga & Penjualan Tools AI →](04-pricing-and-selling-tools.md)
