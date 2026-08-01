# Jalur 1: Iklan Video AI & UGC

> Ubah video yang dihasilkan AI menjadi iklan yang benar-benar dibayar oleh merek.

Lima modul, secara berurutan. Masing-masing adalah satu file penurunan harga — klik langsung, tanpa subfolder. Setiap modul mengikuti struktur yang sama: Masalah → Konsep → Lakukan → Bandingkan Alat → Luncurkan → Latihan.

**"Templat" di bawah** = templat yang dapat digunakan kembali yang dihasilkan setiap modul (templat skrip, daftar periksa, lembar harga) — file sebenarnya yang Anda isi dan gunakan kembali, disimpan di [`templates/`](templates/).

| # | Modul | Waktu | Membutuhkan |
|:---:|---|:---:|---|
| 1 | [How AI UGC Actually Works](01-how-ugc-works.md) | ~45 menit | — |
| 2 | [Character & Face Consistency](02-character-consistency.md) | ~40 menit | Modul 1 |
| 3 | [Building a 10-Ad Batch](03-building-an-ad-batch.md) | ~50 menit | Modul 1-2 |
| 4 | [Pricing & Selling UGC Ads](04-pricing-and-selling-ugc.md) | ~35 menit | Modul 1, 3 |
| 5 | [Case Study Teardown](05-case-study-teardown.md) | ~30 menit | Modul 1, 4 |

---

### 1.[How AI UGC Actually Works](01-how-ugc-works.md)

> Iklan UGC hanya terdiri dari lima bagian yang dijahit menjadi satu — setelah Anda dapat melihat jahitannya, Anda dapat membuat salah satu darinya.

- Alur 5 tahap: **Skrip → Avatar/Suara → Video → Teks → Ekspor**
- Menulis skrip hook/pitch/proof/CTA berdurasi 30 detik
- Mengapa sinkronisasi wajah/suara avatar — bukan skrip — biasanya yang membuat iklan ditolak
- Konteks harga sebenarnya: tarif pertunjukan $10-$55/iklan, pengikut agensi $1.500-$3.000/bln

**Templat:** [`ugc-script-template.md`](templates/ugc-script-template.md) · [`ad-brief-checklist.md`](templates/ad-brief-checklist.md)

### 2.[Character & Face Consistency](02-character-consistency.md)

> Jika pembuat AI Anda terlihat seperti orang yang berbeda di setiap pengambilan gambar, tidak ada yang akan membayar untuk iklan tersebut.

- Satu-satunya titik kegagalan paling umum dalam konten yang dihasilkan AI
- Tiga teknik jangkar, dari yang terlemah hingga yang terkuat: hanya perintah → pengondisian gambar referensi → identitas terlatih/terkunci (LoRA)
- Alur kerja pemeriksaan penyimpangan, dan kapan tiket pelatihan LoRA satu kali akan terbayar dengan sendirinya

**Templat:** [`character-consistency-checklist.md`](templates/character-consistency-checklist.md)

### 3.[Building a 10-Ad Batch](03-building-an-ad-batch.md)

> Klien tidak membeli satu iklan — mereka membeli varian untuk diuji. Batching adalah produk sebenarnya.

- Konstanta pengunci (produk, titik bukti, CTA) sambil memvariasikan kait/sudut/format
- Mengapa memvariasikan semuanya sekaligus membuat hasil tidak terbaca
- Mengirimkan batch dengan rencana pengujian yang benar-benar dapat digunakan klien

**Templat:** [`batch-matrix-template.md`](templates/batch-matrix-template.md)

### 4.[Pricing & Selling UGC Ads as a Service](04-pricing-and-selling-ugc.md)

> Produksi adalah bagian yang mudah sekarang. Dibayar untuk itu adalah keterampilan yang berbeda.

- Pertunjukan → proyek → perkembangan pengikut, ditetapkan ke rentang nyata ($10-$55/iklan → $150-$300/batch → $1.500-$3.000+/bln)
- Membangun portofolio dari beberapa bagian pertama Anda
- Penjangkauan yang mengarah dengan sampel yang sudah selesai, bukan proses Anda

**Templat:** [`outreach-template.md`](templates/outreach-template.md) · [`retainer-proposal-template.md`](templates/retainer-proposal-template.md)

### 5.[Case Study Teardown](05-case-study-teardown.md)

> Pelajari cara merekayasa balik iklan pemenang alih-alih menebak-nebak mana yang berhasil.

- Metode berulang untuk membagi iklan yang sedang berjalan menjadi 5 lapisan dan menanyakan alasan setiap pilihan dibuat
- Mengubah "iklan tersebut berkinerja baik" menjadi kesimpulan struktural yang dapat digunakan kembali
- Berfungsi ganda sebagai alat penjualan: pembongkaran gratis sebagai pembuka calon pelanggan

**Templat:** [`teardown-worksheet.md`](templates/teardown-worksheet.md)

---

Semua templat ada di [`templates/`](templates/). Untuk status di 14 trek lainnya, lihat [ROADMAP.md](../../ROADMAP.md).
