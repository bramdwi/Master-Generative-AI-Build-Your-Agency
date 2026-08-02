# Ringkasan Konversi Suara Bernyanyi

Gunakan penjelasan singkat ini untuk mengonfigurasi dan mengaudit proses transfer kayu vokal menggunakan mesin konversi suara bernyanyi (SVC) (seperti RVC atau build So-Vits-SVC lokal).

---

**Judul Proyek:** __________
**Sumber Vokalis (Input Track):** __________
**Model Suara Sasaran:** __________

## 1. Masukkan Persiapan Vokal

- [ ] **Ekstraksi Acapella:** Ekstrak track vokal dari instrumental lagu asli menggunakan pembagi batang AI (mis. Demucs atau Lalal.ai).
- [ ] **Penyelarasan Nada & Penyetelan:** Jalankan penalaan otomatis (atau koreksi nada) pada vokal sumber *sebelum* konversi. Mesin model mentransfer timbre, tetapi kesulitan memperbaiki nada yang tidak selaras.
- [ ] **Kompresi Dinamis:** Menghaluskan lonjakan volume ekstrem sehingga konverter menerima tingkat masukan yang stabil.

## 2. Parameter Konversi Model

* **Pergeseran Nada (Transpose):** `________` seminada.
* *Aturan Praktis:* Setel ke `0` jika sumber dan target memiliki rentang vokal yang cocok. Bergeser sebanyak `+12` (naik satu oktaf) jika mengubah suara pria menjadi suara wanita; geser sebanyak `-12` jika mengubah perempuan menjadi laki-laki.
* **Tingkat Indeks Pengambilan Fitur:** `________` (Standar: 0,6 hingga 0,8. Semakin tinggi mempertahankan identitas suara target; semakin rendah memungkinkan infleksi yang lebih ekspresif dari sumbernya).
* **Lindungi Konsonan Tak Bersuara:** `________` (Standar: 0,33 untuk melindungi suara "s", "t", "p" dari artefak digital).

---

## 3. Log Kualitas Konversi

Audit file audio keluaran untuk gangguan sintesis:

| Jalankan # | Pergeseran Nada | Tingkat Indeks | Bunyi Nafas (Lulus/Gagal) | Parutan / Artefak Digital | Status Audit |
|---|---|---|:---:|---|---|
| **01** | +12 seminada | 0,75 | Lulus | Sedikit serak pada nada tinggi | Gagal - perlu penyesuaian nada |
| **02** | +10 seminada | 0,65 | Lulus | Tidak ada, konversi bersih | **Lulus - Master Terakhir** |
| | | | | | |
