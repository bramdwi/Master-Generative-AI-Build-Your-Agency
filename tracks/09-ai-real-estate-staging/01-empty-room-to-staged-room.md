# Ruang Kosong → Saluran Pipa Ruang Bertahap

> Ubah properti kosong menjadi rumah mewah dengan konversi tinggi dalam hitungan menit menggunakan pengecatan AI yang mendalam.

**Lagu:** AI Real Estat (Pementasan Virtual)
**Waktu:** ~40 menit
**Prasyarat:** Pemahaman dasar tentang perintah pembuatan gambar

## Masalahnya

Listingan real estat yang kosong mengalami kesenjangan persepsi pembeli yang besar: ruangan kosong terasa lebih kecil, lebih dingin, dan lebih sulit untuk divisualisasikan dibandingkan ruangan berperabotan. Menurut National Association of Realtors (NAR), **81% pembeli merasa lebih mudah memvisualisasikan properti sebagai rumah masa depan ketika dipentaskan**, dan rumah panggung dijual dengan harga **hingga 20% lebih mahal** dibandingkan properti kosong.

Namun, pementasan fisik tradisional sangatlah mahal dan lambat:
* **Biaya:** Menyewa furnitur fisik dan mempekerjakan kru desain interior dikenakan biaya **$2.500 hingga $5.000+ per bulan** per listing.
* **Perputaran:** Penjadwalan pemindahan dan perakitan furnitur memerlukan waktu **3 hingga 7 hari**, sehingga menunda peluncuran listing.
* **Risiko:** Perabotan fisik berisiko menggores lantai atau merusak dinding selama pengangkutan.

Jika Anda mencoba pengeditan gambar dasar atau rendering 3D kelas bawah, furnitur akan terlihat datar, tidak berskala, dan melayang secara tidak wajar di atas lantai, sehingga merusak kepercayaan pembeli. Anda memerlukan alur kerja AI fotorealistik yang cepat yang mempertahankan geometri ruangan sekaligus mengisi ruang secara mulus dengan dekorasi interior trendi.

---

## Konsep

Alur pementasan virtual AI mengandalkan **Inpainting Terkunci Perspektif** dan **Penempatan Furnitur Sadar Kedalaman**:

```
Empty Room Photo ──► Depth Mask Generation ──► Perspective Alignment ──► Inpainting Furniture ──► Shadow & Reflection Matching
```

### Pilar Teknis Inti:

1. **Penguncian Perspektif & Titik Hilang:** Fotografi real estat menggunakan lensa sudut lebar (16–24mm) dengan titik hilang arsitektural yang berbeda. Untuk mencegah furnitur tampak terdistorsi atau miring, model AI harus memperhatikan garis cakrawala dan sudut vertikal dinding yang ada.
2. **Pelestarian Kedalaman Lantai & Dinding:** Saat mengisi ruangan kosong, model AI harus mendeteksi bidang lantai, alas tiang, dan sumber cahaya jendela. Menggunakan ControlNet Depth atau depth-masking memastikan kaki sofa yang bertumpu pada lantai sejajar sempurna dengan dasar dinding tanpa mengubah struktur jendela, pintu, atau tekstur lantai.
3. **Preset Gaya Interior:** Pementasan virtual berperforma tinggi menargetkan demografi pembeli tertentu melalui tema estetika yang dikurasi:
* **Skandinavia Modern:** Sofa linen netral dari kayu ek ringan, meja kopi minimalis, tanaman monstera dalam pot.
* **Kemewahan Kontemporer:** Bagian beludru, meja kopi marmer, pencahayaan beraksen kuningan, permadani mewah.
* **Modern Pesisir:** Tekstil ringan, aksen rotan, warna biru lembut, permadani anyaman goni, sinar matahari alami yang hangat.

---

## Lakukan itu

### Langkah 1: Ambil & Pilih Foto Sumber
Dapatkan foto sudut lebar resolusi tinggi dari ruangan kosong. Pastikan fotonya lurus (datar secara horizontal dan tegak lurus secara vertikal) dan memiliki penerangan yang baik dengan cahaya alami. Simpan sebagai `empty-room-source.jpg`.

### Langkah 2: Tentukan Area Staging Mask
Buka editor foto atau antarmuka lukisan Anda. Pilih area lantai di mana furnitur harus diletakkan sambil menjaga fitur struktural (jendela, perapian, tiang penyangga, dinding struktural) tidak tersentuh. Buat lapisan topeng inpainting yang menutupi 60–70% ruang lantai terbuka.

### Langkah 3: Tulis Perintah Pementasan Sadar Kedalaman
Susun prompt menggunakan spesifikasi gaya interior Anda dari [`templates/virtual-staging-brief.md`](templates/virtual-staging-brief.md). Tambahkan token jangkar arsitektur dan pencahayaan yang cocok dengan foto asli:

* **Mengingatkan:**
> __KODE INLINE_0__
* **Perintah Negatif:**
> __KODE INLINE_0__

### Langkah 4: Jalankan Inpainting dengan ControlNet / Referensi Kedalaman
Teruskan `empty-room-source.jpg` dan topeng Anda ke dalam model (mis., FLUX Inpainting atau muapi `/nano-banana-2` mode inpainting). Tetapkan bobot Kedalaman ControlNet ke `0.75` untuk menerapkan geometri lantai struktural sekaligus memungkinkan model menghasilkan volume furnitur 3D.

### Langkah 5: Gabungkan & Verifikasi Bayangan Kontak
Periksa output pada zoom 100%:
* **Kontak Lantai:** Pastikan kaki sofa dan meja menyentuh lantai secara alami dengan bayangan kontak yang gelap dan rapat (oklusi sekitar).
* **Konsistensi Sumber Cahaya:** Pastikan sorotan furnitur sesuai dengan arah sinar matahari jendela.
* Simpan gambar akhir yang dipentaskan sebagai `staged-living-room.jpg`.

---

## Contoh yang berhasil

<p align="center">
<img src="templates/examples/staged-living-room.jpg" alt="Gambar AI Ruang Tamu Bertahap" width="320">
<img src="templates/examples/living-room-staging-motion.gif" alt="Lingkaran Gerakan Ruang Tamu Bertahap (I2V)" width="320">
</p>
<p align="center"><sub>AI Staged Living Room Image (Left) ──► Image-to-Video Walkthrough Loop (Right) · Video File: <a href="templates/examples/living-room-staging-motion.mp4">templates/examples/living-room-staging-motion.mp4</a></sub></p>

**Rincian Eksekusi Pementasan untuk "Daftar Oakridge"**

* **Sumber Properti:** Ruang tamu kosong seluas 450 kaki persegi dengan lantai kayu keras dan jendela besar yang diterangi matahari.
* **Target Pembeli:** Pasangan profesional muda yang mencari gaya mewah modern.
* **Paket Furnitur Pilihan:** Kemewahan Skandinavia (Bagian Krim, Meja Kopi Kayu Oak, Karpet Bertekstur, Tumbuhan Dalam Ruangan).
* **Setelan Render:** Kekuatan denoising `0.65`, Bobot kedalaman `0.80`, rasio aspek 16:9 yang cocok dengan keluaran kamera.
* **Waktu Penyelesaian:** Total waktu pemrosesan 4 menit.
* **Biaya:** **$0,06** Biaya pembuatan AI vs. **$3.200** penawaran pementasan fisik tradisional.

---

## Bandingkan Alat

| Platform / Metode | Waktu Penyelesaian | Biaya per Foto | Realisme & Kontrol | Terbaik Untuk |
|---|---|---|---|---|
| **API Pengecatan FLUX / muapi** | < 1 menit | $0,05 - $0,15 | **Sangat Tinggi** — Kontrol kedalaman khusus, gaya furnitur yang tepat | Agen real estat bervolume tinggi dan alur kerja pementasan otomatis |
| **SaaS Staging Khusus (BoxBrownie, VirtualStagingAI)** | 24 - 48 jam | $20 - $35 | **Tinggi** — Tinjauan desainer manual atau katalog 3D tetap | Daftar perumahan satu kali dengan anggaran tetap |
| **Pementasan Fisik Tradisional** | 3 - 7 hari | $2.500 - $5.000+ | **Realitas Fisik** — Perabotan sebenarnya di rumah | Mega-mansion ultra-mewah ($5M+) dengan open house tatap muka |

---

## Luncurkan

**Cara menentukan harga & mengemas layanan ini:**
* **Pementasan Kamar Single:** **$35 – $50** per foto.
* **Paket Listing Rumah Lengkap (5 Kamar):** **$149 – $199** harga paket (termasuk Ruang Tamu, Kamar Tidur Utama, Dapur/Ruang Makan, Kamar Tidur Tamu, Teras).
* **Spesifikasi Pengiriman:** Mengirimkan JPEG resolusi tinggi (lebar 3000 piksel+) yang dioptimalkan untuk MLS (Layanan Daftar Berganda) dan unggahan Zillow/Redfin dalam waktu 24 jam.

---

## Latihan

1. **Mudah:** Potret ruangan kosong di rumah Anda atau unduh foto stok ruangan kosong. Identifikasi titik hilang utama dan sumber cahaya jendela.
2. **Sedang:** Gunakan alat pengecatan untuk menempatkan sofa modern dan meja kopi di ruangan kosong dengan tetap mempertahankan tekstur lantai dan dinding asli.
3. **Sulit:** Lakukan pengujian staging multi-gaya pada ruangan kosong yang sama: render satu versi dalam **Skandinavia Modern** dan versi kedua dalam **Industri Loft**, pastikan pencahayaan dan perspektif cocok di kedua render.

---

## Templat

* [`templates/virtual-staging-brief.md`](templates/virtual-staging-brief.md) — Panduan gaya desain interior, kerangka kerja cepat, dan daftar periksa kendali mutu.

---

[Track Overview](README.md) · Berikutnya: [Pricing Against Traditional Staging →](02-pricing-against-traditional-staging.md)
