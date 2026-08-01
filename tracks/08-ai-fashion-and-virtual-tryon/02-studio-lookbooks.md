# High-converting Studio Lookbooks

> Lookbook tidak sekadar menjual pakaian; lookbook menjual gaya hidup.

**Lagu:** AI Fashion & Virtual Try-On
**Waktu:** ~40 menit
**Prasyarat:** Tidak ada

## Masalahnya

Untuk meluncurkan koleksi musiman (seperti Musim Gugur/Musim Dingin), brand fashion membutuhkan "lookbook" editorial—katalog gaya hidup yang menampilkan pakaian dalam lingkungan yang tertata bergaya. Mengorganisasi pemotretan luar ruangan merupakan tantangan logistik yang rumit: menghadapi kendala cuaca, memesan perjalanan ke lokasi eksotis, menyewa properti studio, serta mengelola pencahayaan di berbagai waktu.

Jika Anda memaksakan pemotretan lookbook di ruang kantor sederhana, hasilnya tampak datar dan murah. Jika mengandalkan stock photography, hasilnya terlihat generik dan tidak selaras dengan identitas estetika unik brand Anda.

Guna mempertahankan kehadiran brand yang premium, Anda wajib menghasilkan latar belakang fashion lookbook yang anggun dan konsisten sesuai kebutuhan, lalu menyatukan model koleksi Anda ke dalamnya dengan keharmonisan pencahayaan yang sempurna.

## Konsep

Pipeline produksi lookbook bertumpu pada **Visual Theming**, **Symmetrical Lighting Design**, serta **Cohesive Color Grading**:

```
Define Theme Archetype ──► Design Lighting & Backdrops ──► Composite VTO Models ──► Apply Batch Color Grade
```

- **Theming Consistency:** Sebuah lookbook harus terasa seperti satu narasi yang utuh. Jika model pertama Anda difoto berlatarkan dinding plester bertekstur warna pasir hangat, model berikutnya tidak boleh duduk di gudang beton berteknologi tinggi. Tetapkan palet latar belakang dan kumpulan tekstur yang menyatu sebelum menghasilkan gambar.
- **Studio Lighting Presets:** Standardisasi arah cahaya di seluruh katalog Anda. Latar belakang lookbook idealnya menampilkan diffused side softbox lighting, yang memancarkan bayangan netral yang lembut. Hindari paparan sinar matahari langsung yang tajam kecuali jika dirancang khusus untuk koleksi musim panas berkonstras tinggi.
- **Cohesive Color Grading:** Dalam penerbitan fashion, gambar diproses melalui profil warna (LUTs) pada tahap pascaproduksi. Anda wajib menerapkan color grading map yang seragam di seluruh gambar komposit akhir (seperti mendinginkan bayangan dan menghangatkan highlight) agar tampak seolah diambil dalam satu sesi pemotretan yang sama.

## Lakukan itu

### Langkah 1: Kunci Tema Moodboard

Buka [`templates/lookbook-moodboard.md`](templates/lookbook-moodboard.md). Pilih arketipe visual, palet warna utama, serta pengaturan pencahayaan studio Anda.

- *Contoh Tema:* "Nordic Autumn" dengan warna taupe, pasir lembut, dan slate grey.

### Langkah 2: Hasilkan Latar Belakang Lookbook

Gunakan generator gambar untuk membuat latar belakang studio sesuai spesifikasi moodboard Anda:

- *Prompt:* `"A high-end fashion studio backdrop. A minimalist light grey textured plaster screen, soft diffused overcast window light casting faint shadows, editorial fashion set, photorealistic, 8k resolution, shot on 85mm lens, f/5.6."`
Jalankan model dan simpan latar belakang sebagai `studio_bg_01.jpg`.

### Langkah 3: Satukan Model Layer

Balutkan pakaian koleksi Anda pada model mengandalkan VTO pipeline (Modul 1). Impor layer model di atas `studio_bg_01.jpg`. Posisikan model tepat di tengah bingkai.

### Langkah 4: Selaraskan Pencahayaan & Buat Bayangan

Pastikan pendar cahaya pada wajah dan bahu model selaras dengan arah cahaya pada latar belakang (misalnya key light datang dari kiri atas).

- Sapukan bayangan lembut pada layer dinding plester di mana bahu dan tubuh model menghalangi key light. Atur layer opacity pada angka **25%** dan blend mode ke **Multiply**.
- Sapukan bayangan kontak yang lembut di bawah sepatu model pada garis dasar.

### Langkah 5: Terapkan Batch Color Grading

Buat layer color grading global (seperti gradient map, color lookup table, atau preset Lightroom) lalu terapkan ke seluruh aset akhir lookbook.

- Geser bayangan sedikit ke arah teal dan midtones ke arah krem hangat.
- Batasi kontras maksimal untuk mempertahankan detail lembut pada kain gelap.
Ekspor berkas lookbook yang telah selesai sebagai WebP berkualitas tinggi.

## Contoh yang berhasil

**Cashmere Collection Lookbook (Nordic Autumn Theme)**

- **Spesifikasi Tema:** Latar belakang plester minimalis, cahaya siang dari samping yang lembut, warna-warna earth-tone.
- **Aset Latar Belakang:** Menghasilkan pemandangan dinding stuko abu-abu hangat dengan bayangan lembut bingkai jendela yang jatuh di atasnya.
- **Model Layer:** Model mengenakan sweater rajut kasmir organik oversized warna krem.
- **Pengaturan Grading:**
  - Shadows: Pergeseran teal (+5%).
  - Highlights: Pergeseran emas (+8%).
  - Grain: Menambahkan 5% digital noise untuk mereplikasi karakter klise film kelas atas.
- **Format Ekspor:** Format vertikal 1080x1350px.

**Hasilnya:** Brand menerima 10 halaman lookbook editorial yang siap untuk cetak dan peluncuran web, tampil persis seperti hasil pemotretan studio premium.

## Bandingkan Alat

| Platform / Tool | Generation Quality | Batch Processing | Best for |
| --- | --- | --- | --- |
| **FLUX Pro / Midjourney** | Ultra-High (Detail gaya yang sangat baik, preset latar belakang studio) | Low | Menghasilkan latar belakang editorial kelas atas yang kreatif. |
| **Lightroom / Capture One** | High | Ultra-High (Memungkinkan penyelarasan batch profil warna di ratusan gambar) | Menyelaraskan color grading akhir dan detail grain. |
| **Photoshop / Photopea** | High | Medium | Menyusun layer model, masking bayangan, dan penyuntingan pemeriksaan QA. |

Untuk pembuatan latar belakang, FLUX Pro sangat efektif dalam merender tekstur studio yang realistis (plester, kayu, kain). Untuk tahap pascaproduksi akhir, impor seluruh gambar komposit ke Adobe Lightroom untuk menyelaraskan preset color grading secara batch, guna menjamin konsistensi katalog.

## Luncurkan

**Cara mengelola aset editorial:**

- **Pertahankan tekstur kulit tetap alami:** Saat menyunting lookbook, hindari menghaluskan kulit model secara berlebihan menggunakan filter blur yang berat. Lookbook fashion profesional mempertahankan tekstur kulit alami, pori-pori, dan rambut, yang membangun kredibilitas.
- **Gunakan luaran beresolusi tinggi:** Ekspor gambar lookbook pada resolusi vertikal minimal 2000px. Hal ini memungkinkan platform e-commerce menampilkan fitur zoom tanpa membuat gambar tampak pecah.

## Latihan

1. **Mudah:** Sesuaikan lembar spesifikasi [`templates/lookbook-moodboard.md`](templates/lookbook-moodboard.md) untuk koleksi pakaian renang Musim Panas.
2. **Sedang:** Hasilkan 2 latar belakang lookbook yang menyatu mengandalkan prompt berbeda, namun pertahankan palet warna dan sudut pencahayaan agar tetap identik.
3. **Sulit:** Satukan model fashion ke atas latar belakang yang Anda hasilkan. Terapkan custom color lookup table (LUT) untuk menyelaraskan highlight model dengan nuansa hangat latar belakang. Tambahkan layer grain lembut di atas komposit tersebut.

## Templat

- [`templates/lookbook-moodboard.md`](templates/lookbook-moodboard.md) — tema estetika, koordinat pencahayaan, preset latar belakang, dan token prompt.

---

[← Sebelum: Garment Try-on untuk E-commerce Fashion](01-garment-tryon.md) · [Track overview](README.md) · Berikutnya: [Konsistensi Ukuran & Tata Letak →](03-sizing-layout-consistency.md)
