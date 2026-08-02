# Skrip Papan Cerita AI & Template Perincian Bidikan

Gunakan template ini untuk memecah adegan skenario menjadi skrip papan cerita yang siap AI sebelum menghasilkan gambar statis dan klip video.

---

## 🎬 Ikhtisar Proyek

* **Judul Film:** `[Film Name]`
* **Genre / Gaya:** `[e.g., Sci-Fi Noir, Cyberpunk, Cinematic Drama, Quiet Luxury]`
* **Nomor & Judul Adegan:** `Scene [X]: [Scene Title]`
* **Lokasi & Pengaturan:** `[INT/EXT. Location - Time of Day]`
* **Karakter Jangkar Visual:** `[Character Name, Age, Outfit, Key Physical Attributes]`
* **Palet Warna & Pencahayaan:** `[e.g., Cool teal and cyan, neon orange rim lights, deep shadows]`

---

## 📌 Awalan Gaya Utama & Prompt Negatif

Kunci konsistensi dengan menambahkan string gaya yang sama persis ini ke setiap perintah gambar AI dalam adegan:

* **Awalan Perintah Utama:**
> __KODE INLINE_0__

* **Permintaan Negatif Utama:**
> __KODE INLINE_0__

---

## 📋 Perincian Skrip Papan Cerita Multi-Shot

| Tembakan # | Jenis Tembakan | Subjek & Tindakan | Pembingkaian & Pencahayaan Kamera | Perintah Pembuatan Gambar AI (`nano-banana-2`) | Perintah Gerakan Gambar-ke-Video (`seedance-2`) | File Referensi Aset |
|---|---|---|---|---|---|---|
| **Tembakan 1** | Bidikan Lebar (WS) | Menetapkan bidikan lokasi | Sudut lebar, posisi rendah, kabut volumetrik | __KODE INLINE_0__ | __KODE INLINE_1__ | __KODE INLINE_2__ |
| **Tembakan 2** | Tembakan Sedang (MS) | Karakter masuk / reaksi | Kedalaman bidang yang dangkal dan setinggi mata | __KODE INLINE_0__ | __KODE INLINE_1__ | __KODE INLINE_2__ |
| **Tembakan 3** | Jarak Dekat (CU) | Interaksi Prop / Detail | Close-up ekstrim, fokus makro | __KODE INLINE_0__ | __KODE INLINE_1__ | __KODE INLINE_2__ |

---

## ⚙️ Daftar Periksa Kontrol Melayang

- [ ] Apakah gambar referensi karakter dikunci dan diteruskan sebagai `images_list` untuk pengambilan gambar karakter?
- [ ] Apakah awalan gaya master identik di ketiga perintah?
- [ ] Apakah bidikan close-up mengisolasi penyangga untuk mencegah penyimpangan wajah karakter selama transisi adegan?
- [ ] Apakah rasio aspek selaras di seluruh pengambilan gambar storyboard (`16:9` untuk film lanskap, `9:16` untuk film pendek vertikal)?
