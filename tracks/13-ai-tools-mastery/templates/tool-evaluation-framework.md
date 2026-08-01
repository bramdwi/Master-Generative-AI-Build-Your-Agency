# Daftar Periksa Kerangka Evaluasi Alat AI

Gunakan kerangka evaluasi 5 poin ini untuk menguji dan menilai model AI baru sebelum mengintegrasikannya ke dalam alur kerja klien produksi.

---

## 🔍 Daftar Periksa Evaluasi Alat 5 Poin

### 1. Fotorealisme & Fidelitas Mikro-Detail (Berat: 25%)
- [ ] **Pori-Pori & Anatomi Kulit:** Apakah model mempertahankan tekstur alami kulit tanpa penghalusan lilin/plastik?
- [ ] **Kerusakan Pencahayaan:** Apakah sorotan dan bayangan berperilaku realistis di seluruh permukaan yang kompleks?

### 2. Kepatuhan Cepat & Kontrol Spasial (Berat: 25%)
- [ ] **Penempatan Multi-Subjek:** Apakah model mematuhi instruksi posisi (kiri, kanan, latar belakang, latar depan)?
- [ ] **Keterbacaan Teks:** Bisakah model merender tipografi yang bersih dan tidak kacau saat diminta?

### 3. Stabilitas Identitas & Geometri (Berat: 20%)
- [ ] **Retensi Vektor Wajah:** Apakah penguncian identitas tetap konsisten selama 5 generasi berturut-turut?
- [ ] **Stabilitas Temporal I2V:** Apakah pembuatan Gambar-ke-Video mencegah distorsi perubahan?

### 4. Kecepatan API & Pengalaman Pengembang (Berat: 15%)
- [ ] **Kecepatan Inferensi:** Apakah render selesai dalam ambang batas SLA yang dapat diterima (< 30 detik)?
- [ ] **Keandalan API:** Apakah waktu aktif dan tingkat respons di atas 99,5%?

### 5. Model Ekonomi & Penetapan Harga Unit (Berat: 15%)
- [ ] **Perlindungan Margin:** Apakah biaya per render memungkinkan setidaknya 70%+ margin kotor pada paket klien?
- [ ] **Hak Komersial:** Apakah penyedia memberikan lisensi komersial penuh untuk aset yang dihasilkan?
