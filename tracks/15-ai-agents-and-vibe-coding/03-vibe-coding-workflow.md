# Alur Kerja Vibe-Coding: Prompt → Bangun → Uji → Kirim

> Lingkaran pengembangan 4 fase berulang yang memungkinkan Anda membuat dan mengirimkan alat pembuat konten yang berfungsi tanpa membaca satu baris kode pun.

**Lacak:** Agen AI & Vibe-Coding untuk Kreator
**Waktu:** ~50 menit
**Prasyarat:** [01: What Coding Agents Actually Do](01-what-coding-agents-actually-do.md), [02: Building Your First Sellable Micro-Tool](02-building-your-first-sellable-micro-tool.md)

## Masalahnya

Sebagian besar pembuat konten yang memulai pengkodean getaran mengalami hambatan yang sama setelah alat kedua atau ketiga mereka:

* Agen menghasilkan file yang crash saat pertama kali dijalankan.
* Pembuatnya menempelkan kembali pesan kesalahan tersebut, agen memperbaikinya, tetapi sekarang ada hal lain yang rusak.
* Setelah 3 putaran bolak-balik, sesi berubah menjadi kebingungan dan proyek ditinggalkan.

Hal ini terjadi karena pengkodean getaran tanpa **alur kerja terstruktur** hanyalah perintah acak. Perulangan 4 fase yang disiplin — **Prompt → Build → Test → Ship** — menghilangkan pola kegagalan ini dengan memberi Anda dan agen kontrak yang jelas tentang apa yang dihasilkan setiap fase.

---

## Konsep

**Vibe-Coding Loop** adalah struktur sesi yang dapat diulang:

```
Phase 1: PROMPT (Define Scope) ──► Phase 2: BUILD (Agent Generates) ──► Phase 3: TEST (You Verify) ──► Phase 4: SHIP (Package & Publish)
```

### Perincian Fase:

#### Fase 1 — PROMPT (10 menit)
Tulis **Ringkasan Spesifikasi Alat** (lihat [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md)) sebelum membuka agen. Ringkasan Anda harus mencakup:
* **Deskripsi alat dalam satu kalimat** (apa fungsinya, untuk siapa, menggunakan input/output apa).
* **Aturan penanganan kesalahan** (misalnya, *"jika baris dalam file masukan kosong, lewati dan lanjutkan"*).
* **Kendala teknologi** (misalnya, *"hanya gunakan pustaka standar Python — tidak ada paket eksternal kecuali `openai`"*).

> **Aturan Emas dalam Meminta Kode:** Jangan pernah membuka agen tanpa penjelasan tertulis. Dorongan yang diimprovisasi menghasilkan kode improvisasi yang rusak secara tidak terduga.

#### Fase 2 — MEMBANGUN (15–30 menit)
Tempelkan ringkasan lengkap Anda ke agen dalam satu pesan. Biarkan agen membuat versi awal yang lengkap tanpa mengganggu. Kemudian:
* Baca penjelasan agen tentang apa yang dibuatnya (bukan kodenya — penjelasannya dalam bahasa Inggris).
* Jika penjelasannya cocok dengan ringkasan Anda, lanjutkan ke Tahap 3.
* Jika tidak cocok, perbaiki agen dengan **perbaikan satu kalimat yang ditargetkan**, bukan deskripsi ulang lengkap.

#### Fase 3 — UJI (10–15 menit)
Jalankan alat pada data nyata — bukan data placeholder tiruan. Gunakan nama file sebenarnya, nama produk sebenarnya, atau perintah aktual yang akan digunakan pembeli Anda. Memeriksa:
* ✅ Apakah menghasilkan format output yang benar?
* ✅ Apakah ia menangani kasus tepi dengan baik (garis kosong, karakter khusus, string panjang)?
* ✅ Apakah ini selesai dalam waktu kurang dari 60 detik untuk ukuran input biasa?

Saat Anda menemukan bug, tempelkan **pesan kesalahan persisnya** (bukan parafrase) kembali ke agen:
> *"Menjalankan skrip menghasilkan kesalahan ini: `KeyError: 'title1'`. Perbaiki."*

#### Fase 4 — KAPAL (10 menit)
Minta agen untuk membuat aset pengemasan:
> *"Tulis README.md bahasa Inggris sederhana yang menjelaskan instalasi dan penggunaan. Buat juga `requirements.txt` yang mencantumkan semua paket pip yang diperlukan."*

Zip foldernya: `[tool-name]-v1.0.zip`. Unggah ke Gumroad atau LemonSqueezy. Selesai.

---

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
Tempelkan ringkasan yang sudah selesai ke Kode Claude atau Kursor. Tunggu draf pertama selengkapnya. Jangan menyela generasi menengah.

### Langkah 3: Jalankan Fase TEST
Buat `prompts.txt` dengan 3 perintah nyata yang sebenarnya Anda gunakan. Jalankan skripnya. Verifikasi `results.csv` berisi 3 baris dengan URL gambar yang berfungsi.

### Langkah 4: Jalankan Fase KAPAL
Tanyakan kepada agen: *"Buat README.md dan persyaratan.txt untuk proyek ini."* Kemudian zip dan unggah.

---

## Contoh yang berhasil

**Sesi Pengkodean Getaran Penuh: "FLUX Batch Prompt Runner"**

* **Fase 1 (Prompt):** Sesi penulisan singkat 8 menit di `vibe-coding-session-brief.md`.
* **Tahap 2 (Pembangunan):** Agen menghasilkan `batch_runner.py` dalam 2 menit. Satu masalah segera diketahui: agen menggunakan `requests.get()` alih-alih `requests.post()` untuk panggilan API — diperbaiki dengan 1 kalimat koreksi.
* **Fase 3 (Pengujian):** Diuji dengan 10 perintah nyata. 9 berhasil, 1 gagal karena prompt berisi karakter apostrof khusus. Agen memperbaiki masalah pengkodean dalam 30 detik.
* **Tahap 4 (Pengiriman):** Agen menghasilkan README dan persyaratan.txt dalam 1 menit. Zip dibuat dan diunggah ke Gumroad.
* **Total Waktu Sesi:** 52 menit dari folder kosong ke halaman produk aktif.
* **Harga Gumroad:** **$29 satu kali**.
* **Pendapatan Minggu 1:** 11 penjualan × $29 = **$319**.

---

## Bandingkan Alat

| Pengaturan Pengkodean Getaran | Kecepatan Fase 2 | Pemulihan Kesalahan Fase 3 | Kurva Pembelajaran |
|---|---|---|---|
| **Kode Claude (terminal)** | Cepat (perintah tunggal mengirimkan ringkasan lengkap) | Luar biasa (kesalahan tempel → perbaikan instan) | Rendah — cukup ketik terminal |
| **Kursor (editor visual)** | Cepat (panel obrolan) | Luar biasa (kesalahan klik di editor → agen melihat konteks) | Sangat Rendah — UI yang familier |
| **Selancar Angin (Codeium)** | Cepat | Bagus | Rendah |
| **ChatGPT.com (tidak ada akses file)** | Lambat (salin-tempel antar fase secara manual) | Buruk (kehilangan konteks di seluruh pesan) | Sedang |

---

## Luncurkan

**Menskalakan lebih dari satu alat:**
* **Peningkatan Versi 2:** Merilis pembaruan `v2.0` (misalnya, menambahkan jendela GUI sehingga pembeli tidak memerlukan terminal) dan membebankan biaya peningkatan kepada pembeli yang sudah ada sebesar **$9 – $15**. Gumroad mendukung hal ini secara asli.
* **Paket Bundel Alat:** Bundel 3 alat mikro terkait (misalnya, "Perangkat Pembuat POD": Pembuat Judul Etsy + Perluas Kata Kunci + Nama Mockup) dengan diskon 25% dari pembelian terpisah. Paket secara konsisten mengungguli alat individual dengan **2,5–4x pendapatan**.

---

## Latihan

1. **Mudah:** Tulis ringkasan sesi lengkap untuk alat "Pemformat Bagian Skrip YouTube" menggunakan template — tanpa membuka agen.
2. **Medium:** Jalankan sesi pengkodean getaran 4 fase penuh untuk membuat skrip yang membaca daftar nama toko Etsy dan menghasilkan 5 kata kunci ide produk khusus niche per toko.
3. **Sulit:** Selesaikan Perintah lengkap → Pembuatan → Uji → Siklus pengiriman untuk alat pilihan Anda, unggah ke halaman draf Gumroad, dan tulis salinan deskripsi produk.

---

## Templat

* [`templates/vibe-coding-session-brief.md`](templates/vibe-coding-session-brief.md) — Templat perencanaan sesi, kerangka kerja perintah agen, dan lembar spesifikasi alat.

---

[← Building Your First Sellable Micro-Tool](02-building-your-first-sellable-micro-tool.md) · Berikutnya: [Pricing & Selling Tools You Build With Agents →](04-pricing-and-selling-tools.md)
