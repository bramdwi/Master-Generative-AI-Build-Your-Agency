# Lembar Spesifikasi Sinkronisasi Bibir

Gunakan lembar ini untuk mempersiapkan aset audio dan video Anda sebelum memasukkannya ke mesin sinkronisasi bibir (misalnya Sync-Lipsync, Volcengine, atau Veed-Lipsync) untuk mencegah penyimpangan mulut dan penyimpangan sinkronisasi.

---

**Nama Proyek:** __________
**Karakter AI:** __________

## 1. Persyaratan Aset Masukan

- [ ] **File Video Dasar (Anchor Headshot):**
* Rasio Aspek: Vertikal `9:16` (1080 x 1920) atau Kotak `1:1`.
* Posisi Subjek: Wajah harus menghadap kamera sepenuhnya, berada di tengah, dengan mulut tertutup dan bersih dari bayangan.
* Pergerakan: Tidak ada putaran kepala berkecepatan tinggi atau hambatan tangan di dekat mulut.
- [ ] **File Audio Narasi:**
* Format: Bersih `.wav` atau `.mp3` berkualitas tinggi.
* Gerbang Kebisingan: Menghilangkan desisan, musik, atau suara pernapasan di latar belakang.
* Spasi: Pastikan setidaknya **0,5 detik** keheningan di awal dan akhir file audio agar jangkar mulut dapat bertransisi secara alami.

## 2. Sinkronkan Log Kecepatan

Lacak pencapaian penyelarasan pada timeline selama rendering:

| Jalur Dialog | Berkas Audio | Template Video | Durasi | Nilai Warping (Lulus/Gagal) | Sinkronisasi Drift (ms) |
|---|---|---|:---:|:---:|---|
| "Hei, ini [Nama] di sini. Hari ini kita..." | __KODE INLINE_0__ | __KODE INLINE_1__ | 4,5 detik | | |
| "Jika Anda ingin mengotomatiskan faktur..." | __KODE INLINE_0__ | __KODE INLINE_1__ | 8.2 detik | | |
| | | | | | |
