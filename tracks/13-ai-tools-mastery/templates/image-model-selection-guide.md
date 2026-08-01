# Panduan Pemilihan Model Gambar AI & Matriks Tolok Ukur

Gunakan panduan referensi ini untuk mencocokkan persyaratan proyek klien dengan model pembuatan gambar AI yang tepat.

---

## 📊 Matriks Kinerja Model Gambar

| Model | Fotorealisme (Kulit & Pencahayaan) | Tipografi & Akurasi Teks | Kepatuhan Cepat Spasial | Fleksibilitas Gaya | Kecepatan Render | Biaya / Gambar API |
|---|---|---|---|---|---|---|
| **FLUX 1.1 Pro** | **9,5 / 10** | **9,5 / 10** | **9,5 / 10** | 8,5 / 10 | ~5 detik | **$0,04** |
| **FLUX Schnell** | 8,5 / 10 | 9.0 / 10 | 9.0 / 10 | 8.0 / 10 | **~2 detik** | **$0,003** |
| **Tengah perjalanan v6** | 9.0 / 10 | 6,5 / 10 | 8.0 / 10 | **10.0 / 10** | ~15 detik | Sub ($10-$60/bln) |
| **Ideogram v2** | 7,5 / 10 | **10.0 / 10** | 9.0 / 10 | 8,5 / 10 | ~8 detik | **$0,08** |
| **DALL-E 3** | 6,5 / 10 | 8,5 / 10 | 9.0 / 10 | 7,5 / 10 | ~10 detik | **$0,08** |

---

## 🎯 Gunakan Pohon Keputusan Kasus

```
Project Requirement?
├── Corporate Headshots / Product Photos ──► FLUX 1.1 Pro / muapi (/nano-banana-2)
├── Apparel Merch / Logo Typography      ──► Ideogram v2 or FLUX 1.1 Pro
├── Film Storyboards / Artistic Fantasy ──► Midjourney v6 (--stylize 250+)
└── Fast Conceptual Brainstorming        ──► FLUX Schnell / DALL-E 3
```
