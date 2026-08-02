# Template Panduan Gaya Visual

Buat panduan gaya terkunci untuk proyek film Anda guna memastikan gradasi warna, pencahayaan, dan tekstur cocok di semua adegan yang dihasilkan.

---

## 1. Awalan Gaya Prompt Inti
Setiap perintah gambar dan storyboard harus dimulai dengan rangkaian instruksi estetika yang tepat berikut ini:
> **Awalan Estetika:** "Foto film sinematik 35mm, lensa anamorphic, gradasi warna kalem dengan bayangan teal dalam dan sorotan kuning lembut, butiran film, tekstur kulit realistis yang sangat detail, disutradarai oleh [Nama Sutradara]..."

## 2. Pengaturan Rasio Aspek
* **Rasio yang Dipilih:** [misalnya, `--ar 2.39:1` untuk layar lebar, `--ar 16:9` untuk standar, `--ar 9:16` untuk vertikal]

## 3. Pengaturan Pencahayaan yang Disetujui
Hanya gunakan deskriptor pencahayaan berikut dalam perintah Anda:
* **Foto interior:** "Pencahayaan redup, pencahayaan samping lembut dari satu jendela, bintik-bintik debu terlihat dalam sorotan cahaya."
* **Foto eksterior malam hari:** "Cahaya latar keras dari lampu jalan, pantulan cahaya neon pada permukaan beton basah, kontras tinggi."
* **Foto siang hari di bagian luar:** "Pencahayaan mendung, bayangan lembut menyebar, siang hari sejuk."

## 4. Matriks Penilaian Warna
Tentukan warna hex atau kata kunci palet deskriptif:
* **Bayangan primer:** [Teal / Slate Grey / Deep Indigo]
* **Sorotan utama:** [Kuningan Hangat / Emas Pucat / Putih Lembut]
* **Tingkat Saturasi:** [Tidak bersuara / Kontras Tinggi / Saturasi Neon]

## 5. Anjuran Negatif / Gaya yang Dikecualikan
Pastikan generasi Anda menghindari gaya berikut:
> **Daftar Perintah Negatif / Kecualikan:** "render, 3D, CGI, ilustrasi, gambar, saturasi tinggi, seni digital, kartun, kulit sempurna, tekstur halus, anime"
