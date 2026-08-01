# Lembar Spesifikasi Kloning Suara

Gunakan lembar ini untuk menentukan parameter kualitas audio dan menangkap konfigurasi sebelum membuat profil sintesis vokal Anda.

---

**Nama Target Suara:** __________
**Tingkat Kloning:** [mis. Instan (IVC) / Profesional (PVC)]

## 1. Pengaturan Perekaman & Perangkat Keras
* **Jenis Mikrofon:** [mis. Kondensor USB / XLR diafragma besar]
* **Ruang Perekaman:** [mis. Ruangan berlapis busa akustik, lemari vokal kering]
* **Pengaturan Antarmuka Audio:** Penguatan Input: `________` dB | Kecepatan Sampel: `________` kHz

## 2. Contoh Parameter Verifikasi

- [ ] **Tanpa Crosstalk:** Suara hanya berisi satu pembicara tanpa audio latar belakang, desahan, atau tawa.
- [ ] **Kebisingan Lantai Bersih:** Tingkat keheningan puncak desibel di bawah **-50dB** (tidak ada dengungan kipas, pembalikan halaman, atau bunyi klik mulut).
- [ ] **Jumlah & Durasi Sampel:**
* Jumlah klip yang diunggah: `________`
* Durasi kumulatif: `________` menit (Target: Instan >5 menit, Profesional >30 menit).
- [ ] **Penyelarasan Nada:** Nada suara (percakapan, energik, tenang) sesuai dengan profil audiens target.

---

## 3. Pengaturan Suara Kloning (Log Stabilitas)

Catat parameter pembangkitan yang menghasilkan keluaran paling realistis:

| Uji Jalan # | ID Suara / Nama | Stabilitas (%) | Kejelasan/Kesamaan (%) | Gaya Berlebihan (%) | Ulasan Audio |
|---|---|:---:|:---:|:---:|---|
| **01** | __KODE INLINE_0__ | 40% | 75% | 0% | Jelas, nada hangat, jeda alami. |
| **02** | __KODE INLINE_0__ | 55% | 85% | 10% | Sedikit robotik pada kalimat yang panjang. |
| | | | | | |
