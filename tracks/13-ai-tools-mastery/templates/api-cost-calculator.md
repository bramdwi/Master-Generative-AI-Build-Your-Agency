# Cloud API vs. Kalkulator Biaya GPU Lokal

Gunakan lembar referensi ini untuk membuat model pembelanjaan kredit API bulanan vs. periode pengembalian amortisasi perangkat keras stasiun kerja GPU lokal.

---

## 📊 Pemodelan Volume & Biaya Bulanan

| Volume Bulanan (Render) | Rata-rata Biaya / Render API | Pembelanjaan Cloud API Bulanan | Biaya Rig GPU Lokal (RTX 4090) | Periode Pengembalian Perangkat Keras Lokal |
|---|---|---|---|---|
| **100 Render / bln** | $0,06 | **$6,00 / bln** | $2.500 | 416 Bulan (Tidak Direkomendasikan) |
| **500 Render / bln** | $0,06 | **$30,00 / bln** | $2.500 | 83 Bulan |
| **2.500 Render / bln** | $0,06 | **$150,00 / bln** | $2.500 | **16,6 Bulan** |
| **10.000 Render / bln** | $0,06 | **$600,00 / bln** | $2.500 | **4,1 Bulan (Sangat Direkomendasikan)** |

---

## 💡 Ambang Rekomendasi Arsitektur

```
Monthly Render Volume?
├── < 1,500 Renders / mo ──► Use Cloud APIs (muapi / Replicate) — Zero upfront hardware cost
├── 1,500 - 5,000 Renders ──► Hybrid Model (RunPod Cloud GPUs for heavy batch runs)
└── > 5,000 Renders / mo  ──► Buy Local GPU Workstation (RTX 4090 24GB VRAM) — $0 marginal cost
```
