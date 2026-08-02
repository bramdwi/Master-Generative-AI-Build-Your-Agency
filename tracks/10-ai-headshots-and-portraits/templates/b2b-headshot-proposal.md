# Proposal & Template Penerimaan Headshot Perusahaan B2B

Gunakan dokumen proposal ini, skema formulir penerimaan klien, dan perjanjian privasi untuk menawarkan dan menerima klien tim korporat.

---

## 💼 Matriks Harga Perusahaan B2B

| Tingkat Paket | Harga | Volume Karyawan | Perputaran | Fitur Termasuk |
|---|---|---|---|---|
| **Tiket Tim Startup** | **$399** | Hingga 10 Karyawan | 48 Jam | 3 Pilihan Gaya / Orang, Warna Merek Sesuai, 1 Revisi |
| **Standar Perusahaan** | **$799** | Hingga 25 Karyawan | 24 Jam | 5 Pilihan Gaya / Orang, Pencocokan Merek Kustom, 2 Revisi |
| **Perusahaan Tidak Terbatas** | **$1.499** | Hingga 50 Karyawan | SLA 12 Jam | SLA Prioritas, Revisi Tanpa Batas, Sertifikat Pembersihan Data GDPR |

*Anggota Tim Tambahan: **$25 per orang**.*

---

## 📋 Skema Formulir Penerimaan Karyawan

Berikan formulir penerimaan 4 langkah ini ke departemen SDM klien untuk layanan mandiri karyawan:

```yaml
Intake_Form_Fields:
  - Field_1:
      label: "Full Employee Name"
      type: "text"
      required: true
  - Field_2:
      label: "Corporate Title"
      type: "text"
      required: true
  - Field_3:
      label: "Wardrobe Style Preference"
      type: "select"
      options:
        - "Executive Suit & Blazer (Formal)"
        - "Business Casual Blazer & Shirt (Modern)"
        - "Tech Sweater / Turtleneck (Casual)"
      required: true
  - Field_4:
      label: "Upload 3 Selfies (Well-lit, Front & 3/4 View)"
      type: "file_upload"
      max_files: 5
      allowed_types: ["jpg", "png", "heic"]
      required: true
```

---

## 🔒 Privasi Data Perusahaan & Perjanjian GDPR

1. **Penanganan Data Selfie:** Sumber selfie yang diberikan oleh karyawan klien hanya digunakan untuk ekstraksi vektor identitas dan pembuatan foto wajah perusahaan resmi.
2. **Pembersihan Data Otomatis:** Semua unggahan selfie mentah dan penyematan wajah karyawan akan dihapus secara permanen dari server agensi dalam **7 hari kerja** sejak persetujuan pengiriman akhir.
3. **Tanpa Pelatihan Model:** Foto klien tidak akan pernah digunakan untuk melatih model AI publik atau dibagikan kepada broker data pihak ketiga.
4. **Keamanan Pengiriman:** Paket headshot resolusi tinggi akhir dikirimkan melalui folder unduhan cloud terenkripsi dan dilindungi kata sandi.
