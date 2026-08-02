# API vs. Lokal: Kerangka Keputusan

> Tentukan kapan menggunakan Cloud API (muapi, Replikasi) vs. GPU Sumber Terbuka Lokal (ComfyUI, Automatic1111) berdasarkan biaya, skala, dan persyaratan privasi.

**Lacak:** Penguasaan Alat AI
**Waktu:** ~40 menit
**Prasyarat:** [01: Image Models](01-image-models-which-one-for-which-use-case.md), [02: Video Models](02-video-models-which-one-for-which-use-case.md), [03: Voice & Audio Models](03-voice-audio-models-which-one-for-which-use-case.md)

## Masalahnya

Kreator menghadapi keputusan arsitektur yang penting: **Haruskah Anda menjalankan model AI melalui Cloud API atau membangun Workstation GPU Lokal?**

Membuat pilihan yang salah menghabiskan modal:
* **Berinvestasi berlebihan pada Perangkat Keras Di Awal:** Membeli stasiun kerja GPU RTX 4090 seharga $3.500 saat Anda hanya merender 20 gambar seminggu membutuhkan waktu bertahun-tahun untuk mencapai titik impas.
* **Menskalakan Cloud API pada Volume Tinggi:** Menjalankan 10.000 render resolusi tinggi bulanan pada API cloud bayar per permintaan memerlukan biaya $600+/bulan, sehingga mengurangi margin laba kotor dibandingkan dengan rendering GPU lokal.
* **Mengabaikan Privasi & Kepatuhan Data:** Mengirim aset rahasia klien perusahaan melalui API cloud publik melanggar perjanjian NDA.

Anda memerlukan matriks keputusan matematis yang jelas untuk memilih arsitektur hosting yang optimal untuk tahap bisnis Anda.

---

## Konsep

**API vs. Matriks Keputusan Lokal** menyeimbangkan amortisasi perangkat keras, skala volume, dan keamanan data:

```
Monthly Volume & Privacy Needs ──► Cost Payback Calculation ──► Cloud API vs. Local GPU Choice
```

### Perbandingan Arsitektur:

$$\text{Biaya Cloud API Bulanan} = \text{Render per Bulan} \times \text{Biaya per Render}$$

$$\text{Periode Amortisasi GPU Lokal} = \frac{\text{Biaya Stasiun Kerja GPU}}{\text{Penghematan Bulanan vs. API}}$$

| Dimensi | Cloud API (muapi/Replikasi) | GPU Lokal (ComfyUI / RTX 4090) |
|---|---|---|
| **Biaya di Muka** | **$0** (Model kredit bayar sesuai pemakaian) | **$1.500 – $4.500** investasi perangkat keras |
| **Efisiensi Volume Rendah** | **Unggul** ($5-$20/bln total pembelanjaan) | Buruk (Payback period panjang) |
| **Ekonomi Volume Tinggi** | Biaya berskala linier dengan render | **$0 biaya marjinal per render** (hanya listrik) |
| **Kompleksitas Penyiapan** | Penyiapan infrastruktur nol (HTTP POST Sederhana) | Memerlukan Python, manajemen VRAM (VRAM = Video RAM, memori khusus pada GPU Anda yang menampung model AI selama pembuatan), dan driver CUDA (CUDA = lapisan perangkat lunak NVIDIA yang memungkinkan GPU Anda menjalankan beban kerja AI) |
| **Privasi & Keamanan Data** | Data diproses di server cloud | **100% Privasi Offline dengan Celah Udara** |

---

## Lakukan itu

### Langkah 1: Jalankan Kalkulator Pengembalian Perangkat Keras
Buka [`templates/api-cost-calculator.md`](templates/api-cost-calculator.md). Masukkan volume render bulanan Anda:
* **Skenario A (Freelancer / Studio Kecil):** 300 render/bulan @ rata-rata biaya API $0,06 = **biaya API $18/bulan**.
* *Rekomendasi:* **Tetap menggunakan Cloud API (muapi)**. Membangun mesin GPU lokal seharga $2.500 membutuhkan waktu 138 bulan untuk mencapai titik impas.
* **Skenario B (Agensi Volume Tinggi / Pembuat Saham):** 10.000 render/bulan @ rata-rata biaya API $0,06 = **biaya API $600/bulan**.
* *Rekomendasi:* **Berinvestasi pada GPU Lokal (RTX 4090)**. Stasiun kerja senilai $2.500 terbayar dalam waktu kurang dari 4,5 bulan.

### Langkah 2: Evaluasi Batasan Privasi Klien
Jika menangani foto kepala perusahaan NDA atau prototipe produk yang belum dirilis, terapkan **Rendering Gapped Udara GPU Lokal** berapa pun volumenya.

### Langkah 3: Terapkan Alur Kerja Hibrid
Gunakan **Cloud API** untuk penerimaan klien seluler yang cepat dan pemrosesan burst, sembari menggunakan **Local ComfyUI** untuk penyempurnaan batch offline berat dan pelatihan LoRA.

---

## Contoh yang berhasil

**Keputusan Infrastruktur Agensi: "Perubahan Citra Studio Skala"**

* **Output Bulanan:** 6.500 render gambar & 200 klip video pendek.
* **Perkiraan Cloud API:** $390 kredit gambar + $150 kredit video = **$540 / bulan**.
* **Pembuatan Stasiun Kerja Lokal:** Rig VRAM Dual RTX 4090 24 GB = **$3.800**.
* **Periode Pembayaran Kembali:** $3.800 / $540 = **7,0 Bulan**.
* **Hasil:** Agensi membeli stasiun kerja lokal, menghemat **$6.480/tahun** setelah bulan ke-7.

---

## Bandingkan Alat

| Opsi Hosting | Fleksibilitas | Kecepatan Penskalaan | Terbaik Untuk |
|---|---|---|---|
| **muapi CloudAPI** | Tinggi (Akses ke FLUX, Seedance, InstantID melalui HTTP) | Instan (Tanpa batasan VRAM) | Startup, pekerja lepas, backend aplikasi seluler |
| **UI Lokal Nyaman** | **Kontrol Node Tanpa Batas** | Diperbaiki pada GPU VRAM | Agensi bervolume tinggi, pelatih LoRA khusus, proyek NDA |
| **RunPod / Vast.ai (GPU Cloud)** | Tinggi (Sewa cloud RTX 4090 per jam) | Tinggi | Burst memproses 5.000 gambar selama akhir pekan |

---

## Luncurkan

* **Gunakan GPU Cloud RunPod sebagai Jalan Tengah:** Menyewa GPU cloud seharga $0,44/jam di RunPod memberi Anda kontrol node ComfyUI tanpa membeli perangkat keras di muka.

---

## Latihan

1. **Mudah:** Hitung pembelanjaan API bulanan Anda menggunakan rumus di `api-cost-calculator.md`.
2. **Medium:** Sewa instance GPU cloud di RunPod dan luncurkan antarmuka web ComfyUI.
3. **Sulit:** Buat rencana infrastruktur hibrid yang menggabungkan pengiriman seluler Cloud API dengan pemrosesan batch GPU Lokal.

---

## Template

* [`templates/api-cost-calculator.md`](templates/api-cost-calculator.md) — Rumus biaya API, kalkulator pengembalian GPU, dan pohon keputusan VRAM perangkat keras.
* [`templates/tool-evaluation-framework.md`](templates/tool-evaluation-framework.md) — Daftar periksa evaluasi 5 poin untuk menguji model AI baru sebelum mengintegrasikannya ke dalam alur kerja produksi.

---

[← Voice & Audio Models](03-voice-audio-models-which-one-for-which-use-case.md) · [Track Overview](README.md)
