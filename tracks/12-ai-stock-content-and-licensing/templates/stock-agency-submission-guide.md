# Panduan Pengajuan Agen Saham & Pengunggahan FTP

Gunakan panduan pengiriman langkah demi langkah ini untuk mengunggah aset stok AI batch ke Adobe Stock, Freepik, dan Wirestock.

---

## 📤 Spesifikasi Upload Agensi Stok

### 1. Portal Kontributor Saham Adobe
* **Resolusi Minimal:** 4 Megapiksel (mis., 2400 × 1600 piksel). Direkomendasikan: **4000 × 2667 piksel (10,6 MP)**.
* **Format File:** JPEG (.jpg) dengan pengaturan kualitas maksimal (Kualitas 10-12).
* **Mandat Pengungkapan AI:** Pilih **"Dibuat menggunakan alat AI Generatif"** -> Centang **"Orang dan Properti bersifat fiksi"** (menghilangkan persyaratan rilis model).

### 2. Kontributor Premium Freepik
* **Resolusi Min:** 2000 piksel pada sisi terpendek.
* **Ukuran Batch:** Minimum 10 aset per batch pengiriman awal.
* **Standar Penamaan File:** Huruf kecil dengan garis bawah (`corporate_handshake_01.jpg`).

---

## 🌐 Konfigurasi Unggah Batch FTP (Stok Adobe)

Gunakan klien FTP (FileZilla atau Cyberduck) untuk mengunggah 100+ file secara instan tanpa batasan unggahan browser:

```yaml
FTP_Configuration:
  Host: "ftp.adobestock.com"
  Port: 21 (or 22 SFTP)
  Username: "[Your Adobe Stock Contributor ID]"
  Password: "[Generated FTP Password from Adobe Contributor Settings]"
  Upload_Directory: "/"
```

---

## ⚡ Audit Penolakan Pra-Pengajuan 5 Poin

1. **Pemeriksaan Zoom Crop 100%:** Periksa pupil, jari, dan area teks untuk melihat adanya distorsi AI yang aneh.
2. **Verifikasi Ruang Salin:** Konfirmasikan gambar berisi area bersih bagi pembeli untuk menambahkan judul teks.
3. **Scrub Merek Dagang:** Pastikan tidak ada logo merek (Apple, Nike, Samsung, hiasan kap mobil) yang terlihat.
4. **Kepadatan Metadata:** Pastikan setidaknya 30 kata kunci IPTC yang relevan disematkan di setiap metadata file.
5. **Ruang Warna:** Diekspor dalam ruang warna **sRGB** untuk mencegah perubahan warna pada pratinjau portal kontributor.
