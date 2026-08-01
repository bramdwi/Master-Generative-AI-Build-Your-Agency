# Studio Lookbook dengan konversi tinggi

> Lookbook tidak hanya menjual pakaian; itu menjual gaya hidup.

**Lagu:** Mode AI & Uji Coba Virtual
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Untuk meluncurkan koleksi musiman (misalnya, Musim Gugur/Musim Dingin), merek fesyen memerlukan "lookbook" editorial—katalog gaya hidup yang menampilkan pakaian dalam lingkungan bergaya. Mengorganisir pemotretan di luar ruangan ini adalah mimpi buruk logistik: menghadapi penundaan cuaca, memesan perjalanan ke lokasi eksotik, menyewa alat peraga studio, dan mengelola pencahayaan pada waktu yang berbeda dalam sehari.

Jika Anda mencoba memotret lookbook di ruang kantor biasa, hasilnya akan terlihat datar dan murahan. Jika Anda menggunakan fotografi stok, foto tersebut akan terlihat umum dan tidak sesuai dengan identitas estetika unik merek Anda.

Untuk mempertahankan kehadiran merek premium, Anda perlu menghasilkan tampilan buku fesyen yang kohesif dan canggih sesuai permintaan, dan menggabungkan model koleksi Anda ke dalamnya dengan harmoni pencahayaan yang sempurna.

## Konsep

Jalur produksi lookbook mengandalkan **Tema Visual**, **Desain Pencahayaan Simetris**, dan **Penilaian Warna Kohesif**:

```
Define Theme Archetype ──► Design Lighting & Backdrops ──► Composite VTO Models ──► Apply Batch Color Grade
```

* **Konsistensi Tema:** Lookbook harus terasa seperti satu cerita. Jika model pertama Anda dibidik pada layar plester bertekstur di pasir hangat, model berikutnya tidak dapat ditempatkan di gudang beton berteknologi tinggi. Tetapkan palet latar belakang dan kumpulan tekstur terpadu sebelum menghasilkan gambar.
* **Preset Pencahayaan Studio:** Standarisasi arah cahaya di seluruh katalog Anda. Latar belakang Lookbook harus menampilkan pencahayaan softbox samping yang tersebar, menghasilkan bayangan yang lembut dan netral. Hindari sinar matahari langsung yang terik kecuali secara khusus merancang koleksi musim panas dengan kontras tinggi.
* **Penilaian Warna Kohesif:** Dalam penerbitan fesyen, gambar diproses melalui profil warna (LUT) dalam pascaproduksi. Anda harus menerapkan peta gradasi warna yang seragam di seluruh gambar komposit akhir (misalnya, mendinginkan bayangan dan menghangatkan sorotan) agar terlihat seperti diambil pada pengambilan gambar yang sama.

---

## Lakukan itu

### Langkah 1: Kunci Tema Moodboard
Buka [`templates/lookbook-moodboard.md`](templates/lookbook-moodboard.md). Pilih arketipe visual, palet warna inti, dan pengaturan pencahayaan studio Anda.
* *Contoh Tema:* "Musim Gugur Nordik" dengan warna kelabu tua, pasir lembut, dan abu-abu batu.

### Langkah 2: Hasilkan Latar Belakang Lookbook
Gunakan generator gambar untuk membuat latar studio sesuai dengan spesifikasi moodboard Anda:
* *Permintaan:* `"A high-end fashion studio backdrop. A minimalist light grey textured plaster screen, soft diffused overcast window light casting faint shadows, editorial fashion set, photorealistic, 8k resolution, shot on 85mm lens, f/5.6."`
Jalankan model dan simpan tampilan latar sebagai `studio_bg_01.jpg`.

### Langkah 3: Gabungkan Lapisan Model
Letakkan pakaian koleksi Anda ke model Anda menggunakan pipa VTO (Modul 1). Impor lapisan model melalui `studio_bg_01.jpg`. Posisikan model di tengah bingkai.

### Langkah 4: Sejajarkan Pencahayaan & Keluarkan Bayangan
Pastikan sorotan cahaya pada wajah dan bahu model sesuai dengan arah cahaya di latar belakang (misalnya, lampu utama datang dari kiri atas).
* Lukis bayangan lembut pada lapisan layar plester di mana bahu dan badan model menghalangi lampu utama. Atur opasitas lapisan ke **25%** dan mode campuran ke **Berkembang biak**.
* Lukis bayangan kontak lembut di bawah sepatu model di garis dasar.

### Langkah 5: Terapkan Penilaian Warna Batch
Buat lapisan penilaian warna global (seperti peta gradien, tabel pencarian warna, atau preset Lightroom) dan terapkan di semua aset lookbook akhir.
* Geser bayangan sedikit ke arah teal dan midtone ke arah krem ​​​​hangat.
* Batasi kontras maksimum untuk mempertahankan detail lembut pada kain gelap.
Ekspor file lookbook yang telah selesai sebagai WebP berkualitas tinggi.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/fashion-lookbook-model.jpg" alt="Model Buku Tampilan Mode Editorial" width="240">
<img src="templates/examples/fashion-lookbook-loop.gif" alt="Lookbook Motion Loop (I2V)" width="240">
</p>
<p align="center"><sub>Editorial Studio Lookbook Image (Left) ──► Image-to-Video Camera Motion (Right) · Video File: <a href="templates/examples/fashion-lookbook-loop.mp4">templates/examples/fashion-lookbook-loop.mp4</a></sub></p>

**Buku Tampilan Koleksi Kasmir (Tema Musim Gugur Nordik)**



* **Spesifikasi Tema:** Latar belakang plester minimalis, sisi siang hari yang lembut, warna-warna alami.
* **Aset Latar Belakang:** Menghasilkan pemandangan dinding plesteran abu-abu hangat dengan bayangan lembut bingkai jendela di atasnya.
* **Model Lapisan:** Model mengenakan sweter rajut kasmir organik oversized berwarna krem.
* **Pengaturan Penilaian:**
* Bayangan: Pergeseran teal (+5%).
* Sorotan: Pergeseran emas (+8%).
* Grain: Menambahkan 5% gangguan digital untuk mereplikasi stok film kelas atas.
* **Format Ekspor:** Format vertikal 1080x1350 piksel.

**Hasilnya:** Merek tersebut menerima lookbook editorial 10 halaman yang siap untuk dicetak dan diluncurkan di web, tampak persis seperti pemotretan studio premium.

> [!CATATAN]
> Anda dapat melihat contoh fotografi model lookbook studio kelas atas di sini: [fashion-lookbook-model.jpg](templates/examples/fashion-lookbook-model.jpg) dan loop animasi senyap yang sesuai di sini: [fashion-lookbook-loop.gif](templates/examples/fashion-lookbook-loop.gif).

---

## Bandingkan Alat

| Platform / Alat | Kualitas Generasi | Pemrosesan Batch | Terbaik untuk |
|---|---|---|---|
| **FLUX Pro / Tengah Perjalanan** | Ultra-Tinggi (Detail gaya luar biasa, preset latar belakang studio) | Rendah | Menghasilkan latar belakang editorial yang kreatif dan canggih. |
| **Lightroom / Tangkap Satu** | Tinggi | Ultra-Tinggi (Memungkinkan sinkronisasi batch profil warna di ratusan gambar) | Menyinkronkan gradasi warna akhir dan detail butiran. |
| **Photoshop / Fotopea** | Tinggi | Sedang | Menggabungkan lapisan model, menutupi bayangan, dan pengeditan pemeriksaan QA. |

Untuk pembuatan latar belakang, FLUX Pro sangat efektif dalam menampilkan tekstur studio yang realistis (plester, kayu, kain). Untuk tahap akhir pascaproduksi, impor semua gambar komposit ke Adobe Lightroom untuk menyinkronkan preset gradasi warna Anda secara batch, sehingga memastikan konsistensi katalog.

---

## Luncurkan

**Cara mengelola aset editorial:**
* **Menjaga tekstur kulit tetap alami:** Saat mengedit lookbook, hindari menghaluskan kulit model secara berlebihan menggunakan filter buram yang tebal. Buku panduan mode profesional menjaga tekstur alami kulit, pori-pori, dan rambut, sehingga membangun kredibilitas.
* **Gunakan keluaran resolusi tinggi:** Ekspor gambar lookbook dengan resolusi vertikal minimal 2000 piksel. Hal ini memungkinkan platform e-commerce menampilkan fitur zoom tanpa gambar terlihat pixelated.

---

## Latihan

1. **Mudah:** Sesuaikan lembar spesifikasi [`templates/lookbook-moodboard.md`](templates/lookbook-moodboard.md) untuk koleksi pakaian renang Musim Panas.
2. **Sedang:** Buat 2 latar belakang lookbook yang kohesif menggunakan perintah yang berbeda, namun tetap menjaga palet warna dan sudut pencahayaan tetap sama.
3. **Sulit:** Gabungkan model fesyen ke latar belakang yang Anda buat. Terapkan tabel pencarian warna khusus (LUT) untuk mencocokkan sorotan model dengan warna latar belakang yang hangat. Tambahkan lapisan butiran lembut di seluruh komposit.

---

## Templat

* [`templates/lookbook-moodboard.md`](templates/lookbook-moodboard.md) — tema estetika, koordinat pencahayaan, preset latar belakang, dan token cepat.

---

[← Garment Try-on for Fashion E-commerce](01-garment-tryon.md) · Berikutnya: [Sizing / Layout consistency →](03-sizing-layout-consistency.md)
