# Track 4 - Pabrik Konten AI

> Pembuatan konten massal, kumpulan skrip, saluran otomatis, dan pengikut sosial berulang.

Enam modul, secara berurutan. Masing-masing adalah satu file penurunan harga — klik langsung, tanpa subfolder. Setiap modul mengikuti struktur yang sama: Masalah → Konsep → Lakukan → Bandingkan Alat → Luncurkan → Latihan.

**"Template" di bawah** = template yang dapat digunakan kembali yang dihasilkan setiap modul (lembar spesifikasi, cetak biru loop, proposal) — file sebenarnya yang Anda isi dan gunakan kembali, disimpan di [`templates/`](templates/).

| # | Modul | Waktu | Membutuhkan |
|:---:|---|:---:|---|
| 1 | [The Multi-Step Production Pipeline](01-production-pipeline.md) | ~40 menit | — |
| 2 | [Building a TikTok/Reels Factory](02-tiktok-reels-factory.md) | ~45 menit | Modul 1 |
| 3 | [Building a YouTube Shorts Factory](03-youtube-shorts-factory.md) | ~45 menit | Modul 1–2 |
| 4 | [AI Thumbnail Design](04-thumbnail-design.md) | ~40 menit | Modul 1 |
| 5 | [Batching & Scheduling at Volume](05-batching-and-scheduling.md) | ~35 menit | Modul 1, 3 |
| 6 | [Selling Content-Factory Output as a Service](06-selling-content-services.md) | ~30 menit | Modul 1, 5 |

---

### 1.[The Multi-Step Production Pipeline](01-production-pipeline.md)

> Pabrik dibangun berdasarkan stasiun, bukan tugas.

- Standarisasi pengaturan penyimpanan lokal dan cloud untuk mendukung pengoperasian konten batch.
- Petakan dan pisahkan kumpulan video ke dalam stasiun-stasiun yang terpisah dan searah.
- Audit parameter media ekspor terhadap spesifikasi platform yang ketat untuk menghindari putaran revisi.

**Template:** [`pipeline-flowchart-template.md`](templates/pipeline-flowchart-template.md) · [`asset-specs-checklist.md`](templates/asset-specs-checklist.md)

### 2.[Building a TikTok/Reels Factory](02-tiktok-reels-factory.md)

> Perhatian diperoleh pada paruh kedua pertama, dan dipertahankan dengan gerakan kinetik.

- Susun tata letak vertikal 9:16 dengan efek gerakan Ken Burns yang berkelanjutan untuk mempertahankan fokus pemirsa.
- Gaya teks otomatis kata mikro (1-3 kata) menggunakan garis tebal kontras tinggi dan penyorotan kata kunci berwarna kuning.
- Posisikan hamparan teks garis waktu tepat di dalam kisi zona aman untuk menghindari ikon antarmuka yang tumpang tindih.

**Template:** [`tiktok-reels-editor-preset.md`](templates/tiktok-reels-editor-preset.md)

### 3.[Building a YouTube Shorts Factory](03-youtube-shorts-factory.md)

> Video yang tidak pernah berakhir ditonton selamanya.

- Buatlah skrip menggunakan rumus kalimat perulangan di mana setengah kalimat akhir terhubung kembali dengan mulus ke dalam hook.
- Pangkas frame keheningan ekor hingga milidetik untuk menyembunyikan batas loop.
- Kunci level audio latar belakang di seluruh transisi loop untuk menjaga pemutaran ulang video senyap dan berkelanjutan.

**Template:** [`shorts-looping-blueprint.md`](templates/shorts-looping-blueprint.md)

### 4.[AI Thumbnail Design](04-thumbnail-design.md)

> Judulnya membuat mereka berpikir; thumbnail membuat mereka mengklik.

- Hasilkan aset latar belakang dengan RKT tinggi menggunakan `nano-banana-2` (tata letak 16:9 dan 1:1).
- Posisikan subjek utama dan hamparan teks pendek dan tebal menggunakan pembagian aturan sepertiga.
- Kontras dan saturasi gambar sebesar 10-15% untuk memeriksa keterbacaan pada ukuran koin seluler.

**Template:** [`thumbnail-prompt-library.md`](templates/thumbnail-prompt-library.md)

### 5.[Batching & Scheduling at Volume](05-batching-and-scheduling.md)

> Konsistensi dijadwalkan; kekacauan itu manual.

- Tetapkan jadwal batch temporal (pembuatan skrip, pembuatan suara, rendering visual, dan blok pengeditan).
- Antrean jangka pendek bulanan dan otomatisasi rilis menggunakan platform asli Studios.
- Menyindikasikan video vertikal di berbagai platform menggunakan generator kliping otomatis.

**Template:** [`30-day-production-calendar.md`](templates/30-day-production-calendar.md)

### 6.[Selling Content-Factory Output as a Service](06-selling-content-services.md)

> Dunia usaha tidak menginginkan penayangan; mereka menginginkan konsistensi yang membangun pandangan.

- Kemas pembuatan konten ke dalam paket penahan rutin bulanan, bukan membebankan biaya per jam.
- Sesuaikan proposal layanan perusahaan yang merinci jadwal pengiriman dan batas revisi.
- Buat faktur dan kumpulkan pembayaran penahan di muka menggunakan tautan penagihan Stripe berulang.

**Template:** [`agency-retainer-proposal.md`](templates/agency-retainer-proposal.md) · [`bulk-pricing-sheet.md`](templates/bulk-pricing-sheet.md)

---

Semua template ada di [`templates/`](templates/). Untuk status di 12 trek lainnya, lihat [ROADMAP.md](../../ROADMAP.md).
