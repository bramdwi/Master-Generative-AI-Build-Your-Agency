# Modul 4: Peningkatan dari Freelancer ke Agensi Kecil

> Standard Operating Procedure (SOP) Operasional, merekrut offshore AI operators, menjaga profit margins, dan kerangka kerja delegasi untuk agensi bernilai $20k+/bulan.

---

## 🚀 The Solo Bottleneck: Transisi dari Operator menjadi CEO

Saat Anda mengawali langkah sebagai solo AI creator, Anda mengampu seluruh peran: sales, prompt engineering, GPU rendering, video editing, penagihan invoice, hingga customer support.

Memasuki kisaran skala **$8.000 hingga $10.000 / bulan**, Anda akan membentur **Solo Bottleneck**:

- Alokasi waktu Anda tercurah sepenuhnya untuk mengeksekusi prompt runs dan menyunting video.
- Aktivitas outbound sales dan lead generation terhenti akibat kesibukan pemenuhan proyek.
- Pendapatan bergerak stagnan karena Anda tak lagi sanggup mengakomodasi client #6 tanpa mengorbankan 80 jam kerja seminggu.

```
                           THE AGENCY SCALING MATRIX
                                       │
                         ┌─────────────┴─────────────┐
                         ▼                           ▼
                 Creative Director              Account Executive
                    (Your Role)                    (Your Role)
                         │                           │
           ┌─────────────┴─────────────┐             │
           ▼                           ▼             ▼
     AI Prompt Operator          Video & Audio Editor    Client Onboarding & Support
    (Offshore AI Tech)           (Post-Production Ops)       (Virtual Assistant)
    $12 – $18 / Hour             $15 – $25 / Hour            $8 – $12 / Hour
```

Guna menembus skala **$25.000 – $50.000 / bulan**, Anda wajib mentransformasi peran Anda dari seorang **Prompt Operator** menjadi **Creative Director & Account Executive**.

---

## 📜 Cetak Biru Standard Operating Procedures (SOP)

Delegasi tugas tak akan berjalan optimal sekadar mengandalkan instruksi lisan di Slack. Anda wajib merancang Standard Operating Procedures (SOPs) tertulis yang tersusun rapi serta terdokumentasi melalui rekaman video pada setiap tahapan production pipeline Anda.

### Anatomi SOP Agensi:

```
+-----------------------------------------------------------------------------+
| SOP #HS-04: BATCH CORPORATE HEADSHOT GENERATION & UPSCALING                 |
+-----------------------------------------------------------------------------+
| 1. OBJECTIVE: Convert client raw selfie CSV roster into 8k studio headshots. |
| 2. TOOLS REQUIRED: ComfyUI Node Graph #v4.2, FLUX 1.1 Pro API, Topaz Gigapixel|
| 3. ESTIMATED TIME: 3 minutes per employee roster entry.                     |
+-----------------------------------------------------------------------------+
```

#### Urutan Eksekusi Langkah demi Langkah:

1. **Intake Audit:** Buka direktori Google Drive milik client `01_Raw_Inputs`. Pastikan resolusi gambar memenuhi standar minimal 1080p.
2. **Crop & Center:** Jalankan Python auto-crop script `scratch/crop_headshots.py` guna memosisikan bounding box wajah secara presisi di tengah dengan rasio 1:1.
3. **ComfyUI Ingestion:** Muat JSON workflow `workflows/b2b_headshot_v4.json`. Atur seed pada posisi `-1` serta bobot LoRA pada angka `0.75`.
4. **Quality Control Check:** Evaluasi luaran yang dihasilkan berdasarkan 4 Kriteria Quality Control:
   - ✅ Simetri pantulan mata (tidak ada pupil yang terdistorsi).
   - ✅ Jumlah & penyelarasan gigi (tanpa keberadaan gigi seri tambahan).
   - ✅ Preservasi tekstur kulit (bebas dari efek plastik blur).
   - ✅ Kontras pencahayaan latar belakang.
5. **Upscale & Export:** Ekspor hasil render yang telah disetujui ke dalam Topaz Gigapixel AI. Lakukan upscale 4x hingga mencapai 4500x4500px @ 300 DPI JPEG. Simpan dokumen ke dalam direktori `02_Final_Delivery`.

---

## 💰 Perekrutan & Delegasi Tanpa Menggerus Margins

Rekrut talenta offshore yang terspesialisasi (seperti dari Philippines, Eastern Europe, maupun LATAM) untuk mengeksekusi prompt dan penyuntingan post-production, sembari mempertahankan **80%+ Net Agency Profit Margin**:

### Rincian Biaya Tim Offshore & Dampak Profit Margin:

| Role | Target Hiring Region | Hourly Rate | Weekly Hours | Monthly Cost | Revenue Generated | Net Margin Contribution |
| --- | --- | --- | --- | --- | --- | --- |
| **Offshore AI Prompt Operator** | Philippines / LATAM | $12 – $18 / hr | 20 hrs | $1.200 | $12.000 | **+$10.800 / mo** |
| **Post-Production Video Editor** | Eastern Europe / India | $15 – $25 / hr | 15 hrs | $1.200 | $8.500 | **+$7.300 / mo** |
| **Virtual Assistant / Account Admin** | Philippines | $8 – $12 / hr | 10 hrs | $400 | Operations Support | **Reclaims 40 Hrs / Mo** |
| **Total Team Overhead** | — | — | **45 hrs** | **$2.800 / mo** | **$20.500 / mo** | **$17.700 Net Profit (86%)** |

---

## ⚖️ Kerangka Gerbang Quality Control (QC)

Mendelegasikan eksekusi membawa risiko luaran berkualitas rendah sampai ke tangan client. Lindungi reputasi agensi Anda dengan menerapkan sistem **2-Tier QC Sign-Off**:

```
+------------------+      +------------------+      +------------------+      +------------------+
|  OFFSHORE OPERATOR| ---> | INTERNAL QC AUDIT| ---> | CREATIVE DIRECTOR| ---> | CLIENT PROOFING  |
|  (Prompt Run)    |      | (Pass/Fail SOP)  |      | (Final Sign-Off) |      | (Watermarked HD) |
+------------------+      +------------------+      +------------------+      +------------------+
```

### QC Checklist Requirements:

- [ ] Simetri dan geometri wajah terverifikasi secara presisi.
- [ ] Resolusi memenuhi standar cetak 300 DPI.
- [ ] Bebas dari artefak AI atau bentuk tangan/jari yang terdistorsi.
- [ ] Profil warna selaras dengan brand guidelines milik client (RGB/CMYK).

---

## 🛠️ Rencana Aksi Langkah demi Langkah

1. **Dokumentasikan 3 SOP Perdana Anda:** Rekam layar Anda mengandalkan Loom saat mengeksekusi proyek berikutnya, lalu transkripsikan ke dalam panduan SOP tertulis.
2. **Publikasikan Lowongan Operator:** Tayangkan deskripsi pekerjaan pada platform Upwork atau OnlineJobs.ph untuk posisi "AI Media Production Operator".
3. **Konfigurasi Slack & ClickUp Agensi:** Bangun struktur kanal yang rapi (`#sales-leads`, `#active-production`, `#qc-audit`, `#client-delivery`).

---

## 💡 Poin Penting

- Mentransformasi peran pribadi Anda dari seorang Prompt Operator menjadi Creative Director dan Account Executive.
- Merancang SOPs tertulis yang presisi untuk tahap intake, GPU rendering, pemeriksaan QC, hingga delivery.
- Merekrut offshore operators ($12–$25/hr) guna mengakselerasi kapasitas produksi dengan tetap menjaga ambang net margin di atas 80%.
