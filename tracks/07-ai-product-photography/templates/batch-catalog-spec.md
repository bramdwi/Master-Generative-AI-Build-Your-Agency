# Spesifikasi Pemrosesan Katalog Batch

Gunakan log spesifikasi ini untuk mengatur, melacak, dan menskalakan pembuatan katalog batch untuk katalog e-commerce.

## 1. Cetak Biru Struktur Direktori

Konfigurasikan folder proyek Anda:
```
[project-root]/
├── 01_raw_assets/        # Raw product photo uploads
├── 02_isolated_masks/    # Output png files after background removal
├── 03_ai_backgrounds/    # Generated environment backdrop images
├── 04_composite_drafts/  # Draft composite renders
└── 05_final_deliver/     # Color-graded, scaled final WebP assets
```

## 2. Pemetaan Kotak Batas & Rasio Aspek

Untuk tata letak yang konsisten, tentukan ukuran padding standar di dalam bingkai:
* **Standar Amazon Hero:** Format persegi (1:1), produk menempati tepat **85%** tinggi bingkai.
* **Standar galeri Shopify / WooCommerce:** Format vertikal (4:5), produk terpusat dengan **10%** padding bawah.

## 3. Log Pemrosesan Massal

Lacak generasi di seluruh katalog besar:

| SKU Produk | Jalur File Mentah | Status Masker Terisolasi | ID Permintaan Latar Belakang Target | Status Render Komposit | Status QC | Jalur Ekspor |
|---|---|:---:|:---:|:---:|:---:|---|
| SKU-BOT-01 | __KODE INLINE_0__ | ✅ Selesai | BGD-TRAVERTIN-01 | ✅ Selesai | ✅ Lulus | __KODE INLINE_1__ |
| SKU-BOT-02 | __KODE INLINE_0__ | ✅ Selesai | BGD-TRAVERTIN-01 | ✅ Selesai | ✅ Lulus | __KODE INLINE_1__ |
| SKU-JAR-01 | __KODE INLINE_0__ | ❌ Tertunda | BGD-MARMER-02 | ⬜ Tidak sinkron | ⬜ Gagal | |
| | | | | | | |
